import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
    title: 'Design System/Atoms/Button',
    component: Button,
};

export const PrimaryButton = () => <Button label="Primary Button" onClick={action('clicked')} />;
