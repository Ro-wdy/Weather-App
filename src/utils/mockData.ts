import { Subscriber, Alert, UserType, AlertSeverity } from '../types';

// Generate random phone numbers for African countries
const generatePhoneNumber = () => {
  const countryCodes = ['+254', '+234', '+27', '+251', '+20', '+233', '+256', '+255', '+243', '+225'];
  const countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
  const number = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  return `${countryCode}${number}`;
};

// Generate mock subscribers
export const mockSubscribers: Subscriber[] = Array(54)
  .fill(null)
  .map((_, index) => {
    const userTypes: UserType[] = ['Pilot', 'Farmer', 'Telecom Operator', 'General Public'];
    const userType = userTypes[Math.floor(Math.random() * userTypes.length)];
    
    const regions = [
      'Nairobi, Kenya', 
      'Lagos, Nigeria', 
      'Cairo, Egypt', 
      'Johannesburg, South Africa', 
      'Addis Ababa, Ethiopia',
      'Accra, Ghana',
      'Kampala, Uganda',
      'Dar es Salaam, Tanzania',
      'Kinshasa, DRC',
      'Abidjan, Côte d\'Ivoire'
    ];
    
    const region = Math.random() > 0.3 ? regions[Math.floor(Math.random() * regions.length)] : undefined;
    
    return {
      id: `sub-${index + 1}`,
      phoneNumber: generatePhoneNumber(),
      email: `user${index + 1}@example.com`,
      region,
      userType,
      createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000)
      ).toISOString()
    };
  });

// Generate mock alerts
export const mockAlerts: Alert[] = [
  {
    id: 'alert-1',
    severity: 'Critical',
    message: 'X1.5 class solar flare detected. Potential impact on HF communications and GPS accuracy in the next 24-48 hours.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    targetAudience: 'All'
  },
  {
    id: 'alert-2',
    severity: 'Warning',
    message: 'G2 (Moderate) geomagnetic storm in progress. Possible fluctuations in power grid voltages.',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    targetAudience: ['Telecom Operator']
  },
  {
    id: 'alert-3',
    severity: 'Watch',
    message: 'Minor solar radiation storm. No significant impact expected for ground systems.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    targetAudience: ['Pilot']
  },
  {
    id: 'alert-4',
    severity: 'Warning',
    message: 'Increased solar wind speed detected. Minor geomagnetic disturbances possible in the next 12 hours.',
    timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    targetAudience: 'All'
  },
  {
    id: 'alert-5',
    severity: 'Critical',
    message: 'Extreme UV radiation due to solar activity. Communication blackouts reported across East Africa.',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    targetAudience: ['Farmer', 'Telecom Operator']
  },
  {
    id: 'alert-6',
    severity: 'Watch',
    message: 'Elevated solar activity. Minor impacts to satellite operations possible.',
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
    targetAudience: ['Telecom Operator']
  },
  {
    id: 'alert-7',
    severity: 'Warning',
    message: 'M-class solar flare eruption. HF radio blackouts likely on the sunlit side of Earth.',
    timestamp: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
    targetAudience: ['Pilot', 'Telecom Operator']
  },
  {
    id: 'alert-8',
    severity: 'Watch',
    message: 'Coronal hole high-speed stream. Minor geomagnetic activity expected.',
    timestamp: new Date(Date.now() - 120 * 60 * 60 * 1000).toISOString(),
    targetAudience: 'All'
  },
  {
    id: 'alert-9',
    severity: 'Critical',
    message: 'Severe G4 geomagnetic storm in progress. Power grid fluctuations and satellite orientation irregularities reported.',
    timestamp: new Date(Date.now() - 144 * 60 * 60 * 1000).toISOString(),
    targetAudience: 'All'
  },
  {
    id: 'alert-10',
    severity: 'Warning',
    message: 'Proton event in progress. Elevated radiation levels at flight altitudes over polar regions.',
    timestamp: new Date(Date.now() - 168 * 60 * 60 * 1000).toISOString(),
    targetAudience: ['Pilot']
  }
];