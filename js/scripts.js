console.log('The web site designed by: dvt');




let width = 100;
let slideCount = 1;
let value = '%'

	let slider = document.querySelector('.slider');
	let sliderWrapper = document.querySelector('.slider__wrapper');
	let sliderItem = document.querySelectorAll('.slider__item');
	let next = document.querySelectorAll('.slider__right');
	let prev = document.querySelector('.slider__left');
	let sw = true;

	let list;


test1 = [
	
		{
			quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
			picture: '',
			trueOption: '18 տարին լրացած անձանց:',
			option1: '17 տարին լրացած անձանց:',
			option2: '16 տարին լրացած անձանց:',
		},
		{
			quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
			picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
			trueOption: 'Արգելվում է:',
			option1: 'Թույլատրվում է:',
			option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
		},
		{
			quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
			picture: '',
			trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
			option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
			option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
		},
		{
			quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
			picture: '',
			trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
			option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
			option2: 'Երկու դեպքում էլ:',
		},
		{
			quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
			picture: '',
			trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
			option1: 'չի աշխատում ձայնարկիչը',
			option2: 'երկու դեպքում էլ',
		},
		{
			quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
			picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
			trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
			option1: 'Արգելվում է:',
			option2: 'Թույլատրվում է:',
		},
		{
			quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
			picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
			trueOption: 'Ա կամ Բ',
			option1: 'Միայն Ա',
			option2: 'Բ կամ Գ',
		},
		{
			quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
			picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
			trueOption: 'Բեռնատարի վարորդին',
			option1: 'Երկու վարորդներին',
			option2: 'Ոչ ոքի',
		},
		{
			quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
			picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
			trueOption: 'Ձախ նկարում:',
			option1: 'Աջ նկարում:',
			option2: 'Երկու նկարներում էլ:',
		},
		{
			quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
			picture: '',
			trueOption: '15 մ',
			option1: '50 մ',
			option2: '100 մ',
		},
]
test2 = [
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
		trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
		option1: 'Արգելվում է:',
		option2: 'Թույլատրվում է:',
	},
	{
		quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
		trueOption: 'Ա կամ Բ',
		option1: 'Միայն Ա',
		option2: 'Բ կամ Գ',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
	{
		quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
		picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
		trueOption: 'Ձախ նկարում:',
		option1: 'Աջ նկարում:',
		option2: 'Երկու նկարներում էլ:',
	},
	{
		quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
		picture: '',
		trueOption: '15 մ',
		option1: '50 մ',
		option2: '100 մ',
	},
	
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
]
test3 = [
	
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
		trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
		option1: 'Արգելվում է:',
		option2: 'Թույլատրվում է:',
	},
	{
		quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
		trueOption: 'Ա կամ Բ',
		option1: 'Միայն Ա',
		option2: 'Բ կամ Գ',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
	{
		quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
		picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
		trueOption: 'Ձախ նկարում:',
		option1: 'Աջ նկարում:',
		option2: 'Երկու նկարներում էլ:',
	},
	{
		quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
		picture: '',
		trueOption: '15 մ',
		option1: '50 մ',
		option2: '100 մ',
	},
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
]
test4 = [
	
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
		trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
		option1: 'Արգելվում է:',
		option2: 'Թույլատրվում է:',
	},
	{
		quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
		trueOption: 'Ա կամ Բ',
		option1: 'Միայն Ա',
		option2: 'Բ կամ Գ',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
	{
		quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
		picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
		trueOption: 'Ձախ նկարում:',
		option1: 'Աջ նկարում:',
		option2: 'Երկու նկարներում էլ:',
	},
	{
		quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
		picture: '',
		trueOption: '15 մ',
		option1: '50 մ',
		option2: '100 մ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
]
test5 = [
	
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
		trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
		option1: 'Արգելվում է:',
		option2: 'Թույլատրվում է:',
	},
	{
		quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
		trueOption: 'Ա կամ Բ',
		option1: 'Միայն Ա',
		option2: 'Բ կամ Գ',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
	{
		quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
		picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
		trueOption: 'Ձախ նկարում:',
		option1: 'Աջ նկարում:',
		option2: 'Երկու նկարներում էլ:',
	},
	{
		quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
		picture: '',
		trueOption: '15 մ',
		option1: '50 մ',
		option2: '100 մ',
	},
]
test6 = [
	
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
		trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
		option1: 'Արգելվում է:',
		option2: 'Թույլատրվում է:',
	},
	{
		quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
		trueOption: 'Ա կամ Բ',
		option1: 'Միայն Ա',
		option2: 'Բ կամ Գ',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
	{
		quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
		picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
		trueOption: 'Ձախ նկարում:',
		option1: 'Աջ նկարում:',
		option2: 'Երկու նկարներում էլ:',
	},
	{
		quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
		picture: '',
		trueOption: '15 մ',
		option1: '50 մ',
		option2: '100 մ',
	},
]
test7 = [
	
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
		trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
		option1: 'Արգելվում է:',
		option2: 'Թույլատրվում է:',
	},
	{
		quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
		trueOption: 'Ա կամ Բ',
		option1: 'Միայն Ա',
		option2: 'Բ կամ Գ',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
	{
		quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
		picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
		trueOption: 'Ձախ նկարում:',
		option1: 'Աջ նկարում:',
		option2: 'Երկու նկարներում էլ:',
	},
	{
		quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
		picture: '',
		trueOption: '15 մ',
		option1: '50 մ',
		option2: '100 մ',
	},
]
test8 = [
	
	{
		quest: '«Ճանապարհային երթևեկության անվտանգության ապահովման մասին» ՀՀ օրենքի համաձայն` A կարգի տրանսպորտային միջոցներ վարելու իրավունքի վկայական կարող է տրվել`',
		picture: '',
		trueOption: '18 տարին լրացած անձանց:',
		option1: '17 տարին լրացած անձանց:',
		option2: '16 տարին լրացած անձանց:',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք ավտոբուսի վարորդին մուտք գործել խաչմերուկ տվյալ իրադրությունում:',
		picture: 'https://www.varord.am/images/quiz_img/d1/d1_2.jpg',
		trueOption: 'Արգելվում է:',
		option1: 'Թույլատրվում է:',
		option2: 'Թույլատրվում է, եթե ավտոբուսը երթևեկում է սահմանված երթուղով:',
	},
	{
		quest: 'Զիջել ճանապարհն այլ տրանսպորտային միջոցների նշանակում է',
		picture: '',
		trueOption: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել անսպասելի փոխել շարժման ուղղությունը կամ արագությունը',
		option1: 'Անվերապահորեն կանգնեցնել տրանսպորտային միջոցը:',
		option2: 'Վարորդը չպետք է շարունակի կամ վերսկսի շարժումը կամ կատարի որևէ մանևր, եթե դա կարող է այլ տրանսպորտային միջոցների վարորդներին ստիպել փոխել շարժման ուղղությունը կամ արագությունը:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե`',
		picture: '',
		trueOption: 'Չի գործում պնևմատիկ արգելակային հաղորդակի ճնշաչափը:',
		option1: 'Բեռնատար ավտոմոբիլի դողերի պահպանաշերտի մնացորդային բարձրությունը կազմում է 1.6 մմ:',
		option2: 'Երկու դեպքում էլ:',
	},
	{
		quest: 'Տրանսպորտային միջոցների շահագործումն արգելվում է, եթե՝',
		picture: '',
		trueOption: 'անսարք է կամ բացակայում է կառուցվածքով նախատեսված ղեկային կառավարման ուժեղարարը',
		option1: 'չի աշխատում ձայնարկիչը',
		option2: 'երկու դեպքում էլ',
	},
	{
		quest: 'Թույլատրվու՞մ է արդյոք մուտք գործել այս նշանով նշված գոտի աջ շրջադարձ կատարելիս:',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_3.jpg',
		trueOption: 'Թույլատրվում է, եթե այդ գոտին մնացած երթևեկելի մասից բաժանված չէ գծանշման հոծ գծով:',
		option1: 'Արգելվում է:',
		option2: 'Թույլատրվում է:',
	},
	{
		quest: 'Այս խաչմերուկում նշվածներից ո՞ր ուղղություններով կարող եք շարունակել երթևեկությունը',
		picture: 'https://www.varord.am/images/quiz_img/d4/d4_image-122.jpg',
		trueOption: 'Ա կամ Բ',
		option1: 'Միայն Ա',
		option2: 'Բ կամ Գ',
	},
	{
		quest: 'Ձախ շրջադարձ կատարելիս պետք է զիջել',
		picture: 'https://www.varord.am/images/quiz_img/d5/d5_image-121.jpg',
		trueOption: 'Բեռնատարի վարորդին',
		option1: 'Երկու վարորդներին',
		option2: 'Ոչ ոքի',
	},
	{
		quest: 'Ո՞ր նկարում է վարորդը ճիշտ կատարում շրջադարձը:',
		picture: 'https://www.varord.am/images/quiz_img/d6/d6_15.jpg',
		trueOption: 'Ձախ նկարում:',
		option1: 'Աջ նկարում:',
		option2: 'Երկու նկարներում էլ:',
	},
	{
		quest: 'Ինչ հեռավորության վրա է արգելվում տրանսպորտային միջոցների կայանումը երկաթուղային գծանցերից:',
		picture: '',
		trueOption: '15 մ',
		option1: '50 մ',
		option2: '100 մ',
	},
]

quizeTestList = [test1,test2,test3,test4,test5,test6,test7,test8]


	// keeping kesh
window.onload = () =>{
	
	if(localStorage.getItem('right') !== null){
		rightAnswersQuanity = localStorage.getItem('right')
	}

	if(localStorage.getItem('current') !== null){
		current = parseInt(localStorage.getItem('current'))
		sliderWrapper.style = `max-width: ${sliderItem.length * width + value};left: ${-current + value}`
	}

	if(localStorage.getItem('index') !== null){
		index = localStorage.getItem('index')
		numQuize = localStorage.getItem('numQuize')
		listNum = parseInt(localStorage.getItem('listNum'))
		pageTitle[1].innerText = localStorage.getItem('pageTitle')
		list = quizeTestList[index]
		loadQuize(list[numQuize])
	}
	if(listNum + 1 === list.length){
		localStorage.setItem('right',rightAnswersQuanity = 0 )
		localStorage.setItem('numQuize',numQuize = 0 )
		localStorage.setItem('listNum',listNum = 0 )
		localStorage.setItem('current',current = 0 )
		sliderWrapper.style = `max-width: ${sliderItem.length * width + value};left: ${-current + value}`
		loadQuize(list[numQuize])
	}

}

	
sliderWrapper.style = `max-width: ${sliderItem.length * width + value};left: 0`
let current = 0;



		



const nextButton = document.querySelector('.quize__next');	//
const quizeQuanity = document.querySelector('.quize__number');	//
const question = document.querySelector('.quize__question');	//
const actionArea = document.querySelector('.quize__actions');	//
const result = document.querySelector('.quize__results');	//
const quize = document.querySelector('.quize');
let answer = document.querySelectorAll('.quize__answer');
const opt = document.querySelectorAll('[data-opt]');
const statusNum = document.querySelectorAll('.status__value');
const resultsText = document.querySelector('.results__text');
const quizeImg = document.querySelector('.quize__picture');
const testSubmit = document.querySelector('.quize__submit');
const pageTitle = document.querySelectorAll('.page__title');
const startAgain = document.querySelectorAll('.page__button');
let qPercent = 0;

let active = false;
let buttAct;
let rightAnswersQuanity = 0;

let numQuize = 0;
let listNum = 0;

let quizeResult = 0;
let quizePercent = 0;
/*========================================================================================================================================================*/
for(ind = 0; ind < startAgain.length; ind++){
	startAgain[ind].onclick = () =>{
		for(jnd = 0; jnd < answer.length; jnd++){
			answer[jnd].removeAttribute('data-status')
			answer[jnd].style = ''
		}
		enterSound('./sounds/arrow.wav')
		active = false
		actionArea.style = 'display: block;'
		testSubmit.style = 'display: flex;'
		startAgain[0].style = ''
		nextButton.style = ''
		nextButton.innerText = 'Հաստատել'
		result.style = 'display: none'
		rightAnswersQuanity = 0
		localStorage.setItem('index',index = 0 )
		localStorage.setItem('right',rightAnswersQuanity = 0 )
		localStorage.setItem('numQuize',numQuize = 0 )
		localStorage.setItem('listNum',listNum = 0 )
		localStorage.setItem('current',current = 0 )
		sliderWrapper.style = `max-width: ${sliderItem.length * width + value};left: ${-current + value}`
		loadQuize(list[numQuize])
	}
}


/*========================================================================================================================================================*/

const testButton = document.querySelectorAll('.tests__test');
// Choosing buttons from the first page
testButton.forEach((tstButt,index) => {
	tstButt.onclick = () =>{
		pageTitle[1].innerText = tstButt.innerText
		localStorage.setItem('pageTitle', pageTitle[1].innerText)
		list = quizeTestList[index]
		localStorage.setItem('index', index)
		loadQuize(list[numQuize])
		enterSound('./sounds/answer.wav')

		for(j = 0; j < testButton.length; j++){
			testButton[j].removeAttribute('data-tst')
			tstButt.setAttribute('data-tst','checked')
			if(tstButt.getAttribute('data-tst')){
				testButton[j].style = ''
				tstButt.style = 'background: #ee4e10; color: #fff;box-shadow: none;border: 2px solid #ee4e10'
				next[0].style = 'background: #ee4e10; color: #fff'
				next[1].style = 'background: #ee4e10; color: #fff'
		// On clicking buttons in website
		for(i = 0; i < next.length; i++){
			next[i].onclick = () => {
				current += width;
				if (current > (sliderItem.length - slideCount) * width) {
					current = 0
				}
				enterSound('./sounds/submit.wav')
				sliderWrapper.style = `max-width: ${sliderItem.length * width + value};left: ${-current + value}`
				localStorage.setItem('current', current)

			}
		}
			}
		}
		
	}
});


/*========================================================================================================================================================*/


	
function loadQuize(x){
	quizeQuanity.innerText = `${listNum + 1}/${list.length}`
	statusNum[0].innerText = list.length
	localStorage.setItem('listNum', listNum)
	localStorage.setItem('numQuize', numQuize)

	if(x.picture !== ''){
	quizeImg.src = x.picture
	quizeImg.style = 'display: block;'
	}else{
	quizeImg.style = 'display: none;'
	}

	question.innerText = x.quest
	// Getting random numbers
	let a,b,c;
	while (a == b || a == c || b == c){
		a = Math.round(Math.random() * 2)
		b = Math.round(Math.random() * 2)
		c = Math.round(Math.random() * 2)
	}
	
	answer[a].innerText = x.trueOption
	answer[b].innerText = x.option1
	answer[c].innerText = x.option2
	
}

/*========================================================================================================================================================*/


opt.forEach((ans,ind) => {
	ans.onclick = ()=>{

		active = true
		enterSound('./sounds/answer.wav')

		nextButton.style = 'background: #ee4e10; color: #fff'
		for(i = 0; i < opt.length; i++){
			opt[i].removeAttribute('data-status')
			ans.setAttribute('data-status','checked')
			if(ans.getAttribute('data-status')){
				opt[i].style = ''
				ans.style = 'background: #ee4e10; color: #fff'
			}
		}

		nextButton.onclick = () =>{
			// Counting right answers quanity
			if(ans.innerText == list[numQuize].trueOption && active){
				rightAnswersQuanity++
				quizePercent = 100 / list.length * rightAnswersQuanity
				localStorage.setItem('right',rightAnswersQuanity)
				qPercent = Math.ceil(quizePercent)
			}

			// Bringing The result
			if(active && numQuize + 1 === list.length){
				actionArea.style = 'display: none;'
				testSubmit.style = 'display: none;'
				startAgain[0].style = 'display: none;'
				if(quizePercent !== 0){
					setTimeout(() => {
						let stop = setInterval(() => {
							quizeResult++
							if(quizeResult == qPercent){
								clearInterval(stop)
							}
							result.children[0].innerText = qPercent + '%'
						}, 30);
					}, 100);
				}
				
				result.style = 'display: flex;'
				if(quizePercent < 80){
					enterSound('./sounds/bad.wav')
					resultsText.innerText = 'Դուք ձախողել եք թեստը'
					resultsText.style = 'background-color: #ce1025;'
				}else{
					enterSound('./sounds/good.wav')
					resultsText.innerText = 'Դուք հանձնել եք թեստը'
					resultsText.style = 'background-color: #20c997;'
				}

			}

			// Loading Next Questions and options
			if(active && listNum + 1 < list.length){
				nextButton.style = ''
				numQuize++
				listNum++
				enterSound('./sounds/submit.wav')
				loadQuize(list[numQuize])

				// Button changer after next click
				if(numQuize + 1 === list.length){
					nextButton.innerText = 'Ավարտել'
				}
				opt[ind].style = ''
				active = false
			}
		}
	}
});

/*========================================================================================================================================================*/


const sound = document.querySelector('.sounds');

// range
const snd = document.querySelector('.sound');
const msic = document.querySelector('.music');

back.volume = 0.1

msic.oninput = () =>{
	back.volume = msic.value / 100
}

snd.oninput = () => {
	audio.volume = snd.value / 100
}

sound.onclick = () => {
	back.play()
	sound.style.display = 'none'
	if(back.ended){
		back.play()
	}
}


function enterSound(link){
	audio.src = link;
	audio.currentTime = 0
	audio.play()
}

