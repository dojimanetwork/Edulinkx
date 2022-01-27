import React, { useEffect } from "react"
import { useParams } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import Maintainers from "../Subpages/Maintainers"

const MaintainersPage: React.FC = () => {
  const { lang } = useParams()
  const { availableLanguages, selectedLanguage, setActiveLanguage } = useLanguageContext()

  useEffect(() => {
    if (!lang) return

    const availableRoute = availableLanguages.find((availableLanguage) => availableLanguage.id === lang)

    if (availableRoute !== undefined && selectedLanguage !== lang) {
      setActiveLanguage(lang, false)
    }
  }
    , [availableLanguages, lang, selectedLanguage, setActiveLanguage]
  )
  return (
    <div>
      <Maintainers/>
    </div>
  )
}

export default MaintainersPage
