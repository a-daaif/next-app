'use client'

import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguageSelector() {
    const {language, setLanguage} = useLanguage()
  return (
    <select className="form-select" onChange={e => setLanguage(e.target.value)}
        value={language}
    >
        <option value="en">English</option>
        <option value="fr">Français</option>
    </select>
  )
}