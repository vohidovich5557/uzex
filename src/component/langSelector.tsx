import { useEffect, useRef, useState } from "react"
import { AmericaFlag, ButtonIcon, RussianFlag, TopIcon, UzbFlag } from "../assets/svgs"
import { langData } from "../data/landingData"
import { useTranslation } from "react-i18next"

interface LangProp {
    lang: string,
    flag: any,
    id: number
}


export const LangSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLang') || 'Uzb')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropRef = useRef(null)
    const {i18n} = useTranslation()
    const handleLanguageSelect = (language: LangProp) => {
        const { lang } = language
        setSelectedLanguage(language.lang)
        localStorage.setItem('selectedLang', lang)
        setIsDropdownOpen(false)
        // You can add additional logic here, such as updating the language in your app based on the selection
    }
    useEffect(() => {
        const storedLang = localStorage.getItem('selectedLang')
        if (storedLang) {
            setSelectedLanguage(storedLang)
        }
    }, [])
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (dropRef.current && !(dropRef.current as HTMLElement).contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
      };
    return (
        <div ref={dropRef} className=" relative cursor-pointer flex-col items-center justify-center gap-[10px]">
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="h-auto px-[0.625rem] py-[0.625rem] flex items-center justify-center gap-[0.625rem] border border-white rounded-[8px] bg-rareBlack/60">
                {selectedLanguage === 'Rus' && <RussianFlag />}
                {selectedLanguage === 'Uzb' && <UzbFlag />}
                {selectedLanguage === 'Eng' && <AmericaFlag />}

                <span className="text-white text-[1.125rem]">{selectedLanguage}</span>
                {isDropdownOpen ? (<TopIcon />) : (<ButtonIcon />)}
            </div>
            {isDropdownOpen && (
                <div className=" flex-col w-[100%] items-center h-auto absolute translate-y-[10px] transition-all duration-150  py-[0.625rem] gap-[0.625rem] border border-white rounded-[8px] bg-rareBlack/60">
                    {langData.map((item) => {
                        if (item.lang === selectedLanguage) {
                            return null
                        }
                        return (
                            <div onClick={
                                () => {handleLanguageSelect(item); changeLanguage(item.clickLang)}} key={item.id}
                                className=" flex items-center justify-center cursor-pointer gap-[20px]">
                                <span className="text-white text-[1.125rem]">
                                    {item.lang}
                                </span>
                                <item.flag />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}