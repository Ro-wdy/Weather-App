import React, { useState } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { UserType } from '../../types';

interface SubscriptionFormProps {
  onSubmit: (data: {
    phoneNumber: string;
    email: string;
    region?: string;
    userType: UserType;
  }) => void;
}

const userTypeOptions = [
  { value: 'Pilot', label: 'Pilot' },
  { value: 'Farmer', label: 'Farmer' },
  { value: 'Telecom Operator', label: 'Telecom Operator' },
  { value: 'General Public', label: 'General Public' }
];

const countryCodes = [
  { value: '+20', label: '🇪🇬 Egypt (+20)' },
  { value: '+211', label: '🇸🇸 South Sudan (+211)' },
  { value: '+212', label: '🇲🇦 Morocco (+212)' },
  { value: '+213', label: '🇩🇿 Algeria (+213)' },
  { value: '+216', label: '🇹🇳 Tunisia (+216)' },
  { value: '+220', label: '🇬🇲 Gambia (+220)' },
  { value: '+221', label: '🇸🇳 Senegal (+221)' },
  { value: '+222', label: '🇲🇷 Mauritania (+222)' },
  { value: '+223', label: '🇲🇱 Mali (+223)' },
  { value: '+224', label: '🇬🇳 Guinea (+224)' },
  { value: '+225', label: '🇨🇮 Côte d\'Ivoire (+225)' },
  { value: '+226', label: '🇧🇫 Burkina Faso (+226)' },
  { value: '+227', label: '🇳🇪 Niger (+227)' },
  { value: '+228', label: '🇹🇬 Togo (+228)' },
  { value: '+229', label: '🇧🇯 Benin (+229)' },
  { value: '+230', label: '🇲🇺 Mauritius (+230)' },
  { value: '+231', label: '🇱🇷 Liberia (+231)' },
  { value: '+232', label: '🇸🇱 Sierra Leone (+232)' },
  { value: '+233', label: '🇬🇭 Ghana (+233)' },
  { value: '+234', label: '🇳🇬 Nigeria (+234)' },
  { value: '+235', label: '🇹🇩 Chad (+235)' },
  { value: '+236', label: '🇨🇫 Central African Republic (+236)' },
  { value: '+237', label: '🇨🇲 Cameroon (+237)' },
  { value: '+238', label: '🇨🇻 Cape Verde (+238)' },
  { value: '+239', label: '🇸🇹 São Tomé and Príncipe (+239)' },
  { value: '+240', label: '🇬🇶 Equatorial Guinea (+240)' },
  { value: '+241', label: '🇬🇦 Gabon (+241)' },
  { value: '+242', label: '🇨🇬 Republic of the Congo (+242)' },
  { value: '+243', label: '🇨🇩 Democratic Republic of the Congo (+243)' },
  { value: '+244', label: '🇦🇴 Angola (+244)' },
  { value: '+245', label: '🇬🇼 Guinea-Bissau (+245)' },
  { value: '+248', label: '🇸🇨 Seychelles (+248)' },
  { value: '+249', label: '🇸🇩 Sudan (+249)' },
  { value: '+250', label: '🇷🇼 Rwanda (+250)' },
  { value: '+251', label: '🇪🇹 Ethiopia (+251)' },
  { value: '+252', label: '🇸🇴 Somalia (+252)' },
  { value: '+253', label: '🇩🇯 Djibouti (+253)' },
  { value: '+254', label: '🇰🇪 Kenya (+254)' },
  { value: '+255', label: '🇹🇿 Tanzania (+255)' },
  { value: '+256', label: '🇺🇬 Uganda (+256)' },
  { value: '+257', label: '🇧🇮 Burundi (+257)' },
  { value: '+258', label: '🇲🇿 Mozambique (+258)' },
  { value: '+260', label: '🇿🇲 Zambia (+260)' },
  { value: '+261', label: '🇲🇬 Madagascar (+261)' },
  { value: '+262', label: '🇷🇪 Réunion (+262)' },
  { value: '+263', label: '🇿🇼 Zimbabwe (+263)' },
  { value: '+264', label: '🇳🇦 Namibia (+264)' },
  { value: '+265', label: '🇲🇼 Malawi (+265)' },
  { value: '+266', label: '🇱🇸 Lesotho (+266)' },
  { value: '+267', label: '🇧🇼 Botswana (+267)' },
  { value: '+268', label: '🇸🇿 Eswatini (+268)' },
  { value: '+269', label: '🇰🇲 Comoros (+269)' },
  { value: '+27', label: '🇿🇦 South Africa (+27)' },
  { value: '+290', label: '🇸🇭 Saint Helena (+290)' },
  { value: '+291', label: '🇪🇷 Eritrea (+291)' }
];

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    countryCode: '',
    phoneNumber: '',
    email: '',
    region: '',
    userType: '' as UserType
  });
  
  const [errors, setErrors] = useState({
    phoneNumber: '',
    email: '',
    userType: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is updated
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    } else if (!/^\d{9,12}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      valid = false;
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.userType) {
      newErrors.userType = 'Please select a user type';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
        email: formData.email,
        region: formData.region || undefined,
        userType: formData.userType as UserType
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <Select
            label="Country Code"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            options={countryCodes}
            required
          />
        </div>
        <div className="w-full md:w-2/3">
          <Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="e.g., 712345678"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            required
          />
        </div>
      </div>
      
      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />
      
      <Input
        label="Region/Location (optional)"
        name="region"
        placeholder="e.g., Nairobi, Western Kenya"
        value={formData.region}
        onChange={handleChange}
      />
      
      <Select
        label="User Type"
        name="userType"
        value={formData.userType}
        onChange={handleChange}
        options={userTypeOptions}
        error={errors.userType}
        required
      />
      
      <div className="pt-4">
        <Button type="submit" fullWidth>
          Subscribe Now
        </Button>
      </div>
    </form>
  );
};

export default SubscriptionForm;