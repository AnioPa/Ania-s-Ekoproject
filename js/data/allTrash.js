import papier from "./../../images/papier.png";
import bio from "./../../images/bio.png";
import metale_i_tworzywasztuczne from "./../../images/metale_i_tworzywasztuczne.png";
import odpady_wielkogabarytowe from "./../../images/odpady_wielkogabarytowe.png";
import szklo from "./../../images/szklo.png";
import zielone from "./../../images/zielone.png";
import zmieszane from "./../../images/zmieszane.png";




const allTrash=[
    {
        name:'papier',
        category:'papier',
        basket:'niebieski',
        description:'tylko czyste opakowania z papieu i tektury',
        image: papier
    },
    {
        name:'gazeta',
        category:'papier',
        basket:'niebieski',
        image: papier
    },
    {
        name:'karton',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'kartony',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'ulotka',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'ulotki',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'zeszyt',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'ulotka',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'zeszyty',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'czyste opakowania z papieru',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'tektura',
        category:'papier',
        basket:'niebieski',
        image:papier

    },
    {
        name:'gazety',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'papier biurowy',
        category:'papier',
        basket:'niebieski',
        image: papier

    },
    {
        name:'butelki szklane',
        category:'szkło',
        basket:'żółty',
        image: szklo

    },
    {
        name:'butelki plastikowe',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        description:'butelki muszą być puste i zgniecione',
        image:metale_i_tworzywasztuczne

    },
    {
        name:'zakrętki od butelek',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        image:metale_i_tworzywasztuczne

    },
    {
        name:'zakrętki od słoików',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        image:metale_i_tworzywasztuczne

    },
    {
        name:'plastikowe opakowania',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        image:metale_i_tworzywasztuczne

    },
    {
        name:'torebki',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        image:metale_i_tworzywasztuczne

    },
    {
        name:'worki foliowe',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        image:metale_i_tworzywasztuczne

    },
    {
        name:'kartony po sokach tzw. tetrapaki',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        image:metale_i_tworzywasztuczne

    },
    {
        name:'kartony po mleku tzw. tetrapaki',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        image:metale_i_tworzywasztuczne
    },
    {
        name:'puszki po żywności',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        description:'puszki muszą być puste i zgniecione',
        image:metale_i_tworzywasztuczne
    },
    {
        name:'puszki po napojach',
        category:'metale i tworzywa sztuczne',
        basket:'żółty',
        description:'puszki muszą być puste i zgniecione',
        image:metale_i_tworzywasztuczne
    },
    {
        name:'słoiki',
        category:'szkło',
        basket:'zielony',
        image: szklo

    },
    {
        name:'słoik',
        category:'szkło',
        basket:'zielony',
        image:szklo

    },
    {
        name:'butelki szklane',
        category:'szkło',
        basket:'zielony',
        description:'butelki muszą puste',
        image: szklo

    },
    {
        name:'szklane opakowania po kosmetykach',
        category:'szkło',
        basket:'zielony',
        image: szklo

    },
    {
        name:'szklane opakowania po lekach',
        category:'szkło',
        basket:'zielony',
        description:'opakowania muszą puste',
        image: szklo
    },
    {
        name:'odpadki warzywne',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'',
        image: bio
    },
    {
        name:'odpadki owocowe',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'',
        image: bio
    },
    {
        name:'skorupiki jaj',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'',
        image: bio
    },
    {
        name:'fusy po kawie',
        category:'bio z gospodarstw domowych',
        basket:'wrzucamy do pojemnika o kolorze brązowym',
        description:'',
        image: bio
    },
    {
        name:'fusy po herbacie',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'',
        image: bio
    },
    {
        name:'torebki po zaparzonej herbacie',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'',
        image: bio
    },
    {
        name:'zwiędłe kwiaty',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'',
        image: bio
    },
    {
        name:'zwiędłe rośliny doniczkowe',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'',
        image: bio
    },
    {
        name:'resztki jedzenia',
        category:'bio z gospodarstw domowych',
        basket:'brązowy',
        description:'bez kości, mięsa oraz tłuszczów zwierzęcych',
        image: bio
    },
    {
        name:'resztki mięsne',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'kości',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'mokry i zabrudzony papier',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'zużyte materiały higieniczne',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'pieluchy',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'pieluchy jednorazowe',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'żwirek z kuwet',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'fajans',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'potłuczone szkło i lustra',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'tekstylia i ubrania',
        category:'zmieszane',
        basket:'czarny',
        description:'do tego pojemnika wrzucaj tylko to, czego nie udało się rozdzielić do pojemników na odpady segregowane lub czego nie można oddać do PSZOK-u lub MPSZOK-u',
        image:zmieszane
    },
    {
        name:'liście',
        category:'odpady zielone',
        basket:'szary',
        description:'bez kamieni, popiołu, ziemi (odbiór od marca do listopada)',
        image:zielone
    },
    {
        name:'skoszona trawa',
        category:'odpady zielone',
        basket:'szary',
        description:'bez kamieni, popiołu ziemi (odbiór od marca do listopada)',
        image:zielone
    },
    {
        name:'rozdrobnione gałęzie',
        category:'odpady zielone',
        basket:'szary',
        description:' bez kamieni, popiołu ziemi (odbiór od marca do listopada)',
        image:zielone
    },
    {
        name:'meble (także rozłożone na części)',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'meble (także rozłożone na części)',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'meble (także rozłożone na części)',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'wyroby tapicerskie',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'fotele',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'wersalki',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'kanapa',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'pufy',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'krzesła',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'materac',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'zabawki dużych rozmiarów',
        category:'odpady wielkogabarytowe',
        basket:'pomarańczowy',
        description:'Informacje o miejscu składowania odpadów wielkogabarytowych uzyskasz u swojego administratora',
        image:odpady_wielkogabarytowe
    },
    {
        name:'przeterminowane leki oraz termometry',
        category:'inne',
        basket:'--',
        description:'oddajemy do wybranych aptek lub PSZOK-ów',
        image:''
    },








];

export default allTrash;