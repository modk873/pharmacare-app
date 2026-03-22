function login(){

document.getElementById("loginPage").classList.remove("active");
document.getElementById("signupPage").classList.remove("active");

document.getElementById("dashboardPage").classList.add("active");

}

function showSignup(){

document.getElementById("loginPage").classList.remove("active");

document.getElementById("signupPage").classList.add("active");

}

function openPage(page){

let pages=document.querySelectorAll(".page");

pages.forEach(p=>p.classList.remove("active"));

document.getElementById(page).classList.add("active");

if(page==="drugNewsPage"){
loadDrugNews();
}

}

const I18N={
en:{
dashboard:"Dashboard",
back:"← Back",
login:"Login",
createAccount:"Create Account",
continueGuest:"Continue as Guest",
email:"Email",
password:"Password",
drugLibrary:"Drug & Herbal Library",
camera:"Camera",
account:"Account",
drugs:"Drugs",
locator:"Locator",
news:"News",
nearbyPharmacies:"Nearby Pharmacies",
nearbyHospitals:"Nearby Hospitals",
drugNewsTitle:"Drug News",
refreshNews:"Refresh News"
},
ar:{
dashboard:"لوحة التحكم",
back:"← رجوع",
login:"تسجيل الدخول",
createAccount:"إنشاء حساب",
continueGuest:"الدخول كضيف",
email:"البريد الإلكتروني",
password:"كلمة المرور",
drugLibrary:"مكتبة الأدوية والأعشاب",
camera:"الكاميرا",
account:"الحساب",
drugs:"الأدوية",
locator:"الخريطة",
news:"الأخبار",
nearbyPharmacies:"صيدليات قريبة",
nearbyHospitals:"مستشفيات قريبة",
drugNewsTitle:"أخبار الأدوية",
refreshNews:"تحديث الأخبار"
},
ta:{
dashboard:"டாஷ்போர்டு",
back:"← பின் செல்",
login:"உள்நுழைவு",
createAccount:"கணக்கு உருவாக்கு",
continueGuest:"விருந்தினராக தொடரவும்",
email:"மின்னஞ்சல்",
password:"கடவுச்சொல்",
drugLibrary:"மருந்துகள் & மூலிகை நூலகம்",
camera:"கேமரா",
account:"கணக்கு",
drugs:"மருந்துகள்",
locator:"வரைபடம்",
news:"செய்திகள்",
nearbyPharmacies:"அருகிலுள்ள மருந்தகங்கள்",
nearbyHospitals:"அருகிலுள்ள மருத்துவமனைகள்",
drugNewsTitle:"மருந்து செய்திகள்",
refreshNews:"செய்திகளை புதுப்பி"
}
};

// Add full-page UI keys (all pages)
Object.assign(I18N.en,{
login_title:"Login",
login_email_ph:"Email",
login_password_ph:"Password",
login_btn:"Login",
login_create_btn:"Create Account",
login_guest_btn:"Continue as Guest",
signup_title:"Create Account",
signup_name_ph:"Name",
signup_email_ph:"Email",
signup_password_ph:"Password",
signup_create_btn:"Create Account",
dashboard_title:"Dashboard",
back_btn:"← Back",
card_medical_calculators:"Medical Calculators",
card_dose_calculator:"Dose Calculator",
card_bmi_calculator:"BMI Calculator",
card_drug_interaction:"Drug Interaction",
card_medication_reminder:"Medication Reminder",
card_pill_identifier:"Pill Identifier",
card_first_aid:"First Aid",
card_disease_guide:"Disease Guide",
card_clinical_guidelines:"Clinical Guidelines",
card_availability:"Drug Availability Checker",
card_alternatives:"Alternative Drugs",
card_medical_notes:"Medical Notes",
medical_calc_title:"Medical Calculators",
calc_dose_by_weight:"Dose by Weight Calculator",
calc_pediatric_dose:"Pediatric Dose Calculator",
calc_iv_drip:"IV Drip Rate Calculator",
calc_crcl:"Creatinine Clearance (Cockcroft-Gault)",
calc_bsa:"Body Surface Area (BSA)",
calc_infusion_rate:"Infusion Rate Calculator",
calc_paracetamol_safe:"Paracetamol Safe Dose",
pediatric_title:"Pediatric Dose Calculator",
ivdrip_title:"IV Drip Rate Calculator",
crcl_title:"Creatinine Clearance (Cockcroft-Gault)",
bsa_title:"Body Surface Area (BSA)",
infusion_title:"Infusion Rate Calculator",
para_safe_title:"Paracetamol Safe Dose",
placeholder_soon:"This section will be added here.",
dose_title:"Dose Calculator",
dose_drug_ph:"Drug Name",
dose_weight_ph:"Weight (kg)",
dose_calc_btn:"Calculate",
side_effect_title:"Side Effect Checker",
side_effect_desc:"Type a symptom (e.g., cough, bleeding, nausea) and the app suggests possible drug-related causes (educational only).",
side_effect_ph:"Symptom (e.g., cough, bleeding)",
side_effect_btn:"Check Side Effect",
bmi_title:"BMI Calculator",
bmi_height_ph:"Height (cm)",
bmi_weight_ph:"Weight (kg)",
bmi_calc_btn:"Calculate BMI",
interaction_title:"Drug Interaction",
interaction_drug1_ph:"Drug 1",
interaction_drug2_ph:"Drug 2",
interaction_btn:"Check Interaction",
library_title:"Drug & Herbal Library",
library_desc:"A quick library of common drugs and herbs, with simple drug search.",
library_search_title:"🔍 Drug Search",
library_search_ph:"Example: Paracetamol",
library_search_btn:"Search Drug",
library_common_title:"💊 Common Drugs",
library_herbs_title:"🌿 Herbal Section",
pill_title:"Pill Identifier",
pill_desc:"Enter pill color, shape, and imprint to help identify the medication.",
pill_color_ph:"Color (e.g., White)",
pill_shape_ph:"Shape (e.g., Round)",
pill_imprint_ph:"Imprint letters/numbers",
pill_btn:"Identify Pill",
firstaid_title:"First Aid",
firstaid_desc:"Quick tips for common situations. This is not a substitute for a clinician or emergency services.",
disease_title:"Disease Guide",
disease_desc:"A brief guide to common diseases. Educational only and not a substitute for medical advice.",
guidelines_title:"Clinical Guidelines",
guidelines_desc:"Simplified summaries for education only. Always refer to up-to-date official guidelines.",
availability_title:"Drug Availability Checker",
availability_desc:"Type a drug name to check availability, brand names, and alternatives (simple demo).",
availability_ph:"Example: Paracetamol, Augmentin",
availability_btn:"Check Availability",
alternatives_title:"Alternative Drugs",
alternatives_desc:"Type a drug name (e.g., Augmentin) to see possible alternatives (educational only; prescriber decides).",
alternatives_ph:"Example: Augmentin",
alternatives_btn:"Find Alternatives",
notes_title:"Medical Notes",
notes_desc:"A place to save pharmacist notes or patient info (stored locally on this device only).",
notes_btn:"Save Notes",
reminder_title:"Medication Reminder",
reminder_drug_ph:"Drug Name",
reminder_time_ph:"Time",
reminder_btn:"Add Reminder",
profile_title:"Profile",
profile_desc:"Enter your basic information for the app to use.",
profile_name_ph:"Name",
profile_age_ph:"Age",
profile_blood_ph:"Blood Group (e.g., O+)",
profile_diseases_ph:"Chronic Diseases",
profile_meds_ph:"Current Medications",
profile_allergies_ph:"Allergies",
profile_btn:"Save Profile",
camera_title:"Camera Tools",
camera_prescription_title:"📷 Prescription Scanner",
camera_prescription_desc:"Choose a method: open the camera or upload an image from your device.",
camera_open_btn:"Open Camera",
camera_upload_btn:"Upload Image",
barcode_title:"🏷️ Drug Barcode Scanner",
barcode_desc:"Point the camera to the barcode (demo), or type the barcode manually.",
barcode_ph:"Example: 1234567890123",
barcode_btn:"Scan / Lookup",
locator_title:"Pharmacy Locator",
locator_desc:"Find nearby pharmacies and hospitals using your location (opens your maps app/site).",
locator_pharm_btn:"Nearby Pharmacies",
locator_hosp_btn:"Nearby Hospitals",
news_title:"Drug News",
news_desc:"Latest drug news (live). Data is pulled from public FDA OpenFDA endpoints when available.",
news_refresh_btn:"Refresh News",
nav_dashboard:"Dashboard",
nav_camera:"Camera",
nav_drugs:"Drugs",
nav_account:"Account",
nav_locator:"Locator",
nav_news:"News"
});

