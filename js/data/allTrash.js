import szklo from "./../../images/szklo.png";
import bio from "./../../images/bio.png";
import papier from "./../../images/papier.png";




const allTrash=[
    {
        name:'papier',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        description:'tylko czyste opakowania z papieu i tektury',
        image: papier
    },
    {
        name:'gazety',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'gazeta',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'karton',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'kartony',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'ulotka',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'ulotki',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'zeszyt',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'ulotka',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'zeszyty',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'czyste opakowania z papieru',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'tektura',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image:papier

    },
    {
        name:'gazety',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'papier biurowy',
        category:'papier',
        basket:'pojemnika o kolorze niebieskim',
        image: papier

    },
    {
        name:'butelki szklane',
        category:'szkło',
        basket:'pojemnika o kolorze zielonym',

    },
    {
        name:'butelki plastikowe',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',
        description:'butelki muszą być puste i zgniecione'
    },
    {
        name:'zakrętki od butelek',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',

    },
    {
        name:'zakrętki od słoików',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',

    },
    {
        name:'plastikowe opakowania',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',

    },
    {
        name:'torebki',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',

    },
    {
        name:'worki foliowe',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',

    },
    {
        name:'kartony po sokach tzw. tetrapaki',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',

    },
    {
        name:'kartony po mleku tzw. tetrapaki',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',
    },
    {
        name:'puszki po żywności',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',
        description:'puszki muszą być puste i zgniecione'
    },
    {
        name:'puszki po napojach',
        category:'metale i tworzywa sztuczne',
        basket:'pojemnika o kolorze żółtym',
        description:'puszki muszą być puste i zgniecione'
    },
    {
        name:'słoiki',
        category:'szkło',
        basket:'pojemnika o kolorze zielonym'

    },
    {
        name:'słoik',
        category:'szkło',
        basket:'pojemnika o kolorze zielonym',
        image:szklo

    },
    {
        name:'butelki szklane',
        category:'szkło',
        basket:'pojemnika o kolorze zielonym',
        description:'butelki muszą puste'

    },
    {
        name:'szklane opakowania po kosmetykach',
        category:'szkło',
        basket:'pojemnika o kolorze zielonym'

    },
    {
        name:'szklane opakowania po lekach',
        category:'szkło',
        basket:'pojemnika o kolorze zielonym',
        description:'opakowania muszą puste'
    },
    {
        name:'odpadki warzywne',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:'',
        image: bio
    },
    {
        name:'odpadki owocowe',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:''
    },
    {
        name:'skorupiki jaj',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:''
    },
    {
        name:'fusy po kawie',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:''
    },
    {
        name:'fusy po herbacie',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:''
    },
    {
        name:'torebki po zaparzonej herbacie',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:''
    },
    {
        name:'zwiędłe kwiaty',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:''
    },
    {
        name:'zwiędłe rośliny doniczkowe',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:''
    },
    {
        name:'resztki jedzenia',
        category:'bio z gospodarstw domowych',
        basket:'pojemnika o kolorze brązowym',
        description:'bez kości, mięsa oraz tłuszczów zwierzęcych'
    },
    {
        name:'odpady pozostałe',
        category:'zmieszane',
        basket:'pojemnika o kolorze czarnym',
        description:'odpady pozostałe po wysegregowaniu pozostałych frakcji, czyli tylko to, czego nie udało się rozdzielić do wymienionych pojemników na odpady segregowane lub czego nie można oddać do Punktu Selektywnej Zbiórki Odpadów Komunalnych, tzw. PSZOK.'
    },
    {
        name:'liście',
        category:'odpady zielone',
        basket:'pojemnika o kolorze szarym',
        description:'odbiór od marca do listopada'
    },
    {
        name:'skoszona trawa',
        category:'odpady zielone',
        basket:'pojemnika o kolorze szarym',
        description:'odbiór od marca do listopada',
        img: 'trawa.jpg'
    },
    {
        name:'rozdrobnione gałęzie',
        category:'odpady zielone',
        basket:'pojemnika o kolorze szarym',
        description:'odbiór od marca do listopada'
    },






];

export default allTrash;