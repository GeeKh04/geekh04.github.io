var langs = ['en', 'fr', 'ar'];
var langCode = '';
var langJS = null;

var dictionary = {
	'en': {
		"home" : "Home",
		"about" : "About",
		"skills" : "Skills",
		"experiences" : "Experiences",
		"portfolio" : "Portfolio",
		"contact" : "Contact",
		"hello" : "Hello I'm",
		"full-name": "KHOUNA Rida",
		"last-name" : "KHOUNA",
		"job" : "Software Engineer",
		"address-text" : "Casablanca, Morocco",
		"about-me" : "About Me",
		"about-me-text" : "Rigorous and versatile, Passionate about innovation and new technologies, I am always ready to take up new challenges ! <br/> Do not hesitate to contact me on LinkedIn, or send me an email.",
		"download-cv" : "Download CV",
		"what-i-do" : "What I do",
		"design" : "Design",
		"design-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
		"dev" : "Programming",
		"dev-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
		"dev2" : "Programming",
		"dev2-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
		"projects" : "Projects",
		"mobile-dev" : "Mobile Development",
		"details" : "View Details",
		"proj1-title" : "MyStock",
		"proj1-subtitle" : "Mobile inventory management application",
		"proj1-desc1" : "Then the solution that we proposed consists in recording the stock on a smartphone to have them always on you, in order to have the possibility of carrying out operations on the stock data.",
		"proj1-desc2" : "Which brings us to a precise subject, it is to develop a mobile application of stock management, of which it has the following objectives :",
		"proj1-list1" : "Allow the user to control several establishments.",
		"proj1-list2" : "Consult the stock in different ways so to apply some modifications in there.",
		"proj1-list3" : "Search for items in the stock.",
		"proj1-list4" : "Print inventory.",
		"proj1-list5" : "The possibility of performing all kinds of operations in offline mode.",
		"android" : "Android",
		"inventory" : "Inventory",
		"management-system" : "Management System",
		"technical-skills" : "Technical Skills",
		"professional-skills" : "Professional Skills",
		"communication" : "Communication",
		"team-work" : "Team Work",
		"project-management" : "Project Management",
		"Creativity" : "Creativity",
		"eductaion" : "Eductaion",
		"edu1-title" : "Engineering Degree in Computer Science, Option: Software engineering From ",
		"edu1-institute" : "INSEA",
		"edu1-descruption" : "The National Institute of Statistics and Applied Economics, Rabat (Morocco)",
		"edu2-title" : "Fundamental License in Mathematics and Computer Science From ",
		"edu2-institute" : "Hassan II University",
		"edu2-descruption" : "The Faculty of Science of Hassan II University, Casablanca (Morocco) ",
		"edu3-title" : "Scientific baccalaureate diploma in mathematics From ",
		"edu3-institute" : "Moulay Ismail High School",
		"edu3-descruption" : "Moulay Ismail High School, Casablanca (Morocco) ",
		"experience" : "Work Experience",
		"exp1-position" : "Java Software engineer at ",
		"exp1-organization" : "BCP Technologies",
		"exp2-position" : "Software engineer at ",
		"exp2-organization" : "Banque Centrale Populaire",
		"exp3-position" : "Full-Stack Developer at ",
		"exp3-organization" : "BMCE Capital",
		"project" : "Project :",
		"exp1-project" : "Migration of the main activities of the current IS of the African subsidiaries of the BCP group to the Amplitude V11 platform of Sopra Banking.",
		"exp2-project" : "Redesign of the cash domain transaction system management : transfer, direct debit, check delivery & mass flow.",
		"exp3-project" : "Implementation of a roboadvisor for the asset management activity.",
		"portfolio" : "Portfolio",
		"all-categories" : "All Categories",
		"music" : "Music",
		"photography" : "Photography",
		"bella-ciao" : "Bella Ciao - Guitar cover 🇮🇹",
		"broken-spirits" : "Broken spirits",
		"mogador" : "Mogador",
		"meaning" : "Meaning : ",
		"tools" : "Tools : ",
		"location" : "Location : ",
		"camera" : "Camera : ",
		"ai" : "AI",
		"innovation" : "Innovation",
		"illustrator" : "Illustrator",
		"it" : "IT",
		"after-effects" : "AfterEffects",
		"animation" : "Animation",
		"2ie-text" : "a school club that organises and participates at innovate competitions.",
		"2ie-meaning" : "First 'I' for INSEA, second 'I' for Innovation and the last symbol 'E' for Edge, the style is look like the brain structure mean that the club is about innovation.",
		"2ie-tools" : "Adobe Illustrator.",
		"archide-text" : "a startup that creates intelligent solutions that assist organizations to solve their complex problems, based on artificial intelligence.",
		"archide-meaning" : "'Archide' is an arabic word that mean 'Guide'.",
		"archide-logo1" : "Principal logo.",
		"archide-logo2" : "Agricultural style logo.",
		"inseait-text" : "a school IT club that organise events, trunning & innovate competitions in the IT sector.",
		"inseait-meaning" : "this photo is for the the animated logo version of the club, a typing style of name of the club as a html tag.",
		"inseait-tools" : "Adobe After Effects.",
		"monkey-text" : "Within the prison walls of every zoo sit tortured souls with empty eyes and broken spirits.",
		"monkey-location" : "Zoological Garden, Rabat-Morocco.",
		"monkey-camera" : "Samsung Note 5.",
		"interested-to-work" : "Are you interested in my job ?",
		"interested-to-text" : "Feel free to contact me on LinkedIn, or send me an email.",
		"contact-me" : "Contact Me",
		"address" : "Address",
		"address-text2" : "Casablanca, <br/>Morocco",
		"email" : "Email",
		"phone" : "Phone",
		"send-message" : "Send Message",
		"copyright" : "Copyright",
		"form-firstname" : "First Name",
		"form-lastname" : "Last Name",
		"form-email" : "Your Email",
		"form-message" : "Your Message"
	},
	'fr': {
		"home" : "Accueil",
		"about" : "À propos",
		"skills" : "Compétences",
		"experiences" : "Expériences",
		"portfolio" : "Portefeuille",
		"contact" : "Contact",
		"hello" : "Salut je suis",
		"full-name" : "KHOUNA Rida",
		"last-name" : "KHOUNA",
		"job" : "Ingénieur logiciel",
		"address-text" : "Casablanca, Maroc",
		"about-me" : "À propos de moi",
		"about-me-text" : "Rigoureux et polyvalent, Passionnée par l'innovation et les nouvelles technologies, je suis toujours prêt à relever de nouveaux défis et challenges !<br/>N’hésitez pas à me contacter sur LinkedIn, ou envoyez moi un email,  <br/> Vous pouvez aussi consulter mon C.V. en ligne.",
		"download-cv" : "Téléchargez le CV",
		"what-i-do" : "Ce que je fais",
		"design" : "Design",
		"design-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
		"dev" : "Programmation",
		"dev-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
		"dev2" : "Programmation",
		"dev2-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
		"projects" : "Projets",
		"mobile-dev" : "Développement mobile",
		"details" : "Voir les détails",
		"proj1-title" : "MyStock",
		"proj1-subtitle" : "Application mobile de gestion d'inventaire",
		"proj1-desc1" : "La solution que nous avons proposé consiste a enregistre le stock sur un smartphone pour l'avoir toujours sur soi, afin d'avoir la possibilité d'effectuer des opérations sur les données du stock.",
		"proj1-desc2" : "dont elle a les objectifs suivants :",
		"proj1-list1" : "Permettre à l'utilisateur de contôler plusieurs etablissement.",
		"proj1-list2" : "Consulter le stock de différentes façons ainsi d'appliquer quelques modifications là dedans.",
		"proj1-list3" : "Rechercher des articles dans le stock afin d'afficher ses informations.",
		"proj1-list4" : "Imprimer l'inventaire.",
		"proj1-list5" : "La possibilité d'effectuer des opérations en mode offline autant que le mode online.",
		"android" : "Android",
		"inventory" : "Inventaire",
		"management-system" : "Système de gestion",
		"technical-skills" : "Compétences techniques",
		"professional-skills" : "Compétences professionnelles",
		"communication" : "Communication",
		"team-work" : "Travail en équipe",
		"project-management" : "Gestion de projet",
		"Creativity" : "Créativité",
		"eductaion" : "Eductaion",
		"edu1-title" : "Diplôme d’ingénieur d’état en Génie Informatique, Option : Génie logiciel, ",
		"edu1-institute" : "INSEA",
		"edu1-descruption" : "Institut National de Statistique et d’Économie Appliquée, Rabat (Maroc)",
		"edu2-title" : "Licence Fondamentale en Sciences Mathématiques et Informatique, ",
		"edu2-institute" : "Université Hassan II",
		"edu2-descruption" : "Faculté des Sciences BenM’sik, Casablanca (Maroc) ",
		"edu3-title" : "Baccalauréat Scientifique Série Sciences Mathématiques -A-",
		"edu3-institute" : "Lycée Moulay Ismail",
		"edu3-descruption" : "Lycée Moulay Ismail, Casablanca (Maroc) ",
		"experience" : "ِِExpérience professionnelle",
		"exp1-position" : "Ingénieur logiciel Java à la ",
		"exp1-organization" : "BCP Technologies",
		"exp2-position" : "Ingénieur logiciel à la ",
		"exp2-organization" : "Banque Centrale Populaire",
		"exp3-position" : "Développeur Full-Stack à la ",
		"exp3-organization" : "BMCE Capital",
		"project" : "Projet :",
		"exp1-project" : "Migration des principales activités de l'actuel SI des filiales africaines du groupe BCP vers la plateforme Amplitude V11 de Sopra Banking.",
		"exp2-project" : "Refonte du système de transaction du domaine cash management : virement, prélèvement, remise de chèque et le flux de masse.",
		"exp3-project" : "Mise en place d’un roboadvisor pour l’activité asset management.",
		"portfolio" : "Portefeuille",
		"all-categories" : "Toutes les catégories",
		"music" : "Musique",
		"photography" : "Photographie",
		"bella-ciao" : "Bella Ciao - guitare 🇮🇹",
		"broken-spirits" : "Esprits brisés",
		"mogador" : "Mogador",
		"meaning" : "Signification : ",
		"tools" : "Outils : ",
		"location" : "Location : ",
		"camera" : "Caméra : ",
		"ai" : "IA",
		"innovation" : "Innovation",
		"illustrator" : "Illustrateur",
		"it" : "IT",
		"after-effects" : "AfterEffects",
		"animation" : "Animation",
		"2ie-text" : "Un club scolaire organise et participe à des compétitions de programmation et d'innovation.",
		"2ie-meaning" : "La première lettre 'I' indique à l'INSEA, deuxième 'I' pour l'Innovation et dernière 'E' pour Edge, le style ressemble à la structure du cerveau signifie que le club est axé sur l'innovation.",
		"2ie-tools" : "Adobe Illustrateur.",
		"archide-text" : "une startup qui crée des solutions intelligentes qui aident les entreprises à résoudre leurs problèmes complexes, basées sur l'intelligence artificielle.",
		"archide-meaning" : "«Archide» est un mot arabe qui signifie «guide».",
		"archide-logo1" : "Logo principal.",
		"archide-logo2" : "Logo de style agricole.",
		"inseait-text" : "un club informatique scolaire qui organise des événements, des compétitions de trunning & d'innovation dans le secteur informatique.",
		"inseait-meaning" : "cette video est pour la version logo animée du club, un style de frappe du nom du club comme une balise html.",
		"inseait-tools" : "Adobe After Effects.",
		"monkey-text" : "Dans les murs de la prison de chaque zoo se trouvent des âmes torturées aux yeux vides et aux esprits brisés.",
		"monkey-location" : "Jardin zoologique, Rabat-Maroc.",
		"monkey-camera" : "Samsung Note 5.",
		"interested-to-work" : "Êtes-vous intéressé par mon travail ?",
		"interested-to-text" : "N’hésitez pas à me contacter sur LinkedIn, ou envoyez moi un email.",
		"contact-me" : "Contactez moi",
		"address" : "Adresse",
		"address-text2" : "Casablanca, <br/>Maroc",
		"email" : "Email",
		"phone" : "Téléphone",
		"send-message" : "Envoyer le message",
		"copyright" : "Droits d'auteur",
		"form-firstname" : "Prénom",
		"form-lastname" : "Nom",
		"form-email" : "Votre email",
		"form-message" : "Votre message"
	},
	'ar': {
		"home" : "الصفحة الرئيسية",
		"about" : "حول",
		"skills" : "مهارات",
		"experiences" : "خبرات",
		"portfolio" : "محفظة",
		"contact" : "اتصال",
		"hello" : "مرحبا أنا",
		"full-name" : "خونا رضا",
		"last-name" : "خونا",
		"job" : "مهندس برمجيات",
		"address-text" : "الدار البيضاء، المغرب",
		"about-me" : "عني",
		"about-me-text" : "متحمس للابتكار والتقنيات الجديدة ، أنا دائمًا على استعداد لمواجهة التحديات الجديدة،! <br/> لا تترددوا في الاتصال بي على LinkedIn ، أو عبر إرسال بريد إلكتروني إلي<br/>يمكنكم أيضا مراجعة سيرتي الذاتية على الإنترنت.",
		"download-cv" : "تحميل السيرة الذاتية",
		"what-i-do" : "خدماتي",
		"design" : "التصميم",
		"design-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
		"dev" : "البرمجة",
		"dev-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
		"dev2" : "البرمجة",
		"dev2-text" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
		"projects" : "المشاريع",
		"mobile-dev" : "تطوير تطبيقات الهاتف",
		"details" : "عرض التفاصيل",
		"proj1-title" : "مستودعي",
		"proj1-subtitle" : "تطبيق إدارة المستودع",
		"proj1-desc1" : "يمكن هذا التطبيق من تسجيل محتوى المخزون على الهاتف الذكي بحيث يكون معك دائمًا، مما يمكن من تنفيذ بعض العمليات على بيانات المخزون في اي زمان و مكان.",
		"proj1-desc2" : "التي لها الأهداف التالية :",
		"proj1-list1" : "السماح للمستخدم بادارة العديد من المؤسسات.",
		"proj1-list2" : "عرض المخزون بطرق مختلفة, بالاضافة الى امكانية القيام بعض التعديلات.",
		"proj1-list3" : "البحث عن العناصر الموجودة في المخزون.",
		"proj1-list4" : "طباعة الجردالمخزون.",
		"proj1-list5" : "إمكانية تنفيذ جميع أنواع العمليات في وضع رغم  عدم وجود اتصال بالانترنت.",
		"android" : "أندرويد",
		"inventory" : "المخزون",
		"management-system" : "النظام الإداري",
		"technical-skills" : "مهارات تقنية",
		"professional-skills" : "مهارات احترافية",
		"communication" : "التواصل",
		"team-work" : "روح الفريق",
		"project-management" : "ادارة المشاريع",
		"Creativity" : "الإبداع",
		"eductaion" : "التعليم",
		"edu1-title" : "درجة الهندسة في علوم الحاسوب، خيار: هندسة البرمجيات،",
		"edu1-institute" : " INSEA",
		"edu1-descruption" : "المعهد الوطني للإحصاء والاقتصادالتطبيقي، الرباط (المغرب)",
		"edu2-title" : "الاجازة الأساسية في الرياضيات وعلوم الحاسوب،",
		"edu2-institute" : " جامعة الحسن الثاني",
		"edu2-descruption" : "كلية العلوم بجامعة الحسن الثاني، الدار البيضاء (المغرب)",
		"edu3-title" : "دبلوم البكالوريا مسلك العلوم الرياضية،",
		"edu3-institute" : " ثانوية مولاي إسماعيل",
		"edu3-descruption" : "ثانوية مولاي إسماعيل، الدار البيضاء (المغرب)",
		"experience" : "الخبرة في العمل",
		"exp1-position" : "مهندس برمجيات جافا لدى  ",
		"exp1-organization" : "البنك الشعبي للتكنولوجيا ",
		"exp2-position" : "مهندس برمجيات لدى ",
		"exp2-organization" : "البنك الشعبي المركزي",
		"exp3-position" : "تطوير برامج كاملة لدى ",
		"exp3-organization" : "البنك المغربي للتجارة الخارجية ",
		"project" : "المشروع : ",
		"exp1-project" : "نقل الأنشطة الرئيسية لنظام المعلومات  الحالي للشركات الفرعية الأفريقية التابعة لمجموعة البنك المركزي الشعبي إلى منصة Amplitude V11 للخدمات المصرفية .",
		"exp2-project" : "إعادة تصميم نظام معاملات إدارة النقد: التحويل ، الخصم المباشر ، التحقق من التسليم والتدفق الشامل.",
		"exp3-project" : "إنجاز مرشد آلي لنشاط إدارة الأصول.",
		"portfolio" : "المحفظة",
		"all-categories" : "جميع الفئات",
		"music" : "الموسيقى",
		"photography" : "التصوير",
		"bella-ciao" : "بيلا تشاو - جيتار 🇮🇹",
		"broken-spirits" : "معنويات محطمة",
		"mogador" : "موغادور",
		"meaning" : " : المعنى",
		"tools" : "الأدوات : ",
		"location" : "الموقع : ",
		"camera" : "الة التصوير : ",
		"ai" : "الذكاء الاصطناعي",
		"innovation" : "ابتكار",
		"illustrator" : "اليستريتور",
		"it" : "تكنولوجيا المعلومات",
		"after-effects" : "افتر افكت",
		"animation" : "أنيميشن",
		"2ie-text" : "نادي مدرسي ينظم ويشارك في مسابقات البرمجة و الابتكار.",
		"2ie-meaning" : "الحرف الأول 'I' يشير إلى INSEA ، والثاني 'I' للابتكار والرمز الأخير 'E' لـ Edge ، يدل نمط هيكل الدماغ على الابتكار.",
		"archide-text" : "شركة ناشئة تخلق حلولاً ذكية تساعد الشركات على حل مشاكلها المعقدة، بناءً على تقنية الذكاء الاصطناعي.",
		"archide-meaning" : "كلمة 'Archide' هي كلمة عربية تعني 'دليل'.",
		"archide-logo1" : "الشعار الرئيسي.",
		"archide-logo2" : "شعار النمط الزراعي.",
		"inseait-text" : "ناد لتكنولوجيا المعلومات بالمدرسة ينظم تداريب ومسابقات ابتكارية في تكنولوجيا المعلومات.",
		"inseait-meaning" : "هذا الفيديو خاص بإصدار الشعار المتحرك للنادي ، وهو نمط كتابة لاسم النادي كوسم html",
		"inseait-tools" : "ادوبي افتر ايفيكت.",
		"monkey-text" : "داخل جدران السجن في كل حديقة حيوان تجلس نفوس معذبة بعيون فارغة و معنويات محطمة.",
		"monkey-location" : "حديقة الحيوان الرباط المغرب.",
		"monkey-camera" :  "سامسونج نوت 5.",
		"interested-to-work" : "هل أنت مهتم بعملي ؟",
		"interested-to-text" : "لا تتردد في الاتصال بي على LinkedIn ، أو  عبر إرسال بريد إلكتروني.",
		"contact-me" : "اتصل بي",
		"address" : "العنوان",
		"address-text2" : "الدار البيضاء،<br/> المغرب",
		"email" : "البريد الإلكتروني",
		"phone" : "الهاتف",
		"send-message" : "أرسل رسالة",
		"copyright" : "حقوق النشر",
		"form-firstname" : "الاسم",
		"form-lastname" : "النسب",
		"form-email" : "بريدك الالكتروني",
		"form-message" : "رسالتك"
	},
};