Object.assign(I18N.ar,{
login_title:"تسجيل الدخول",
login_email_ph:"البريد الإلكتروني",
login_password_ph:"كلمة المرور",
login_btn:"دخول",
login_create_btn:"إنشاء حساب",
login_guest_btn:"الدخول كضيف",
signup_title:"إنشاء حساب",
signup_name_ph:"الاسم",
signup_email_ph:"البريد الإلكتروني",
signup_password_ph:"كلمة المرور",
signup_create_btn:"إنشاء حساب",
dashboard_title:"لوحة التحكم",
back_btn:"← رجوع",
card_medical_calculators:"الحاسبات الطبية",
card_dose_calculator:"حاسبة الجرعات",
card_bmi_calculator:"حاسبة BMI",
card_drug_interaction:"تداخلات دوائية",
card_medication_reminder:"تذكير الدواء",
card_pill_identifier:"التعرف على الحبة",
card_first_aid:"إسعافات أولية",
card_disease_guide:"دليل الأمراض",
card_clinical_guidelines:"إرشادات سريرية",
card_availability:"التحقق من توفر الدواء",
card_alternatives:"بدائل الأدوية",
card_medical_notes:"ملاحظات طبية",
medical_calc_title:"الحاسبات الطبية",
calc_dose_by_weight:"جرعة حسب الوزن",
calc_pediatric_dose:"جرعة الأطفال",
calc_iv_drip:"معدل التنقيط الوريدي",
calc_crcl:"تصفية الكرياتينين (Cockcroft‑Gault)",
calc_bsa:"مساحة سطح الجسم (BSA)",
calc_infusion_rate:"معدل التسريب",
calc_paracetamol_safe:"جرعة باراسيتامول آمنة",
pediatric_title:"جرعة الأطفال",
ivdrip_title:"معدل التنقيط الوريدي",
crcl_title:"تصفية الكرياتينين (Cockcroft‑Gault)",
bsa_title:"مساحة سطح الجسم (BSA)",
infusion_title:"معدل التسريب",
para_safe_title:"جرعة باراسيتامول آمنة",
placeholder_soon:"سيتم إضافة هذا القسم قريبًا.",
dose_title:"حاسبة الجرعات",
dose_drug_ph:"اسم الدواء",
dose_weight_ph:"الوزن (كجم)",
dose_calc_btn:"احسب",
side_effect_title:"فحص الآثار الجانبية",
side_effect_desc:"اكتب عرضًا (مثل: سعال، نزيف، غثيان) وسيقترح التطبيق أدوية قد تكون سببًا (تعليمي فقط).",
side_effect_ph:"العرض (مثل: سعال، نزيف)",
side_effect_btn:"تحقق",
bmi_title:"حاسبة BMI",
bmi_height_ph:"الطول (سم)",
bmi_weight_ph:"الوزن (كجم)",
bmi_calc_btn:"احسب BMI",
interaction_title:"تداخلات دوائية",
interaction_drug1_ph:"الدواء 1",
interaction_drug2_ph:"الدواء 2",
interaction_btn:"تحقق",
library_title:"مكتبة الأدوية والأعشاب",
library_desc:"مكتبة مختصرة لأدوية وأعشاب شائعة مع بحث بسيط.",
library_search_title:"🔍 بحث عن دواء",
library_search_ph:"مثال: Paracetamol",
library_search_btn:"بحث",
library_common_title:"💊 أدوية شائعة",
library_herbs_title:"🌿 قسم الأعشاب",
pill_title:"التعرف على الحبة",
pill_desc:"أدخل اللون والشكل والحروف للمساعدة في تحديد الدواء.",
pill_color_ph:"اللون (مثال: أبيض)",
pill_shape_ph:"الشكل (مثال: دائري)",
pill_imprint_ph:"الحروف/الأرقام",
pill_btn:"تحديد",
firstaid_title:"إسعافات أولية",
firstaid_desc:"نصائح سريعة للحالات الشائعة. ليست بديلاً عن الطبيب أو الطوارئ.",
disease_title:"دليل الأمراض",
disease_desc:"دليل مختصر للأمراض الشائعة (تعليمي فقط).",
guidelines_title:"إرشادات سريرية",
guidelines_desc:"ملخصات مبسطة للتعليم فقط. ارجع دائمًا للمصادر الرسمية المحدثة.",
availability_title:"توفر الدواء",
availability_desc:"اكتب اسم الدواء لمعرفة التوفر والأسماء التجارية والبدائل (ديمو).",
availability_ph:"مثال: Paracetamol, Augmentin",
availability_btn:"تحقق",
alternatives_title:"بدائل الأدوية",
alternatives_desc:"اكتب اسم الدواء للحصول على بدائل محتملة (تعليمي فقط).",
alternatives_ph:"مثال: Augmentin",
alternatives_btn:"اعرض البدائل",
notes_title:"ملاحظات طبية",
notes_desc:"لحفظ ملاحظات الصيدلي أو معلومات المريض (محليًا على هذا الجهاز فقط).",
notes_btn:"حفظ",
reminder_title:"تذكير الدواء",
reminder_drug_ph:"اسم الدواء",
reminder_time_ph:"الوقت",
reminder_btn:"إضافة",
profile_title:"الملف الشخصي",
profile_desc:"أدخل بياناتك الأساسية لاستخدامها داخل التطبيق.",
profile_name_ph:"الاسم",
profile_age_ph:"العمر",
profile_blood_ph:"فصيلة الدم (مثال: O+)",
profile_diseases_ph:"أمراض مزمنة",
profile_meds_ph:"أدوية حالية",
profile_allergies_ph:"حساسية",
profile_btn:"حفظ الملف",
camera_title:"أدوات الكاميرا",
camera_prescription_title:"📷 ماسح الوصفات",
camera_prescription_desc:"اختر: فتح الكاميرا أو رفع صورة من الجهاز.",
camera_open_btn:"فتح الكاميرا",
camera_upload_btn:"رفع صورة",
barcode_title:"🏷️ ماسح باركود الأدوية",
barcode_desc:"وجّه الكاميرا للباركود (ديمو) أو اكتب الكود يدويًا.",
barcode_ph:"مثال: 1234567890123",
barcode_btn:"بحث",
locator_title:"محدد الصيدليات",
locator_desc:"اعثر على الصيدليات والمستشفيات القريبة باستخدام موقعك.",
locator_pharm_btn:"صيدليات قريبة",
locator_hosp_btn:"مستشفيات قريبة",
news_title:"أخبار الأدوية",
news_desc:"أخبار مباشرة (حسب توفر الشبكة) من واجهات OpenFDA العامة.",
news_refresh_btn:"تحديث",
nav_dashboard:"الرئيسية",
nav_camera:"كاميرا",
nav_drugs:"أدوية",
nav_account:"حساب",
nav_locator:"خريطة",
nav_news:"أخبار"
});

Object.assign(I18N.ta,{
login_title:"உள்நுழைவு",
login_email_ph:"மின்னஞ்சல்",
login_password_ph:"கடவுச்சொல்",
login_btn:"உள்நுழை",
login_create_btn:"கணக்கு உருவாக்கு",
login_guest_btn:"விருந்தினராக தொடரவும்",
signup_title:"கணக்கு உருவாக்கு",
signup_name_ph:"பெயர்",
signup_email_ph:"மின்னஞ்சல்",
signup_password_ph:"கடவுச்சொல்",
signup_create_btn:"கணக்கு உருவாக்கு",
dashboard_title:"டாஷ்போர்டு",
back_btn:"← பின் செல்",
card_medical_calculators:"மருத்துவ கணக்கீடுகள்",
card_dose_calculator:"மருந்தளவு கணக்கீடு",
card_bmi_calculator:"BMI கணக்கீடு",
card_drug_interaction:"மருந்து தொடர்புகள்",
card_medication_reminder:"மருந்து நினைவூட்டல்",
card_pill_identifier:"மாத்திரை அடையாளம்",
card_first_aid:"முதல் உதவி",
card_disease_guide:"நோய் வழிகாட்டி",
card_clinical_guidelines:"மருத்துவ வழிகாட்டுதல்கள்",
card_availability:"மருந்து கிடைப்புத் தகவல்",
card_alternatives:"மாற்று மருந்துகள்",
card_medical_notes:"மருத்துவ குறிப்புகள்",
medical_calc_title:"மருத்துவ கணக்கீடுகள்",
calc_dose_by_weight:"எடைக்கு ஏற்ப மருந்தளவு",
calc_pediatric_dose:"குழந்தைகளின் மருந்தளவு",
calc_iv_drip:"IV துளி விகிதம்",
calc_crcl:"கிரியாடினின் கிளியரன்ஸ் (Cockcroft‑Gault)",
calc_bsa:"உடல் மேற்பரப்பு (BSA)",
calc_infusion_rate:"இன்ஃப்யூஷன் விகிதம்",
calc_paracetamol_safe:"பாராசெட்டமால் பாதுகாப்பான அளவு",
pediatric_title:"குழந்தைகளின் மருந்தளவு",
ivdrip_title:"IV துளி விகிதம்",
crcl_title:"கிரியாடினின் கிளியரன்ஸ் (Cockcroft‑Gault)",
bsa_title:"உடல் மேற்பரப்பு (BSA)",
infusion_title:"இன்ஃப்யூஷன் விகிதம்",
para_safe_title:"பாராசெட்டமால் பாதுகாப்பான அளவு",
placeholder_soon:"இந்த பகுதி விரைவில் சேர்க்கப்படும்.",
dose_title:"மருந்தளவு கணக்கீடு",
dose_drug_ph:"மருந்தின் பெயர்",
dose_weight_ph:"எடை (கிலோ)",
dose_calc_btn:"கணக்கிடு",
side_effect_title:"பக்க விளைவு சரிபார்ப்பான்",
side_effect_desc:"ஒரு அறிகுறியை (உ.தா., cough, bleeding, nausea) உள்ளிடுங்கள்; தொடர்புடைய மருந்துகளை கல்வி நோக்கில் காட்டும்.",
side_effect_ph:"அறிகுறி (உ.தா., cough)",
side_effect_btn:"சரிபார்",
bmi_title:"BMI கணக்கீடு",
bmi_height_ph:"உயரம் (செ.மீ.)",
bmi_weight_ph:"எடை (கிலோ)",
bmi_calc_btn:"BMI கணக்கிடு",
interaction_title:"மருந்து தொடர்புகள்",
interaction_drug1_ph:"மருந்து 1",
interaction_drug2_ph:"மருந்து 2",
interaction_btn:"சரிபார்",
library_title:"மருந்துகள் & மூலிகை நூலகம்",
library_desc:"பொதுவான மருந்துகள் மற்றும் மூலிகைகள் — எளிய தேடலுடன்.",
library_search_title:"🔍 மருந்து தேடல்",
library_search_ph:"உதாரணம்: Paracetamol",
library_search_btn:"தேடு",
library_common_title:"💊 பொதுவான மருந்துகள்",
library_herbs_title:"🌿 மூலிகை பகுதி",
pill_title:"மாத்திரை அடையாளம்",
pill_desc:"நிறம், வடிவு, முத்திரை எழுத்துகளை உள்ளிடுங்கள்.",
pill_color_ph:"நிறம் (உ.தா., White)",
pill_shape_ph:"வடிவு (உ.தா., Round)",
pill_imprint_ph:"முத்திரை எழுத்து/எண்",
pill_btn:"அடையாளம் காட்டு",
firstaid_title:"முதல் உதவி",
firstaid_desc:"பொதுவான சூழல்களுக்கு விரைவான குறிப்புகள் (கல்வி நோக்கம்).",
disease_title:"நோய் வழிகாட்டி",
disease_desc:"பொதுவான நோய்களுக்கு சுருக்க வழிகாட்டி (கல்வி நோக்கம்).",
guidelines_title:"மருத்துவ வழிகாட்டுதல்கள்",
guidelines_desc:"கல்விக்கான எளிய சுருக்கம். எப்போதும் புதுப்பிக்கப்பட்ட அதிகாரப்பூர்வ வழிகாட்டுதல்களை பார்க்கவும்.",
availability_title:"மருந்து கிடைப்புத் தகவல்",
availability_desc:"மருந்துப் பெயரை உள்ளிட்டு கிடைப்பும் மாற்றுகளும் பார்க்க (டெமோ).",
availability_ph:"உதாரணம்: Paracetamol, Augmentin",
availability_btn:"சரிபார்",
alternatives_title:"மாற்று மருந்துகள்",
alternatives_desc:"மருந்துப் பெயரை உள்ளிட்டு மாற்றுகளை காண (கல்வி நோக்கம்).",
alternatives_ph:"உதாரணம்: Augmentin",
alternatives_btn:"மாற்றுகள்",
notes_title:"மருத்துவ குறிப்புகள்",
notes_desc:"மருந்தாளர் குறிப்புகள்/நோயாளி தகவல் (இந்த சாதனத்தில் மட்டும் சேமிப்பு).",
notes_btn:"சேமி",
reminder_title:"மருந்து நினைவூட்டல்",
reminder_drug_ph:"மருந்தின் பெயர்",
reminder_time_ph:"நேரம்",
reminder_btn:"சேர்",
profile_title:"சுயவிவரம்",
profile_desc:"அடிப்படை தகவலை உள்ளிடுங்கள்.",
profile_name_ph:"பெயர்",
profile_age_ph:"வயது",
profile_blood_ph:"இரத்த வகை (உ.தா., O+)",
profile_diseases_ph:"நீடித்த நோய்கள்",
profile_meds_ph:"தற்போதைய மருந்துகள்",
profile_allergies_ph:"ஒவ்வாமை",
profile_btn:"சேமி",
camera_title:"கேமரா கருவிகள்",
camera_prescription_title:"📷 சீட்டு ஸ்கேனர்",
camera_prescription_desc:"கேமராவை திறக்கவும் அல்லது படத்தை பதிவேற்றவும்.",
camera_open_btn:"கேமரா திற",
camera_upload_btn:"படம் பதிவேற்று",
barcode_title:"🏷️ மருந்து பார்கோடு ஸ்கேனர்",
barcode_desc:"பார்கோடு நோக்கி காட்டவும் (டெமோ) அல்லது கைமுறையாக உள்ளிடவும்.",
barcode_ph:"உதாரணம்: 1234567890123",
barcode_btn:"தேடு",
locator_title:"மருந்தகம் கண்டுபிடிப்பான்",
locator_desc:"உங்கள் இடத்தைப் பயன்படுத்தி அருகிலுள்ள மருந்தகங்கள்/மருத்துவமனைகள் காண்க.",
locator_pharm_btn:"அருகிலுள்ள மருந்தகங்கள்",
locator_hosp_btn:"அருகிலுள்ள மருத்துவமனைகள்",
news_title:"மருந்து செய்திகள்",
news_desc:"பொது OpenFDA API மூலம் கிடைக்கும் நேரடி தகவல்.",
news_refresh_btn:"புதுப்பி",
nav_dashboard:"டாஷ்போர்டு",
nav_camera:"கேமரா",
nav_drugs:"மருந்துகள்",
nav_account:"கணக்கு",
nav_locator:"வரைபடம்",
nav_news:"செய்திகள்"
});

