// 
import React from 'react'
// import Hero from '../components/Hero'
import './PageStyles.css'

const paragraphs = [
  'Orta Asiya və Güney Qafqaz Söz Azadlığı Şəbəkəsi (CASCFEN) 2003-cü ilin 18-20 mart günlərində Bakı şəhərində keçirilən regional konfransın sonunda təsis edilmişdir. Təşkilatın təşəbbüsçüsü və qurucusu həmin dövrdə Azərbaycan Jurnalistlər Konfederasiyasının baş katibi və Beynəlxalq Mətbuat İnstitutu Azərbaycan Milli Komitəsinin direktoru Azər Həsrət olmuşdur.',
  'Təsis konfransında Azərbaycandan bu iki təşkilatla yanaşı Gürcüstan Jurnalistlərinin Müstəqil Assosiasiyası, Qırğızıstandan "Jurnalistlər" İctimai Birliyi, Özbəkistandan "Ozod Ovoz" Təşkilatı, həmçinin Söz və İfadə Azadlığı Komitəsi, Tacikistandan Tacikistan Müstəqil KİV-lərinin Milli Assosiasiyası iştirak etmişdir.',
  'CASCFEN sonrakı bir il ərzində adı çəkilən coğrafiyanın ən fəal təşkilatlarından birinə çevrilməklə beynəlxalq qurumların diqqətini də cəlb edə bilib. Bunun nəticəsi olaraq 2004-cü ilin may ayında Beynəlxalq Mətbuat İnstitutu bu qurumu həmin ilin "Azad Media Öncülü" mükafatına layiq görüb.',
  'Elə həmin il may ayının 3-də UNESCO-nun Belqrad şəhərində keçirilən Dünya Mətbuat Azadlığı günü tədbirlərində CASCFEN sədri Azər Həsrət əsas məruzəçilərdən biri kimi çıxış edib.',
  '2003 və 2004-cü illərdə CASCFEN təmsilçisi Azər Həsrət və qurumun Orta Asiya təmsilçiləri Bobomurod Abdulla (Özbəkistan), Kuban Mambetaliyev (Qırğızıstan), Nuriddin Karşiboyev (Tacikistan), Rozlana Taukina (Qazaxıstan) Avrasiya Media Forumun Almatıda keçirilən toplantılarında əsas məruzəçilər sırasında çıxış ediblər.',
  'Bu qurum öz fəaliyyəti dövründə geniş beynəlxalq əlaqələrini də təşkil etmişdir. Həmin müddət ərzində təşkilat UNESCO, ATƏT, Beynəlxalq Jurnalistlər Federasiyası, Beynəlxalq Mətbuat İnstitutu, Jurnalistləri Müdafiə Komitəsi, Freedom House və s. kimi beynəlxalq qurumlarla da əməkdaşlıq etmişdir.',
  'CASCFEN-in işinin daha səmərəli qurulması üçün onun yenidən təsis edilməsi qərara alınmış və o, Azərbaycan qanunlarına uyğun olaraq 7 iyun 2012-ci il tarixində rəsmən təsis edilmişdir. Bundan sonra təşkilat 29 iyun 2012-ci ildə Ədliyyə Nazirliyi tərəfindən qeydə alınmışdır.',
  'CASCFEN-in sədri qurulduğu gündən (20 mart 2003) 2017-ci ilin aprelinə qədər Azər Həsrət olub. Həmin tarixdən bu günə qədərsə Nadir Azəri (İsmayılov) təşkilatın sədridir. Hazırda CASCFEN-in 46 fərdi üzvü var. Təşkilata 7 nəfərdən ibarət İdarə Heyəti başçılıq edir.',
]

const board = [
  'İsmayılov Nadir Nəbi oğlu – Sədr',
  'Hüseynli Nüşabə Fehruz qızı – Sədr müavini',
  'Əliyev Vüqar Zifər oğlu – Sədr müavini',
  'Əliyev Fikrət Şahbaz oğlu – Sədr müavini',
  'Məmmədli Qalib İbrahim oğlu',
  'Fərəcov Aqil Ələsgər oğlu',
  'Yolçuyev Əkbər Mehdi oğlu',
]

const AboutUs = () => (
  <>
    {/* <Hero
      tag="Haqqında · CASCFEN"
      title={"Biz\nKimik?"}
      subtitle="Mərkəzi Asiya və Cənubi Qafqaz İfadə Azadlığı Şəbəkəsi — 8 ölkənin media qurumlarını birləşdirən regional təşkilat"
      accent="#a78bfa"
      bg="linear-gradient(135deg, #0d0a1a 0%, #130f2e 60%, #0a0d1a 100%)"
    /> */}

    <main className="page">
      <div className="page__inner">
        <article className="page__block">
          <span className="page__lang" style={{ color: '#a78bfa', borderColor: '#a78bfa' }}>HAQQINDA</span>
          <h2 className="page__heading">Orta Asiya və Güney Qafqaz Söz Azadlığı Şəbəkəsi</h2>

          {paragraphs.map((p, i) => (
            <p key={i} className="page__para">{p}</p>
          ))}

          <div className="page__divider" style={{ background: '#a78bfa' }} />

          <h3 className="page__subheading">İdarə Heyətinin Üzvləri</h3>
          <ul className="page__list">
            {board.map((item, i) => <li key={i} style={{ borderLeftColor: '#a78bfa' }}>{item}</li>)}
          </ul>

          <p className="page__closing">
            Qurumun özü Azərbaycan Mətbuat Şurasının və Azərbaycan Milli QHT Forumunun üzvüdür.
            Eyni zamanda o, iki beynəlxalq qurumun üzvüdür: Etik Jurnalistika Şəbəkəsi və
            Medianın İnkişafı Qlobal Forumu.<br/>
            Təşkilatın əsas məqsədi Azərbaycanda, ümumilikdə isə Orta Asiya və Güney Qafqaz ölkələrində söz azadlığı mədəniyyətinin inkişafına yardım etməkdir.<br/>

CASCFEN yenidən təsis ediləndən sonra Azərbaycanın təhsil müəssisələrində söz azadlığı mədəniyyətinin inkişafı, orta təhsil müəssisələri ilə KİV arasında əməkdaşlığın genişləndirilməsi, həmçinin Azərbaycan həqiqətlərinin dünya birliyinə çatdırılması, o cümlədən diaspor fəaliyyətinin, gənc könüllülərin diaspor fəaliyyətində iştirakının yerli və xarici KİV-də təbliğ olunması, QHT-lərin mətbuat və sosial media iş bacarıqlarının inkişaf etdirilməsi istiqamətində müxtəlif layihələr reallaşdırıb.
          </p>
        </article>
      </div>
    </main>
  </>
)

export default AboutUs