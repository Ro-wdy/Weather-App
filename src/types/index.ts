export type UserType = 'Pilot' | 'Farmer' | 'Telecom Operator' | 'General Public';

export type AlertSeverity = 'Critical' | 'Warning' | 'Watch';

export interface Subscriber {
  id: string;
  phoneNumber: string;
  email: string;
  region?: string;
  userType: UserType;
  createdAt: string;
}

export interface Alert {
  id: string;
  severity: AlertSeverity;
  message: string;
  timestamp: string;
  targetAudience: UserType[] | 'All';
}