// Calculator & page extra keys
Object.assign(I18N.en,{
pediatric_desc:"Calculate a pediatric dose using weight and mg/kg.",
ped_weight_ph:"Weight (kg)",
ped_mgkg_ph:"Dose (mg/kg per dose)",
ped_max_ph:"Optional max single dose (mg)",
ped_calc_btn:"Calculate",
iv_desc:"Calculate drip rate (gtt/min) and pump rate (mL/hr).",
iv_volume_ph:"Total volume (mL)",
iv_time_ph:"Time (minutes)",
iv_drop_ph:"Drop factor (gtt/mL)",
iv_calc_btn:"Calculate",
crcl_desc:"Estimate creatinine clearance (mL/min) using Cockcroft–Gault.",
crcl_age_ph:"Age (years)",
crcl_weight_ph:"Weight (kg)",
crcl_scr_ph:"Serum creatinine (mg/dL)",
sex_male:"Male",
sex_female:"Female",
crcl_calc_btn:"Calculate",
bsa_desc:"Calculate BSA using the Mosteller formula.",
bsa_height_ph:"Height (cm)",
bsa_weight_ph:"Weight (kg)",
bsa_calc_btn:"Calculate",
inf_desc:"Calculate infusion pump rate (mL/hr) from dose and concentration.",
inf_dose_ph:"Dose rate (mg/hr)",
inf_conc_ph:"Concentration (mg/mL)",
inf_calc_btn:"Calculate",
para_desc:"Estimate maximum safe dosing guidance (educational only).",
para_weight_ph:"Weight (kg)",
para_child:"Child",
para_adult:"Adult",
para_calc_btn:"Calculate"
});

Object.assign(I18N.ar,{
pediatric_desc:"حساب جرعة الأطفال باستخدام الوزن و mg/kg.",
ped_weight_ph:"الوزن (كجم)",
ped_mgkg_ph:"الجرعة (mg/kg لكل جرعة)",
ped_max_ph:"الحد الأقصى لجرعة واحدة (اختياري)",
ped_calc_btn:"احسب",
iv_desc:"حساب معدل التنقيط (gtt/min) ومعدل المضخة (mL/hr).",
iv_volume_ph:"الحجم الكلي (mL)",
iv_time_ph:"الوقت (دقائق)",
iv_drop_ph:"عامل التقطير (gtt/mL)",
iv_calc_btn:"احسب",
crcl_desc:"تقدير تصفية الكرياتينين (mL/min) بطريقة Cockcroft–Gault.",
crcl_age_ph:"العمر (سنة)",
crcl_weight_ph:"الوزن (كجم)",
crcl_scr_ph:"كرياتينين الدم (mg/dL)",
sex_male:"ذكر",
sex_female:"أنثى",
crcl_calc_btn:"احسب",
bsa_desc:"حساب مساحة سطح الجسم بمعادلة Mosteller.",
bsa_height_ph:"الطول (سم)",
bsa_weight_ph:"الوزن (كجم)",
bsa_calc_btn:"احسب",
inf_desc:"حساب معدل التسريب (mL/hr) من الجرعة والتركيز.",
inf_dose_ph:"معدل الجرعة (mg/hr)",
inf_conc_ph:"التركيز (mg/mL)",
inf_calc_btn:"احسب",
para_desc:"تقدير الجرعات الآمنة (تعليمي فقط).",
para_weight_ph:"الوزن (كجم)",
para_child:"طفل",
para_adult:"بالغ",
para_calc_btn:"احسب"
});

Object.assign(I18N.ta,{
pediatric_desc:"எடை மற்றும் mg/kg அடிப்படையில் குழந்தை மருந்தளவு கணக்கிடு.",
ped_weight_ph:"எடை (கிலோ)",
ped_mgkg_ph:"அளவு (mg/kg ஒரு தடவை)",
ped_max_ph:"விருப்பமான அதிகபட்ச ஒற்றை அளவு (mg)",
ped_calc_btn:"கணக்கிடு",
iv_desc:"துளி விகிதம் (gtt/min) மற்றும் (mL/hr) கணக்கிடு.",
iv_volume_ph:"மொத்த அளவு (mL)",
iv_time_ph:"நேரம் (நிமிடங்கள்)",
iv_drop_ph:"டிரிப் ஃபாக்டர் (gtt/mL)",
iv_calc_btn:"கணக்கிடு",
crcl_desc:"Cockcroft–Gault மூலம் கிரியாடினின் கிளியரன்ஸ் மதிப்பீடு.",
crcl_age_ph:"வயது (ஆண்டுகள்)",
crcl_weight_ph:"எடை (கிலோ)",
crcl_scr_ph:"சீரம் கிரியாடினின் (mg/dL)",
sex_male:"ஆண்",
sex_female:"பெண்",
crcl_calc_btn:"கணக்கிடு",
bsa_desc:"Mosteller சூத்திரத்தால் BSA கணக்கிடு.",
bsa_height_ph:"உயரம் (செ.மீ.)",
bsa_weight_ph:"எடை (கிலோ)",
bsa_calc_btn:"கணக்கிடு",
inf_desc:"டோஸ் மற்றும் கன்சன்ட்ரேஷன் மூலம் mL/hr கணக்கிடு.",
inf_dose_ph:"டோஸ் விகிதம் (mg/hr)",
inf_conc_ph:"கன்சன்ட்ரேஷன் (mg/mL)",
inf_calc_btn:"கணக்கிடு",
para_desc:"பாதுகாப்பான அதிகபட்ச மருந்தளவு வழிகாட்டி (கல்வி).",
para_weight_ph:"எடை (கிலோ)",
para_child:"குழந்தை",
para_adult:"பெரியவர்",
para_calc_btn:"கணக்கிடு"
});

function t(key){
let lang=(window.localStorage && localStorage.getItem("pharmaLang")) || "en";
return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N.en[key] || key);
}

function setLanguage(lang){

if(!I18N[lang])lang="en";
if(window.localStorage)localStorage.setItem("pharmaLang",lang);

document.body.classList.toggle("rtl",lang==="ar");
applyTranslations();

}

function applyTranslations(){

document.querySelectorAll("[data-i18n]").forEach(el=>{
let key=el.getAttribute("data-i18n");
el.textContent=t(key);
});

document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
let key=el.getAttribute("data-i18n-placeholder");
el.setAttribute("placeholder",t(key));
});

// Long HTML content blocks
let firstAid=document.getElementById("firstAidContent");
if(firstAid)firstAid.innerHTML=getContentHtml("firstaid");

