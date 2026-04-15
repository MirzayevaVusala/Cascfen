import React from 'react'
import './PageStyles.css'

const CharterUs = () => {
  return (
    <main className="page">
      <div className="page__inner">
        <article className="page__block">

          <span className="page__lang" style={{ color: '#38bdf8', borderColor: '#38bdf8' }}>
            NİZAMNAMƏ
          </span>

          <h2 className="page__heading">
            "Orta Asiya və Güney Qafqaz Söz Azadlığı Şəbəkəsi" ictimai birliyinin Nizamnaməsi
          </h2>

          <p className="page__para">
            Təsisçilər Həsrət Azər Hacıqulu oğlu və Qasımov Rey Kərim oğlu tərəfindən 07 iyun
            2013-cü il tarixində təsdiq edilmişdir.
          </p>
          <p className="page__para">
            Azərbaycan Respublikasının Ədliyyə Nazirliyində 29 iyun 2012-ci il tarixində dövlət
            qeydiyyatına alınmışdır. Qeydiyyat və notariat baş idarəsinin rəisi: İlqar Məmmədov.
          </p>

          <a
            href="/CASCFEN_nizamname.pdf"
            className="pdf__btn"
            style={{ borderColor: '#38bdf8', color: '#38bdf8' }}
          >
            ↓ Nizamnaməni PDF formatında yüklə
          </a>

          <div className="page__divider" style={{ background: '#38bdf8' }} />

          {/* ── AZƏRBAYCANCA ── */}

          <p className="page__section-title" style={{ color: '#38bdf8' }}>Azərbaycan dilində</p>

          <p className="page__para"><strong>I. ÜMUMİ MÜDDƏALAR</strong></p>

          <p className="page__para">
            1.1. "Orta Asiya və Güney Qafqaz Söz Azadlığı Şəbəkəsi" ictimai birliyi (bundan sonra
            Birlik adlandırılacaq) ümumi maraqlar əsasında birləşmiş, könüllülük, üzvlərinin hüquq
            bərabərliyi prinsipləri əsasında yaradılan, öz fəaliyyətinin əsas məqsədi kimi gəlir
            əldə etməyi nəzərdə tutmayan və əldə edilən gəliri öz üzvlərinin arasında bölməyən
            qeyri-hökumət təşkilatıdır və fəaliyyəti Azərbaycan Respublikasının ərazisini əhatə edir.
          </p>
          <p className="page__para">
            1.2. Birlik öz fəaliyyətini Azərbaycan Respublikasının Konstitusiyası, "Bədən tərbiyəsi
            və idman haqqında" Azərbaycan Respublikasının qanunu, "Qeyri-hökumət təşkilatları
            (ictimai birliklər və fondlar) haqqında" Azərbaycan Respublikasının qanunu, digər
            normativ hüquqi aktlar və bu Nizamnamə əsasında həyata keçirir.
          </p>
          <p className="page__para">
            1.3. Birlik Azərbaycan Respublikasının Ədliyyə Nazirliyində dövlət qeydiyyatına
            alındığı vaxtdan hüquqi şəxs statusu əldə edir. Birliyin müstəqil balansı, üzərində
            adı yazılmış möhürü, ştampı, Azərbaycan Respublikasının banklarında hesablaşma hesabı
            və digər rekvizitləri vardır.
          </p>
          <p className="page__para">
            1.4. Birliyin yerləşdiyi ünvan: Bakı şəhəri, Xətai rayonu, General Şıxlinski küçəsi,
            ev 19, mənzil 154.
          </p>

          <p className="page__para"><strong>II. BİRLİYİN MƏQSƏD VƏ VƏZİFƏLƏRİ</strong></p>

          <p className="page__para">
            2.1. Birliyin əsas məqsədi Orta Asiya və Güney Qafqaz bölgəsində söz və ifadə
            azadlığından istifadə mədəniyyətinin təbliğinə dəstək verməkdən ibarətdir.
          </p>
          <p className="page__para">
            2.2. Birlik məqsədlərinə çatmaq üçün aşağıdakı vəzifələri həyata keçirir: söz və
            ifadə azadlığının təmin edilməsi sahəsində dövlət tərəfindən həyata keçirilən
            tədbirlərə dəstək vermək; jurnalistlər arasında peşəkarlığı, əməkdaşlığı və peşə
            etikasını təbliğ etmək; müvafiq sahədə beynəlxalq təcrübəni öyrənmək.
          </p>
          <p className="page__para">
            2.3. Bu Nizamnamədə nəzərdə tutulmuş vəzifələri həyata keçirmək üçün Birlik: müxtəlif
            kurslar və seminarlar, idman yarışları, dəyirmi masa və görüşlər, sərgilər təşkil edir,
            konfranslar, xeyriyyə marafonları, digər mədəni-kütləvi tədbirlər keçirir; məqsədləri
            və fəaliyyəti barədə məlumatı sərbəst yayır, qanunvericiliyə müvafiq qaydada mətbu
            nəşrlər təsis edir; Azərbaycan Respublikasının aidiyyəti dövlət, bələdiyyə orqanları
            və beynəlxalq təşkilatlarla əməkdaşlıq edir.
          </p>
          <p className="page__para">
            2.4. Birlik dövlət qeydiyyatına alındıqdan sonra otuz gün müddətində üzvlərinin
            reyestrinin aparılmasını təmin edir.
          </p>
          <p className="page__para">
            2.5. Birlik Azərbaycan Respublikası Prezidentinin, Azərbaycan Respublikası Milli
            Məclisinin və bələdiyyələrin seçkilərində iştirak edə bilməz.
          </p>

          <p className="page__para"><strong>III. BİRLİYİN HÜQUQLARI</strong></p>

          <p className="page__para">
            3.1. Birlik aşağıdakı hüquqlara malikdir: öz adından əqdlər bağlamaq, əmlak və şəxsi
            qeyri-əmlak hüquqları əldə etmək, vəzifələr daşımaq, məhkəmədə iddiaçı və ya cavabdeh
            kimi çıxış etmək; fəaliyyəti barədə məlumatı sərbəst yaymaq; Azərbaycan Respublikasının
            ərazisində və xaricdə filial və nümayəndəliklərini təsis etmək; banklarda hesablar açmaq
            və hesablaşmalar aparmaq; müstəqil balansa, möhürə, ştampa və digər rekvizitlərə malik
            olmaq; qanunvericiliklə qadağan edilməyən və nizamnamə məqsədlərinə uyğun olan
            sahibkarlıq fəaliyyəti ilə məşğul olmaq; Azərbaycan Respublikasının qanunvericiliyi
            ilə müəyyən edilmiş digər hüquqlardan istifadə etmək.
          </p>

          <p className="page__para"><strong>IV. BİRLİYİN ƏMLAKI VƏ MALİYYƏ FƏALİYYƏTİ</strong></p>

          <p className="page__para">
            4.1. Birliyin mülkiyyətində binalar, qurğular, mənzillər, avadanlıqlar, inventarlar,
            pul vəsaitləri, səhmlər, digər qiymətli kağızlar və bu Nizamnamə ilə nəzərdə tutulmuş
            fəaliyyətin maddi təminatı üçün qanunvericiliklə qadağan olunmamış növlərdə əmlak ola bilər.
          </p>
          <p className="page__para">
            4.2. Birlik öz öhdəliklərinə görə əmlakı ilə cavabdehdir. Bu əmlak yalnız Azərbaycan
            Respublikasının qanunlarına uyğun olaraq özgəninkiləşdirilə bilər.
          </p>
          <p className="page__para">
            4.3. Birliyin əmlakının pul və digər şəkildə formalaşdırılması mənbələri aşağıdakılardır:
            təsisçilərin və ya Birlik üzvlərinin müntəzəm və ya birdəfəlik üzvlük haqları; idarə,
            müəssisə, yerli və beynəlxalq təşkilatların və vətəndaşların könüllü verdikləri əmlak
            haqları və ianələri; səhmlər, istiqrazlar, başqa qiymətli kağız və əmanətlərdən alınan
            dividendlər, gəlirlər; öz əmlakından istifadə və onun satılması nəticəsində əldə edilən
            gəlirlər; qrantlar; sərgilərdən, konsertlərdən və digər tədbirlərdən əldə olunan gəlirlər;
            təsis etdiyi müəssisələrin fəaliyyəti nəticəsində əldə olunan gəlirlər; qanunvericiliklə
            qadağan olunmamış digər mədaxillər.
          </p>
          <p className="page__para">
            4.4. Birliyin üzvləri onun mülkiyyətinə daxil olan ayrı-ayrı obyektlər üzərində xüsusi
            hüquqlara malik deyil.
          </p>
          <p className="page__para">
            4.5. Birlik Azərbaycan Respublikasının qanunvericiliyində müəyyən edilmiş qaydada öz
            fəaliyyətinin məqsədlərinə və əmlakın təyinatına müvafiq olaraq öz əmlakı üzərində
            sahiblik, istifadə və sərəncam hüquqlarına malikdir.
          </p>
          <p className="page__para">4.6. Birliyin hesabına daxil olmuş məqsədli vəsait başqa istiqamətlərdə xərclənə bilməz.</p>
          <p className="page__para">4.7. Birlik siyasi partiyalara maliyyə və başqa maddi yardım göstərə bilməz.</p>
          <p className="page__para">
            4.8. Birlik qanunvericiliklə müəyyən edilmiş qaydada maliyyə, statistik və sair
            hesabatlar tərtib edir və dövlət orqanlarına təqdim edir.
          </p>

          <p className="page__para"><strong>V. BİRLİYİN TƏSİSÇİLƏRİ VƏ ÜZVLƏRİ, ONLARIN HÜQUQ VƏ VƏZİFƏLƏRİ</strong></p>

          <p className="page__para">
            5.1. Birliyin təsisçiləri hüquqi şəxslər (dövlət hakimiyyəti və yerli özünüidarə
            orqanları istisna olmaqla) və ya 18 yaşına çatmış fiziki şəxslər ola bilərlər.
          </p>
          <p className="page__para">
            5.2. Təsisçilər bərabər hüquqlara malikdirlər. Təsisçilərin qarşılıqlı münasibətləri,
            hüquq və vəzifələri qanunvericiliklə, yaxud onların arasında bağlanmış müqavilə ilə
            və ya bu Nizamnamə ilə müəyyən edilir.
          </p>
          <p className="page__para">
            5.3. Azərbaycan Respublikasında hər bir fiziki və hüquqi şəxs (dövlət hakimiyyəti və
            yerli özünüidarə orqanları istisna olmaqla) ictimai birliyin üzvü ola bilər. Birliyin
            təsisçiləri həm də Birliyin üzvləri hesab olunurlar.
          </p>
          <p className="page__para">5.4. Birliyə üzvlərin qəbulu Birliyin İdarə Heyəti tərəfindən aparılır.</p>
          <p className="page__para">
            5.5. Birliyə daxil olmaq üçün İdarə Heyətinə yazılı şəkildə müraciət edilir. Ərizəyə
            bir ay müddətində baxılır. Səsvermə nəticəsində İdarə Heyətinin üzvlərinin yarıdan
            çoxu bu məsələyə müsbət münasibətlərini bildirdikdə, ərizəçi Birliyin üzvü seçilmiş
            hesab edilir.
          </p>
          <p className="page__para">
            5.6. Birliyin üzvləri öz aralarında bərabərhüquqlu olub aşağıdakı hüquqlara malikdirlər:
            bu Nizamnamədə və digər sənədlərdə nəzərdə tutulmuş qaydada təşkilatın idarəçiliyində
            iştirak etmək; Birliyin hər hansı seçkili, o cümlədən rəhbər orqanına seçmək və ya
            həmin orqanlarda təmsil olunmaq; Birliyin fəaliyyətində və təşkil etdiyi tədbirlərdə
            iştirak etmək; Birliyin rəhbər orqanlarının fəaliyyəti barədə məlumat almaq, fəaliyyətinə
            nəzarət etmək; öz mənafelərinin müdafiəsinə kömək göstərilməsi üçün Birliyə müraciət
            etmək; onun hüquq və vəzifələri ilə bağlı hər hansı məsələnin müzakirəsində şəxsən
            iştirak etmək, Birliyin müvafiq orqanlarına etirazını bildirmək və şikayət etmək.
          </p>
          <p className="page__para">
            5.7. Birliyin üzvü yalnız Birliyin müvafiq orqanları səlahiyyət verdikdə həmin orqanı
            təmsil edə və ya onun adından bəyanatla çıxış edə bilər.
          </p>
          <p className="page__para">
            5.8. Birliyin üzvləri aşağıdakı vəzifələri daşıyırlar: Birliyin Nizamnaməsinə əməl
            etmək; Birliyin seçkili orqanlarının qərarlarını yerinə yetirmək; Nizamnamə tələblərinə
            riayət etmək; Birliyin tədbirlərində iştirak etmək.
          </p>
          <p className="page__para">5.9. Birliyə üzvlük haqqının miqdarı Birlik İdarə Heyəti tərəfindən müəyyən edilir.</p>
          <p className="page__para">
            5.10. Birliyə üzvlüyə aşağıdakı hallarda xitam verilir: könüllü olaraq Birliyin
            üzvlüyündən çıxdıqda; Birliyin üzvlüyündən çıxarıldıqda.
          </p>
          <p className="page__para">
            5.11. Birliyin üzvü aşağıdakı hallarda üzvlükdən xaric edilir: Birliyin adına ləkə
            gətirən hərəkətlərə yol verdikdə; mütəmadi olaraq Birliyin işində iştirak etməkdən
            boyun qaçırdıqda; Nizamnamə məqsədlərinə zidd hərəkət etdikdə.
          </p>
          <p className="page__para">5.12. Üzvlükdən, təsisçilikdən çıxarılma İdarə Heyətinin qərarı ilə həyata keçirilə bilər.</p>
          <p className="page__para">
            5.13. Birlik üzvünün həmin qərardan Birliyin ali idarəetmə orqanına və məhkəməyə
            şikayət etmək hüququ var.
          </p>

          <p className="page__para"><strong>VI. BİRLİYİN TƏŞKİLATİ STRUKTURU VƏ İDARƏETMƏ ORQANLARI</strong></p>

          <p className="page__para">6.1. Birliyin ali orqanı ildə bir dəfədən az olmayaraq çağırılan Ümumi Yığıncaqdır.</p>
          <p className="page__para">
            6.2. Ümumi Yığıncaq Birliyin icra orqanının, təsisçilərdən birinin və ya üzvlərinin
            üçdə bir hissəsinin təşəbbüsü ilə çağırılır.
          </p>
          <p className="page__para">
            6.3. Birliyin təsisçilərinə və üzvlərinə Yığıncağın yeri və vaxtı haqqında iki həftə
            əvvəl məlumat verilməlidir.
          </p>
          <p className="page__para">
            6.4. Ümumi Yığıncağın səlahiyyətinə aşağıdakılar daxildir: Birliyin Nizamnaməsinin
            qəbulu və ona dəyişikliklər edilməsi; Birliyin əmlakının formalaşması və istifadə
            prinsiplərinin müəyyən edilməsi; Birliyin icra orqanlarının yaradılması və onların
            səlahiyyətlərinin vaxtından əvvəl dayandırılması; illik hesabatın təsdiq edilməsi;
            başqa təşkilatlarda iştirak; Birliyin yenidən təşkili və ləğv edilməsi; Birliyin icra
            orqanının rəhbərlərinin hesabatının dinlənilməsi.
          </p>
          <p className="page__para">
            6.5. Ümumi Yığıncaq yalnız Birlik üzvlərinin yarısından çoxu iştirak etdikcə
            səlahiyyətli hesab olunur.
          </p>
          <p className="page__para">
            6.6. Ümumi Yığıncaqda müzakirə olunan məsələlər haqqında qərarlar sadə səs çoxluğu
            ilə qəbul edilir. Hər bir üzv bir səsə malikdir. Nizamnaməyə əlavə və dəyişikliklərin
            edilməsi və təşkilatın yenidən təşkili və ləğvi barədə qərarların qəbulu üçün 2/3 səs
            çoxluğu tələb olunur.
          </p>
          <p className="page__para">6.7. Birliyin fəaliyyətinə cari rəhbərliyi İdarə Heyəti həyata keçirir.</p>
          <p className="page__para">
            6.8. İcra orqanı Birliyin sədrindən, onun müavinlərindən və digər şəxslərdən ibarət
            olan İdarə Heyətidir.
          </p>
          <p className="page__para">
            6.9. İdarə Heyəti kollegial icra orqanı olub aşağıdakı səlahiyyətlərə malikdir:
            Birliyin üzvlüyünə qəbul edir və üzvlükdən azad edir; təkliflər və layihələr irəli
            sürür; Birliyin filiallarını yaradır və nümayəndəliklərini açır; Birliyin başqa
            idarəetmə orqanlarının müstəsna səlahiyyətlərinə aid edilməyən bütün məsələləri həll edir.
          </p>
          <p className="page__para">
            6.10. İdarə Heyəti üzvlərinin yarısından çoxu iştirak etdikdə səlahiyyətli sayılır
            və qərarları sadə səs çoxluğu ilə qəbul edilir.
          </p>
          <p className="page__para">
            6.11. İdarə Heyətinin sədri, müavinləri və digər üzvləri Birliyin Ümumi Yığıncağı
            tərəfindən 2 (iki) il müddətinə seçilir.
          </p>
          <p className="page__para">
            6.12. Sədr: Birliyi təmsil edir, onun adından müqavilələr bağlayır, etibarnamələr
            verir. Ümumi Yığıncağın və İdarə Heyətinin qərarlarının icrasını təşkil edir; Ümumi
            Yığıncaq tərəfindən və Nizamnamə ilə onun üzərinə qoyulan digər funksiyaları həyata keçirir.
          </p>
          <p className="page__para">
            6.13. Birliyin Nəzarət-Təftiş Komissiyası Birliyin vəzifəli şəxslərinin və üzvlərinin
            fəaliyyətinin Nizamnaməyə uyğun olması, habelə Birliyin maliyyə fəaliyyəti üzərində
            nəzarəti həyata keçirir. NTK üzvlərinin sayı Ümumi Yığıncaq tərəfindən müəyyən edilir.
            NTK-nın səlahiyyət müddəti 2 (iki) ildir. NTK-nın qərarları sadə səs çoxluğu ilə
            qəbul edilir.
          </p>
          <p className="page__para">
            6.14. NTK Birliyin orqanlarından və üzvlərindən daxil olan müraciətlərə bir ay
            müddətində baxıb cavab verməlidir.
          </p>

          <p className="page__para"><strong>VII. BİRLİYİN FƏALİYYƏTİNƏ XİTAM VERİLMƏSİ</strong></p>

          <p className="page__para">
            7.1. Birliyin fəaliyyətinə onun yenidən təşkil edilməsi (birləşmə, qoşulma, bölünmə,
            ayrılma, çevrilmə) və ləğv edilməsi yolları ilə xitam verilir. Birliyin fəaliyyətinə
            xitam verilməsi mövcud qanunvericilikdə nəzərdə tutulmuş qaydada həyata keçirilir.
          </p>
          <p className="page__para">
            7.2. Birliyin fəaliyyətinə xitam verilməsi haqqında qərara əsasən ləğvetmə komissiyası
            yaradılır. Bu andan Birliyin idarəçiliyi ilə əlaqədar bütün səlahiyyətlər ona keçir.
            Ləğvetmə komissiyası ləğvetmə balansını tərtib edir. Birliyin ləğvi zamanı büdcə ilə
            hesablaşmalardan və kreditorların tələbləri ödənildikdən sonra qalan əmlak
            qanunvericiliklə müəyyən olunmuş qaydada Nizamnamə məqsədlərinə, bu mümkün olmadıqda
            isə dövlət büdcəsinə yönəldilir. Birliyin ləğvi Azərbaycan Respublikasının Mülki
            Məcəlləsinə və digər qanunvericilik aktlarına əsasən həyata keçirilir.
          </p>

          <p className="page__para"><strong>VIII. DİGƏR ŞƏRTLƏR</strong></p>

          <p className="page__para">8.1. Bu Nizamnamədə nəzərdə tutulmayan məsələlər qanunvericiliklə tənzimlənir.</p>
          <p className="page__para">
            8.2. Gələcəkdə bu Nizamnamənin müddəaları qanunvericiliklə ziddiyyət təşkil edərsə,
            qanunvericiliyin müddəaları tətbiq edilir.
          </p>
          <p className="page__para">
            8.3. Birliyin maliyyə ili qeydiyyata alındığı vaxtdan başlayır və növbəti ilin 31
            dekabrında başa çatır. Növbəti maliyyə illəri isə 1 yanvarda başlayır və dekabr
            ayının 31-dək olan dövrü əhatə edir.
          </p>

          <div className="page__divider" style={{ background: '#38bdf8' }} />

          {/* ── ENGLISH ── */}

          <p className="page__section-title" style={{ color: '#38bdf8' }}>In English</p>

          <p className="page__para"><strong>1. GENERAL PROVISIONS</strong></p>

          <p className="page__para">
            1.1. Central Asian and Southern Caucasian Freedom of Expression Network (further
            CASCFEN) is a voluntary association of the public organizations, called to protect
            freedom of expression and press in the region agreed to Article 19 of the Universal
            Human Rights Declaration.
          </p>
          <p className="page__para">
            1.2. Any national, regional or international organization focused on protection of a
            freedom of speech and a press in the region shall become a member of CASCFEN.
          </p>
          <p className="page__para">
            1.3. CASCFEN covers the region of eight independent countries of Southern Caucasus
            and the Central Asia – Azerbaijan, Armenia, Georgia, Kazakhstan, Kyrgyzstan,
            Tajikistan, Turkmenistan and Uzbekistan.
          </p>
          <p className="page__para">1.4. CASCFEN is an association of noncommercial and nongovernmental organizations.</p>
          <p className="page__para">1.5. Headquarters of CASCFEN are in capital of Azerbaijan – city of Baku.</p>

          <p className="page__para"><strong>2. DIRECTIONS OF ACTIVITY OF CASCFEN</strong></p>

          <p className="page__para">
            2.1. Coordinates efforts of the organizations included in CASCFEN with the purpose of
            cooperation in sphere of upholding of rights of citizens of region on a freedom of
            speech and a press.
          </p>
          <p className="page__para">
            2.2. Acts with references and recommendations to power structures of the countries of
            region and the international organizations on questions of protection of a freedom of
            speech and a press.
          </p>
          <p className="page__para">2.3. Protects professional interests and rights of journalists of region.</p>
          <p className="page__para">2.4. Organizes material support to the organizations included in CASCFEN.</p>
          <p className="page__para">2.5. Protects rights of journalists and authors on the intellectual property.</p>
          <p className="page__para">2.6. Issues the publications.</p>
          <p className="page__para">
            2.7. Launches contacts of the international organizations with the regional and national
            organizations which are not the members of CASCFEN.
          </p>
          <p className="page__para">
            2.8. CASCFEN shall carry out other kinds of activity within the framework of the
            legislation of the countries of region for achievement of the authorized purposes.
          </p>

          <p className="page__para"><strong>3. MEMBERSHIP IN CASCFEN</strong></p>

          <p className="page__para">3.1. Exists two kinds of membership in CASCFEN – full and associated.</p>
          <p className="page__para">
            3.1.1. A full membership: Full members of CASCFEN shall become the nongovernmental and
            noncommercial organizations which are based on the territory of one of the above named
            countries of region and assert a freedom of speech and press. Full member-organizations
            have equal rights irrespective of volume of work and duration of existence. An
            organization, wishing to become a member of CASCFEN shall present to managing body of
            the Network the application and copies of the documents confirming its mandate and the
            form of activity, focused on protection of freedom of speech and press. Full members
            shall have the representative right on general meetings of CASCFEN, and also other
            events of the general direction. Full members shall have the right to elect and be
            elected to the managing body of the Network. All members of CASCFEN are obliged to
            follow the given Charter and in case of infringement of its norms to bear the
            responsibility before General meeting of the Network.
          </p>
          <p className="page__para">
            3.1.2. The associated membership: The international and regional nongovernmental and
            noncommercial organizations interested in protection and development of freedom of
            speech and press in the territory of region of the Central Asia and Southern Caucasus
            shall become the associated members of CASCFEN. The international and regional
            organizations wishing to become a member of CASCFEN shall present to the management
            of the Network the documents confirming their current work and long-term plans on
            development and protection of a freedom of speech and press in the region or the
            separate countries of the region. The associated members shall not have the right to
            be presented in managing bodies of CASCFEN, and also to vote and put forward nominees
            on managing posts. They shall act with applications, offers for consideration in
            General Meeting or at session of managing body of CASCFEN.
          </p>
          <p className="page__para">
            3.2. Termination of membership in CASCFEN: The Full and associated members shall be
            deduced from CASCFEN in the following cases: for regular default of positions of the
            Charter of CASCFEN; on the basis of the written application for an exit from members
            of CASCFEN; in case of change of the contents of activity of a member-organization.
          </p>

          <p className="page__para"><strong>4. ORGANIZATIONAL STRUCTURE OF CASCFEN</strong></p>

          <p className="page__para">
            Organizational structure of CASCFEN consists of the following formations: Headquarters;
            Representations in the countries of region.
          </p>

          <p className="page__para"><strong>5. MANAGING BODIES OF CASCFEN</strong></p>

          <p className="page__para">
            5.1. General meeting: Is the supreme body of CASCFEN and shall be carried out not less
            than once per year. The norm of representation on General meeting is determined by the
            Council of CASCFEN and informed to all members not later than three months before
            realization of general Meeting. Shall be convoked by the decision of the Council of
            CASCFEN or on demand of 1/3 of all full member-organizations. It is considered proxy
            in case of participation of 2/3 representatives. Makes of the decision on the
            introduction into the membership, and also on exception of membership. Launches and
            dismisses CASCFEN. Accepts changes and additions to the Charter of CASCFEN. Elects
            the chairman of the Council of CASCFEN and hears his (her) annual reports. Solves
            other questions within the framework of the Charter.
          </p>
          <p className="page__para">
            5.2. Chairman of the Council of CASCFEN: Is elected on General Meeting of CASCFEN
            from among representatives of full members for the period of 2 years. Is the supreme
            representative of CASCFEN, speaks on behalf of the Network. Lobbies the interests of
            CASCFEN. Acts with appeals and signs agreements on behalf of CASCFEN on the basis of
            the preliminary agreement with members of the Council. Presents to the General Meeting
            annual (substantial and financial) reports on the carried out work.
          </p>
          <p className="page__para">
            5.3. Council of CASCFEN: The amount of members of the Council is defined by General
            Meeting of CASCFEN. Shall be created from representatives of full members of CASCFEN.
            Shall carry out meetings not less than 4 times a year. Makes of the decisions of the
            current character within the framework of Charter of CASCFEN.
          </p>

          <p className="page__para"><strong>6. THE LEGAL STATUS AND PROPERTY OF CASCFEN</strong></p>

          <p className="page__para">
            6.1. CASCFEN is the legal person, has the form, bank accounts and other essential elements.
          </p>
          <p className="page__para">
            6.2. CASCFEN has the right to get property and the real estate to rent or lease the
            real estate to perform the authorized purposes.
          </p>
          <p className="page__para">
            6.3. Property of CASCFEN is created due to the following sources: the income of rent;
            the income of publishing; gratuitous contributions of citizens; sponsor's donations of
            the organizations; grants from the international funds; incomes of other sources which
            have not been forbidden by the law.
          </p>

          <p className="page__para"><strong>7. DISCONTINUANCE OF THE ACTIVITY OF CASCFEN</strong></p>

          <p className="page__para">
            CASCFEN shall be disbanded by self-dissolution on the basis of the decision of General Meeting.
          </p>

        </article>
      </div>
    </main>
  )
}

export default CharterUs