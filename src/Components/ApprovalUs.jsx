import React from 'react'
// import './Pagestyles.css'
import './ApprovalUsStyles.css'


const inadmissible = [
  'Implementing of all kinds of censorship on mass media;',
  'Intervention of the state organs or different political groups in activity of mass media;',
  'Acceptance of the laws, preventing mass media to carry out the activity freely from all extraneous influences;',
  'Intimidation of journalists and workers of mass media by violent ways.',
]

const express = [
  'To all states of region to bring legislative base into accord with the international norms;',
  'To abolish all kinds of state organs engaged in regulation of activity of mass media;',
  'To create all necessary conditions for normal functioning of mass media;',
  'To forbid to the state bodies to establish mass media;',
  'To allow journalists to move in the territory of five countries of the Central Asia and three countries of Southern Caucasus without visa.',
]

const Beyenname = () => {
  return (
    <>
      {/* <Hero /> */}

      <main className="decli">
        <div>
       
        <div className="decl__inner">

          {/* EN */}
          <article className="decl__block">
            <span className="decl__lang">EN</span>
            <h2 className="decl__heading">
              The Baku Declaration on Principles of Observance of the
              International Norms Regarding Mass Media
            </h2>

            <p className="decl__lead">
              We, participants of the 1st General Meeting and Conference of the
              Central Asian and Southern Caucasian Freedom of Expression Network,
              holding in the city of Baku on March, 18–20, 2003, count
              inadmissible:
            </p>

            <ul className="decl__list">
              {inadmissible.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="decl__section-title">We express the following:</p>

            <ul className="decl__list">
              {express.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="decl__closing">
              We call on OSCE, the Council of Europe and all other international
              organizations to give more attention to region of the Central Asia
              and Southern Caucasus in sphere of maintenance of rights and
              freedoms of journalists, and also by way of rendering assistance in
              becoming and development of independent mass media.
            </p>
          </article>

          <div className="decl__divider" />

          {/* AZ */}
          <article className="decl__block">
            <span className="decl__lang">AZ</span>
            <h2 className="decl__heading">
              Kütləvi İnformasiya Vasitələrinə Dair Beynəlxalq Normaların
              Gözlənilməsi Prinsipləri üzrə Bakı Bəyannaməsi
            </h2>

            <p className="decl__lead">
              Biz, Mərkəzi Asiya və Cənubi Qafqaz İfadə Azadlığı Şəbəkəsinin
              2003-cü il mart ayının 18-20-də Bakı şəhərində keçirilən 1-ci
              Ümumi Yığıncaq və Konfransının iştirakçıları, aşağıdakıları
              yolverilməz sayırıq:
            </p>

            <ul className="decl__list">
              <li>KİV-ə hər cür senzuranın tətbiqini;</li>
              <li>Dövlət orqanlarının və ya müxtəlif siyasi qrupların KİV fəaliyyətinə müdaxiləsini;</li>
              <li>KİV-in bütün xarici təsirlərdən azad fəaliyyət göstərməsinə mane olan qanunların qəbulunu;</li>
              <li>Jurnalistlər və KİV işçilərinin zorakı yollarla hədələnməsini.</li>
            </ul>

            <p className="decl__section-title">Biz aşağıdakıları ifadə edirik:</p>

            <ul className="decl__list">
              <li>Regionun bütün dövlətlərinin qanunvericilik bazasını beynəlxalq normalara uyğunlaşdırmasını;</li>
              <li>KİV fəaliyyətinin tənzimlənməsi ilə məşğul olan hər cür dövlət orqanlarının ləğv edilməsini;</li>
              <li>KİV-in normal fəaliyyəti üçün bütün lazımi şəraitin yaradılmasını;</li>
              <li>Dövlət strukturlarına KİV yaratmağın qadağan edilməsini;</li>
              <li>Jurnalistlərə Mərkəzi Asiyanın beş ölkəsi və Cənubi Qafqazın üç ölkəsi ərazisində vizasız hərəkət etməyə icazə verilməsini.</li>
            </ul>

            <p className="decl__closing">
              Biz ATƏT-ə, Avropa Şurasına və bütün digər beynəlxalq təşkilatlara
              Mərkəzi Asiya və Cənubi Qafqaz regionuna jurnalistlərin hüquq və
              azadlıqlarının qorunması baxımından daha çox diqqət yetirməyi, həmçinin
              müstəqil KİV-in formalaşması və inkişafında yardım göstərməyi çağırırıq.
            </p>
          </article>

        </div>
        </div>
      </main>
    </>
  )
}

export default Beyenname