let disease=document.getElementById("diseaseContent");
if(disease)disease.innerHTML=getContentHtml("disease");

let guidelines=document.getElementById("guidelinesContent");
if(guidelines)guidelines.innerHTML=getContentHtml("guidelines");

let common=document.getElementById("libraryCommonContent");
if(common)common.innerHTML=getContentHtml("library_common");

let herbs=document.getElementById("libraryHerbsContent");
if(herbs)herbs.innerHTML=getContentHtml("library_herbs");

}

function n(v){
let x=parseFloat(v);
return Number.isFinite(x)?x:null;
}

function formatNum(x,dec=2){
if(!Number.isFinite(x))return "";
return x.toFixed(dec);
}

function calculatePediatricDose(){

let wt=n(document.getElementById("pedWeight").value);
let mgkg=n(document.getElementById("pedMgKg").value);
let max=n(document.getElementById("pedMaxDose").value);
let el=document.getElementById("pedResult");

if(!el)return;
if(!wt || !mgkg || wt<=0 || mgkg<=0){
el.innerHTML="Please enter weight and mg/kg.";
return;
}

let dose=wt*mgkg;
let capped=false;
if(max && max>0 && dose>max){
dose=max;
capped=true;
}

el.innerHTML="<strong>Estimated dose per dose:</strong> "+formatNum(dose,0)+" mg"
+(capped?"<br><span style='opacity:.85'>(Capped to max single dose)</span>":"");

}

function calculateIVDrip(){

let vol=n(document.getElementById("ivVolume").value);
let time=n(document.getElementById("ivTimeMin").value);
let drop=n(document.getElementById("ivDropFactor").value);
let el=document.getElementById("ivResult");

if(!el)return;
if(!vol || !time || !drop || vol<=0 || time<=0 || drop<=0){
el.innerHTML="Please enter volume, time, and drop factor.";
return;
}

let gttMin=(vol*drop)/time;
let mlHr=(vol/(time/60));

el.innerHTML="<strong>Drip rate:</strong> "+formatNum(gttMin,0)+" gtt/min<br>"
+"<strong>Pump rate:</strong> "+formatNum(mlHr,1)+" mL/hr";

}

function calculateCrCl(){

let age=n(document.getElementById("crclAge").value);
let wt=n(document.getElementById("crclWeight").value);
let scr=n(document.getElementById("crclScr").value);
let sex=document.getElementById("crclSex").value;
let el=document.getElementById("crclResult");

if(!el)return;
if(!age || !wt || !scr || age<=0 || wt<=0 || scr<=0){
el.innerHTML="Please enter age, weight, and serum creatinine.";
return;
}

let crcl=((140-age)*wt)/(72*scr);
if(sex==="female")crcl=crcl*0.85;

el.innerHTML="<strong>Estimated CrCl:</strong> "+formatNum(crcl,1)+" mL/min<br>"
+"<span style='opacity:.75'>Cockcroft–Gault (mg/dL, kg). Educational estimate only.</span>";

}

function calculateBSA(){

let ht=n(document.getElementById("bsaHeight").value);
let wt=n(document.getElementById("bsaWeight").value);
let el=document.getElementById("bsaResult");

if(!el)return;
if(!ht || !wt || ht<=0 || wt<=0){
el.innerHTML="Please enter height and weight.";
return;
}

let bsa=Math.sqrt((ht*wt)/3600);
el.innerHTML="<strong>BSA (Mosteller):</strong> "+formatNum(bsa,2)+" m²";

}

function calculateInfusionRate(){

let dose=n(document.getElementById("infDose").value);
let conc=n(document.getElementById("infConc").value);
let el=document.getElementById("infResult");

if(!el)return;
if(!dose || !conc || dose<=0 || conc<=0){
el.innerHTML="Please enter dose rate and concentration.";
return;
}

let mlHr=dose/conc;
el.innerHTML="<strong>Infusion rate:</strong> "+formatNum(mlHr,2)+" mL/hr";

}

function calculateParacetamolSafe(){

let wt=n(document.getElementById("paraWeight").value);
let grp=document.getElementById("paraGroup").value;
let el=document.getElementById("paraResult");

if(!el)return;
if(!wt || wt<=0){
el.innerHTML="Please enter weight.";
return;
}

if(grp==="child"){
let single=15*wt; // mg/kg per dose typical
let daily=60*wt;  // mg/kg/day typical max
el.innerHTML="<strong>Typical single dose:</strong> "+formatNum(single,0)+" mg (≈15 mg/kg)<br>"
+"<strong>Typical max daily:</strong> "+formatNum(daily,0)+" mg/day (≈60 mg/kg/day)<br>"
+"<span style='opacity:.75'>Educational only. Follow local pediatric references.</span>";
}else{
el.innerHTML="<strong>Adult guidance:</strong><br>"
+"- 500–1000 mg every 4–6 hours as needed<br>"
+"- Max 4000 mg/day (lower in liver disease / chronic alcohol use)<br>"
+"<span style='opacity:.75'>Educational only.</span>";
}

}

function checkInteraction(){

let a=(document.getElementById("interactionDrug1").value||"").trim().toLowerCase();
let b=(document.getElementById("interactionDrug2").value||"").trim().toLowerCase();
let el=document.getElementById("interactionResult");

if(!el)return;
if(!a || !b){
el.innerHTML="Please enter two drugs.";
return;
}

let key=[a,b].sort().join("+");

const DB={
"warfarin+ibuprofen":{
level:"Moderate",
effect:"Increased bleeding risk (GI bleeding).",
rec:"Avoid if possible; use alternative analgesic and monitor INR/bleeding."
},
"warfarin+paracetamol":{
level:"Moderate",
effect:"May increase INR with frequent/high doses.",
rec:"Use lowest effective dose; monitor INR if regular use."
},
"clopidogrel+ibuprofen":{
level:"Moderate",
effect:"Increased bleeding risk.",
rec:"Avoid NSAIDs if possible; consider gastroprotection if needed."
},
"metformin+contrast":{
level:"High",
effect:"Risk of lactic acidosis in renal impairment with iodinated contrast.",
rec:"Follow protocol: hold metformin around contrast if indicated; check renal function."
}
};

let hit=DB[key];
if(!hit){
el.innerHTML="<strong>"+escapeHtml(a)+" + "+escapeHtml(b)+"</strong><br>"
+"No interaction found in this demo database. Always check an official interaction resource.";
return;
}

el.innerHTML="<strong>"+escapeHtml(a)+" + "+escapeHtml(b)+"</strong><br>"
+"⚠ <strong>Interaction level:</strong> "+escapeHtml(hit.level)+"<br>"
+"<strong>Effect:</strong> "+escapeHtml(hit.effect)+"<br>"
+"<strong>Recommendation:</strong> "+escapeHtml(hit.rec);

}

function getReminders(){
if(!window.localStorage)return [];
try{
let raw=localStorage.getItem("pharmaReminders");
if(!raw)return [];
let arr=JSON.parse(raw);
return Array.isArray(arr)?arr:[];
}catch(e){
return [];
}
}

function saveReminders(list){
if(!window.localStorage)return;
localStorage.setItem("pharmaReminders",JSON.stringify(list));
}

function renderReminders(){

let el=document.getElementById("reminderList");
if(!el)return;

let list=getReminders();
if(list.length===0){
el.innerHTML="No reminders yet.";
return;
}

let html="<strong>Saved reminders:</strong><br>";
list.forEach((r,idx)=>{
html += "- "+escapeHtml(r.drug)+" @ "+escapeHtml(r.time)
+" <button style='width:auto;padding:4px 8px;margin-left:8px;background:#ef4444' onclick='deleteReminder("+idx+")'>Delete</button><br>";
});

el.innerHTML=html;

}

function addReminder(){

let drug=(document.getElementById("remDrug").value||"").trim();
let time=(document.getElementById("remTime").value||"").trim();

if(!drug || !time){
let el=document.getElementById("reminderList");
if(el)el.innerHTML="Please enter drug name and time.";
return;
}

let list=getReminders();
list.push({drug,time,createdAt:Date.now()});
saveReminders(list);

document.getElementById("remDrug").value="";
document.getElementById("remTime").value="";

renderReminders();

}

function deleteReminder(idx){
let list=getReminders();
list.splice(idx,1);
saveReminders(list);
renderReminders();
}