var translate = function (jsdata)
{	
	
	$("[data-lang]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('data-lang')];
		//$(this).html (strTr);
		$(this).contents().filter(function(){
			return (this.nodeType == 3);
		}).remove();
		$(this).prepend(strTr);
	});

	$('form').find("input[type=text], input[type=email], textarea").each(function(ev)
	{
		var strTr = jsdata [$(this).attr ('data-lang')];
		if(!$(this).val()) { 
	   		$(this).attr("placeholder", strTr);
		}
	});
}

var setLanguage = function (lang){
	langCode = lang==null?/*navigator.language.substr (0, 2)*/'en':lang;

	if (langs.includes(langCode)){
		//$.getJSON('http://localhost:8082/en.json?format=json&callback=parseJSON', translate);
		langCode==="ar"?addRTL():deleteRTL();
		translate(dictionary[langCode]);
	}
	else
		//$.getJSON('http://localhost:8082/en.json?format=json&callback=parseJSON', translate);
		//console.log(dictionary[langCode]);
		console.log("error");	
}

/*$("#language-select").change(function(){
	var selectedLang = $(this).children("option:selected").val();
	setLanguage(selectedLang);
});*/

$("#lang-1").click(function(){
	var selectedLang = $('#flag1').attr('class').split(' ')[1];
	$('#flag1').attr('class','flag '+langCode);
	setLanguage(selectedLang);
});
$("#lang-2").click(function(){
	var selectedLang = $('#flag2').attr('class').split(' ')[1];
	$('#flag2').attr('class','flag '+langCode);
	setLanguage(selectedLang);
});

var addRTL = function () {
	$('html').attr("dir", "rtl");
	$('html').attr("lang", "ar");
	$('body').addClass('kh-rtl');
}
var deleteRTL = function () {
	$('html').removeAttr("dir");
	$('html').attr("lang", "en");
	$('body').removeClass('kh-rtl');
}

$(document).ready(function(){ 
	
  });