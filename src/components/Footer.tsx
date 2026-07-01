import React from "react";
import { MapPin, Phone, Mail, Printer, ExternalLink, ShieldAlert } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#1A1A1A] text-gray-300 pt-16 pb-8 border-t border-white/5 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Info (Page 16 and Page 10) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm text-white font-extrabold text-sm tracking-tighter">
                MK
              </div>
              <span className="text-white font-black text-xl tracking-widest">
                MKSOCKS <span className="text-gray-400 font-light text-sm font-sans">{language === "en" ? "Migang Socks" : "미강양말"}</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-light word-keep-all max-w-md">
              {language === "en" 
                ? "MKSOCKS (Migang Socks) produces the highest quality Korean socks based on 30 years of manufacturing technology and the latest computerized knitting facility infrastructure. We have accumulated the trust of buyers worldwide by adhering to the principle of using 100% domestic raw materials and conducting direct manual inspections of all products by master craftsmen."
                : "MKSOCKS(미강양말)는 30년 역사의 제조 기술과 최신 컴퓨터 편직 설비 인프라를 바탕으로, 최고 품질의 대한민국 양말을 생산합니다. 엄선된 100% 국산 원료 사용과 본사 장인의 직접 전수 전정수 검수 원칙을 지키며 전 세계 바이어들의 신뢰를 축적하고 있습니다."}
            </p>

            <div className="space-y-3.5 text-xs font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="text-brand-red shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300">
                  {language === "en" 
                    ? "563-6 Daemyung 9-dong, Nam-gu, Daegu, Republic of Korea" 
                    : "대구광역시 남구 대명9동 563-6"}
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-yellow shrink-0" size={16} />
                <span className="text-gray-300">
                  {language === "en" ? "TEL: +82-53-611-7237" : "대표번호: 053-611-7237"}
                </span>
                <span className="text-gray-500">|</span>
                <Printer className="text-gray-500 shrink-0" size={16} />
                <span className="text-gray-300">
                  {language === "en" ? "FAX: +82-53-611-7238" : "팩스: 053-611-7238"}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-[#3498db] shrink-0" size={16} />
                <a href="mailto:mksocks@naver.com" className="text-gray-300 hover:text-[#3498db] transition-colors">
                  {language === "en" ? "Email: mksocks@naver.com" : "이메일 문의: mksocks@naver.com"}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-extrabold text-sm tracking-widest uppercase">Quick Links</h4>
            <div className="flex flex-col space-y-3 text-xs font-light">
              <a
                href="#brand-story"
                className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center space-x-1"
              >
                <span>{t("nav.brand")}</span>
              </a>
              <a
                href="#why"
                className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center space-x-1"
              >
                <span>{t("nav.why")}</span>
              </a>
              <a
                href="#technology"
                className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center space-x-1"
              >
                <span>{t("nav.tech")}</span>
              </a>
              <a
                href="#product"
                className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center space-x-1"
              >
                <span>{t("nav.product")}</span>
              </a>
              <a
                href="#oem-guide"
                className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center space-x-1"
              >
                <span>{t("nav.oem")}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Store alignment */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-extrabold text-sm tracking-widest uppercase">Official Store</h4>
            <div className="space-y-4">
              <p className="text-xs text-gray-400 leading-relaxed font-light word-keep-all">
                {language === "en" 
                  ? "MKSOCKS' premium signature products are available for single-pair purchase on our official Naver Smartstore (Korea) and Amazon Store (Global)." 
                  : "MKSOCKS의 프리미엄 시그니처 단품들은 네이버 공식 스마트스토어(국내) 및 글로벌 아마존 스토어를 통해 한 켤레 단위로 편리하게 소매 구매하실 수 있습니다."}
              </p>
              
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://smartstore.naver.com/mksocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#2ecc71] hover:bg-[#27ae60] text-white px-4 py-2.5 rounded font-bold text-xs tracking-wider transition-all shadow-md w-full justify-center cursor-pointer"
                >
                  <span>{language === "en" ? "Naver Smartstore" : "네이버 스마트스토어"}</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href="https://www.amazon.com/-/ko/stores/KMKSOCKS-KoreaMaKeABrand/page/43B44B91-B4F0-46D9-A09D-99900DC48431?lp_asin=B0DM194JM7&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#ff9900] hover:bg-[#e47911] text-black px-4 py-2.5 rounded font-black text-xs tracking-wider transition-all shadow-md w-full justify-center cursor-pointer"
                >
                  <span>{language === "en" ? "Amazon Store" : "아마존 브랜드 스토어"}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & certification footnotes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p className="text-center sm:text-left">
            &copy; {currentYear} MKSOCKS. All Rights Reserved. Manufactured in Daegu, Republic of Korea.
          </p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer">
              {language === "en" ? "Terms of Use" : "이용약관"}
            </span>
            <span>|</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              {language === "en" ? "Privacy Policy" : "개인정보처리방침"}
            </span>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <ShieldAlert size={12} />
              <span>
                {language === "en" ? "Unauthorized Image Theft Prohibited" : "무단 이미지 도용 금지"}
              </span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