function getContentHtml(section){

let lang=(window.localStorage && localStorage.getItem("pharmaLang")) || "en";

const CONTENT={
en:{
firstaid:
"<strong>1) Minor cuts</strong><br>- Wash hands thoroughly.<br>- Rinse the wound with running water and mild soap.<br>- Apply a simple antiseptic if appropriate.<br>- Cover with a sterile dressing if it may get dirty.<br><br>"
+"<strong>2) Bleeding</strong><br>- Apply direct pressure with clean gauze/cloth.<br>- Elevate the injured limb if possible.<br>- If bleeding is heavy or won’t stop, call emergency services.<br><br>"
+"<strong>3) Minor burns</strong><br>- Cool under lukewarm running water for 10–20 minutes.<br>- Do not apply ice directly.<br>- Do not pop blisters.<br>- Use a non-adherent sterile dressing.<br><br>"
+"<strong>4) Fainting</strong><br>- Lay the person flat and raise legs slightly.<br>- Ensure ventilation and loosen tight clothing.<br>- If not recovering quickly or head injury: call emergency services.<br><br>"
+"<strong>5) Mild drug allergy</strong><br>- Stop the suspected medication if known.<br>- Consider an oral antihistamine if appropriate.<br>- Watch for danger signs (breathing difficulty, facial swelling).<br><br>"
+"<strong>6) Choking (adult)</strong><br>- Ask: “Are you choking?” If unable to speak/cough, call emergency services.<br>- Perform back blows and abdominal thrusts until object is expelled.<br>- If unconscious: start CPR and check mouth between cycles.<br><br>"
+"<strong>7) Suspected fracture/sprain</strong><br>- Immobilize the limb in the position found.<br>- Apply a cold pack wrapped in cloth for 10–15 minutes.<br>- Seek medical care for deformity, severe pain, or inability to bear weight.<br><br>"
+"<strong>8) Heat exhaustion/heat stroke</strong><br>- Move to a cool place; loosen clothing.<br>- Cool with wet cloths/fan; give oral fluids if fully awake.<br>- If confusion, very high temperature, or fainting: emergency care.<br><br>"
+"<strong>Important:</strong> For chest pain, breathing difficulty, loss of consciousness, severe burns, seizures, or heavy bleeding: call emergency services immediately.",
disease:
"<strong>Diabetes Mellitus</strong><br><br>"
+"<strong>Symptoms:</strong><br>- Frequent urination (polyuria)<br>- Excessive thirst (polydipsia)<br>- Increased hunger, unexplained weight loss, fatigue<br><br>"
+"<strong>Treatment:</strong><br>- Lifestyle changes (diet, exercise).<br>- Oral agents (e.g., metformin) depending on patient factors.<br>- Insulin for type 1 and some type 2 cases.<br><br>"
+"<strong>Complications:</strong><br>- Acute: hypoglycemia, DKA, hyperosmolar state.<br>- Chronic: neuropathy, retinopathy, nephropathy, CVD.<br><br>"
+"<strong>Red flags:</strong> confusion, vomiting, severe dehydration, very high/low glucose → urgent care.<br><br>"
+"<strong>Note:</strong> Pharmacists support adherence, interaction checks, and patient education.<br><hr style='border:none;border-top:1px solid rgba(0,0,0,0.08);margin:12px 0;'>"
+"<strong>Hypertension</strong><br><br>"
+"<strong>Symptoms:</strong> Often none (“silent”). May cause headache/dizziness when very high.<br>"
+"<strong>Basics:</strong> Home BP monitoring, lifestyle changes, and medications as needed.<br>"
+"<strong>Complications:</strong> stroke, MI, heart failure, kidney disease.<br><hr style='border:none;border-top:1px solid rgba(0,0,0,0.08);margin:12px 0;'>"
+"<strong>Asthma</strong><br><br>"
+"<strong>Symptoms:</strong> wheeze, cough, chest tightness, shortness of breath.<br>"
+"<strong>Basics:</strong> inhaler technique, controller vs reliever, trigger avoidance, action plan.",
guidelines:
"<strong>Hypertension</strong><br>- Diagnosis: repeated elevated BP with proper technique.<br>- Lifestyle: reduce salt, exercise, weight management, stop smoking.<br>- Meds: ACEi/ARB/CCB/thiazides depending on patient factors.<br><br>"
+"<strong>Type 2 diabetes</strong><br>- Metformin often first-line; add agents (SGLT2i/GLP-1 RA) based on CV/renal risk and goals.<br><br>"
+"<strong>Asthma</strong><br>- Stepwise therapy: inhaled corticosteroids ± LABA; correct inhaler technique; written action plan.<br><br>"
+"<strong>Simple clinical pearls:</strong><br>- Avoid duplicate therapies (e.g., two NSAIDs).<br>- Check renal/hepatic function for dosing when needed.<br>- Confirm allergies and pregnancy/lactation when relevant.<br><br>"
+"<strong>Note:</strong> Always refer to up-to-date sources (e.g., GINA, ADA, ESC/ESH).",
library_common:
"<strong>Paracetamol</strong><br>Use: Pain, Fever<br>Dose: 500–1000 mg every 4–6 h (max 4 g/day)<br>Side effects: Liver toxicity (overdose, liver disease)<br><br>"
+"<strong>Ibuprofen</strong><br>Use: Pain, Inflammation, Fever<br>Dose: 200–400 mg every 4–6 h (max 2400 mg/day adults)<br>Side effects: GI upset, ulcer, kidney effects<br><br>"
+"<strong>Amoxicillin</strong><br>Use: Bacterial infections (ENT, respiratory, UTI, etc.)<br>Dose: 500 mg every 8 h (depends on infection and patient factors)<br>Side effects: Allergy, rash, GI upset<br><br>"
+"<strong>Metformin</strong><br>Use: Type 2 diabetes<br>Dose: Start low; common 500 mg once/twice daily with food (titrate)<br>Side effects: GI upset; B12 deficiency (long-term). Avoid in severe renal impairment<br><br>"
+"<strong>Amlodipine</strong><br>Use: Hypertension/angina<br>Dose: 5–10 mg daily<br>Side effects: ankle edema, flushing<br><br>"
+"<strong>Omeprazole</strong><br>Use: GERD/ulcer<br>Dose: 20 mg daily (varies)<br>Side effects: headache, GI upset; long-term risks (B12/Mg)<br><br>"
+"<strong>Cetirizine</strong><br>Use: Allergy<br>Dose: 10 mg daily<br>Side effects: drowsiness (some patients)<br><br>"
+"<strong>Salbutamol (Albuterol)</strong><br>Use: Asthma relief<br>Dose: inhaler as prescribed<br>Side effects: tremor, palpitations",
library_herbs:
"<strong>Chamomile</strong><br>Use: Mild anxiety, insomnia, GI spasm<br>Notes: Avoid if allergic to ragweed/daisy family.<br><br>"
+"<strong>Ginger</strong><br>Use: Nausea, motion sickness, digestion<br>Notes: Use caution with anticoagulants (may increase bleeding risk).<br><br>"
+"<strong>Peppermint</strong><br>Use: IBS symptoms, GI spasm, dyspepsia<br>Notes: Avoid concentrated oils in infants (laryngospasm risk).<br><br>"
+"<strong>Turmeric (Curcumin)</strong><br>Use: Traditional anti-inflammatory (evidence varies)<br>Notes: Caution with anticoagulants; GI upset in some people.<br><br>"
+"<strong>Garlic</strong><br>Use: Traditional cardiovascular support (limited evidence)<br>Notes: May increase bleeding risk with anticoagulants/antiplatelets."
},
ar:{
firstaid:
"<strong>1) الجروح البسيطة</strong><br>- اغسل اليدين جيدًا.<br>- اشطف الجرح بماء جارٍ وصابون لطيف.<br>- استخدم مطهرًا بسيطًا عند الحاجة.<br>- غطِّه بضماد معقم إذا كان معرضًا للاتساخ.<br><br>"
+"<strong>2) النزيف</strong><br>- اضغط مباشرة بقطعة شاش/قماش نظيف.<br>- ارفع الطرف إن أمكن.<br>- إذا كان النزيف غزيرًا أو لا يتوقف: اتصل بالطوارئ.<br><br>"
+"<strong>3) الحروق البسيطة</strong><br>- برّد بماء فاتر جارٍ 10–20 دقيقة.<br>- لا تضع الثلج مباشرة.<br>- لا تفقأ الفقاعات.<br>- استخدم ضمادًا معقمًا غير لاصق.<br><br>"
+"<strong>4) الإغماء</strong><br>- اجعل الشخص مستلقيًا وارفع الساقين قليلًا.<br>- وفّر تهوية وفك الملابس الضيقة.<br>- إن لم يتحسن سريعًا أو توجد إصابة: اتصل بالطوارئ.<br><br>"
+"<strong>5) حساسية دوائية خفيفة</strong><br>- أوقف الدواء المشتبه به إن أمكن.<br>- قد يفيد مضاد هيستامين فموي إن كان مناسبًا.<br>- راقب علامات الخطر (ضيق تنفس/تورم الوجه).<br><br>"
+"<strong>6) الاختناق (للبالغ)</strong><br>- إذا لم يستطع الكلام/السعال: اتصل بالطوارئ.<br>- ضربات على الظهر ثم ضغطات البطن حتى خروج الجسم.<br>- إذا فقد الوعي: ابدأ إنعاشًا قلبيًا رئويًا.<br><br>"
+"<strong>7) كسر/التواء</strong><br>- ثبّت الطرف كما هو.<br>- كمادات باردة 10–15 دقيقة.<br>- راجع الطوارئ عند تشوه/ألم شديد/عدم القدرة على الحركة.<br><br>"
+"<strong>8) إجهاد حراري/ضربة شمس</strong><br>- انقل المصاب لمكان بارد وفك الملابس.<br>- تبريد بكمادات ومروحة وإعطاء سوائل إذا كان واعيًا.<br>- عند ارتباك/حرارة شديدة/إغماء: طوارئ فورًا.<br><br>"
+"<strong>مهم:</strong> ألم الصدر، ضيق التنفس، فقدان الوعي، التشنجات، الحروق الشديدة أو النزيف الغزير: اتصل بالطوارئ فورًا.",
disease:
"<strong>داء السكري</strong><br><br>"
+"<strong>الأعراض:</strong><br>- كثرة التبول<br>- العطش الزائد<br>- جوع زائد/نقص وزن/إرهاق<br><br>"
+"<strong>العلاج:</strong><br>- نمط حياة (غذاء/رياضة).<br>- أدوية فموية مثل Metformin حسب الحالة.<br>- إنسولين في النوع 1 وبعض حالات النوع 2.<br><br>"
+"<strong>المضاعفات:</strong><br>- حادة: هبوط السكر، DKA.<br>- مزمنة: أعصاب/شبكية/كلى/قلب.<br><br>"
+"<strong>علامات خطر:</strong> ارتباك، قيء، جفاف شديد، ارتفاع/انخفاض شديد في السكر → طوارئ.<br><br>"
+"<strong>ملاحظة:</strong> الصيدلي يساعد في الالتزام، التداخلات، وتثقيف المريض.<br><hr style='border:none;border-top:1px solid rgba(0,0,0,0.08);margin:12px 0;'>"
+"<strong>ارتفاع ضغط الدم</strong><br><br>"
+"<strong>الأعراض:</strong> غالبًا بدون أعراض.<br>"
+"<strong>الأساسيات:</strong> قياس منزلي + نمط حياة + علاج دوائي عند الحاجة.<br>"
+"<strong>المضاعفات:</strong> جلطة، احتشاء، فشل قلبي، كلى.<br><hr style='border:none;border-top:1px solid rgba(0,0,0,0.08);margin:12px 0;'>"
+"<strong>الربو</strong><br><br>"
+"<strong>الأعراض:</strong> صفير، سعال، ضيق نفس.<br>"
+"<strong>الأساسيات:</strong> تقنية البخاخ، علاج وقائي/مسكن، تجنب المحفزات.",
guidelines:
"<strong>ارتفاع ضغط الدم</strong><br>- التشخيص: قراءات مرتفعة متكررة بقياس صحيح.<br>- نمط الحياة: تقليل الملح، رياضة، وزن، إيقاف التدخين.<br>- الأدوية: ACEi/ARB/CCB/Thiazide حسب الحالة.<br><br>"
+"<strong>السكري النوع 2</strong><br>- Metformin غالبًا خط أول؛ ثم إضافة أدوية حسب عوامل الخطر والأهداف.<br><br>"
+"<strong>الربو</strong><br>- علاج تدريجي: ICS ± LABA، تقنية بخاخ صحيحة، وخطة مكتوبة.<br><br>"
+"<strong>نقاط عملية للصيدلي:</strong><br>- تجنب التكرار العلاجي (مثل NSAIDs متعددة).<br>- راجع وظائف الكلى/الكبد عند ضبط الجرعات.<br>- تحقق من الحساسية والحمل/الرضاعة عند الحاجة.<br><br>"
+"<strong>ملاحظة:</strong> ارجع دائمًا لمصادر محدثة (GINA/ADA/ESC/ESH).",
library_common:
"<strong>Paracetamol</strong><br>الاستعمال: ألم/حمى<br>الجرعة: 500–1000 mg كل 4–6 ساعات (حد أقصى 4 g/يوم)<br>آثار جانبية: سمية كبدية عند الجرعات الزائدة<br><br>"
+"<strong>Ibuprofen</strong><br>الاستعمال: ألم/التهاب/حمى<br>الجرعة: 200–400 mg كل 4–6 ساعات (حد أقصى 2400 mg/يوم للبالغين)<br>آثار: اضطراب معدة/قرحة/تأثير كلوي<br><br>"
+"<strong>Amoxicillin</strong><br>الاستعمال: عدوى بكتيرية<br>الجرعة: 500 mg كل 8 ساعات (حسب العدوى والحالة)<br>آثار: حساسية/طفح/اضطراب معدة<br><br>"
+"<strong>Metformin</strong><br>الاستعمال: سكري نوع 2<br>الجرعة: يبدأ بجرعة منخفضة مع الطعام ثم تدرج<br>آثار: اضطراب معدة؛ نقص B12 على المدى الطويل<br><br>"
+"<strong>Amlodipine</strong><br>الاستعمال: ضغط/ذبحة<br>الجرعة: 5–10 mg يوميًا<br>آثار: تورم الكاحل/احمرار<br><br>"
+"<strong>Omeprazole</strong><br>الاستعمال: ارتجاع/قرحة<br>الجرعة: 20 mg يوميًا (تختلف)<br>آثار: صداع/اضطراب هضمي؛ مخاطر طويلة المدى<br><br>"
+"<strong>Cetirizine</strong><br>الاستعمال: حساسية<br>الجرعة: 10 mg يوميًا<br>آثار: نعاس لدى بعض المرضى<br><br>"
+"<strong>Salbutamol</strong><br>الاستعمال: نوبات ربو<br>الجرعة: حسب وصفة الطبيب (بخاخ)<br>آثار: رجفة/خفقان",
library_herbs:
"<strong>Chamomile</strong><br>استعمال: قلق بسيط/أرق/تشنجات هضمية<br>ملاحظة: تجنب عند حساسية من الأقحوان.<br><br>"
+"<strong>Ginger</strong><br>استعمال: غثيان/دوار/هضم<br>ملاحظة: الحذر مع مميعات الدم.<br><br>"
+"<strong>Peppermint</strong><br>استعمال: أعراض القولون العصبي/تشنجات<br>ملاحظة: تجنب الزيوت المركزة للرضع.<br><br>"
+"<strong>Turmeric</strong><br>استعمال: مضاد التهاب تقليدي (الدليل متباين)<br>ملاحظة: الحذر مع مميعات الدم وقد يسبب اضطرابًا هضميًا.<br><br>"
+"<strong>Garlic</strong><br>استعمال: دعم قلبي تقليدي (دليل محدود)<br>ملاحظة: قد يزيد النزيف مع مميعات/مضادات صفائح."
},
ta:{
firstaid:
"<strong>1) சிறு வெட்டுகள்</strong><br>- கைகளை நன்றாக கழுவவும்.<br>- நீர் மற்றும் மென்மையான சோப்பால் சுத்தம் செய்யவும்.<br>- தேவையெனில் எளிய கிருமிநாசினி பயன்படுத்தவும்.<br>- சுத்தமான கட்டுப்பட்டு மூடவும்.<br><br>"
+"<strong>2) இரத்தப்போக்கு</strong><br>- சுத்தமான துணியால் நேரடி அழுத்தம் கொடுக்கவும்.<br>- முடிந்தால் கை/காலை உயர்த்தவும்.<br>- அதிகமாக அல்லது நிற்காவிட்டால் அவசர உதவி அழைக்கவும்.<br><br>"
+"<strong>3) சிறு எரிப்புகள்</strong><br>- 10–20 நிமிடம் தண்மையான நீரில் குளிர்த்தவும்.<br>- நேரடியாக பனிக்கட்டி வைக்க வேண்டாம்.<br>- புண்ணை திறக்க வேண்டாம்.<br>- ஒட்டாத ஸ்டெரைல் டிரெசிங் போடவும்.<br><br>"
+"<strong>4) மயக்கம்</strong><br>- தட்டையாக படுக்க வைத்து கால்களை சிறிது உயர்த்தவும்.<br>- காற்றோட்டம் உறுதி செய்து இறுக்கமான உடை தளர்த்தவும்.<br>- விரைவில் சரியாவில்லை என்றால் அவசர உதவி அழைக்கவும்.<br><br>"
+"<strong>5) லேசான மருந்து ஒவ்வாமை</strong><br>- சந்தேகமான மருந்தை நிறுத்தவும் (முடிந்தால்).<br>- பொருத்தமானால் ஆன்டிஹிஸ்டமின் எடுத்துக் கொள்ளலாம்.<br>- சுவாச சிரமம்/முக வீக்கம் இருந்தால் அவசர உதவி தேடவும்.<br><br>"
+"<strong>முக்கியம்:</strong> மார்வலி, சுவாச சிரமம், மயக்கம், கடுமையான எரிப்பு, அதிக இரத்தப்போக்கு: உடனடி அவசர உதவி.",
disease:
"<strong>நீரிழிவு (Diabetes)</strong><br><br>"
+"<strong>அறிகுறிகள்:</strong><br>- அதிக மூத்திரம்<br>- அதிக தாகம்<br>- பசி/எடை குறைவு/சோர்வு<br><br>"
+"<strong>சிகிச்சை:</strong><br>- உணவு மற்றும் உடற்பயிற்சி.<br>- மெட்ஃபார்மின் போன்ற மருந்துகள் (நோயாளி நிலையில் சார்ந்து).<br>- வகை 1 மற்றும் சில வகை 2 வழக்குகளில் இன்சுலின்.<br><br>"
+"<strong>சிக்கல்கள்:</strong><br>- உடனடி: குறைந்த சர்க்கரை, DKA.<br>- நீண்டகாலம்: நரம்பு/கண்/சிறுநீரகம்/இதயம்.<br><br>"
+"<strong>குறிப்பு:</strong> மருந்தாளர் ஆலோசனை, தொடர்புகள், கல்வி உதவியாகும்.",
guidelines:
"<strong>உயர் இரத்த அழுத்தம்</strong><br>- சரியான முறையில் மீண்டும் மீண்டும் அளவீடு.<br>- வாழ்க்கை முறை: உப்பு குறை, உடற்பயிற்சி, எடை கட்டுப்பாடு, புகை நிறுத்தம்.<br>- மருந்துகள்: ACEi/ARB/CCB/Thiazide (நிலை சார்ந்து).<br><br>"
+"<strong>வகை 2 நீரிழிவு</strong><br>- மெட்ஃபார்மின் பொதுவாக முதற்கட்டம்; பின்னர் இலக்குகள்/அபாயம் அடிப்படையில் சேர்க்கப்படும்.<br><br>"
+"<strong>ஆஸ்துமா</strong><br>- படிப்படி சிகிச்சை: ICS ± LABA; இன்ஹேலர் முறை சரி; செயல் திட்டம்.<br><br>"
+"<strong>குறிப்பு:</strong> GINA/ADA போன்ற புதுப்பிக்கப்பட்ட வழிகாட்டுதல்களை பின்பற்றவும்.",
library_common:
"<strong>Paracetamol</strong><br>பயன்பாடு: வலி, காய்ச்சல்<br>அளவு: 500–1000 mg ஒவ்வொரு 4–6 மணி (அதிகபட்சம் 4 g/நாள்)<br>பக்க விளைவு: அதிக அளவில் கல்லீரல் பாதிப்பு<br><br>"
+"<strong>Ibuprofen</strong><br>பயன்பாடு: வலி, அழற்சி, காய்ச்சல்<br>அளவு: 200–400 mg ஒவ்வொரு 4–6 மணி (அதிகபட்சம் 2400 mg/நாள் பெரியவர்கள்)<br>பக்க விளைவு: வயிற்று பாதிப்பு, சிறுநீரகம்<br><br>"
+"<strong>Amoxicillin</strong><br>பயன்பாடு: பாக்டீரியா தொற்று<br>அளவு: 500 mg ஒவ்வொரு 8 மணி (நிலை சார்ந்து)<br>பக்க விளைவு: ஒவ்வாமை, வாந்தி/வயிற்று பாதிப்பு",
library_herbs:
"<strong>Chamomile</strong><br>பயன்பாடு: லேசான கவலை/தூக்கமின்மை/வயிற்று பிடிப்பு<br>குறிப்பு: ragweed/daisy ஒவ்வாமை இருந்தால் தவிர்க்கவும்.<br><br>"
+"<strong>Ginger</strong><br>பயன்பாடு: வாந்தி, பயண மயக்கம், ஜீரணம்<br>குறிப்பு: இரத்தம் உறையாமை மருந்துகளுடன் கவனம்.<br><br>"
+"<strong>Peppermint</strong><br>பயன்பாடு: IBS அறிகுறிகள், வயிற்று பிடிப்பு<br>குறிப்பு: குழந்தைகளில்浓 எண்ணெய்கள் தவிர்க்கவும்."
}
};

let pack=CONTENT[lang] || CONTENT.en;
return pack[section] || "";
}

