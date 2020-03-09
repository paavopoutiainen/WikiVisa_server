
function getUsStates() {
    let query = 
    `# Us States
    SELECT ?stateLabel
    WHERE
    {
    
    ?state wdt:P31 wd:Q35657 .
    SERVICE wikibase:label {
    bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" .
    }
    }  
    `

    return query;
}

//Note return countries several times if country has several official lannguages i.e Finland return Finnish and Swedish
function getCountriesWithOfficialLanguages(){
    let query = 
    `   #Countries and their official languages
        SELECT DISTINCT ?countryLabel ?officialLanguageLabel
        WHERE
        {
        ?country wdt:P31 wd:Q3624078 .
        FILTER NOT EXISTS {?country wdt:P31 wd:Q3024240} #filter former country
        FILTER NOT EXISTS {?country wdt:P31 wd:Q28171280} #filter ancient civilisation
        OPTIONAL { ?country wdt:P37 ?officialLanguage } 
        SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
        }
        ORDER BY ?countryLabel 
    `

    return query;


}


function getCountriesWithCapitals(){
    let query = 
    `#Countries and their Capital city
    SELECT DISTINCT ?countryLabel ?capitalLabel
    WHERE
    {
      ?country wdt:P31 wd:Q3624078 .
      FILTER NOT EXISTS {?country wdt:P31 wd:Q3024240} #filter former country
      FILTER NOT EXISTS {?country wdt:P31 wd:Q28171280} #filter ancient civilisation
      FILTER NOT EXISTS {?capital wdt:P31 wd:capital} #filter countries with no capital
      OPTIONAL { ?country wdt:P36 ?capital } .
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
    }
    ORDER BY ?countryLabel 
    `

    return query;


}

//Work in progress wont for some reason return periodic table column 1 elements
// and also now return column 8 which today is purely theoretical
function getPeriodicTable(){
    
    `SELECT DISTINCT ?element ?symbol ?period ?periodNumber
    WHERE
    {
      ?element wdt:P31 wd:Q11344 ;
           wdt:P246 ?symbol ;
           wdt:P279 ?group ;
           wdt:P279 ?period;
      OPTIONAL {
      ?group wdt:P31 wd:Q83306 ;
         p:P31 [pq:P1545 ?groupNumber] .
      } 
      ?period wdt:P31 wd:Q101843 ;
         p:P31 [pq:P1545 ?periodNumber] .
    
    }
    
    ORDER BY ?symbol
    `

    return query; 
}
    