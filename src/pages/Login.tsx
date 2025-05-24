import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail } from 'lucide-react';
import reviewsImage from '../assets/images/reviews-image.png';
import CommonInput from '../components/CommonInput';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        keepLoggedIn: false
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login - in real app, you'd validate credentials
        if (formData.email && formData.password) {
            navigate('/dashboard');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-8 md:py-0">
                <div className="w-full max-w-xs md:max-w-[320px] h-full px-4 md:px-0">
                    <div className="mb-8 md:mb-[48px] h-[10%] mt-3">
                        <h1 className="text-md font-bold leading-[1.2]">
                            <span className="text-black">Food</span>
                            <br />
                            <span className="text-sm font-bold text-primary ">delivery</span>
                        </h1>
                    </div>

                    <div className="mb-6 md:mb-[32px]">
                        <h2 className="text-2xl md:text-heading-1 font-bold text-heading mb-1 md:mb-[4px] leading-[1.2]">Login</h2>
                        <p className="text-grayDark text-body leading-[1.4]">
                            Sign in with your data that you entered during your registration.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-7 md:mb-[20px]">
                            <label htmlFor="email" className="block text-body font-semibold text-grayDarker mb-2 md:mb-[6px]">
                                Email
                            </label>
                            <CommonInput
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="name@example.com"
                                icon={<Mail size={18} className="text-muted" />}
                                iconPosition="right"
                                inputClassName="h-[52px] bg-[#F4F6FF] border border-[#D1D5DB] rounded-xl text-[15px] font-semibold text-grayDarker placeholder-grayDark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="mb-7 md:mb-[16px]">
                            <label htmlFor="password" className="block text-body font-semibold text-grayDarker mb-2 md:mb-[6px]">
                                Password
                            </label>
                            <div className="relative">
                                <CommonInput
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="min. 8 characters"
                                    icon={
                                        <button
                                            type="button"
                                            tabIndex={-1}
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="bg-transparent border-none text-muted hover:text-grayDark transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    }
                                    iconPosition="right"
                                    inputClassName="h-[52px] bg-[#F4F6FF] border border-[#D1D5DB] rounded-xl text-[15px] font-semibold text-grayDarker placeholder-grayDark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all pr-12"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-8 md:mb-[24px]">
                            <input
                                type="checkbox"
                                id="keepLoggedIn"
                                name="keepLoggedIn"
                                checked={formData.keepLoggedIn}
                                onChange={handleInputChange}
                                className="h-[18px] w-[18px] text-primary focus:ring-primary border-[#D1D5DB] rounded"
                            />
                            <label htmlFor="keepLoggedIn" className="text-body text-grayDarker select-none">
                                Keep me logged in
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-[52px] bg-primary text-white text-[18px] font-bold rounded-xl hover:bg-primaryLight focus:ring-4 focus:ring-primary/20 transition-all duration-200 mb-7 md:mb-[20px]"
                        >
                            Login
                        </button>

                        <div className="text-center mb-7 md:mb-[24px]">
                            <button
                                type="button"
                                className="text-primary hover:text-primaryLight text-body font-medium transition-colors bg-transparent border-none"
                            >
                                Forgot password
                            </button>
                        </div>
                        <div className="text-center text-body text-grayDark mt-10 md:mt-[100px]">
                            Don't have an account?{' '}
                            <button
                                type="button"
                                className="text-primary hover:text-primaryLight font-medium transition-colors bg-transparent border-none"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right side - Food Review Interface */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-primary to-primaryLight flex-col items-center justify-center p-8">
                <div className="rounded-[16px] overflow-hidden">
                    <img
                        src={reviewsImage}
                        alt="Food reviews interface"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full max-w-[400px] space-y-6">
                    <div className="text-center">
                        <h3 className="text-[24px] font-bold mb-3 text-white">Leave reviews for all meals</h3>
                        <p className="text-[14px] mb-6 leading-relaxed text-white/80">
                            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo prodesset molestiae, almod assentior eum ne, et omnis antiopam mei.
                        </p>

                        <div className="flex justify-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 