function calculateDose(){

let drug=document.getElementById("drug").value;

let weight=document.getElementById("weight").value;

let dose=weight*10;

document.getElementById("doseResult").innerHTML =
"Estimated dose for "+drug+" : "+dose+" mg";

}

function calculateBMI(){

let h=document.getElementById("height").value/100;

let w=document.getElementById("bmiweight").value;

let bmi=(w/(h*h)).toFixed(2);

document.getElementById("bmiResult").innerHTML =
"BMI = "+bmi;

}

function checkSideEffect(){

let symptom=document.getElementById("symptomInput").value.trim().toLowerCase();
let res="";

if(!symptom){
res="Please enter a symptom first.";
}else if(symptom.includes("cough")){

res="<strong>Possible related drugs:</strong> ACE inhibitors (e.g., enalapril, captopril).<br>Dry cough is a well-known side effect. Consider reviewing the patient's antihypertensive therapy.";

}else if(symptom.includes("bleeding") || symptom.includes("bruise")){

res="<strong>Possible related drugs:</strong> Anticoagulants (Warfarin, DOACs), Antiplatelets (Aspirin, Clopidogrel), and NSAIDs (Ibuprofen, Diclofenac).<br>Bleeding/bruising may be increased, especially with combination therapy.";

}else if(symptom.includes("nausea") || symptom.includes("vomit")){

res="<strong>Possible related drugs:</strong> Many antibiotics, opioids, digoxin, metformin (especially at start).<br>Review recent new medications and doses.";

}else{

res="No specific mapping in this demo for this symptom. Always assess full medication list and clinical context.";

}

document.getElementById("sideEffectResult").innerHTML=res;

}

