import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  source: string;
  text: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ComparisonPoint {
  text: string;
}