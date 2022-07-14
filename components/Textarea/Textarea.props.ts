import { FieldError } from 'react-hook-form';
import { TextareaHTMLAttributes, DetailedHTMLProps} from 'react';

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    error?: FieldError
}