function searchDrug(){

let name=document.getElementById("drugSearchInput").value.trim().toLowerCase();

let info="";

const DB={
"paracetamol":{
name:"Paracetamol (Acetaminophen)",
use:"Pain, fever",
dose:"Adults: 500–1000 mg every 4–6 h PRN",
max:"Max daily: 4 g (lower in liver disease/chronic alcohol use)",
side:"Liver toxicity with overdose; rash (rare)",
interactions:"Alcohol; other hepatotoxic drugs; warfarin (INR may rise with regular use)",
contra:"Severe hepatic impairment",
preg:"Generally considered safe at therapeutic doses"
},
"ibuprofen":{
name:"Ibuprofen",
use:"Pain, inflammation, fever",
dose:"Adults: 200–400 mg every 4–6 h PRN",
max:"Max daily (OTC varies): commonly up to 1200 mg/day OTC; higher doses under medical supervision",
side:"GI upset/ulcer/bleeding; kidney effects",
interactions:"Anticoagulants/antiplatelets (bleeding); ACEi/diuretics (kidney risk)",
contra:"Active GI bleed/ulcer, severe renal disease (consult)",
preg:"Avoid in 3rd trimester"
},
"amoxicillin":{
name:"Amoxicillin",
use:"Bacterial infections (depends on organism/site)",
dose:"Common adult: 500 mg every 8 h (varies)",
max:"Follow prescription; adjust in renal impairment",
side:"Allergy, rash, diarrhea",
interactions:"May affect INR with warfarin; oral contraceptives evidence limited—counsel if vomiting/diarrhea",
contra:"Penicillin allergy",
preg:"Generally safe"
},
"metformin":{
name:"Metformin",
use:"Type 2 diabetes",
dose:"Start low (e.g., 500 mg once daily with food), titrate",
max:"Typical max 2000 mg/day (varies)",
side:"GI upset; B12 deficiency (long-term); rare lactic acidosis",
interactions:"Iodinated contrast precautions in some patients",
contra:"Severe renal impairment; acute hypoxia/sepsis (risk situations)",
preg:"Often used in pregnancy in some settings—clinician guided"
},
"amlodipine":{
name:"Amlodipine",
use:"Hypertension, angina",
dose:"5–10 mg once daily",
max:"Max 10 mg/day",
side:"Ankle edema, flushing, headache",
interactions:"Additive hypotension with other BP meds",
contra:"None major; caution in severe hypotension",
preg:"Clinician guided"
},
"omeprazole":{
name:"Omeprazole",
use:"GERD, peptic ulcer disease",
dose:"20 mg daily (varies by indication)",
max:"As prescribed",
side:"Headache, diarrhea; long-term: low Mg/B12 risk",
interactions:"May reduce clopidogrel activation (controversial); check regimen",
contra:"Hypersensitivity",
preg:"Generally considered low risk"
},
"cetirizine":{
name:"Cetirizine",
use:"Allergic rhinitis, urticaria",
dose:"10 mg once daily",
max:"10 mg/day (typical)",
side:"Drowsiness in some, dry mouth",
interactions:"CNS depressants (additive sedation)",
contra:"Hypersensitivity",
preg:"Often considered low risk; clinician guided"
},
"salbutamol":{
name:"Salbutamol (Albuterol)",
use:"Bronchospasm relief",
dose:"Inhaler puffs as prescribed",
max:"Follow inhaler instructions",
side:"Tremor, palpitations, hypokalemia (high doses)",
interactions:"Non-selective beta-blockers reduce effect",
contra:"Hypersensitivity",
preg:"Commonly used; clinician guided"
},
"atorvastatin":{
name:"Atorvastatin",
use:"Hyperlipidemia, CV risk reduction",
dose:"10–80 mg once daily",
max:"Max 80 mg/day",
side:"Myalgia; rare rhabdomyolysis; liver enzyme elevation",
interactions:"Strong CYP3A4 inhibitors increase level",
contra:"Pregnancy; active liver disease",
preg:"Contraindicated"
}
};

// Simple aliasing
if(name==="acetaminophen")name="paracetamol";
if(name==="albuterol")name="salbutamol";

if(DB[name]){
let d=DB[name];
info += "<strong>Name:</strong> "+escapeHtml(d.name)+"<br>";
info += "<strong>Use:</strong> "+escapeHtml(d.use)+"<br>";
info += "<strong>Dose:</strong> "+escapeHtml(d.dose)+"<br>";
info += "<strong>"+escapeHtml(d.max)+"</strong><br>";
info += "<strong>Side effects:</strong> "+escapeHtml(d.side)+"<br>";
info += "<strong>Interactions:</strong> "+escapeHtml(d.interactions)+"<br>";
info += "<strong>Contraindications:</strong> "+escapeHtml(d.contra)+"<br>";
info += "<strong>Pregnancy & Lactation:</strong> "+escapeHtml(d.preg);
}else if(name){
info="Drug not found in this demo database. Try: Paracetamol, Ibuprofen, Amoxicillin, Metformin, Amlodipine, Omeprazole, Cetirizine.";
}else{
info="Please enter a drug name.";
}

document.getElementById("drugInfoResult").innerHTML=info;

}

function identifyPill(){

let color=document.getElementById("pillColor").value.trim().toLowerCase();

let shape=document.getElementById("pillShape").value.trim().toLowerCase();

let imprint=document.getElementById("pillImprint").value.trim().toLowerCase();

let result="";

if(!color && !shape && !imprint){

result="Please enter at least one feature (color, shape or imprint).";

}else if(color==="white" && shape==="round" && imprint==="p 500"){

result="<strong>Possible match:</strong> Paracetamol 500 mg tablet<br>";
result+="<strong>Use:</strong> Pain, Fever<br>";
result+="This is only an educational demo — always verify with official sources.";

}else{

result="No exact match found in this demo. Try White / Round / P 500.";

}

document.getElementById("pillResult").innerHTML=result;

}

function saveProfile(){

let profile={
name:document.getElementById("profileName").value,
age:document.getElementById("profileAge").value,
blood:document.getElementById("profileBlood").value,
diseases:document.getElementById("profileDiseases").value,
meds:document.getElementById("profileMedications").value,
allergies:document.getElementById("profileAllergies").value
};

if(window.localStorage){
localStorage.setItem("pharmaProfile",JSON.stringify(profile));
}

let status="Profile saved locally on this device.";

document.getElementById("profileStatus").innerHTML=status;

}

function loadProfile(){

if(!window.localStorage)return;

let data=localStorage.getItem("pharmaProfile");

if(!data)return;

try{

let profile=JSON.parse(data);

if(profile.name!==undefined)document.getElementById("profileName").value=profile.name;
if(profile.age!==undefined)document.getElementById("profileAge").value=profile.age;
if(profile.blood!==undefined)document.getElementById("profileBlood").value=profile.blood;
if(profile.diseases!==undefined)document.getElementById("profileDiseases").value=profile.diseases;
if(profile.meds!==undefined)document.getElementById("profileMedications").value=profile.meds;
if(profile.allergies!==undefined)document.getElementById("profileAllergies").value=profile.allergies;

}catch(e){
// ignore parse errors
}

}

function applyThemeFromStorage(){

if(!window.localStorage)return;
let theme=localStorage.getItem("pharmaTheme");
if(theme==="dark"){
document.body.classList.add("dark");
let btn=document.getElementById("themeToggle");
if(btn)btn.textContent="🌞";
}

}

function toggleTheme(){

let body=document.body;
let btn=document.getElementById("themeToggle");
body.classList.toggle("dark");

if(body.classList.contains("dark")){
if(window.localStorage)localStorage.setItem("pharmaTheme","dark");
if(btn)btn.textContent="🌞";
}else{
if(window.localStorage)localStorage.setItem("pharmaTheme","light");
if(btn)btn.textContent="🌓";
}

}

function initApp(){
loadProfile();
loadNotes();
applyThemeFromStorage();
applyLanguageFromStorage();
renderReminders();
}

if(typeof window!=="undefined"){
window.addEventListener("load",initApp);
}

