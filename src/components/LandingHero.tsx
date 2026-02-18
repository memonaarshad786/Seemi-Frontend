import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { FaEye, FaEyeSlash, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';

export default function LandingHero() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessSize: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiLoading, setApiLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [apiError, setApiError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setAgreed(checked);
      setErrors((prev) => ({ ...prev, terms: '' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: '' }));

      if (name === 'password') {
        if (value.length && value.length < 8)
          setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }));
        const confirm = formData.confirmPassword || '';
        if (confirm && value !== confirm)
          setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      }
      if (name === 'confirmPassword') {
        const pwd = formData.password || '';
        if (value && pwd && value !== pwd)
          setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formData.firstName?.trim()) nextErrors.firstName = 'First name is required';
    if (!formData.lastName?.trim()) nextErrors.lastName = 'Last name is required';
    if (!formData.email?.trim()) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email';
    if (!formData.password) nextErrors.password = 'Password is required';
    if (!formData.confirmPassword) nextErrors.confirmPassword = 'Please confirm your password';
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword)
      nextErrors.confirmPassword = 'Passwords do not match';
    if (!agreed) nextErrors.terms = 'You must accept the Terms of Service and Privacy Policy';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setApiError('');
    setSuccess(false);
    setSuccessMessage('');

    try {
      setApiLoading(true);

      const payload = new FormData();
      payload.append('first_name', formData.firstName);
      payload.append('last_name', formData.lastName);
      payload.append('email', formData.email);
      payload.append('password', formData.password);
      payload.append('confirm_password', formData.confirmPassword);
      payload.append('busines_name', formData.businessName || '');
      payload.append('busines_size', formData.businessSize || '0');

      const response = await axios.post(
        'https://seemii.mytutorpod.org/mtpsaas/public/api/v1/app/sign-up',
        payload,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.data?.success) {
        setSuccess(true);
        setSuccessMessage(response.data.message || 'Account created successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          businessName: '',
          businessSize: ''
        });
        setAgreed(false);
      } else {
        setApiError(response.data?.message || 'Signup failed');
      }

    } catch (err) {
      const error = err as AxiosError;
      setApiError((error.response?.data as Record<string, string>)?.message || 'Signup failed');
    } finally {
      setApiLoading(false);
    }
  };

  return (
    <section className="bg-[#A7AFFD] flex justify-center items-center overflow-hidden relative">
      <div className="grid grid-cols-2 gap-8 w-full max-w-[1200px] p-12 lg:grid-cols-1 lg:p-6">
        {/* Left Hero */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-8 gap-4">
            <img src="/Assets/1st-comp/Seemi-Logo-05-1024x224.png" alt="Seemi Logo" className="w-36 object-contain" />
            <img src="/Assets/1st-comp/Vector.png" alt="vector Icon" className="w-36 h-24 object-contain" />
          </div>
          <h1 className="text-5xl font-extrabold text-[#0b2347] leading-tight mb-6">
            Everything You Need <br />
            To <span className="text-[#ff6b4a]">Manage & Grow</span> <br />
            Your Tutoring Business
          </h1>
          <p className="text-gray-600 text-sm max-w-lg mb-6">
            <strong className="text-[#848ac0]">Seemi</strong> streamlines your tutoring business with real-time tools for scheduling, progress tracking, and payments. Focus on teaching while we handle the rest.
          </p>
        </div>

        {/* Right Signup Card */}
        <div className="relative flex flex-col items-start">
          <div className="bg-[#EAECFF] rounded-xl p-8 shadow-lg border-4 border-[#0b2347] w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4">
              Get <span className="text-[#ff6b4a] font-bold">30 days</span> free!
            </h2>

            {apiError && (
              <div className="flex items-center gap-2 p-3 mb-4 rounded-md bg-red-100 border border-red-300 text-red-700">
                <FaExclamationCircle /> {apiError}
              </div>
            )}

            {success && successMessage && (
              <div className="flex items-center gap-2 p-3 mb-4 rounded-md bg-green-100 border border-green-300 text-green-700">
                <FaCheckCircle /> {successMessage}
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md bg-[#A7AFFD] border ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md bg-[#A7AFFD] border ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md bg-[#A7AFFD] border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md bg-[#A7AFFD] border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <span
                    className="absolute right-2 top-2 cursor-pointer text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md bg-[#A7AFFD] border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <span
                    className="absolute right-2 top-2 cursor-pointer text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Business */}
              <input
                type="text"
                name="businessName"
                placeholder="Business Name (Optional)"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-[#A7AFFD] border border-gray-300"
              />
              <input
                type="text"
                name="businessSize"
                placeholder="Business Size"
                value={formData.businessSize}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-[#A7AFFD] border border-gray-300"
              />

              {/* Terms */}
              <div className="flex items-start gap-2 text-gray-600 text-xs">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 mt-1"
                />
                <label htmlFor="terms">
                  I agree to the <a href="#terms" className="text-blue-600 underline">Terms of Service</a> and <a href="#privacy" className="text-blue-600 underline">Privacy Policy</a>
                </label>
              </div>
              {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={apiLoading}
                className="w-full mt-2 py-3 bg-blue-600 text-white rounded-full font-semibold flex justify-center items-center gap-2 disabled:opacity-70 hover:shadow-lg transition-all"
              >
                {apiLoading ? <><FaSpinner className="animate-spin" /> Creating Account...</> : 'Create My Tutor Account'}
              </button>
            </form>
          </div>

          {/* Right image/icon */}
          <div className="absolute right-[-40px] bottom-0 w-36 h-36 flex items-center justify-center lg:hidden">
            <img src="/Assets/1st-comp/Group.png" alt="Education Icon" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <img src="/Assets/1st-comp/Mask Group.png" alt="Building Icon" className="w-full relative -mt-36 z-10 object-cover" />
    </section>
  );
}
