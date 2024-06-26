"use client";

import {I18nextProvider} from 'react-i18next';
import initTranslations from '@/app/i18n';
import {Resource, createInstance} from 'i18next';
import { ReactNode } from 'react';

interface TranslationProviderProps {
    children: ReactNode;
    locale: string;
    namespaces: string[];
    resources: Resource;
  }

export default function TranslationProvider({
    children,
    locale,
    namespaces,
    resources
}: TranslationProviderProps) {
    const i18n = createInstance();

    initTranslations({locale: locale, namespaces: namespaces, i18nInstance: i18n, resources: resources});

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}