function applyLanguageFromStorage(){
let lang=(window.localStorage && localStorage.getItem("pharmaLang")) || "en";
setLanguage(lang);
}

function startCamera(){

let video=document.getElementById("cameraVideo");
let img=document.getElementById("cameraImagePreview");
let status=document.getElementById("cameraStatus");

if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
status.innerHTML="Camera not supported in this browser.";
return;
}

navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{
video.srcObject=stream;
video.style.display="block";
img.style.display="none";
status.innerHTML="Camera is active. Point it to the prescription.";
})
.catch(()=>{
status.innerHTML="Unable to access camera. Please check permissions.";
});

}

function handleImageUpload(event){

let file=event.target.files[0];
let img=document.getElementById("cameraImagePreview");
let video=document.getElementById("cameraVideo");
let status=document.getElementById("cameraStatus");

if(!file){
return;
}

let reader=new FileReader();

reader.onload=function(e){
img.src=e.target.result;
img.style.display="block";
video.style.display="none";
status.innerHTML="Image loaded. Future version will extract medicines automatically.";
};

reader.readAsDataURL(file);

}

function scanBarcode(){

let code=document.getElementById("barcodeInput").value.trim();
let result="";

if(!code){
result="Please enter or scan a barcode.";
}else if(code==="1234567890123"){

result += "<strong>Drug name:</strong> Paracetamol 500 mg tablets<br>";
result += "<strong>Dose:</strong> 500 mg tablet (max 4 g/day adults)<br>";
result += "<strong>Company:</strong> Demo Pharma Co.<br>";
result += "<strong>Price:</strong> 12.00 SAR (example)<br>";
result += "<strong>Medical info:</strong> Used for pain and fever. Avoid overdose and use with caution in liver disease.";

}else{

result="Barcode not found in this demo database. Try 1234567890123.";

}

document.getElementById("barcodeResult").innerHTML=result;

}

function goBack(target){

if(!target){
target="dashboardPage";
}

openPage(target);

}

function openNearby(type){

let status=document.getElementById("locatorStatus");

if(!navigator.geolocation){
if(status)status.innerHTML="Geolocation is not supported on this device/browser.";
return;
}

async function loadDrugNews(){

let el=document.getElementById("drugNewsList");
if(!el)return;

el.innerHTML="Loading live news...";

try{

// Recent FDA drug recalls (enforcement reports)
let recallsRes=await fetch("https://api.fda.gov/drug/enforcement.json?sort=report_date:desc&limit=5");
if(!recallsRes.ok)throw new Error("Recalls request failed");
let recallsJson=await recallsRes.json();
let recalls=(recallsJson.results||[]).map(r=>{
let product=(r.product_description||"").toString();
let reason=(r.reason_for_recall||"").toString();
let status=(r.status||"").toString();
let firm=(r.recalling_firm||"").toString();
let date=(r.report_date||"").toString();
return {product,reason,status,firm,date};
});

// Recent approvals / submissions (Drugs@FDA)
let approvalsRes=await fetch("https://api.fda.gov/drug/drugsfda.json?sort=submissions.submission_status_date:desc&limit=5");
if(!approvalsRes.ok)throw new Error("Approvals request failed");
let approvalsJson=await approvalsRes.json();
let approvals=(approvalsJson.results||[]).map(a=>{
let brand=(a.openfda && a.openfda.brand_name && a.openfda.brand_name[0]) ? a.openfda.brand_name[0] : "";
let generic=(a.openfda && a.openfda.generic_name && a.openfda.generic_name[0]) ? a.openfda.generic_name[0] : "";
let sponsor=(a.sponsor_name||"").toString();
let appNo=(a.application_number||"").toString();
let date="";
if(a.submissions && a.submissions[0] && a.submissions[0].submission_status_date){
date=a.submissions[0].submission_status_date.toString();
}
return {brand,generic,sponsor,appNo,date};
});

let html="";

html += "<strong>Recent FDA approvals / submissions (OpenFDA)</strong><br>";
if(approvals.length===0){
html += "- No data returned.<br><br>";
}else{
approvals.forEach(x=>{
let name=(x.brand||x.generic||"Unknown drug");
let details=[];
if(x.generic)details.push("Generic: "+x.generic);
if(x.sponsor)details.push("Sponsor: "+x.sponsor);
if(x.appNo)details.push("App: "+x.appNo);
if(x.date)details.push("Date: "+x.date);
html += "- <strong>"+escapeHtml(name)+"</strong><br><span style='opacity:.85'>"+escapeHtml(details.join(" | "))+"</span><br>";
});
html += "<br>";
}

html += "<strong>Recent FDA drug recalls (OpenFDA enforcement)</strong><br>";
if(recalls.length===0){
html += "- No data returned.<br>";
}else{
recalls.forEach(x=>{
let title=x.product || "Recall notice";
let details=[];
if(x.firm)details.push("Firm: "+x.firm);
if(x.status)details.push("Status: "+x.status);
if(x.date)details.push("Report date: "+x.date);
html += "- <strong>"+escapeHtml(title)+"</strong><br>";
if(x.reason)html += "<span style='opacity:.85'>Reason: "+escapeHtml(x.reason)+"</span><br>";
if(details.length)html += "<span style='opacity:.85'>"+escapeHtml(details.join(" | "))+"</span><br>";
});
}

html += "<br><span style='opacity:.7'>Source: FDA OpenFDA API (live). Availability depends on network/CORS.</span>";

el.innerHTML=html;

}catch(e){

el.innerHTML="Unable to load live news right now. Please check your internet connection and try again.";

}

}

function escapeHtml(str){
return (str||"").toString()
.replaceAll("&","&amp;")
.replaceAll("<","&lt;")
.replaceAll(">","&gt;")
.replaceAll('"',"&quot;")
.replaceAll("'","&#39;");
}

if(status)status.innerHTML="Getting your location...";

navigator.geolocation.getCurrentPosition(pos=>{

let lat=pos.coords.latitude;
let lng=pos.coords.longitude;
let query=type==="hospital" ? "hospitals" : "pharmacies";

if(status)status.innerHTML="Opening map for nearby "+query+"...";

let url="https://www.google.com/maps/search/"+encodeURIComponent(query)+"/@"+lat+","+lng+",15z";
window.open(url,"_blank");

},()=>{
if(status)status.innerHTML="Unable to get location. Please allow location permission.";
});

}

function checkAvailability(){

let name=document.getElementById("availabilityInput").value.trim().toLowerCase();
let res="";

if(!name){
res="Please enter a drug name.";
}else if(name==="paracetamol"){

res += "<strong>Availability:</strong> Commonly available.<br>";
res += "<strong>Brand names (examples):</strong> Panadol, Fevadol, others (vary by country).<br>";
res += "<strong>Alternatives:</strong> Other paracetamol brands with the same strength/form.<br>";
res += "<strong>Notes:</strong> Check strength (e.g., 500 mg) and dosage form (tablet/syrup/suppository).";

}else if(name==="augmentin"){

res += "<strong>Availability:</strong> May be unavailable in some pharmacies (demo).<br>";
res += "<strong>Suggestion:</strong> Use the Alternative Drugs tool to check substitutes (e.g. Amoxicillin, Cefuroxime, Azithromycin).";

}else if(name==="metformin"){

res += "<strong>Availability:</strong> Usually widely available.<br>";
res += "<strong>Brand names (examples):</strong> Glucophage and generics (vary by country).<br>";
res += "<strong>Alternatives:</strong> Other metformin brands; extended-release vs immediate-release depending on tolerance.";

}else if(name==="omeprazole"){

res += "<strong>Availability:</strong> Commonly available OTC/Rx depending on region.<br>";
res += "<strong>Brand names (examples):</strong> Losec/Prilosec, generics.<br>";
res += "<strong>Alternatives:</strong> Other PPIs (pantoprazole, esomeprazole) or H2 blockers (famotidine) depending on indication.";

}else if(name==="salbutamol" || name==="albuterol"){

res += "<strong>Availability:</strong> Commonly available (Rx in many countries).<br>";
res += "<strong>Brand names (examples):</strong> Ventolin and others.<br>";
res += "<strong>Alternatives:</strong> Different inhaler brands with same active ingredient; ensure correct device technique.";

}else{

res="No detailed availability data in this demo for this drug. Try Paracetamol, Metformin, Omeprazole, Salbutamol, or Augmentin.";

}

document.getElementById("availabilityResult").innerHTML=res;

}

function findAlternatives(){

let name=document.getElementById("alternativeInput").value.trim().toLowerCase();
let res="";

if(!name){
res="Please enter a drug name.";
}else if(name==="augmentin"){

res += "<strong>Augmentin alternatives (examples):</strong><br>";
res += "- Amoxicillin<br>";
res += "- Cefuroxime<br>";
res += "- Azithromycin<br>";
res += "<br>Choice depends on infection type, local resistance, allergies, and guidelines.";

}else if(name==="ibuprofen"){

res += "<strong>Ibuprofen alternatives (examples):</strong><br>";
res += "- Paracetamol (for pain/fever, not anti-inflammatory)<br>";
res += "- Naproxen (NSAID) (clinician guided)<br>";
res += "<br>Consider GI/renal risk and bleeding risk with NSAIDs.";

}else if(name==="omeprazole"){

res += "<strong>Omeprazole alternatives (examples):</strong><br>";
res += "- Pantoprazole<br>";
res += "- Esomeprazole<br>";
res += "- Famotidine (H2 blocker) for some cases<br>";
res += "<br>Choice depends on indication and interactions.";

}else{

res="No specific alternatives stored in this demo for this drug. Try Augmentin, Ibuprofen, or Omeprazole.";

}

document.getElementById("alternativeResult").innerHTML=res;

}

function saveNotes(){

let text=document.getElementById("notesArea").value;

if(window.localStorage){
localStorage.setItem("pharmaNotes",text);
}

document.getElementById("notesStatus").innerHTML="Notes saved locally on this device.";

}

function loadNotes(){

if(!window.localStorage)return;
let text=localStorage.getItem("pharmaNotes");
if(text!==null){
document.getElementById("notesArea").value=text;
}

}