import { useState } from 'react'
import { FaExclamationCircle, FaCheckCircle, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa'

interface SignupFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  businessName: string
  businessSize: number | ''
}

export default function LandingHero() {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessSize: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setAgreed(checked)
      setErrors((prev) => ({ ...prev, terms: '' }))
    } else {
      // if businessSize field, store numeric value (or empty string when cleared)
      if (name === 'businessSize') {
        const parsed = value === '' ? '' : Number(value)
        setFormData((prev) => ({ ...prev, [name]: parsed }))
        setErrors((prev) => ({ ...prev, [name]: '' }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: '' }))
      }

      if (name === 'password') {
        if (value && value.length < 8) setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }))
        else setErrors((prev) => ({ ...prev, password: '' }))

        const currentConfirm = formData.confirmPassword || ''
        if (currentConfirm && value !== currentConfirm) setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }))
        else setErrors((prev) => ({ ...prev, confirmPassword: '' }))
      }

      if (name === 'confirmPassword') {
        const currentPassword = formData.password || ''
        if (value && currentPassword && value !== currentPassword) setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }))
        else setErrors((prev) => ({ ...prev, confirmPassword: '' }))
      }
    }
    setError(null)
    setSuccessMessage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
     const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) nextErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email'
    if (!formData.password) {
      nextErrors.password = 'Password is required'
    } else if (!strongPasswordRegex.test(formData.password)) {
      nextErrors.password =
        'Password must contain uppercase, lowercase, number and special character'
    }

    if (!formData.confirmPassword) nextErrors.confirmPassword = 'Confirm your password'
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword)
      nextErrors.confirmPassword = 'Passwords do not match'

    const bs = formData.businessSize
    if (bs === '' || bs === null || bs === undefined) {
      nextErrors.businessSize = 'Business size is required'
    } else if (isNaN(Number(bs))) {
      nextErrors.businessSize = 'Business size must be a number'
    }
    if (!agreed) nextErrors.terms = 'You must accept the Terms of Service and Privacy Policy'


    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setLoading(true)
    setError(null)
    setSuccessMessage(null)

    try {
  const payload = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    password: formData.password,
    confirm_password: formData.confirmPassword,
    business_name: formData.businessName,
    business_size: Number(formData.businessSize),
  }

  const response = await fetch(
    'https://seemii.mytutorpod.org/mtpsaas/public/api/v1/app/sign-up',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  )

  const data = await response.json()

  if (!response.ok) {
    setError(data.message || 'Sign up failed')
    return
  }

  setSuccessMessage(data.message || 'Account created successfully!')

  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessSize: '',
  })

  setAgreed(false)
  setTimeout(() => setSuccessMessage(null), 3000)

} catch (err) {
  setError((err as Error).message || 'Network error')
 
}finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#A7AFFD] overflow-hidden relative">
      <div className="grid lg:grid-cols-2 gap-6 justify-center items-center px-24 py-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6 ml-12">
          <div className="flex items-center gap-0 mb-8">
            <img src="/assets/1st-comp/Seemi-Logo.png" alt="Seemi Logo" className="max-w-[150px] object-contain" />
            <img src="/assets/1st-comp/Vector.png" alt="Vector Icon" className="w-[149px] h-[100px] ml-auto mr-32" />
          </div>

          <p className="font-extrabold text-[50px] leading-[55px] text-[#0b2347]" style={{ fontFamily: 'Nunito' }}>
            Everything You Need<br />
            To <span className="text-[#ff6b4a]">Manage & Grow</span><br />
            Your Tutoring Business
          </p>

          <p className="text-[0.95rem] leading-6 max-w-[480px] -mt-6 text-[#4a5568]">
            <strong className="text-[#848ac0]">Seemi</strong> streamlines your tutoring business with real-time tools for scheduling, progress tracking, and payments. Focus on teaching while we handle the rest.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-start justify-center">
          <div className="bg-[#EAECFF] border-6 border-[#0b2347] rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.12)] w-full max-w-[450px] p-8 pb-40 mt-12 relative z-20">
            <h2 className="text-[1.4rem] font-semibold mb-6 text-black">
              Get <span className="text-[#ff6b4a] font-bold">30 days</span> free!
            </h2>

            {error && (
              <div className="flex items-center gap-3 p-4 mb-4 rounded" style={{ backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' }}>
                <FaExclamationCircle />
                {error}
              </div>
            )}

            {successMessage && (
              <div className="flex items-center gap-3 p-4 mb-4 rounded" style={{ backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' }}>
                <FaCheckCircle />
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border-[1.5px] ${errors.firstName ? 'border-red-500' : 'border-[#8fa2c4]'} bg-[#A7AFFD29] focus:outline-none focus:ring-2 focus:ring-[#5560d5] placeholder:text-[#8fa2c4]`}
                  />
                  {errors.firstName && <span className="text-red-600 text-sm mt-1 block">{errors.firstName}</span>}
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border-[1.5px] ${errors.lastName ? 'border-red-500' : 'border-[#8fa2c4]'} bg-[#A7AFFD29] focus:outline-none focus:ring-2 focus:ring-[#5560d5] placeholder:text-[#8fa2c4]`}
                  />
                  {errors.lastName && <span className="text-red-600 text-sm mt-1 block">{errors.lastName}</span>}
                </div>
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded border-[1.5px] ${errors.email ? 'border-red-500' : 'border-[#8fa2c4]'} bg-[#A7AFFD29] focus:outline-none focus:ring-2 focus:ring-[#5560d5] placeholder:text-[#8fa2c4]`}
              />
              {errors.email && <span className="text-red-600 text-sm mt-1 block">{errors.email}</span>}

              {/* Password */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full p-3 pr-10 rounded border-[1.5px] ${errors.password ? 'border-red-500' : 'border-[#8fa2c4]'} bg-[#A7AFFD29] focus:outline-none focus:ring-2 focus:ring-[#5560d5] placeholder:text-[#8fa2c4]`}
                    />
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm mt-1 block h-4">{errors.password || ''}</span>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full p-3 pr-10 rounded border-[1.5px] ${errors.confirmPassword ? 'border-red-500' : 'border-[#8fa2c4]'} bg-[#A7AFFD29] focus:outline-none focus:ring-2 focus:ring-[#5560d5] placeholder:text-[#8fa2c4]`}
                    />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm mt-1 block h-4 placeholder:text-[#8fa2c4]">{errors.confirmPassword || ''}</span>
                </div>
              </div>

              {/* Business Name */}
              <input
                type="text"
                name="businessName"
                placeholder="Business Name (Optional)"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-3 rounded border-[1.5px] border-[#8fa2c4] bg-[#A7AFFD29] focus:outline-none focus:ring-2 focus:ring-[#5560d5] placeholder:text-[#8fa2c4]"
              />

              {/* Business Size */}
              <input
                type="number"
  name="businessSize"
  min="1"
                placeholder="Business Size"
                value={formData.businessSize}
                onChange={handleChange}
                className="w-full p-3 rounded border-[1.5px] border-[#8fa2c4] bg-[#A7AFFD29] focus:outline-none focus:ring-2 focus:ring-[#5560d5] placeholder:text-[#8fa2c4]"
              />
              {errors.businessSize && (
  <span className="text-red-600 text-sm mt-1 block">
    {errors.businessSize}
  </span>
)}

              {/* Terms */}
              <div className="flex items-start gap-2 text-[#4a5568] text-sm mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={handleChange}
                  className="w-4 h-4 bg-white  checked:border-[#8fa2c4] border-[1.5px] border-[#8fa2c4] accent-[#5560d5] mt-0.5"
                  style={{ backgroundColor: '#ffffff' }}
                />
                <label htmlFor="terms">
                  I agree to the <a href="#terms" className="text-[#5560d5] font-medium hover:underline">Terms of Service</a> and <a href="#privacy" className="text-[#5560d5] font-medium hover:underline">Privacy Policy</a>
                  {errors.terms && <span className="text-red-600 block mt-1">{errors.terms}</span>}
                </label>
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading} className="w-[234px] h-[47px] bg-[#5969FB]  transition-all rounded-full text-white font-semibold mt-1 flex items-center justify-center  disabled:cursor-not-allowed">
                {loading ? <><FaSpinner className="animate-spin mr-2" />Creating Account...</> : 'Create My Tutor Account'}
              </button>
            </form>
          </div>

          <div className="absolute right-[-70px] w-[140px] h-[240px] flex items-center justify-center pointer-events-none z-10">
            <img src="/assets/1st-comp/Group.png" alt="Education Icon" className="w-full h-full object-contain opacity-100" />
          </div>
        </div>
      </div>

      <img src="/assets/1st-comp/Mask%20Group.png" alt="Building Icon" className="w-full h-[300px] relative -mt-62 pointer-events-none z-20" />
    </section>
  )
}
