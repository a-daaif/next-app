'use client'
const { createContext, useContext, useState } = require("react");

const LanguageContext = createContext()

const translations ={
    'en' : {
        'title': 'Next Shop',
        'cart': 'Cart'
    },
    'fr' : {
        'title': 'Boutique Next',
        'cart': 'Panier'
    },
}

export default function LanguageProvider({children}){
    const [language, setLanguage] = useState('fr')

    const t = (key) => translations[language][key] || key

    return (
        <LanguageContext.Provider  value={{language, setLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    return useContext(LanguageContext)
}