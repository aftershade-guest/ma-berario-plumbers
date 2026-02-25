import React from "react";

export interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

export interface BusinessInfo {
    name: string;
    address: string;
    phone: string;
    hours: string;
}

export type MessageType = 'user' | 'assistant';

export interface ChatMessage {
    role: MessageType;
    content: string;
}
