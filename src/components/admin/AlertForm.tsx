import React, { useState } from 'react';
import { AlertSeverity, UserType } from '../../types';
import Button from '../common/Button';
import Select from '../common/Select';

interface AlertFormProps {
  onSubmit: (data: {
    severity: AlertSeverity;
    message: string;
    targetAudience: UserType[] | 'All';
  }) => void;
}

const severityOptions = [
  { value: 'Critical', label: '⚠️ Critical' },
  { value: 'Warning', label: '🟠 Warning' },
  { value: 'Watch', label: '🟡 Watch' }
];

const targetOptions = [
  { value: 'All', label: 'All Subscribers' },
  { value: 'Pilot', label: 'Pilots only' },
  { value: 'Farmer', label: 'Farmers only' },
  { value: 'Telecom Operator', label: 'Telecom Operators only' },
  { value: 'General Public', label: 'General Public only' }
];

const AlertForm: React.FC<AlertFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    severity: '' as AlertSeverity,
    message: '',
    targetAudience: 'All'
  });
  
  const [errors, setErrors] = useState({
    severity: '',
    message: '',
    targetAudience: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    
    if (!formData.severity) {
      newErrors.severity = 'Please select an alert severity';
      valid = false;
    }
    
    if (!formData.message) {
      newErrors.message = 'Alert message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }
    
    if (!formData.targetAudience) {
      newErrors.targetAudience = 'Please select a target audience';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      let targetAudience: UserType[] | 'All' = 'All';
      
      if (formData.targetAudience !== 'All') {
        targetAudience = [formData.targetAudience as UserType];
      }
      
      onSubmit({
        severity: formData.severity as AlertSeverity,
        message: formData.message,
        targetAudience
      });
      
      // Reset form
      setFormData({
        severity: '' as AlertSeverity,
        message: '',
        targetAudience: 'All'
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        label="Alert Severity"
        name="severity"
        value={formData.severity}
        onChange={handleChange}
        options={severityOptions}
        error={errors.severity}
        required
      />
      
      <div className="w-full">
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Alert Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter the alert message..."
          className={`w-full rounded-md border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500`}
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      
      <Select
        label="Target Audience"
        name="targetAudience"
        value={formData.targetAudience}
        onChange={handleChange}
        options={targetOptions}
        error={errors.targetAudience}
        required
      />
      
      <div className="pt-4">
        <Button type="submit" variant="primary">
          Send Alert
        </Button>
      </div>
    </form>
  );
};

export default AlertForm;