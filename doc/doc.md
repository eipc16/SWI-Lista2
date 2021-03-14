# SWI - Lista 2. Przemysław Pietrzak, 238083

## Zadanie 1. Opisz krótko technologię/język, w której zadania są zaimplementowane.

W ramach zadań wykorzystano narzędzia `Python` oraz pakiety `nltk` i `beautifulsoup4` i `nltk`.

Wykorzystany został także język `JavaScript` oraz pakiet `natural`.

## Zadanie 2. Wybierz zbiór 10 dokumentów (tekstów), każdy o wielkości powyżej 700 słów.

Dokumenty zostały wyciągnięte z kolekcji `Reuters-21578` przy użyciu języka `Python` oraz pakietów `nltk` i `beautifulsoup4`. Przy pomocy tego języka dane zostały także wyczyszczone oraz odfiltrowane, to znaczy:
* znaki specjalne zostały usunięte
* słowa takie jak `isn't` czy `aren't` zostały zamienione na `is not` oraz `are not`
* każde słowo zostało przetransformowane do `lowercase`
* odfiltrowane zostały dokumenty, które posiadały mniej niż `700 słów`

Przy pomocy skryptu obliczono także odległość dokumentów (Indeks Jaccarda) i wybrano 10 najbardziej podobnych z nich.

## Zadanie 3. Tabela ze statystykami

| Nazwa dokumentu | Liczba słów | Liczba różnych słów | Liczba termów |
| --------------- | ----------- | ------------------- | ------------- |
| 102.txt         | 813         | 347                 | 278           |
| 125.txt         | 864         | 382                 | 312           |
| 109.txt         | 700         | 321                 | 257           |
| 148.txt         | 753         | 362                 | 291           |
| 197.txt         | 826         | 369                 | 285           |
| 183.txt         | 703         | 324                 | 259           |
| 175.txt         | 820         | 383                 | 318           |
| 198.txt         | 733         | 338                 | 270           |
| 62.txt          | 720         | 328                 | 265           |
| 173.txt         | 717         | 355                 | 295           |

## Zadanie 4. Statystyki termów dla poszczególnych plików

<details name="102">
<summary>Statystyki termów dla pliku: 102.txt</summary>

| Term          | Liczba wystąpień w dokumencie |
| ------------- | ----------------------------- |
| bank          | 16                            |
| yen           | 13                            |
| dollar        | 12                            |
| japan         | 10                            |
| currency      | 9                             |
| dealers       | 8                             |
| central       | 6                             |
| intervention  | 6                             |
| market        | 6                             |
| trade         | 6                             |
| not           | 5                             |
| 148           | 4                             |
| exchange      | 4                             |
| today         | 4                             |
| one           | 4                             |
| authorities   | 4                             |
| fed           | 4                             |
| 150           | 3                             |
| foreign       | 3                             |
| markets       | 3                             |
| nations       | 3                             |
| economic      | 3                             |
| against       | 3                             |
| england       | 3                             |
| behalf        | 3                             |
| bought        | 3                             |
| may           | 3                             |
| dollars       | 3                             |
| pact          | 3                             |
| west          | 3                             |
| germany       | 3                             |
| 50            | 2                             |
| retreat       | 2                             |
| six           | 2                             |
| major         | 2                             |
| levels        | 2                             |
| commitment    | 2                             |
| accord        | 2                             |
| banks         | 2                             |
| will          | 2                             |
| post          | 2                             |
| war           | 2                             |
| traders       | 2                             |
| federal       | 2                             |
| reserve       | 2                             |
| actions       | 2                             |
| new           | 2                             |
| york          | 2                             |
| level         | 2                             |
| tokyo         | 2                             |
| billion       | 2                             |
| dlrs          | 2                             |
| purchased     | 2                             |
| amount        | 2                             |
| around        | 2                             |
| back          | 2                             |
| february      | 2                             |
| rather        | 2                             |
| account       | 2                             |
| american      | 2                             |
| view          | 2                             |
| anything      | 2                             |
| else          | 2                             |
| bourdain      | 2                             |
| bankamerica   | 2                             |
| corp          | 2                             |
| treasury      | 2                             |
| becoming      | 2                             |
| help          | 2                             |
| deficit       | 2                             |
| okada         | 2                             |
| expects       | 2                             |
| drop          | 2                             |
| even          | 2                             |
| enough        | 2                             |
| 11            | 1                             |
| 20            | 1                             |
| 22            | 1                             |
| 28            | 1                             |
| 45            | 1                             |
| 87            | 1                             |
| 140           | 1                             |
| 149           | 1                             |
| 170           | 1                             |
| 1986          | 1                             |
| succeeded     | 1                             |
| staunching    | 1                             |
| losses        | 1                             |
| senior        | 1                             |
| believe       | 1                             |
| headed        | 1                             |
| although      | 1                             |
| widespread    | 1                             |
| perceive      | 1                             |
| industrial    | 1                             |
| differing     | 1                             |
| recent        | 1                             |
| stabilize     | 1                             |
| currencies    | 1                             |
| moreover      | 1                             |
| hard          | 1                             |
| realities     | 1                             |
| hold          | 1                             |
| greater       | 1                             |
| sway          | 1                             |
| argue         | 1                             |
| decline       | 1                             |
| bigger        | 1                             |
| fundamentals  | 1                             |
| always        | 1                             |
| fore          | 1                             |
| dealer        | 1                             |
| dropped       | 1                             |
| world         | 1                             |
| ii            | 1                             |
| lows          | 1                             |
| board         | 1                             |
| intervened    | 1                             |
| reports       | 1                             |
| helped        | 1                             |
| recover       | 1                             |
| afternoon     | 1                             |
| low           | 1                             |
| far           | 1                             |
| east          | 1                             |
| failed        | 1                             |
| regain        | 1                             |
| monday        | 1                             |
| closing       | 1                             |
| 00            | 1                             |
| 05            | 1                             |
| yesterday     | 1                             |
| via           | 1                             |
| meanwhile     | 1                             |
| strong        | 1                             |
| rumors        | 1                             |
| modest        | 1                             |
| talk          | 1                             |
| circulated    | 1                             |
| small         | 1                             |
| last          | 1                             |
| confirmed     | 1                             |
| january       | 1                             |
| mln           | 1                             |
| coordination  | 1                             |
| march         | 1                             |
| rumored       | 1                             |
| signalled     | 1                             |
| displeasure   | 1                             |
| surge         | 1                             |
| marks         | 1                             |
| appeared      | 1                             |
| paris         | 1                             |
| britain       | 1                             |
| france        | 1                             |
| canada        | 1                             |
| agreed        | 1                             |
| cooperate     | 1                             |
| foster        | 1                             |
| rate          | 1                             |
| stability     | 1                             |
| prevailing    | 1                             |
| overly        | 1                             |
| impressed     | 1                             |
| soften        | 1                             |
| extreme       | 1                             |
| moves         | 1                             |
| thing         | 1                             |
| believed      | 1                             |
| purchases     | 1                             |
| done          | 1                             |
| suggesting    | 1                             |
| watered       | 1                             |
| down          | 1                             |
| action        | 1                             |
| thought       | 1                             |
| completed     | 1                             |
| japanese      | 1                             |
| reinforcing   | 1                             |
| resolute      | 1                             |
| support       | 1                             |
| no            | 1                             |
| doubts        | 1                             |
| serious       | 1                             |
| two           | 1                             |
| seem          | 1                             |
| making        | 1                             |
| token         | 1                             |
| gestures      | 1                             |
| chris         | 1                             |
| convinced     | 1                             |
| concerted     | 1                             |
| earl          | 1                             |
| johnson       | 1                             |
| harris        | 1                             |
| trust         | 1                             |
| savings       | 1                             |
| chicago       | 1                             |
| problem       | 1                             |
| rising        | 1                             |
| wave          | 1                             |
| protectionist | 1                             |
| sentiment     | 1                             |
| limits        | 1                             |
| extent        | 1                             |
| endorse       | 1                             |
| stronger      | 1                             |
| break         | 1                             |
| key           | 1                             |
| ties          | 1                             |
| hands         | 1                             |
| behind        | 1                             |
| intervene     | 1                             |
| strength      | 1                             |
| protectionism | 1                             |
| albert        | 1                             |
| soria         | 1                             |
| swiss         | 1                             |
| comments      | 1                             |
| reflect       | 1                             |
| increasingly  | 1                             |
| politicized   | 1                             |
| despite       | 1                             |
| official      | 1                             |
| denials       | 1                             |
| feel          | 1                             |
| countenance   | 1                             |
| lower         | 1                             |
| trim          | 1                             |
| nation        | 1                             |
| majority      | 1                             |
| dlr           | 1                             |
| merchandise   | 1                             |
| indeed        | 1                             |
| secretary     | 1                             |
| james         | 1                             |
| baker         | 1                             |
| comment       | 1                             |
| sunday        | 1                             |
| established   | 1                             |
| targets       | 1                             |
| read          | 1                             |
| signal        | 1                             |
| sell          | 1                             |
| kicked        | 1                             |
| off           | 1                             |
| latest        | 1                             |
| room          | 1                             |
| downside      | 1                             |
| based         | 1                             |
| frictions     | 1                             |
| financial     | 1                             |
| services      | 1                             |
| political     | 1                             |
| natsuo        | 1                             |
| sumitomo      | 1                             |
| ltd           | 1                             |
| week          | 1                             |
| sees          | 1                             |
| chance        | 1                             |
| end           | 1                             |
| april         | 1                             |
| early         | 1                             |
| succeed       | 1                             |
| stimulating   | 1                             |
| economies     | 1                             |
| solve         | 1                             |
| structural    | 1                             |
| imbalances    | 1                             |
| near          | 1                             |
| future        | 1                             |
| expand        | 1                             |
| year          | 1                             |
| situation     | 1                             |
| next          | 1                             |
| couple        | 1                             |
| days          | 1                             |
| reuter        | 1                             |

</details>

<details name="125">
<summary>Statystyki termów dla pliku: 125.txt</summary>

| Term             | Liczba wystąpień w dokumencie |
| ---------------- | ----------------------------- |
| japan            | 12                            |
| dollar           | 11                            |
| officials        | 6                             |
| source           | 6                             |
| trade            | 9                             |
| one              | 9                             |
| accord           | 8                             |
| last             | 7                             |
| week             | 7                             |
| will             | 7                             |
| paris            | 7                             |
| economic         | 6                             |
| japanese         | 6                             |
| deficit          | 6                             |
| growth           | 3                             |
| top              | 3                             |
| mulford          | 3                             |
| monetary         | 3                             |
| congress         | 3                             |
| policies         | 3                             |
| agreement        | 3                             |
| developments     | 3                             |
| not              | 5                             |
| nations          | 5                             |
| no               | 4                             |
| yen              | 4                             |
| billion          | 4                             |
| germany          | 4                             |
| speed            | 2                             |
| target           | 2                             |
| strategy         | 2                             |
| package          | 2                             |
| ready            | 2                             |
| soon             | 2                             |
| cutting          | 2                             |
| white            | 2                             |
| house            | 2                             |
| just             | 2                             |
| months           | 2                             |
| need             | 2                             |
| nonetheless      | 2                             |
| going            | 2                             |
| underlying       | 2                             |
| budget           | 2                             |
| joined           | 2                             |
| effect           | 2                             |
| measures         | 2                             |
| fall             | 2                             |
| international    | 2                             |
| halt             | 2                             |
| washington       | 2                             |
| called           | 2                             |
| report           | 2                             |
| markets          | 3                             |
| lower            | 3                             |
| official         | 3                             |
| action           | 3                             |
| tokyo            | 3                             |
| two              | 3                             |
| agreed           | 3                             |
| currency         | 3                             |
| stability        | 3                             |
| fundamentals     | 3                             |
| west             | 3                             |
| market           | 3                             |
| secretary        | 2                             |
| baker            | 2                             |
| against          | 2                             |
| central          | 2                             |
| bank             | 2                             |
| dlr              | 2                             |
| industrial       | 2                             |
| foster           | 2                             |
| imbalances       | 2                             |
| seem             | 2                             |
| exchange         | 2                             |
| dlrs             | 2                             |
| levels           | 2                             |
| around           | 2                             |
| 18               | 1                             |
| 154              | 1                             |
| 169              | 1                             |
| bid              | 1                             |
| hasten           | 1                             |
| promise          | 1                             |
| open             | 1                             |
| appear           | 1                             |
| once             | 1                             |
| signaled         | 1                             |
| tolerance        | 1                             |
| aides            | 1                             |
| assistant        | 1                             |
| david            | 1                             |
| statement        | 1                             |
| sent             | 1                             |
| soaring          | 1                             |
| massive          | 1                             |
| slip             | 1                             |
| tongue           | 1                             |
| western          | 1                             |
| asked            | 1                             |
| identified       | 1                             |
| appears          | 1                             |
| working          | 1                             |
| late             | 1                             |
| bolster          | 1                             |
| domestic         | 1                             |
| demand           | 1                             |
| indications      | 1                             |
| anytime          | 1                             |
| reagan           | 1                             |
| administration   | 1                             |
| facing           | 1                             |
| uproar           | 1                             |
| apparent         | 1                             |
| lack             | 1                             |
| progress         | 1                             |
| learning         | 1                             |
| extract          | 1                             |
| results          | 1                             |
| dramatic         | 1                             |
| required         | 1                             |
| imposed          | 1                             |
| unprecedented    | 1                             |
| tariffs          | 1                             |
| certain          | 1                             |
| electronic       | 1                             |
| goods            | 1                             |
| adhere           | 1                             |
| semi             | 1                             |
| conductor        | 1                             |
| pricing          | 1                             |
| countries        | 1                             |
| shift            | 1                             |
| part             | 1                             |
| designed         | 1                             |
| appease          | 1                             |
| mounting         | 1                             |
| congressional    | 1                             |
| anger            | 1                             |
| comes            | 1                             |
| weeks            | 1                             |
| reconvene        | 1                             |
| review           | 1                             |
| news             | 1                             |
| earned           | 1                             |
| record           | 1                             |
| surplus          | 1                             |
| first            | 1                             |
| underscored      | 1                             |
| urgent           | 1                             |
| signs            | 1                             |
| improvement      | 1                             |
| stunned          | 1                             |
| derive           | 1                             |
| benefits         | 1                             |
| leading          | 1                             |
| closely          | 1                             |
| within           | 1                             |
| ranges           | 1                             |
| reflecting       | 1                             |
| reality          | 1                             |
| envisages        | 1                             |
| include          | 1                             |
| united           | 1                             |
| states           | 1                             |
| three            | 1                             |
| agree            | 1                             |
| essential        | 1                             |
| redress          | 1                             |
| huge             | 1                             |
| global           | 1                             |
| analysts         | 1                             |
| say              | 1                             |
| imply            | 1                             |
| stable           | 1                             |
| less             | 1                             |
| confident        | 1                             |
| governments      | 1                             |
| including        | 1                             |
| cuts             | 1                             |
| carried          | 1                             |
| sharp            | 1                             |
| undermined       | 1                             |
| cooperation      | 1                             |
| policymaker      | 1                             |
| track            | 1                             |
| bonn             | 1                             |
| want             | 1                             |
| stimulative      | 1                             |
| calls            | 1                             |
| sources          | 1                             |
| generally        | 1                             |
| unsettled        | 1                             |
| policymakers     | 1                             |
| obvious          | 1                             |
| exception        | 1                             |
| everybody        | 1                             |
| feels            | 1                             |
| managed          | 1                             |
| spent            | 1                             |
| estimated        | 1                             |
| five             | 1                             |
| intervening      | 1                             |
| rise             | 1                             |
| upset            | 1                             |
| america          | 1                             |
| half             | 1                             |
| hearted          | 1                             |
| attempt          | 1                             |
| falling          | 1                             |
| flouting         | 1                             |
| outright         | 1                             |
| close            | 1                             |
| policymaking     | 1                             |
| understanding    | 1                             |
| kept             | 1                             |
| stood            | 1                             |
| struck           | 1                             |
| extremely        | 1                             |
| worried          | 1                             |
| use              | 1                             |
| change           | 1                             |
| pointed          | 1                             |
| reminder         | 1                             |
| something        | 1                             |
| issues           | 1                             |
| departing        | 1                             |
| language         | 1                             |
| current          | 1                             |
| triggered        | 1                             |
| run              | 1                             |
| later            | 1                             |
| live             | 1                             |
| responsibilities | 1                             |
| stimulate        | 1                             |
| unravel          | 1                             |
| spirit           | 1                             |
| realisation      | 1                             |
| leave            | 1                             |
| things           | 1                             |
| alone            | 1                             |
| everyone         | 1                             |
| agrees           | 1                             |
| external         | 1                             |
| ought            | 1                             |
| adjusted         | 1                             |
| cede             | 1                             |
| national         | 1                             |
| sovereignty      | 1                             |
| certainly        | 1                             |
| moving           | 1                             |
| towards          | 1                             |
| closer           | 1                             |
| co               | 1                             |
| operation        | 1                             |
| meeting          | 1                             |
| italy            | 1                             |
| status           | 1                             |
| explain          | 1                             |
| state            | 1                             |
| program          | 1                             |
| plans            | 1                             |
| maybe            | 1                             |
| move             | 1                             |
| faster           | 1                             |
| told             | 1                             |
| several          | 1                             |
| buy              | 1                             |
| time             | 1                             |
| bring            | 1                             |
| serve            | 1                             |
| notice           | 1                             |
| wait             | 1                             |
| long             | 1                             |
| reduce           | 1                             |
| gap              | 1                             |
| german           | 1                             |
| surpluses        | 1                             |
| foreign          | 1                             |
| treasury         | 1                             |
| james            | 1                             |
| despite          | 1                             |
| intervention     | 1                             |
| early            | 1                             |
| april            | 1                             |
| failed           | 1                             |
| stabilize        | 1                             |
| currencies       | 1                             |
| year             | 1                             |
| view             | 1                             |
| cooperate        | 1                             |
| stimulating      | 1                             |
| economies        | 1                             |
| france           | 1                             |
| britain          | 1                             |
| canada           | 1                             |
| signalled        | 1                             |
| rather           | 1                             |
| although         | 1                             |
| banks            | 1                             |
| level            | 1                             |
| rate             | 1                             |
| sunday           | 1                             |
| recent           | 1                             |
| six              | 1                             |
| help             | 1                             |
| down             | 1                             |
| comments         | 1                             |
| appeared         | 1                             |
| major            | 1                             |
| reuter           | 1                             |

</details>

<details name="109">
<summary>Statystyki termów dla pliku: 109.txt</summary>

| Term           | Liczba wystąpień w dokumencie |
| -------------- | ----------------------------- |
| dollar         | 23                            |
| dealers        | 10                            |
| yen            | 10                            |
| market         | 8                             |
| intervention   | 7                             |
| bank           | 6                             |
| 40             | 3                             |
| sales          | 3                             |
| 150            | 4                             |
| fall           | 4                             |
| new            | 4                             |
| paris          | 5                             |
| 148            | 3                             |
| 149            | 3                             |
| authorities    | 3                             |
| central        | 4                             |
| japan          | 4                             |
| nations        | 4                             |
| will           | 4                             |
| april          | 4                             |
| 30             | 2                             |
| 1985           | 2                             |
| sold           | 2                             |
| pleas          | 2                             |
| group          | 2                             |
| stabilise      | 2                             |
| anyway         | 2                             |
| backed         | 2                             |
| slow           | 2                             |
| real           | 2                             |
| manager        | 2                             |
| remain         | 2                             |
| try            | 2                             |
| push           | 2                             |
| seven          | 2                             |
| exporters      | 2                             |
| trading        | 2                             |
| despite        | 3                             |
| currency       | 3                             |
| japanese       | 3                             |
| accord         | 3                             |
| against        | 3                             |
| york           | 2                             |
| time           | 2                             |
| yesterday      | 2                             |
| today          | 2                             |
| demand         | 2                             |
| low            | 2                             |
| dealer         | 2                             |
| long           | 2                             |
| last           | 2                             |
| west           | 2                             |
| germany        | 2                             |
| britain        | 2                             |
| action         | 2                             |
| baker          | 2                             |
| not            | 2                             |
| tokyo          | 2                             |
| currencies     | 2                             |
| trade          | 2                             |
| 145            | 1                             |
| 147            | 1                             |
| 151            | 1                             |
| 153            | 1                             |
| industrialised | 1                             |
| lost           | 1                             |
| credibility    | 1                             |
| ministers      | 1                             |
| follows        | 1                             |
| month          | 1                             |
| stabilisation  | 1                             |
| reversal       | 1                             |
| success        | 1                             |
| plaza          | 1                             |
| weaken         | 1                             |
| overvalued     | 1                             |
| different      | 1                             |
| sides          | 1                             |
| confusion      | 1                             |
| ranks          | 1                             |
| encouraged     | 1                             |
| challenge      | 1                             |
| finance        | 1                             |
| minister       | 1                             |
| kiichi         | 1                             |
| miyazawa       | 1                             |
| matched        | 1                             |
| weekend        | 1                             |
| zone           | 1                             |
| nothing        | 1                             |
| reverse        | 1                             |
| remarks        | 1                             |
| chairman       | 1                             |
| paul           | 1                             |
| volcker        | 1                             |
| governor       | 1                             |
| satoshi        | 1                             |
| sumita         | 1                             |
| ago            | 1                             |
| brought        | 1                             |
| little         | 1                             |
| noted          | 1                             |
| raised         | 1                             |
| question       | 1                             |
| whether        | 1                             |
| trend          | 1                             |
| cool           | 1                             |
| response       | 1                             |
| reflected      | 1                             |
| basic          | 1                             |
| oversupply     | 1                             |
| means          | 1                             |
| selling        | 1                             |
| sheer          | 1                             |
| speculative    | 1                             |
| nature         | 1                             |
| koichi         | 1                             |
| miyazaki       | 1                             |
| deputy         | 1                             |
| general        | 1                             |
| sanwa          | 1                             |
| weak           | 1                             |
| matter         | 1                             |
| operators      | 1                             |
| closed         | 1                             |
| tuesday        | 1                             |
| gain           | 1                             |
| temporary      | 1                             |
| toward         | 1                             |
| meets          | 1                             |
| discuss        | 1                             |
| plus           | 1                             |
| apart          | 1                             |
| chief          | 1                             |
| unsure         | 1                             |
| methods        | 1                             |
| used           | 1                             |
| sceptical      | 1                             |
| particulary    | 1                             |
| willing        | 1                             |
| prevent        | 1                             |
| given          | 1                             |
| continuing     | 1                             |
| high           | 1                             |
| especially     | 1                             |
| pressure       | 1                             |
| limiting       | 1                             |
| options        | 1                             |
| thinks         | 1                             |
| tadahiko       | 1                             |
| nashimoto      | 1                             |
| term           | 1                             |
| credit         | 1                             |
| bearish        | 1                             |
| factor         | 1                             |
| expected       | 1                             |
| large          | 1                             |
| forward        | 1                             |
| june           | 1                             |
| export         | 1                             |
| bills          | 1                             |
| due            | 1                             |
| september      | 1                             |
| delayed        | 1                             |
| expectation    | 1                             |
| depreciation   | 1                             |
| request        | 1                             |
| houses         | 1                             |
| ministry       | 1                             |
| industry       | 1                             |
| restrict       | 1                             |
| looks          | 1                             |
| ineffective    | 1                             |
| light          | 1                             |
| anticipating   | 1                             |
| active         | 1                             |
| institutional  | 1                             |
| hedge          | 1                             |
| risks          | 1                             |
| bond           | 1                             |
| holdings       | 1                             |
| business       | 1                             |
| starting       | 1                             |
| seems          | 1                             |
| range          | 1                             |
| traded         | 1                             |
| considered     | 1                             |
| falls          | 1                             |
| pick           | 1                             |
| renewed        | 1                             |
| downward       | 1                             |
| momentum       | 1                             |
| slide          | 1                             |
| 22             | 1                             |
| monetary       | 1                             |
| countries      | 1                             |
| off            | 1                             |
| widespread     | 1                             |
| agreement      | 1                             |
| dramatic       | 1                             |
| five           | 1                             |
| meeting        | 1                             |
| apparent       | 1                             |
| concerted      | 1                             |
| united         | 1                             |
| states         | 1                             |
| target         | 1                             |
| comment        | 1                             |
| stood          | 1                             |
| sentiment      | 1                             |
| fed            | 1                             |
| months         | 1                             |
| halt           | 1                             |
| done           | 1                             |
| decline        | 1                             |
| situation      | 1                             |
| succeed        | 1                             |
| huge           | 1                             |
| dollars        | 1                             |
| current        | 1                             |
| record         | 1                             |
| support        | 1                             |
| rise           | 1                             |
| expects        | 1                             |
| italy          | 1                             |
| agree          | 1                             |
| protectionist  | 1                             |
| congress       | 1                             |
| washington     | 1                             |
| back           | 1                             |
| falling        | 1                             |
| international  | 1                             |
| established    | 1                             |
| february       | 1                             |
| end            | 1                             |
| believe        | 1                             |
| major          | 1                             |
| week           | 1                             |
| france         | 1                             |
| canada         | 1                             |
| agreed         | 1                             |
| banks          | 1                             |
| comments       | 1                             |
| treasury       | 1                             |
| secretary      | 1                             |
| james          | 1                             |
| no             | 1                             |
| rate           | 1                             |
| markets        | 1                             |
| early          | 1                             |
| industrial     | 1                             |
| six            | 1                             |
| deficit        | 1                             |
| lower          | 1                             |
| year           | 1                             |
| one            | 1                             |
| reuter         | 1                             |

</details>

<details name="148">
<summary>Statystyki termów dla pliku: 148.txt</summary>

| Term           | Liczba wystąpień w dokumencie |
| -------------- | ----------------------------- |
| countries      | 13                            |
| debt           | 6                             |
| interest       | 5                             |
| will           | 9                             |
| meetings       | 4                             |
| loans          | 4                             |
| developing     | 4                             |
| plan           | 3                             |
| problems       | 3                             |
| debtor         | 3                             |
| grow           | 3                             |
| policy         | 3                             |
| new            | 5                             |
| economic       | 5                             |
| bank           | 6                             |
| states         | 4                             |
| trade          | 5                             |
| ministers      | 3                             |
| sources        | 3                             |
| reagan         | 3                             |
| administration | 3                             |
| part           | 3                             |
| fund           | 2                             |
| rates          | 2                             |
| growing        | 2                             |
| initiative     | 2                             |
| french         | 2                             |
| poorest        | 2                             |
| issue          | 2                             |
| strengthening  | 2                             |
| pct            | 2                             |
| pressing       | 2                             |
| development    | 2                             |
| environment    | 2                             |
| talks          | 2                             |
| products       | 2                             |
| dollar         | 4                             |
| industrial     | 4                             |
| japan          | 4                             |
| monetary       | 3                             |
| dlrs           | 3                             |
| time           | 3                             |
| united         | 3                             |
| next           | 2                             |
| discuss        | 2                             |
| global         | 2                             |
| world          | 2                             |
| called         | 2                             |
| budget         | 2                             |
| stimulate      | 2                             |
| issues         | 2                             |
| include        | 2                             |
| week           | 3                             |
| markets        | 3                             |
| international  | 2                             |
| billion        | 2                             |
| washington     | 2                             |
| decline        | 2                             |
| economies      | 2                             |
| five           | 2                             |
| 10             | 1                             |
| 67             | 1                             |
| 300            | 1                             |
| amid           | 1                             |
| concerns       | 1                             |
| inflation      | 1                             |
| increases      | 1                             |
| confrontations | 1                             |
| bankers        | 1                             |
| meet           | 1                             |
| deteriorating  | 1                             |
| auspices       | 1                             |
| turning        | 1                             |
| higher         | 1                             |
| already        | 1                             |
| sunk           | 1                             |
| upsetting      | 1                             |
| stock          | 1                             |
| uncertainty    | 1                             |
| vitality       | 1                             |
| economy        | 1                             |
| heavily        | 1                             |
| indebted       | 1                             |
| continue       | 1                             |
| carry          | 1                             |
| burden         | 1                             |
| without        | 1                             |
| vast           | 1                             |
| assistance     | 1                             |
| diplomatic     | 1                             |
| sort           | 1                             |
| unveiled       | 1                             |
| seoul          | 1                             |
| works          | 1                             |
| drawn          | 1                             |
| brazil         | 1                             |
| suspended      | 1                             |
| payments       | 1                             |
| commercial     | 1                             |
| responded      | 1                             |
| laying         | 1                             |
| groundwork     | 1                             |
| writing        | 1                             |
| brazilian      | 1                             |
| separately     | 1                             |
| prime          | 1                             |
| jacques        | 1                             |
| chirac         | 1                             |
| visit          | 1                             |
| earlier        | 1                             |
| president      | 1                             |
| sounded        | 1                             |
| funnel         | 1                             |
| worldwide      | 1                             |
| grain          | 1                             |
| discussed      | 1                             |
| detail         | 1                             |
| undoubtedly    | 1                             |
| embraced       | 1                             |
| looking        | 1                             |
| special        | 1                             |
| position       | 1                             |
| suggested      | 1                             |
| disussing      | 1                             |
| assess         | 1                             |
| funding        | 1                             |
| largest        | 1                             |
| attempting     | 1                             |
| coordinate     | 1                             |
| hope           | 1                             |
| controlling    | 1                             |
| deficits       | 1                             |
| evidence       | 1                             |
| activity       | 1                             |
| forecasts      | 1                             |
| expansion      | 1                             |
| fifth          | 1                             |
| directly       | 1                             |
| affect         | 1                             |
| ability        | 1                             |
| difficulties   | 1                             |
| years          | 1                             |
| absorbed       | 1                             |
| exports        | 1                             |
| country        | 1                             |
| allowing       | 1                             |
| earn           | 1                             |
| critical       | 1                             |
| wants          | 1                             |
| cut            | 1                             |
| running        | 1                             |
| others         | 1                             |
| import         | 1                             |
| discussions    | 1                             |
| wide           | 1                             |
| ranging        | 1                             |
| touching       | 1                             |
| everything     | 1                             |
| impact         | 1                             |
| according      | 1                             |
| examination    | 1                             |
| pressures      | 1                             |
| wake           | 1                             |
| decision       | 1                             |
| place          | 1                             |
| microchip      | 1                             |
| accelerated    | 1                             |
| grew           | 1                             |
| alarmed        | 1                             |
| offing         | 1                             |
| concern        | 1                             |
| prompted       | 1                             |
| charges        | 1                             |
| computer       | 1                             |
| chip           | 1                             |
| fair           | 1                             |
| value          | 1                             |
| imports        | 1                             |
| undermining    | 1                             |
| system         | 1                             |
| fundamental    | 1                             |
| price          | 1                             |
| weakness       | 1                             |
| commodities    | 1                             |
| mainstay       | 1                             |
| gather         | 1                             |
| keep           | 1                             |
| sliding        | 1                             |
| debate         | 1                             |
| larger         | 1                             |
| approving      | 1                             |
| inter          | 1                             |
| link           | 1                             |
| changes        | 1                             |
| loan           | 1                             |
| dams           | 1                             |
| projects       | 1                             |
| head           | 1                             |
| barber         | 1                             |
| conable        | 1                             |
| reviewed       | 1                             |
| reorganization | 1                             |
| prepared       | 1                             |
| baker          | 2                             |
| deficit        | 2                             |
| market         | 2                             |
| paris          | 2                             |
| agreed         | 2                             |
| 18             | 1                             |
| 169            | 1                             |
| finance        | 1                             |
| weak           | 1                             |
| bond           | 1                             |
| whether        | 1                             |
| signs          | 1                             |
| ago            | 1                             |
| strategy       | 1                             |
| serious        | 1                             |
| challenge      | 1                             |
| month          | 1                             |
| minister       | 1                             |
| surpluses      | 1                             |
| certain        | 1                             |
| extreme        | 1                             |
| open           | 1                             |
| success        | 1                             |
| little         | 1                             |
| sees           | 1                             |
| growth         | 1                             |
| continuing     | 1                             |
| asked          | 1                             |
| problem        | 1                             |
| mln            | 1                             |
| tariffs        | 1                             |
| move           | 1                             |
| financial      | 1                             |
| war            | 1                             |
| selling        | 1                             |
| kept           | 1                             |
| closed         | 1                             |
| trading        | 1                             |
| basic          | 1                             |
| export         | 1                             |
| group          | 1                             |
| first          | 1                             |
| joined         | 1                             |
| later          | 1                             |
| coordination   | 1                             |
| surplus        | 1                             |
| america        | 1                             |
| reduce         | 1                             |
| federal        | 1                             |
| bid            | 1                             |
| say            | 1                             |
| american       | 1                             |
| account        | 1                             |
| making         | 1                             |
| situation      | 1                             |
| months         | 1                             |
| down           | 1                             |
| support        | 1                             |
| official       | 1                             |
| help           | 1                             |
| recent         | 1                             |
| foreign        | 1                             |
| exchange       | 1                             |
| record         | 1                             |
| protectionist  | 1                             |
| february       | 1                             |
| italy          | 1                             |
| rate           | 1                             |
| central        | 1                             |
| no             | 1                             |
| treasury       | 1                             |
| secretary      | 1                             |
| james          | 1                             |
| last           | 1                             |
| banks          | 1                             |
| year           | 1                             |
| april          | 1                             |
| six            | 1                             |
| action         | 1                             |
| west           | 1                             |
| germany        | 1                             |
| france         | 1                             |
| britain        | 1                             |
| canada         | 1                             |
| accord         | 1                             |
| major          | 1                             |
| nations        | 1                             |
| reuter         | 1                             |

</details>

<details name="197">
<summary>Statystyki termów dla pliku: 197.txt</summary>

| Term            | Liczba wystąpień w dokumencie |
| --------------- | ----------------------------- |
| dollar          | 15                            |
| carter          | 6                             |
| administration  | 9                             |
| think           | 5                             |
| hormats         | 5                             |
| package         | 6                             |
| currency        | 8                             |
| bonds           | 4                             |
| analysts        | 5                             |
| support         | 7                             |
| measures        | 4                             |
| monetary        | 6                             |
| issuing         | 3                             |
| government      | 3                             |
| unlikely        | 3                             |
| confidence      | 3                             |
| yen             | 5                             |
| economic        | 5                             |
| reagan          | 4                             |
| pct             | 3                             |
| officials       | 3                             |
| genuine         | 2                             |
| discount        | 2                             |
| give            | 2                             |
| securities      | 2                             |
| really          | 2                             |
| vice            | 2                             |
| former          | 2                             |
| statements      | 2                             |
| supported       | 2                             |
| politically     | 2                             |
| point           | 2                             |
| believe         | 3                             |
| fed             | 3                             |
| bolster         | 2                             |
| discussed       | 2                             |
| pressure        | 2                             |
| far             | 2                             |
| concern         | 2                             |
| visit           | 2                             |
| president       | 2                             |
| redress         | 2                             |
| policies        | 2                             |
| marks           | 2                             |
| sales           | 2                             |
| seven           | 2                             |
| united          | 3                             |
| states          | 3                             |
| rate            | 3                             |
| sources         | 2                             |
| say             | 2                             |
| view            | 2                             |
| imbalances      | 2                             |
| rise            | 2                             |
| today           | 2                             |
| around          | 2                             |
| sentiment       | 2                             |
| international   | 2                             |
| washington      | 2                             |
| foreign         | 2                             |
| official        | 2                             |
| economies       | 2                             |
| 79              | 1                             |
| 139             | 1                             |
| 188             | 1                             |
| 1978            | 1                             |
| prospect        | 1                             |
| assaults        | 1                             |
| force           | 1                             |
| eventually      | 1                             |
| unveil          | 1                             |
| distasteful     | 1                             |
| economists      | 1                             |
| acknowledged    | 1                             |
| possibility     | 1                             |
| denominated     | 1                             |
| dismissed       | 1                             |
| speculation     | 1                             |
| unusual         | 1                             |
| step            | 1                             |
| seriously       | 1                             |
| undertake       | 1                             |
| fact            | 1                             |
| therefore       | 1                             |
| appropriate     | 1                             |
| announce        | 1                             |
| internationally | 1                             |
| coordinated     | 1                             |
| effort          | 1                             |
| instability     | 1                             |
| defense         | 1                             |
| accompanied     | 1                             |
| resisted        | 1                             |
| raise           | 1                             |
| chiefly         | 1                             |
| hurt            | 1                             |
| fragile         | 1                             |
| expect          | 1                             |
| divided         | 1                             |
| possible        | 1                             |
| timing          | 1                             |
| announcement    | 1                             |
| yasuhiro        | 1                             |
| nakasone        | 1                             |
| focus           | 1                             |
| steady          | 1                             |
| charles         | 1                             |
| taylor          | 1                             |
| analyst         | 1                             |
| prudential      | 1                             |
| bache           | 1                             |
| resort          | 1                             |
| mind            | 1                             |
| troubles        | 1                             |
| recently        | 1                             |
| urged           | 1                             |
| faced           | 1                             |
| collapsed       | 1                             |
| unleashed       | 1                             |
| nov             | 1                             |
| resounding      | 1                             |
| gave            | 1                             |
| robert          | 1                             |
| goldman         | 1                             |
| sachs           | 1                             |
| inc             | 1                             |
| administrations | 1                             |
| stands          | 1                             |
| rhetoric        | 1                             |
| evidencing      | 1                             |
| practice        | 1                             |
| short           | 1                             |
| unequivocally   | 1                             |
| saying          | 1                             |
| declined        | 1                             |
| issued          | 1                             |
| mark            | 1                             |
| franc           | 1                             |
| aimed           | 1                             |
| essentially     | 1                             |
| buttressing     | 1                             |
| pyschological   | 1                             |
| attracting      | 1                             |
| investors       | 1                             |
| notes           | 1                             |
| drawings        | 1                             |
| reserves        | 1                             |
| held            | 1                             |
| sdrs            | 1                             |
| imf             | 1                             |
| members         | 1                             |
| increased       | 1                             |
| swap            | 1                             |
| lines           | 1                             |
| stepped         | 1                             |
| gold            | 1                             |
| stephen         | 1                             |
| axilrod         | 1                             |
| nikko           | 1                             |
| argued          | 1                             |
| difficult       | 1                             |
| fulfill         | 1                             |
| pledges         | 1                             |
| work            | 1                             |
| undertaken      | 1                             |
| powers          | 1                             |
| coincide        | 1                             |
| venice          | 1                             |
| summit          | 1                             |
| leaders         | 1                             |
| democracies     | 1                             |
| slightly        | 1                             |
| forged          | 1                             |
| fundamentally   | 1                             |
| nearing         | 1                             |
| comfortable     | 1                             |
| reluctance      | 1                             |
| act             | 1                             |
| firmly          | 1                             |
| desire          | 1                             |
| allies          | 1                             |
| fear            | 1                             |
| fanning         | 1                             |
| shows           | 1                             |
| damn            | 1                             |
| baker           | 2                             |
| week            | 2                             |
| action          | 2                             |
| trade           | 2                             |
| central         | 2                             |
| japan           | 2                             |
| west            | 2                             |
| germany         | 2                             |
| industrial      | 2                             |
| 87              | 1                             |
| renewed         | 1                             |
| ready           | 1                             |
| nonetheless     | 1                             |
| issue           | 1                             |
| lack            | 1                             |
| thing           | 1                             |
| massive         | 1                             |
| unveiled        | 1                             |
| reserve         | 1                             |
| key             | 1                             |
| debt            | 1                             |
| even            | 1                             |
| prime           | 1                             |
| real            | 1                             |
| prevent         | 1                             |
| going           | 1                             |
| thought         | 1                             |
| bring           | 1                             |
| increasingly    | 1                             |
| question        | 1                             |
| plan            | 1                             |
| credibility     | 1                             |
| senior          | 1                             |
| just            | 1                             |
| several         | 1                             |
| traders         | 1                             |
| enough          | 1                             |
| swiss           | 1                             |
| lost            | 1                             |
| fund            | 1                             |
| chairman        | 1                             |
| leading         | 1                             |
| june            | 1                             |
| believed        | 1                             |
| impact          | 1                             |
| soon            | 1                             |
| change          | 1                             |
| feel            | 1                             |
| due             | 1                             |
| keep            | 1                             |
| part            | 1                             |
| end             | 1                             |
| financial       | 1                             |
| reduce          | 1                             |
| federal         | 1                             |
| growth          | 1                             |
| minister        | 1                             |
| current         | 1                             |
| huge            | 1                             |
| weak            | 1                             |
| success         | 1                             |
| stood           | 1                             |
| problem         | 1                             |
| little          | 1                             |
| fall            | 1                             |
| stimulate       | 1                             |
| world           | 1                             |
| stabilize       | 1                             |
| congress        | 1                             |
| not             | 1                             |
| situation       | 1                             |
| japanese        | 1                             |
| down            | 1                             |
| lower           | 1                             |
| help            | 1                             |
| billion         | 1                             |
| dlrs            | 1                             |
| one             | 1                             |
| italy           | 1                             |
| decline         | 1                             |
| currencies      | 1                             |
| protectionist   | 1                             |
| treasury        | 1                             |
| secretary       | 1                             |
| james           | 1                             |
| last            | 1                             |
| markets         | 1                             |
| deficit         | 1                             |
| bank            | 1                             |
| banks           | 1                             |
| major           | 1                             |
| britain         | 1                             |
| france          | 1                             |
| canada          | 1                             |
| nations         | 1                             |
| paris           | 1                             |
| accord          | 1                             |
| market          | 1                             |
| will            | 1                             |
| reuter          | 1                             |

</details>

<details name="183">
<summary>Statystyki termów dla pliku: 183.txt</summary>

| Term           | Liczba wystąpień w dokumencie |
| -------------- | ----------------------------- |
| rates          | 7                             |
| interest       | 6                             |
| dollar         | 12                            |
| not            | 7                             |
| policy         | 4                             |
| statement      | 4                             |
| higher         | 4                             |
| commitments    | 3                             |
| balladur       | 3                             |
| accept         | 3                             |
| recession      | 3                             |
| darman         | 3                             |
| consistent     | 3                             |
| currencies     | 6                             |
| markets        | 7                             |
| sources        | 5                             |
| seven          | 4                             |
| commitment     | 3                             |
| stable         | 3                             |
| japan          | 5                             |
| baker          | 5                             |
| believed       | 3                             |
| agreement      | 3                             |
| budget         | 3                             |
| rapid          | 2                             |
| descent        | 2                             |
| artificially   | 2                             |
| lead           | 2                             |
| wanted         | 2                             |
| understood     | 2                             |
| committed      | 2                             |
| reaffirmed     | 2                             |
| broadly        | 2                             |
| monetary       | 4                             |
| latest         | 2                             |
| policymakers   | 2                             |
| meetings       | 2                             |
| told           | 2                             |
| high           | 2                             |
| slide          | 2                             |
| within         | 2                             |
| ranges         | 2                             |
| last           | 4                             |
| week           | 4                             |
| west           | 4                             |
| germany        | 4                             |
| deficit        | 4                             |
| paris          | 4                             |
| officials      | 2                             |
| leading        | 2                             |
| finance        | 2                             |
| seem           | 2                             |
| levels         | 2                             |
| ministers      | 2                             |
| fundamentals   | 2                             |
| trade          | 3                             |
| believe        | 2                             |
| minister       | 2                             |
| growth         | 2                             |
| current        | 2                             |
| 35             | 1                             |
| deeply         | 1                             |
| ignored        | 1                             |
| efforts        | 1                             |
| strengthened   | 1                             |
| exasperated    | 1                             |
| drove          | 1                             |
| rapidly        | 1                             |
| severely       | 1                             |
| disrupted      | 1                             |
| heed           | 1                             |
| went           | 1                             |
| reassure       | 1                             |
| edouard        | 1                             |
| americans      | 1                             |
| weaker         | 1                             |
| gerhard        | 1                             |
| stoltenberg    | 1                             |
| involves       | 1                             |
| risk           | 1                             |
| tangible       | 1                             |
| threat         | 1                             |
| feared         | 1                             |
| seemed         | 1                             |
| picture        | 1                             |
| changed        | 1                             |
| settled        | 1                             |
| pattern        | 1                             |
| result         | 1                             |
| nor            | 1                             |
| enthusiasm     | 1                             |
| annual         | 1                             |
| best           | 1                             |
| curb           | 1                             |
| distaste       | 1                             |
| stems          | 1                             |
| fears          | 1                             |
| outgoing       | 1                             |
| richard        | 1                             |
| television     | 1                             |
| interviewers   | 1                             |
| driving        | 1                             |
| adversely      | 1                             |
| balance        | 1                             |
| ultimately     | 1                             |
| drive          | 1                             |
| throw          | 1                             |
| us             | 1                             |
| slower         | 1                             |
| maintained     | 1                             |
| healthy        | 1                             |
| resorting      | 1                             |
| acknowledging  | 1                             |
| life           | 1                             |
| adjustments    | 1                             |
| course         | 1                             |
| fixed          | 1                             |
| rein           | 1                             |
| deepens        | 1                             |
| fully          | 1                             |
| implementing   | 1                             |
| undertakings   | 1                             |
| agreements     | 1                             |
| misinterpreted | 1                             |
| wrongly        | 1                             |
| stabilizing    | 1                             |
| reach          | 1                             |
| compromise     | 1                             |
| fight          | 1                             |
| upturn         | 1                             |
| bolstered      | 1                             |
| supplementary  | 1                             |
| saw            | 1                             |
| applied        | 1                             |
| summarized     | 1                             |
| governors      | 1                             |
| focusing       | 1                             |
| created        | 1                             |
| prospective    | 1                             |
| european       | 1                             |
| unconvinced    | 1                             |
| meant          | 1                             |
| lower          | 2                             |
| united         | 2                             |
| states         | 2                             |
| economic       | 2                             |
| washington     | 2                             |
| agreed         | 2                             |
| top            | 1                             |
| appear         | 1                             |
| worried        | 1                             |
| coordinate     | 1                             |
| talks          | 1                             |
| stock          | 1                             |
| french         | 1                             |
| underscored    | 1                             |
| saying         | 1                             |
| want           | 1                             |
| german         | 1                             |
| already        | 1                             |
| strong         | 1                             |
| surge          | 1                             |
| inflation      | 1                             |
| uproar         | 1                             |
| semi           | 1                             |
| imf            | 1                             |
| deputy         | 1                             |
| think          | 1                             |
| solve          | 1                             |
| slow           | 1                             |
| affect         | 1                             |
| fact           | 1                             |
| may            | 1                             |
| system         | 1                             |
| board          | 1                             |
| paul           | 1                             |
| volcker        | 1                             |
| credit         | 1                             |
| genuine        | 1                             |
| earlier        | 1                             |
| remarks        | 1                             |
| suggested      | 1                             |
| protectionism  | 1                             |
| meanwhile      | 1                             |
| domestic       | 1                             |
| pact           | 1                             |
| promise        | 1                             |
| underlying     | 1                             |
| given          | 1                             |
| especially     | 1                             |
| hard           | 1                             |
| reality        | 1                             |
| read           | 1                             |
| instability    | 1                             |
| gap            | 1                             |
| changes        | 1                             |
| bonn           | 1                             |
| business       | 1                             |
| cut            | 1                             |
| industrial     | 2                             |
| treasury       | 2                             |
| secretary      | 2                             |
| major          | 2                             |
| 22             | 1                             |
| policies       | 1                             |
| bond           | 1                             |
| group          | 1                             |
| renewed        | 1                             |
| signs          | 1                             |
| asked          | 1                             |
| reserve        | 1                             |
| chairman       | 1                             |
| demand         | 1                             |
| global         | 1                             |
| dlr            | 1                             |
| level          | 1                             |
| nonetheless    | 1                             |
| surpluses      | 1                             |
| rather         | 1                             |
| financial      | 1                             |
| new            | 1                             |
| rise           | 1                             |
| little         | 1                             |
| world          | 1                             |
| part           | 1                             |
| stabilize      | 1                             |
| federal        | 1                             |
| countries      | 1                             |
| february       | 1                             |
| reagan         | 1                             |
| administration | 1                             |
| congress       | 1                             |
| stimulate      | 1                             |
| today          | 1                             |
| exchange       | 1                             |
| time           | 1                             |
| stood          | 1                             |
| against        | 1                             |
| view           | 1                             |
| around         | 1                             |
| italy          | 1                             |
| down           | 1                             |
| currency       | 1                             |
| one            | 1                             |
| six            | 1                             |
| decline        | 1                             |
| billion        | 1                             |
| yen            | 1                             |
| nations        | 1                             |
| france         | 1                             |
| britain        | 1                             |
| canada         | 1                             |
| james          | 1                             |
| market         | 1                             |
| bank           | 1                             |
| rate           | 1                             |
| action         | 1                             |
| accord         | 1                             |
| reuter         | 1                             |

</details>

<details name="175">
<summary>Statystyki termów dla pliku: 175.txt</summary>

| Term           | Liczba wystąpień w dokumencie |
| -------------- | ----------------------------- |
| yesterday      | 5                             |
| currency       | 7                             |
| relatively     | 3                             |
| made           | 3                             |
| ranges         | 4                             |
| nations        | 7                             |
| paris          | 7                             |
| monetary       | 6                             |
| japanese       | 5                             |
| sources        | 5                             |
| miyazawa       | 3                             |
| cooperation    | 3                             |
| european       | 3                             |
| sharp          | 3                             |
| seven          | 4                             |
| finance        | 4                             |
| yen            | 5                             |
| statement      | 3                             |
| meeting        | 3                             |
| bonn           | 3                             |
| announced      | 2                             |
| though         | 2                             |
| past           | 2                             |
| departure      | 2                             |
| wilson         | 2                             |
| objectives     | 2                             |
| balances       | 2                             |
| zones          | 2                             |
| dollar         | 5                             |
| japan          | 5                             |
| trade          | 5                             |
| tokyo          | 3                             |
| leading        | 3                             |
| agreement      | 3                             |
| intervention   | 3                             |
| fall           | 3                             |
| united         | 4                             |
| states         | 4                             |
| economic       | 4                             |
| one            | 4                             |
| billion        | 4                             |
| 145            | 2                             |
| economy        | 2                             |
| appears        | 2                             |
| considered     | 2                             |
| consistent     | 2                             |
| years          | 2                             |
| term           | 2                             |
| drive          | 2                             |
| markets        | 4                             |
| west           | 4                             |
| germany        | 4                             |
| february       | 3                             |
| countries      | 3                             |
| minister       | 3                             |
| dlrs           | 3                             |
| exchange       | 3                             |
| package        | 2                             |
| even           | 2                             |
| talks          | 2                             |
| meetings       | 2                             |
| rates          | 2                             |
| stability      | 2                             |
| volcker        | 2                             |
| target         | 2                             |
| currencies     | 3                             |
| fundamentals   | 2                             |
| say            | 2                             |
| budget         | 2                             |
| recent         | 2                             |
| ministers      | 2                             |
| action         | 3                             |
| major          | 3                             |
| industrial     | 3                             |
| accord         | 3                             |
| deficit        | 3                             |
| rise           | 2                             |
| financial      | 2                             |
| current        | 2                             |
| against        | 2                             |
| 34             | 1                             |
| 48             | 1                             |
| sought         | 1                             |
| satisfied      | 1                             |
| allows         | 1                             |
| reaffirm       | 1                             |
| stimulation    | 1                             |
| endorses       | 1                             |
| initial        | 1                             |
| reaction       | 1                             |
| demonstrates   | 1                             |
| yet            | 1                             |
| sank           | 1                             |
| movement       | 1                             |
| defend         | 1                             |
| happened       | 1                             |
| outside        | 1                             |
| worth          | 1                             |
| ruling         | 1                             |
| liberal        | 1                             |
| democratic     | 1                             |
| party          | 1                             |
| eve            | 1                             |
| attend         | 1                             |
| strongly       | 1                             |
| worded         | 1                             |
| terming        | 1                             |
| extraordinary  | 1                             |
| noting         | 1                             |
| repeated       | 1                             |
| willingness    | 1                             |
| resulted       | 1                             |
| unsuccessful   | 1                             |
| scale          | 1                             |
| successful     | 1                             |
| feeling        | 1                             |
| among          | 1                             |
| medium         | 1                             |
| replaced       | 1                             |
| bickering      | 1                             |
| differences    | 1                             |
| whose          | 1                             |
| risen          | 1                             |
| face           | 1                             |
| won            | 1                             |
| acceptance     | 1                             |
| acceptable     | 1                             |
| argues         | 1                             |
| shifts         | 1                             |
| needed         | 1                             |
| remedy         | 1                             |
| imbalance      | 1                             |
| taken          | 1                             |
| mention        | 1                             |
| however        | 1                             |
| implied        | 1                             |
| reafffirmation | 1                             |
| curbing        | 1                             |
| shortfall      | 1                             |
| reached        | 1                             |
| nearly         | 1                             |
| similar        | 1                             |
| argument       | 1                             |
| capitol        | 1                             |
| hill           | 1                             |
| clearly        | 1                             |
| pose           | 1                             |
| substantial    | 1                             |
| inflationary   | 1                             |
| undermine      | 1                             |
| warned         | 1                             |
| independent    | 1                             |
| privately      | 1                             |
| welcomed       | 1                             |
| remained       | 1                             |
| unit           | 1                             |
| worry          | 1                             |
| blunts         | 1                             |
| monolith       | 1                             |
| concentrate    | 1                             |
| continued      | 1                             |
| binding        | 1                             |
| canadian       | 1                             |
| michael        | 1                             |
| good           | 1                             |
| prepare        | 1                             |
| norms          | 1                             |
| limited        | 1                             |
| number         | 1                             |
| conditions     | 1                             |
| deviations     | 1                             |
| guidelines     | 1                             |
| consultations  | 1                             |
| corrective     | 1                             |
| inclusion      | 1                             |
| london         | 1                             |
| implies        | 1                             |
| direction      | 1                             |
| unsuccessfully | 1                             |
| limit          | 1                             |
| fluctuations   | 1                             |
| concept        | 1                             |
| rigid          | 1                             |
| secret         | 1                             |
| free           | 1                             |
| agreed         | 2                             |
| not            | 2                             |
| washington     | 2                             |
| central        | 2                             |
| will           | 2                             |
| 153            | 1                             |
| 170            | 1                             |
| development    | 1                             |
| powers         | 1                             |
| east           | 1                             |
| unconvinced    | 1                             |
| reflect        | 1                             |
| point          | 1                             |
| kiichi         | 1                             |
| weeks          | 1                             |
| range          | 1                             |
| discussions    | 1                             |
| supplementary  | 1                             |
| urgent         | 1                             |
| reaffirmed     | 1                             |
| broadly        | 1                             |
| therefore      | 1                             |
| continue       | 1                             |
| close          | 1                             |
| unprecedented  | 1                             |
| understood     | 1                             |
| extremely      | 1                             |
| light          | 1                             |
| announcement   | 1                             |
| growing        | 1                             |
| bankers        | 1                             |
| short          | 1                             |
| anything       | 1                             |
| gerhard        | 1                             |
| stoltenberg    | 1                             |
| place          | 1                             |
| cuts           | 1                             |
| essential      | 1                             |
| risks          | 1                             |
| momentum       | 1                             |
| confidence     | 1                             |
| future         | 1                             |
| force          | 1                             |
| politically    | 1                             |
| once           | 1                             |
| progress       | 1                             |
| meet           | 1                             |
| summit         | 1                             |
| report         | 1                             |
| leaders        | 1                             |
| backed         | 1                             |
| result         | 1                             |
| required       | 1                             |
| moving         | 1                             |
| sounded        | 1                             |
| allies         | 1                             |
| mark           | 1                             |
| secretary      | 2                             |
| baker          | 2                             |
| bank           | 2                             |
| france         | 2                             |
| rate           | 2                             |
| long           | 1                             |
| latest         | 1                             |
| far            | 1                             |
| appear         | 1                             |
| trading        | 1                             |
| several        | 1                             |
| within         | 1                             |
| reality        | 1                             |
| foster         | 1                             |
| concerted      | 1                             |
| halt           | 1                             |
| america        | 1                             |
| already        | 1                             |
| commitment     | 1                             |
| cut            | 1                             |
| earlier        | 1                             |
| board          | 1                             |
| paul           | 1                             |
| redress        | 1                             |
| interest       | 1                             |
| stable         | 1                             |
| export         | 1                             |
| meanwhile      | 1                             |
| making         | 1                             |
| policy         | 1                             |
| coordination   | 1                             |
| june           | 1                             |
| fund           | 1                             |
| want           | 1                             |
| agree          | 1                             |
| inflation      | 1                             |
| account        | 1                             |
| whether        | 1                             |
| worried        | 1                             |
| system         | 1                             |
| just           | 1                             |
| 22             | 1                             |
| believed       | 1                             |
| level          | 1                             |
| despite        | 1                             |
| group          | 1                             |
| policies       | 1                             |
| huge           | 1                             |
| surpluses      | 1                             |
| record         | 1                             |
| reserve        | 1                             |
| chairman       | 1                             |
| imbalances     | 1                             |
| renewed        | 1                             |
| fed            | 1                             |
| weak           | 1                             |
| stimulate      | 1                             |
| stabilize      | 1                             |
| around         | 1                             |
| today          | 1                             |
| no             | 1                             |
| believe        | 1                             |
| year           | 1                             |
| federal        | 1                             |
| international  | 1                             |
| growth         | 1                             |
| reagan         | 1                             |
| administration | 1                             |
| italy          | 1                             |
| treasury       | 1                             |
| james          | 1                             |
| britain        | 1                             |
| canada         | 1                             |
| last           | 1                             |
| week           | 1                             |
| reuter         | 1                             |

</details>

<details name="198">
<summary>Statystyki termów dla pliku: 198.txt</summary>

| Term            | Liczba wystąpień w dokumencie |
| --------------- | ----------------------------- |
| study           | 7                             |
| officials       | 8                             |
| fiscal          | 4                             |
| west            | 9                             |
| japan           | 8                             |
| seven           | 5                             |
| official        | 5                             |
| budget          | 5                             |
| germany         | 7                             |
| actions         | 3                             |
| three           | 3                             |
| action          | 6                             |
| imbalances      | 4                             |
| called          | 3                             |
| cuts            | 3                             |
| german          | 3                             |
| 1988            | 2                             |
| says            | 2                             |
| resolve         | 2                             |
| oecd            | 2                             |
| needs           | 2                             |
| significant     | 2                             |
| set             | 2                             |
| met             | 2                             |
| deep            | 2                             |
| roughly         | 2                             |
| promised        | 2                             |
| tax             | 2                             |
| growth          | 4                             |
| trade           | 5                             |
| policy          | 3                             |
| meeting         | 3                             |
| bonn            | 3                             |
| economic        | 4                             |
| billion         | 4                             |
| western         | 2                             |
| annual          | 2                             |
| expansion       | 2                             |
| strongly        | 2                             |
| without         | 2                             |
| world           | 3                             |
| leading         | 3                             |
| nations         | 4                             |
| major           | 4                             |
| deficit         | 4                             |
| dollar          | 4                             |
| dlrs            | 3                             |
| may             | 2                             |
| years           | 2                             |
| powers          | 2                             |
| change          | 2                             |
| move            | 2                             |
| united          | 3                             |
| states          | 3                             |
| one             | 3                             |
| will            | 3                             |
| interest        | 2                             |
| rates           | 2                             |
| industrial      | 3                             |
| group           | 2                             |
| 13              | 1                             |
| 15              | 1                             |
| 24              | 1                             |
| 36              | 1                             |
| organization    | 1                             |
| plaguing        | 1                             |
| paper           | 1                             |
| preparing       | 1                             |
| ministerial     | 1                             |
| forum           | 1                             |
| coordinating    | 1                             |
| added           | 1                             |
| significance    | 1                             |
| dogging         | 1                             |
| attempts        | 1                             |
| achieve         | 1                             |
| joint           | 1                             |
| goals           | 1                             |
| turned          | 1                             |
| unusually       | 1                             |
| unstable        | 1                             |
| focussed        | 1                             |
| attention       | 1                             |
| every           | 1                             |
| clues           | 1                             |
| air             | 1                             |
| concludes       | 1                             |
| looked          | 1                             |
| underscores     | 1                             |
| seperately      | 1                             |
| overtures       | 1                             |
| rebuffed        | 1                             |
| reductions      | 1                             |
| steep           | 1                             |
| widening        | 1                             |
| difference      | 1                             |
| yields          | 1                             |
| hand            | 1                             |
| necessary       | 1                             |
| average         | 1                             |
| corrected       | 1                             |
| third           | 1                             |
| crisis          | 1                             |
| control         | 1                             |
| equally         | 1                             |
| suggests        | 1                             |
| corresponding   | 1                             |
| reduction       | 1                             |
| weakening       | 1                             |
| go              | 1                             |
| uncorrected     | 1                             |
| shave           | 1                             |
| found           | 1                             |
| main            | 1                             |
| right           | 1                             |
| tough           | 1                             |
| bill            | 1                             |
| ahead           | 1                             |
| figure          | 1                             |
| goal            | 1                             |
| leadership      | 1                             |
| representatives | 1                             |
| warmly          | 1                             |
| caution         | 1                             |
| content         | 1                             |
| proposed        | 1                             |
| pushed          | 1                             |
| sharply         | 1                             |
| welcome         | 1                             |
| love            | 1                             |
| accelerate      | 1                             |
| fell            | 1                             |
| steeply         | 1                             |
| quarter         | 1                             |
| reassured       | 1                             |
| fails           | 1                             |
| emerge          | 1                             |
| find            | 1                             |
| planned         | 1                             |
| financial       | 2                             |
| stabilize       | 2                             |
| decline         | 2                             |
| year            | 2                             |
| around          | 2                             |
| japanese        | 2                             |
| washington      | 2                             |
| 11              | 1                             |
| 35              | 1                             |
| 140             | 1                             |
| expected        | 1                             |
| debate          | 1                             |
| among           | 1                             |
| nation          | 1                             |
| taken           | 1                             |
| difficulties    | 1                             |
| pledges         | 1                             |
| greater         | 1                             |
| cutting         | 1                             |
| noting          | 1                             |
| noted           | 1                             |
| need            | 1                             |
| helped          | 1                             |
| similar         | 1                             |
| urged           | 1                             |
| shows           | 1                             |
| implies         | 1                             |
| targets         | 1                             |
| trend           | 1                             |
| upturn          | 1                             |
| alone           | 1                             |
| goods           | 1                             |
| services        | 1                             |
| made            | 1                             |
| direction       | 1                             |
| ruling          | 1                             |
| facing          | 1                             |
| prospect        | 1                             |
| aimed           | 1                             |
| curbing         | 1                             |
| fight           | 1                             |
| democratic      | 1                             |
| house           | 1                             |
| increases       | 1                             |
| deficits        | 1                             |
| announced       | 1                             |
| welcomed        | 1                             |
| timing          | 1                             |
| yet             | 1                             |
| january         | 1                             |
| expect          | 1                             |
| pick            | 1                             |
| faster          | 1                             |
| speed           | 1                             |
| venice          | 1                             |
| paris           | 2                             |
| markets         | 2                             |
| cooperation     | 1                             |
| development     | 1                             |
| economy         | 1                             |
| senior          | 1                             |
| next            | 1                             |
| month           | 1                             |
| two             | 1                             |
| result          | 1                             |
| massive         | 1                             |
| continue        | 1                             |
| domestic        | 1                             |
| understood      | 1                             |
| short           | 1                             |
| term            | 1                             |
| going           | 1                             |
| pct             | 1                             |
| debt            | 1                             |
| kept            | 1                             |
| off             | 1                             |
| progress        | 1                             |
| moving          | 1                             |
| protectionism   | 1                             |
| supplementary   | 1                             |
| unconvinced     | 1                             |
| promise         | 1                             |
| higher          | 1                             |
| first           | 1                             |
| pressure        | 1                             |
| leaders         | 1                             |
| meet            | 1                             |
| meetings        | 1                             |
| reduce          | 1                             |
| cut             | 1                             |
| bond            | 1                             |
| several         | 1                             |
| target          | 1                             |
| levels          | 1                             |
| dlr             | 1                             |
| nonetheless     | 1                             |
| early           | 1                             |
| june            | 1                             |
| huge            | 1                             |
| finance         | 1                             |
| ministers       | 1                             |
| policies        | 1                             |
| view            | 1                             |
| despite         | 1                             |
| tokyo           | 1                             |
| help            | 1                             |
| foreign         | 1                             |
| surpluses       | 1                             |
| stimulate       | 1                             |
| international   | 1                             |
| current         | 1                             |
| february        | 1                             |
| reagan          | 1                             |
| administration  | 1                             |
| against         | 1                             |
| no              | 1                             |
| italy           | 1                             |
| not             | 1                             |
| agreed          | 1                             |
| currencies      | 1                             |
| yen             | 1                             |
| france          | 1                             |
| britain         | 1                             |
| canada          | 1                             |
| rate            | 1                             |
| treasury        | 1                             |
| secretary       | 1                             |
| james           | 1                             |
| baker           | 1                             |
| week            | 1                             |
| reuter          | 1                             |

</details>

<details name="62">
<summary>Statystyki termów dla pliku: 62.txt</summary>

| Term           | Liczba wystąpień w dokumencie |
| -------------- | ----------------------------- |
| official       | 7                             |
| agreement      | 6                             |
| economic       | 8                             |
| stability      | 5                             |
| prospects      | 3                             |
| show           | 3                             |
| term           | 4                             |
| ranges         | 4                             |
| international  | 5                             |
| paris          | 6                             |
| refused        | 2                             |
| consider       | 2                             |
| strengthen     | 2                             |
| better         | 2                             |
| specific       | 2                             |
| bands          | 2                             |
| bundesbank     | 2                             |
| private        | 2                             |
| will           | 5                             |
| month          | 3                             |
| german         | 3                             |
| currency       | 4                             |
| growth         | 4                             |
| administration | 4                             |
| central        | 4                             |
| officials      | 3                             |
| april          | 3                             |
| fed            | 3                             |
| review         | 2                             |
| commitments    | 2                             |
| secret         | 2                             |
| coordinated    | 2                             |
| conditions     | 2                             |
| curb           | 2                             |
| set            | 2                             |
| intervened     | 2                             |
| countries      | 3                             |
| six            | 3                             |
| sources        | 3                             |
| taken          | 2                             |
| future         | 2                             |
| analysts       | 2                             |
| comment        | 2                             |
| pact           | 2                             |
| broadly        | 2                             |
| president      | 2                             |
| politically    | 2                             |
| bankers        | 2                             |
| industrial     | 4                             |
| markets        | 4                             |
| dollar         | 4                             |
| financial      | 3                             |
| monetary       | 3                             |
| next           | 2                             |
| talks          | 2                             |
| understood     | 2                             |
| foster         | 2                             |
| short          | 2                             |
| off            | 2                             |
| signs          | 2                             |
| bank           | 3                             |
| time           | 2                             |
| rates          | 2                             |
| levels         | 2                             |
| part           | 2                             |
| policy         | 2                             |
| interest       | 2                             |
| cut            | 2                             |
| target         | 2                             |
| say            | 2                             |
| nations        | 3                             |
| west           | 3                             |
| deficit        | 3                             |
| 60             | 1                             |
| 86             | 1                             |
| 90             | 1                             |
| 155            | 1                             |
| narrow         | 1                             |
| movements      | 1                             |
| tamed          | 1                             |
| normally       | 1                             |
| unruly         | 1                             |
| likely         | 1                             |
| build          | 1                             |
| reason         | 1                             |
| calm           | 1                             |
| interview      | 1                             |
| concluded      | 1                             |
| period         | 1                             |
| bury           | 1                             |
| hatchet        | 1                             |
| cease          | 1                             |
| quarrel        | 1                             |
| instead        | 1                             |
| focused        | 1                             |
| left           | 1                             |
| adjust         | 1                             |
| periodic       | 1                             |
| included       | 1                             |
| measure        | 1                             |
| jointly        | 1                             |
| times          | 1                             |
| toyko          | 1                             |
| boost          | 1                             |
| shake          | 1                             |
| fora           | 1                             |
| beneficial     | 1                             |
| conduct        | 1                             |
| initiatives    | 1                             |
| resist         | 1                             |
| increase       | 1                             |
| europeans      | 1                             |
| crucial        | 1                             |
| confirmation   | 1                             |
| stated         | 1                             |
| stop           | 1                             |
| breached       | 1                             |
| british        | 1                             |
| sterling       | 1                             |
| performance    | 1                             |
| reassemble     | 1                             |
| join           | 1                             |
| invited        | 1                             |
| slowing        | 1                             |
| giving         | 1                             |
| stimulus       | 1                             |
| emerged        | 1                             |
| karl           | 1                             |
| otto           | 1                             |
| poehl          | 1                             |
| follow         | 1                             |
| suit           | 1                             |
| approach       | 1                             |
| provision      | 1                             |
| talked         | 1                             |
| longer         | 1                             |
| public         | 1                             |
| suggest        | 1                             |
| keeping        | 1                             |
| unchanged      | 1                             |
| sluggish       | 1                             |
| remains        | 1                             |
| stubbornly     | 1                             |
| agenda         | 1                             |
| leading        | 2                             |
| budget         | 2                             |
| reagan         | 2                             |
| around         | 2                             |
| current        | 2                             |
| market         | 2                             |
| no             | 2                             |
| convinced      | 1                             |
| live           | 1                             |
| suggests       | 1                             |
| main           | 1                             |
| happened       | 1                             |
| decision       | 1                             |
| objectives     | 1                             |
| medium         | 1                             |
| goals          | 1                             |
| room           | 1                             |
| agreements     | 1                             |
| however        | 1                             |
| past           | 1                             |
| reflecting     | 1                             |
| position       | 1                             |
| hand           | 1                             |
| stronger       | 1                             |
| policymaker    | 1                             |
| continued      | 1                             |
| calls          | 1                             |
| tax            | 1                             |
| defend         | 1                             |
| according      | 1                             |
| used           | 1                             |
| closely        | 1                             |
| rising         | 1                             |
| strength       | 1                             |
| policymaking   | 1                             |
| offing         | 1                             |
| recently       | 1                             |
| declined       | 1                             |
| identified     | 1                             |
| accord         | 2                             |
| last           | 2                             |
| agreed         | 2                             |
| currencies     | 2                             |
| washington     | 2                             |
| 140            | 1                             |
| speed          | 1                             |
| weeks          | 1                             |
| strongly       | 1                             |
| measures       | 1                             |
| fact           | 1                             |
| helped         | 1                             |
| underlying     | 1                             |
| given          | 1                             |
| think          | 1                             |
| changes        | 1                             |
| instability    | 1                             |
| marks          | 1                             |
| although       | 1                             |
| cooperate      | 1                             |
| dealers        | 1                             |
| mark           | 1                             |
| authorities    | 1                             |
| back           | 1                             |
| concern        | 1                             |
| told           | 1                             |
| cutting        | 1                             |
| ready          | 1                             |
| credit         | 1                             |
| high           | 1                             |
| japan          | 2                             |
| germany        | 2                             |
| major          | 2                             |
| action         | 2                             |
| meet           | 1                             |
| seem           | 1                             |
| whether        | 1                             |
| cuts           | 1                             |
| within         | 1                             |
| first          | 1                             |
| just           | 1                             |
| fund           | 1                             |
| package        | 1                             |
| change         | 1                             |
| asked          | 1                             |
| comments       | 1                             |
| continue       | 1                             |
| 22             | 1                             |
| recent         | 1                             |
| meetings       | 1                             |
| several        | 1                             |
| bonn           | 1                             |
| congress       | 1                             |
| intervention   | 1                             |
| reserve        | 1                             |
| meeting        | 1                             |
| economies      | 1                             |
| exchange       | 1                             |
| help           | 1                             |
| believe        | 1                             |
| federal        | 1                             |
| finance        | 1                             |
| ministers      | 1                             |
| year           | 1                             |
| february       | 1                             |
| against        | 1                             |
| united         | 1                             |
| states         | 1                             |
| yen            | 1                             |
| italy          | 1                             |
| not            | 1                             |
| rate           | 1                             |
| france         | 1                             |
| britain        | 1                             |
| canada         | 1                             |
| week           | 1                             |
| treasury       | 1                             |
| secretary      | 1                             |
| james          | 1                             |
| baker          | 1                             |
| trade          | 1                             |
| reuter         | 1                             |

</details>

<details name="173">
<summary>Statystyki termów dla pliku: 173.txt</summary>

| Term           | Liczba wystąpień w dokumencie |
| -------------- | ----------------------------- |
| yesterday      | 4                             |
| monetary       | 6                             |
| relatively     | 3                             |
| japanese       | 5                             |
| sources        | 5                             |
| made           | 3                             |
| european       | 3                             |
| sharp          | 3                             |
| currency       | 5                             |
| nations        | 6                             |
| seven          | 4                             |
| statement      | 3                             |
| cooperation    | 3                             |
| ranges         | 3                             |
| fall           | 3                             |
| dollar         | 5                             |
| paris          | 5                             |
| trade          | 5                             |
| billion        | 4                             |
| departure      | 2                             |
| wilson         | 2                             |
| balances       | 2                             |
| zones          | 2                             |
| tokyo          | 3                             |
| agreement      | 3                             |
| meeting        | 3                             |
| bonn           | 3                             |
| united         | 4                             |
| states         | 4                             |
| appears        | 2                             |
| considered     | 2                             |
| announced      | 2                             |
| drive          | 2                             |
| objectives     | 2                             |
| leading        | 3                             |
| dlrs           | 3                             |
| exchange       | 3                             |
| finance        | 3                             |
| west           | 4                             |
| germany        | 4                             |
| economy        | 2                             |
| years          | 2                             |
| volcker        | 2                             |
| one            | 3                             |
| package        | 2                             |
| stability      | 2                             |
| term           | 2                             |
| yen            | 3                             |
| accord         | 3                             |
| economic       | 3                             |
| action         | 3                             |
| major          | 3                             |
| industrial     | 3                             |
| japan          | 3                             |
| deficit        | 3                             |
| rise           | 2                             |
| meetings       | 2                             |
| rates          | 2                             |
| intervention   | 2                             |
| recent         | 2                             |
| minister       | 2                             |
| target         | 2                             |
| budget         | 2                             |
| ministers      | 2                             |
| countries      | 2                             |
| february       | 2                             |
| current        | 2                             |
| central        | 2                             |
| against        | 2                             |
| 34             | 1                             |
| 48             | 1                             |
| sought         | 1                             |
| satisfied      | 1                             |
| allows         | 1                             |
| reaffirm       | 1                             |
| stimulation    | 1                             |
| endorses       | 1                             |
| worth          | 1                             |
| liberal        | 1                             |
| party          | 1                             |
| eve            | 1                             |
| attend         | 1                             |
| worded         | 1                             |
| terming        | 1                             |
| extraordinary  | 1                             |
| repeated       | 1                             |
| willingness    | 1                             |
| resulted       | 1                             |
| unsuccessful   | 1                             |
| scale          | 1                             |
| successful     | 1                             |
| feeling        | 1                             |
| replaced       | 1                             |
| bickering      | 1                             |
| differences    | 1                             |
| whose          | 1                             |
| risen          | 1                             |
| face           | 1                             |
| won            | 1                             |
| acceptance     | 1                             |
| acceptable     | 1                             |
| argues         | 1                             |
| shifts         | 1                             |
| needed         | 1                             |
| remedy         | 1                             |
| imbalance      | 1                             |
| mention        | 1                             |
| though         | 1                             |
| implied        | 1                             |
| reafffirmation | 1                             |
| shortfall      | 1                             |
| reached        | 1                             |
| nearly         | 1                             |
| argument       | 1                             |
| capitol        | 1                             |
| hill           | 1                             |
| clearly        | 1                             |
| pose           | 1                             |
| substantial    | 1                             |
| inflationary   | 1                             |
| undermine      | 1                             |
| warned         | 1                             |
| independent    | 1                             |
| privately      | 1                             |
| remained       | 1                             |
| unit           | 1                             |
| worry          | 1                             |
| blunts         | 1                             |
| monolith       | 1                             |
| concentrate    | 1                             |
| binding        | 1                             |
| canadian       | 1                             |
| michael        | 1                             |
| good           | 1                             |
| prepare        | 1                             |
| norms          | 1                             |
| limited        | 1                             |
| number         | 1                             |
| deviations     | 1                             |
| guidelines     | 1                             |
| consultations  | 1                             |
| corrective     | 1                             |
| inclusion      | 1                             |
| london         | 1                             |
| unsuccessfully | 1                             |
| limit          | 1                             |
| fluctuations   | 1                             |
| concept        | 1                             |
| rigid          | 1                             |
| free           | 1                             |
| currencies     | 2                             |
| washington     | 2                             |
| will           | 2                             |
| 145            | 1                             |
| 153            | 1                             |
| 170            | 1                             |
| ruling         | 1                             |
| democratic     | 1                             |
| miyazawa       | 1                             |
| urgent         | 1                             |
| reaffirmed     | 1                             |
| noting         | 1                             |
| consistent     | 1                             |
| therefore      | 1                             |
| close          | 1                             |
| unprecedented  | 1                             |
| extremely      | 1                             |
| light          | 1                             |
| announcement   | 1                             |
| growing        | 1                             |
| among          | 1                             |
| medium         | 1                             |
| past           | 1                             |
| anything       | 1                             |
| gerhard        | 1                             |
| stoltenberg    | 1                             |
| place          | 1                             |
| however        | 1                             |
| essential      | 1                             |
| curbing        | 1                             |
| similar        | 1                             |
| risks          | 1                             |
| momentum       | 1                             |
| confidence     | 1                             |
| force          | 1                             |
| welcomed       | 1                             |
| once           | 1                             |
| continued      | 1                             |
| summit         | 1                             |
| report         | 1                             |
| backed         | 1                             |
| conditions     | 1                             |
| required       | 1                             |
| implies        | 1                             |
| direction      | 1                             |
| sounded        | 1                             |
| allies         | 1                             |
| secret         | 1                             |
| secretary      | 2                             |
| baker          | 2                             |
| france         | 2                             |
| rate           | 2                             |
| markets        | 2                             |
| long           | 1                             |
| latest         | 1                             |
| development    | 1                             |
| powers         | 1                             |
| supplementary  | 1                             |
| strongly       | 1                             |
| broadly        | 1                             |
| reality        | 1                             |
| concerted      | 1                             |
| halt           | 1                             |
| bankers        | 1                             |
| america        | 1                             |
| already        | 1                             |
| taken          | 1                             |
| commitment     | 1                             |
| even           | 1                             |
| earlier        | 1                             |
| board          | 1                             |
| paul           | 1                             |
| redress        | 1                             |
| future         | 1                             |
| politically    | 1                             |
| stable         | 1                             |
| export         | 1                             |
| meanwhile      | 1                             |
| making         | 1                             |
| coordination   | 1                             |
| progress       | 1                             |
| leaders        | 1                             |
| want           | 1                             |
| agree          | 1                             |
| inflation      | 1                             |
| account        | 1                             |
| result         | 1                             |
| worried        | 1                             |
| moving         | 1                             |
| system         | 1                             |
| mark           | 1                             |
| believed       | 1                             |
| level          | 1                             |
| within         | 1                             |
| fundamentals   | 1                             |
| continue       | 1                             |
| foster         | 1                             |
| understood     | 1                             |
| short          | 1                             |
| cuts           | 1                             |
| record         | 1                             |
| chairman       | 1                             |
| renewed        | 1                             |
| weak           | 1                             |
| talks          | 1                             |
| meet           | 1                             |
| june           | 1                             |
| fund           | 1                             |
| whether        | 1                             |
| just           | 1                             |
| 22             | 1                             |
| today          | 1                             |
| group          | 1                             |
| policies       | 1                             |
| huge           | 1                             |
| surpluses      | 1                             |
| cut            | 1                             |
| reserve        | 1                             |
| imbalances     | 1                             |
| fed            | 1                             |
| interest       | 1                             |
| policy         | 1                             |
| say            | 1                             |
| stimulate      | 1                             |
| stabilize      | 1                             |
| believe        | 1                             |
| federal        | 1                             |
| around         | 1                             |
| no             | 1                             |
| year           | 1                             |
| financial      | 1                             |
| international  | 1                             |
| growth         | 1                             |
| reagan         | 1                             |
| administration | 1                             |
| italy          | 1                             |
| bank           | 1                             |
| not            | 1                             |
| last           | 1                             |
| treasury       | 1                             |
| james          | 1                             |
| britain        | 1                             |
| canada         | 1                             |
| week           | 1                             |
| reuter         | 1                             |
</details>

## Zadanie 5. Dla każdego dokumentu przygotuj wykres ilustrujący częstość f występowania termów w dokumencie

## Zadanie 6. Zbuduj stop listę wraz ze statystyką występowania słów. Usuń wyrazy ze stop listy z analizowanych tekstów

W ramach zadania wykorzystano gotową stoplistę do języka angielskiego znajdującą się [TUTAJ](https://github.com/stopwords-iso/stopwords-en). Wykorzystanie gotowej listy zdawało się najlepszym wyborem w tym przypadku. Oprócz tego usunięto wszystkie termy będące liczbami.

Ostatecznie usunięto `622 termów`.

Ostateczne termy zaprezentowano w poniżej tabeli:

<details>
<summary>Ostateczna tabela termów</summary>

| Term             | Liczba wystąpień we wszystkich dokumentach |
| ---------------- | ------------------------------------------ |
| dollar           | 95                                         |
| japan            | 55                                         |
| yen              | 43                                         |
| trade            | 43                                         |
| currency         | 40                                         |
| economic         | 40                                         |
| paris            | 40                                         |
| bank             | 38                                         |
| nations          | 35                                         |
| west             | 35                                         |
| germany          | 33                                         |
| monetary         | 32                                         |
| markets          | 30                                         |
| deficit          | 29                                         |
| industrial       | 25                                         |
| accord           | 24                                         |
| action           | 24                                         |
| countries        | 24                                         |
| sources          | 24                                         |
| central          | 23                                         |
| market           | 23                                         |
| japanese         | 23                                         |
| week             | 22                                         |
| officials        | 22                                         |
| united           | 22                                         |
| administration   | 21                                         |
| intervention     | 20                                         |
| major            | 20                                         |
| baker            | 20                                         |
| dealers          | 19                                         |
| currencies       | 19                                         |
| official         | 19                                         |
| agreement        | 19                                         |
| budget           | 18                                         |
| dlrs             | 17                                         |
| growth           | 17                                         |
| washington       | 17                                         |
| rates            | 17                                         |
| exchange         | 15                                         |
| international    | 15                                         |
| leading          | 15                                         |
| tokyo            | 14                                         |
| agreed           | 14                                         |
| rate             | 14                                         |
| secretary        | 14                                         |
| reagan           | 14                                         |
| ranges           | 14                                         |
| policy           | 14                                         |
| fed              | 13                                         |
| stability        | 13                                         |
| package          | 13                                         |
| fall             | 13                                         |
| finance          | 13                                         |
| february         | 12                                         |
| treasury         | 12                                         |
| yesterday        | 12                                         |
| france           | 12                                         |
| financial        | 12                                         |
| bonn             | 12                                         |
| current          | 12                                         |
| meeting          | 12                                         |
| ministers        | 12                                         |
| meetings         | 12                                         |
| britain          | 11                                         |
| imbalances       | 11                                         |
| statement        | 11                                         |
| canada           | 10                                         |
| support          | 10                                         |
| james            | 10                                         |
| april            | 10                                         |
| reuter           | 10                                         |
| target           | 10                                         |
| minister         | 10                                         |
| term             | 10                                         |
| levels           | 9                                          |
| fundamentals     | 9                                          |
| policies         | 9                                          |
| rise             | 9                                          |
| italy            | 9                                          |
| time             | 9                                          |
| authorities      | 8                                          |
| foreign          | 8                                          |
| federal          | 8                                          |
| stabilize        | 8                                          |
| decline          | 8                                          |
| analysts         | 8                                          |
| cooperation      | 8                                          |
| stimulate        | 8                                          |
| german           | 8                                          |
| debt             | 8                                          |
| talks            | 8                                          |
| commitment       | 7                                          |
| reserve          | 7                                          |
| view             | 7                                          |
| foster           | 7                                          |
| believed         | 7                                          |
| economies        | 7                                          |
| congress         | 7                                          |
| measures         | 7                                          |
| called           | 7                                          |
| cuts             | 7                                          |
| sharp            | 7                                          |
| cut              | 7                                          |
| understood       | 7                                          |
| european         | 7                                          |
| study            | 7                                          |
| pact             | 6                                          |
| banks            | 6                                          |
| level            | 6                                          |
| source           | 6                                          |
| huge             | 6                                          |
| stable           | 6                                          |
| surpluses        | 6                                          |
| month            | 6                                          |
| volcker          | 6                                          |
| fund             | 6                                          |
| pct              | 6                                          |
| economy          | 6                                          |
| carter           | 6                                          |
| politically      | 6                                          |
| short            | 6                                          |
| consistent       | 6                                          |
| broadly          | 6                                          |
| actions          | 5                                          |
| account          | 5                                          |
| dlr              | 5                                          |
| future           | 5                                          |
| halt             | 5                                          |
| appears          | 5                                          |
| record           | 5                                          |
| signs            | 5                                          |
| redress          | 5                                          |
| change           | 5                                          |
| sales            | 5                                          |
| miyazawa         | 5                                          |
| chairman         | 5                                          |
| weak             | 5                                          |
| june             | 5                                          |
| considered       | 5                                          |
| renewed          | 5                                          |
| development      | 5                                          |
| bankers          | 5                                          |
| meet             | 5                                          |
| continue         | 5                                          |
| president        | 5                                          |
| hormats          | 5                                          |
| confidence       | 5                                          |
| powers           | 5                                          |
| commitments      | 5                                          |
| drive            | 5                                          |
| announced        | 5                                          |
| objectives       | 5                                          |
| dollars          | 4                                          |
| york             | 4                                          |
| board            | 4                                          |
| coordination     | 4                                          |
| marks            | 4                                          |
| concerted        | 4                                          |
| protectionist    | 4                                          |
| sentiment        | 4                                          |
| comments         | 4                                          |
| comment          | 4                                          |
| situation        | 4                                          |
| speed            | 4                                          |
| ready            | 4                                          |
| cutting          | 4                                          |
| months           | 4                                          |
| underlying       | 4                                          |
| report           | 4                                          |
| demand           | 4                                          |
| progress         | 4                                          |
| reality          | 4                                          |
| agree            | 4                                          |
| global           | 4                                          |
| america          | 4                                          |
| stood            | 4                                          |
| worried          | 4                                          |
| moving           | 4                                          |
| told             | 4                                          |
| reduce           | 4                                          |
| trading          | 4                                          |
| paul             | 4                                          |
| pressure         | 4                                          |
| export           | 4                                          |
| bond             | 4                                          |
| loans            | 4                                          |
| developing       | 4                                          |
| plan             | 4                                          |
| growing          | 4                                          |
| inflation        | 4                                          |
| earlier          | 4                                          |
| concern          | 4                                          |
| bonds            | 4                                          |
| mark             | 4                                          |
| leaders          | 4                                          |
| reaffirmed       | 4                                          |
| result           | 4                                          |
| supplementary    | 4                                          |
| departure        | 4                                          |
| wilson           | 4                                          |
| balances         | 4                                          |
| zones            | 4                                          |
| conditions       | 4                                          |
| secret           | 4                                          |
| fiscal           | 4                                          |
| set              | 4                                          |
| england          | 3                                          |
| behalf           | 3                                          |
| bought           | 3                                          |
| war              | 3                                          |
| traders          | 3                                          |
| american         | 3                                          |
| expects          | 3                                          |
| senior           | 3                                          |
| dealer           | 3                                          |
| intervened       | 3                                          |
| helped           | 3                                          |
| cooperate        | 3                                          |
| protectionism    | 3                                          |
| mulford          | 3                                          |
| developments     | 3                                          |
| strategy         | 3                                          |
| house            | 3                                          |
| joined           | 3                                          |
| promise          | 3                                          |
| massive          | 3                                          |
| western          | 3                                          |
| bolster          | 3                                          |
| domestic         | 3                                          |
| required         | 3                                          |
| unprecedented    | 3                                          |
| weeks            | 3                                          |
| review           | 3                                          |
| urgent           | 3                                          |
| include          | 3                                          |
| essential        | 3                                          |
| policymakers     | 3                                          |
| close            | 3                                          |
| extremely        | 3                                          |
| issues           | 3                                          |
| slow             | 3                                          |
| real             | 3                                          |
| success          | 3                                          |
| discuss          | 3                                          |
| credit           | 3                                          |
| light            | 3                                          |
| risks            | 3                                          |
| momentum         | 3                                          |
| slide            | 3                                          |
| debtor           | 3                                          |
| grow             | 3                                          |
| french           | 3                                          |
| issue            | 3                                          |
| visit            | 3                                          |
| sounded          | 3                                          |
| discussed        | 3                                          |
| expansion        | 3                                          |
| issuing          | 3                                          |
| government       | 3                                          |
| genuine          | 3                                          |
| force            | 3                                          |
| coordinated      | 3                                          |
| instability      | 3                                          |
| announcement     | 3                                          |
| summit           | 3                                          |
| allies           | 3                                          |
| balladur         | 3                                          |
| accept           | 3                                          |
| recession        | 3                                          |
| darman           | 3                                          |
| gerhard          | 3                                          |
| stoltenberg      | 3                                          |
| annual           | 3                                          |
| curb             | 3                                          |
| unconvinced      | 3                                          |
| ruling           | 3                                          |
| democratic       | 3                                          |
| noting           | 3                                          |
| medium           | 3                                          |
| curbing          | 3                                          |
| welcomed         | 3                                          |
| continued        | 3                                          |
| implies          | 3                                          |
| direction        | 3                                          |
| tax              | 3                                          |
| prospects        | 3                                          |
| retreat          | 2                                          |
| post             | 2                                          |
| purchased        | 2                                          |
| bourdain         | 2                                          |
| bankamerica      | 2                                          |
| corp             | 2                                          |
| okada            | 2                                          |
| drop             | 2                                          |
| widespread       | 2                                          |
| hard             | 2                                          |
| east             | 2                                          |
| failed           | 2                                          |
| strong           | 2                                          |
| january          | 2                                          |
| mln              | 2                                          |
| signalled        | 2                                          |
| surge            | 2                                          |
| appeared         | 2                                          |
| extreme          | 2                                          |
| convinced        | 2                                          |
| rising           | 2                                          |
| stronger         | 2                                          |
| key              | 2                                          |
| strength         | 2                                          |
| swiss            | 2                                          |
| reflect          | 2                                          |
| increasingly     | 2                                          |
| feel             | 2                                          |
| nation           | 2                                          |
| sunday           | 2                                          |
| established      | 2                                          |
| targets          | 2                                          |
| read             | 2                                          |
| services         | 2                                          |
| succeed          | 2                                          |
| stimulating      | 2                                          |
| solve            | 2                                          |
| white            | 2                                          |
| bid              | 2                                          |
| identified       | 2                                          |
| facing           | 2                                          |
| uproar           | 2                                          |
| apparent         | 2                                          |
| lack             | 2                                          |
| dramatic         | 2                                          |
| tariffs          | 2                                          |
| semi             | 2                                          |
| surplus          | 2                                          |
| underscored      | 2                                          |
| closely          | 2                                          |
| reflecting       | 2                                          |
| policymaker      | 2                                          |
| calls            | 2                                          |
| falling          | 2                                          |
| policymaking     | 2                                          |
| live             | 2                                          |
| faster           | 2                                          |
| bring            | 2                                          |
| gap              | 2                                          |
| sold             | 2                                          |
| pleas            | 2                                          |
| stabilise        | 2                                          |
| manager          | 2                                          |
| remain           | 2                                          |
| push             | 2                                          |
| exporters        | 2                                          |
| lost             | 2                                          |
| credibility      | 2                                          |
| challenge        | 2                                          |
| kiichi           | 2                                          |
| remarks          | 2                                          |
| question         | 2                                          |
| trend            | 2                                          |
| basic            | 2                                          |
| selling          | 2                                          |
| deputy           | 2                                          |
| closed           | 2                                          |
| prevent          | 2                                          |
| continuing       | 2                                          |
| expected         | 2                                          |
| business         | 2                                          |
| range            | 2                                          |
| pick             | 2                                          |
| initiative       | 2                                          |
| poorest          | 2                                          |
| strengthening    | 2                                          |
| pressing         | 2                                          |
| environment      | 2                                          |
| products         | 2                                          |
| increases        | 2                                          |
| stock            | 2                                          |
| unveiled         | 2                                          |
| prime            | 2                                          |
| position         | 2                                          |
| suggested        | 2                                          |
| coordinate       | 2                                          |
| deficits         | 2                                          |
| affect           | 2                                          |
| difficulties     | 2                                          |
| discussions      | 2                                          |
| impact           | 2                                          |
| decision         | 2                                          |
| offing           | 2                                          |
| debate           | 2                                          |
| discount         | 2                                          |
| securities       | 2                                          |
| vice             | 2                                          |
| statements       | 2                                          |
| supported        | 2                                          |
| prospect         | 2                                          |
| expect           | 2                                          |
| timing           | 2                                          |
| urged            | 2                                          |
| declined         | 2                                          |
| aimed            | 2                                          |
| imf              | 2                                          |
| pledges          | 2                                          |
| venice           | 2                                          |
| rapid            | 2                                          |
| descent          | 2                                          |
| artificially     | 2                                          |
| lead             | 2                                          |
| committed        | 2                                          |
| agreements       | 2                                          |
| fight            | 2                                          |
| upturn           | 2                                          |
| sought           | 2                                          |
| satisfied        | 2                                          |
| reaffirm         | 2                                          |
| stimulation      | 2                                          |
| endorses         | 2                                          |
| defend           | 2                                          |
| happened         | 2                                          |
| worth            | 2                                          |
| liberal          | 2                                          |
| party            | 2                                          |
| eve              | 2                                          |
| attend           | 2                                          |
| worded           | 2                                          |
| terming          | 2                                          |
| extraordinary    | 2                                          |
| repeated         | 2                                          |
| willingness      | 2                                          |
| unsuccessful     | 2                                          |
| scale            | 2                                          |
| successful       | 2                                          |
| feeling          | 2                                          |
| replaced         | 2                                          |
| bickering        | 2                                          |
| differences      | 2                                          |
| risen            | 2                                          |
| acceptance       | 2                                          |
| acceptable       | 2                                          |
| argues           | 2                                          |
| shifts           | 2                                          |
| remedy           | 2                                          |
| imbalance        | 2                                          |
| mention          | 2                                          |
| implied          | 2                                          |
| reafffirmation   | 2                                          |
| shortfall        | 2                                          |
| reached          | 2                                          |
| argument         | 2                                          |
| capitol          | 2                                          |
| hill             | 2                                          |
| pose             | 2                                          |
| substantial      | 2                                          |
| inflationary     | 2                                          |
| undermine        | 2                                          |
| warned           | 2                                          |
| independent      | 2                                          |
| privately        | 2                                          |
| remained         | 2                                          |
| unit             | 2                                          |
| worry            | 2                                          |
| blunts           | 2                                          |
| monolith         | 2                                          |
| concentrate      | 2                                          |
| binding          | 2                                          |
| canadian         | 2                                          |
| michael          | 2                                          |
| prepare          | 2                                          |
| norms            | 2                                          |
| limited          | 2                                          |
| deviations       | 2                                          |
| guidelines       | 2                                          |
| consultations    | 2                                          |
| corrective       | 2                                          |
| inclusion        | 2                                          |
| london           | 2                                          |
| unsuccessfully   | 2                                          |
| limit            | 2                                          |
| fluctuations     | 2                                          |
| concept          | 2                                          |
| rigid            | 2                                          |
| resolve          | 2                                          |
| oecd             | 2                                          |
| met              | 2                                          |
| deep             | 2                                          |
| roughly          | 2                                          |
| promised         | 2                                          |
| goals            | 2                                          |
| hand             | 2                                          |
| suggests         | 2                                          |
| main             | 2                                          |
| refused          | 2                                          |
| strengthen       | 2                                          |
| specific         | 2                                          |
| bands            | 2                                          |
| bundesbank       | 2                                          |
| private          | 2                                          |
| succeeded        | 1                                          |
| staunching       | 1                                          |
| losses           | 1                                          |
| headed           | 1                                          |
| perceive         | 1                                          |
| differing        | 1                                          |
| realities        | 1                                          |
| hold             | 1                                          |
| sway             | 1                                          |
| argue            | 1                                          |
| bigger           | 1                                          |
| fore             | 1                                          |
| dropped          | 1                                          |
| lows             | 1                                          |
| reports          | 1                                          |
| recover          | 1                                          |
| afternoon        | 1                                          |
| regain           | 1                                          |
| monday           | 1                                          |
| closing          | 1                                          |
| rumors           | 1                                          |
| modest           | 1                                          |
| talk             | 1                                          |
| circulated       | 1                                          |
| confirmed        | 1                                          |
| march            | 1                                          |
| rumored          | 1                                          |
| displeasure      | 1                                          |
| prevailing       | 1                                          |
| overly           | 1                                          |
| impressed        | 1                                          |
| soften           | 1                                          |
| moves            | 1                                          |
| purchases        | 1                                          |
| suggesting       | 1                                          |
| watered          | 1                                          |
| completed        | 1                                          |
| reinforcing      | 1                                          |
| resolute         | 1                                          |
| doubts           | 1                                          |
| token            | 1                                          |
| gestures         | 1                                          |
| chris            | 1                                          |
| earl             | 1                                          |
| johnson          | 1                                          |
| harris           | 1                                          |
| trust            | 1                                          |
| savings          | 1                                          |
| chicago          | 1                                          |
| wave             | 1                                          |
| limits           | 1                                          |
| extent           | 1                                          |
| endorse          | 1                                          |
| break            | 1                                          |
| ties             | 1                                          |
| hands            | 1                                          |
| intervene        | 1                                          |
| albert           | 1                                          |
| soria            | 1                                          |
| politicized      | 1                                          |
| denials          | 1                                          |
| countenance      | 1                                          |
| trim             | 1                                          |
| majority         | 1                                          |
| merchandise      | 1                                          |
| signal           | 1                                          |
| sell             | 1                                          |
| kicked           | 1                                          |
| downside         | 1                                          |
| based            | 1                                          |
| frictions        | 1                                          |
| political        | 1                                          |
| natsuo           | 1                                          |
| sumitomo         | 1                                          |
| chance           | 1                                          |
| structural       | 1                                          |
| expand           | 1                                          |
| couple           | 1                                          |
| days             | 1                                          |
| hasten           | 1                                          |
| signaled         | 1                                          |
| tolerance        | 1                                          |
| aides            | 1                                          |
| assistant        | 1                                          |
| david            | 1                                          |
| soaring          | 1                                          |
| slip             | 1                                          |
| tongue           | 1                                          |
| late             | 1                                          |
| indications      | 1                                          |
| anytime          | 1                                          |
| learning         | 1                                          |
| extract          | 1                                          |
| imposed          | 1                                          |
| electronic       | 1                                          |
| adhere           | 1                                          |
| conductor        | 1                                          |
| pricing          | 1                                          |
| shift            | 1                                          |
| designed         | 1                                          |
| appease          | 1                                          |
| mounting         | 1                                          |
| congressional    | 1                                          |
| anger            | 1                                          |
| reconvene        | 1                                          |
| news             | 1                                          |
| earned           | 1                                          |
| improvement      | 1                                          |
| stunned          | 1                                          |
| derive           | 1                                          |
| benefits         | 1                                          |
| envisages        | 1                                          |
| imply            | 1                                          |
| confident        | 1                                          |
| governments      | 1                                          |
| including        | 1                                          |
| carried          | 1                                          |
| undermined       | 1                                          |
| track            | 1                                          |
| stimulative      | 1                                          |
| unsettled        | 1                                          |
| obvious          | 1                                          |
| exception        | 1                                          |
| feels            | 1                                          |
| managed          | 1                                          |
| spent            | 1                                          |
| estimated        | 1                                          |
| intervening      | 1                                          |
| upset            | 1                                          |
| hearted          | 1                                          |
| attempt          | 1                                          |
| flouting         | 1                                          |
| outright         | 1                                          |
| understanding    | 1                                          |
| struck           | 1                                          |
| reminder         | 1                                          |
| departing        | 1                                          |
| language         | 1                                          |
| triggered        | 1                                          |
| responsibilities | 1                                          |
| unravel          | 1                                          |
| spirit           | 1                                          |
| realisation      | 1                                          |
| leave            | 1                                          |
| agrees           | 1                                          |
| external         | 1                                          |
| adjusted         | 1                                          |
| cede             | 1                                          |
| national         | 1                                          |
| sovereignty      | 1                                          |
| closer           | 1                                          |
| operation        | 1                                          |
| status           | 1                                          |
| explain          | 1                                          |
| program          | 1                                          |
| plans            | 1                                          |
| serve            | 1                                          |
| notice           | 1                                          |
| wait             | 1                                          |
| industrialised   | 1                                          |
| stabilisation    | 1                                          |
| reversal         | 1                                          |
| plaza            | 1                                          |
| weaken           | 1                                          |
| overvalued       | 1                                          |
| confusion        | 1                                          |
| ranks            | 1                                          |
| encouraged       | 1                                          |
| matched          | 1                                          |
| weekend          | 1                                          |
| zone             | 1                                          |
| reverse          | 1                                          |
| governor         | 1                                          |
| satoshi          | 1                                          |
| sumita           | 1                                          |
| brought          | 1                                          |
| raised           | 1                                          |
| cool             | 1                                          |
| response         | 1                                          |
| reflected        | 1                                          |
| oversupply       | 1                                          |
| sheer            | 1                                          |
| speculative      | 1                                          |
| nature           | 1                                          |
| koichi           | 1                                          |
| miyazaki         | 1                                          |
| sanwa            | 1                                          |
| matter           | 1                                          |
| operators        | 1                                          |
| tuesday          | 1                                          |
| gain             | 1                                          |
| temporary        | 1                                          |
| meets            | 1                                          |
| chief            | 1                                          |
| unsure           | 1                                          |
| methods          | 1                                          |
| sceptical        | 1                                          |
| particulary      | 1                                          |
| limiting         | 1                                          |
| options          | 1                                          |
| tadahiko         | 1                                          |
| nashimoto        | 1                                          |
| bearish          | 1                                          |
| factor           | 1                                          |
| bills            | 1                                          |
| september        | 1                                          |
| delayed          | 1                                          |
| expectation      | 1                                          |
| depreciation     | 1                                          |
| request          | 1                                          |
| houses           | 1                                          |
| ministry         | 1                                          |
| industry         | 1                                          |
| restrict         | 1                                          |
| ineffective      | 1                                          |
| anticipating     | 1                                          |
| active           | 1                                          |
| institutional    | 1                                          |
| hedge            | 1                                          |
| holdings         | 1                                          |
| starting         | 1                                          |
| traded           | 1                                          |
| falls            | 1                                          |
| downward         | 1                                          |
| concerns         | 1                                          |
| confrontations   | 1                                          |
| deteriorating    | 1                                          |
| auspices         | 1                                          |
| sunk             | 1                                          |
| upsetting        | 1                                          |
| uncertainty      | 1                                          |
| vitality         | 1                                          |
| heavily          | 1                                          |
| indebted         | 1                                          |
| carry            | 1                                          |
| burden           | 1                                          |
| vast             | 1                                          |
| assistance       | 1                                          |
| diplomatic       | 1                                          |
| sort             | 1                                          |
| seoul            | 1                                          |
| drawn            | 1                                          |
| brazil           | 1                                          |
| suspended        | 1                                          |
| payments         | 1                                          |
| commercial       | 1                                          |
| responded        | 1                                          |
| laying           | 1                                          |
| groundwork       | 1                                          |
| writing          | 1                                          |
| brazilian        | 1                                          |
| separately       | 1                                          |
| jacques          | 1                                          |
| chirac           | 1                                          |
| funnel           | 1                                          |
| worldwide        | 1                                          |
| grain            | 1                                          |
| undoubtedly      | 1                                          |
| embraced         | 1                                          |
| special          | 1                                          |
| disussing        | 1                                          |
| assess           | 1                                          |
| funding          | 1                                          |
| largest          | 1                                          |
| attempting       | 1                                          |
| hope             | 1                                          |
| controlling      | 1                                          |
| evidence         | 1                                          |
| activity         | 1                                          |
| forecasts        | 1                                          |
| ability          | 1                                          |
| absorbed         | 1                                          |
| exports          | 1                                          |
| country          | 1                                          |
| allowing         | 1                                          |
| earn             | 1                                          |
| critical         | 1                                          |
| running          | 1                                          |
| import           | 1                                          |
| wide             | 1                                          |
| ranging          | 1                                          |
| touching         | 1                                          |
| examination      | 1                                          |
| pressures        | 1                                          |
| wake             | 1                                          |
| microchip        | 1                                          |
| accelerated      | 1                                          |
| grew             | 1                                          |
| alarmed          | 1                                          |
| prompted         | 1                                          |
| charges          | 1                                          |
| chip             | 1                                          |
| fair             | 1                                          |
| imports          | 1                                          |
| undermining      | 1                                          |
| fundamental      | 1                                          |
| price            | 1                                          |
| weakness         | 1                                          |
| commodities      | 1                                          |
| mainstay         | 1                                          |
| gather           | 1                                          |
| sliding          | 1                                          |
| larger           | 1                                          |
| approving        | 1                                          |
| inter            | 1                                          |
| link             | 1                                          |
| loan             | 1                                          |
| dams             | 1                                          |
| projects         | 1                                          |
| head             | 1                                          |
| barber           | 1                                          |
| conable          | 1                                          |
| reviewed         | 1                                          |
| reorganization   | 1                                          |
| prepared         | 1                                          |
| assaults         | 1                                          |
| eventually       | 1                                          |
| unveil           | 1                                          |
| distasteful      | 1                                          |
| economists       | 1                                          |
| acknowledged     | 1                                          |
| possibility      | 1                                          |
| denominated      | 1                                          |
| dismissed        | 1                                          |
| speculation      | 1                                          |
| unusual          | 1                                          |
| step             | 1                                          |
| undertake        | 1                                          |
| internationally  | 1                                          |
| effort           | 1                                          |
| defense          | 1                                          |
| accompanied      | 1                                          |
| resisted         | 1                                          |
| raise            | 1                                          |
| chiefly          | 1                                          |
| hurt             | 1                                          |
| fragile          | 1                                          |
| divided          | 1                                          |
| yasuhiro         | 1                                          |
| nakasone         | 1                                          |
| focus            | 1                                          |
| steady           | 1                                          |
| charles          | 1                                          |
| taylor           | 1                                          |
| analyst          | 1                                          |
| prudential       | 1                                          |
| bache            | 1                                          |
| resort           | 1                                          |
| mind             | 1                                          |
| troubles         | 1                                          |
| faced            | 1                                          |
| collapsed        | 1                                          |
| unleashed        | 1                                          |
| nov              | 1                                          |
| resounding       | 1                                          |
| robert           | 1                                          |
| goldman          | 1                                          |
| sachs            | 1                                          |
| administrations  | 1                                          |
| stands           | 1                                          |
| rhetoric         | 1                                          |
| evidencing       | 1                                          |
| practice         | 1                                          |
| unequivocally    | 1                                          |
| issued           | 1                                          |
| franc            | 1                                          |
| essentially      | 1                                          |
| buttressing      | 1                                          |
| pyschological    | 1                                          |
| attracting       | 1                                          |
| investors        | 1                                          |
| notes            | 1                                          |
| drawings         | 1                                          |
| reserves         | 1                                          |
| held             | 1                                          |
| sdrs             | 1                                          |
| increased        | 1                                          |
| swap             | 1                                          |
| lines            | 1                                          |
| stepped          | 1                                          |
| gold             | 1                                          |
| stephen          | 1                                          |
| axilrod          | 1                                          |
| nikko            | 1                                          |
| argued           | 1                                          |
| difficult        | 1                                          |
| fulfill          | 1                                          |
| undertaken       | 1                                          |
| coincide         | 1                                          |
| democracies      | 1                                          |
| forged           | 1                                          |
| fundamentally    | 1                                          |
| nearing          | 1                                          |
| comfortable      | 1                                          |
| reluctance       | 1                                          |
| firmly           | 1                                          |
| desire           | 1                                          |
| fear             | 1                                          |
| fanning          | 1                                          |
| damn             | 1                                          |
| deeply           | 1                                          |
| efforts          | 1                                          |
| strengthened     | 1                                          |
| exasperated      | 1                                          |
| drove            | 1                                          |
| rapidly          | 1                                          |
| severely         | 1                                          |
| disrupted        | 1                                          |
| heed             | 1                                          |
| reassure         | 1                                          |
| edouard          | 1                                          |
| americans        | 1                                          |
| weaker           | 1                                          |
| involves         | 1                                          |
| risk             | 1                                          |
| tangible         | 1                                          |
| threat           | 1                                          |
| feared           | 1                                          |
| picture          | 1                                          |
| changed          | 1                                          |
| settled          | 1                                          |
| pattern          | 1                                          |
| enthusiasm       | 1                                          |
| distaste         | 1                                          |
| stems            | 1                                          |
| fears            | 1                                          |
| outgoing         | 1                                          |
| richard          | 1                                          |
| television       | 1                                          |
| interviewers     | 1                                          |
| driving          | 1                                          |
| adversely        | 1                                          |
| balance          | 1                                          |
| ultimately       | 1                                          |
| throw            | 1                                          |
| slower           | 1                                          |
| maintained       | 1                                          |
| healthy          | 1                                          |
| resorting        | 1                                          |
| acknowledging    | 1                                          |
| life             | 1                                          |
| adjustments      | 1                                          |
| fixed            | 1                                          |
| rein             | 1                                          |
| deepens          | 1                                          |
| implementing     | 1                                          |
| undertakings     | 1                                          |
| misinterpreted   | 1                                          |
| wrongly          | 1                                          |
| stabilizing      | 1                                          |
| reach            | 1                                          |
| compromise       | 1                                          |
| bolstered        | 1                                          |
| applied          | 1                                          |
| summarized       | 1                                          |
| governors        | 1                                          |
| focusing         | 1                                          |
| created          | 1                                          |
| prospective      | 1                                          |
| meant            | 1                                          |
| initial          | 1                                          |
| reaction         | 1                                          |
| demonstrates     | 1                                          |
| sank             | 1                                          |
| movement         | 1                                          |
| organization     | 1                                          |
| plaguing         | 1                                          |
| paper            | 1                                          |
| preparing        | 1                                          |
| ministerial      | 1                                          |
| forum            | 1                                          |
| coordinating     | 1                                          |
| significance     | 1                                          |
| dogging          | 1                                          |
| attempts         | 1                                          |
| achieve          | 1                                          |
| joint            | 1                                          |
| unusually        | 1                                          |
| unstable         | 1                                          |
| focussed         | 1                                          |
| attention        | 1                                          |
| clues            | 1                                          |
| air              | 1                                          |
| concludes        | 1                                          |
| looked           | 1                                          |
| underscores      | 1                                          |
| seperately       | 1                                          |
| overtures        | 1                                          |
| rebuffed         | 1                                          |
| reductions       | 1                                          |
| steep            | 1                                          |
| widening         | 1                                          |
| difference       | 1                                          |
| yields           | 1                                          |
| average          | 1                                          |
| corrected        | 1                                          |
| crisis           | 1                                          |
| control          | 1                                          |
| equally          | 1                                          |
| reduction        | 1                                          |
| weakening        | 1                                          |
| uncorrected      | 1                                          |
| shave            | 1                                          |
| tough            | 1                                          |
| figure           | 1                                          |
| goal             | 1                                          |
| leadership       | 1                                          |
| representatives  | 1                                          |
| warmly           | 1                                          |
| caution          | 1                                          |
| content          | 1                                          |
| proposed         | 1                                          |
| pushed           | 1                                          |
| sharply          | 1                                          |
| love             | 1                                          |
| accelerate       | 1                                          |
| fell             | 1                                          |
| steeply          | 1                                          |
| quarter          | 1                                          |
| reassured        | 1                                          |
| fails            | 1                                          |
| emerge           | 1                                          |
| planned          | 1                                          |
| narrow           | 1                                          |
| movements        | 1                                          |
| tamed            | 1                                          |
| unruly           | 1                                          |
| build            | 1                                          |
| reason           | 1                                          |
| calm             | 1                                          |
| interview        | 1                                          |
| concluded        | 1                                          |
| period           | 1                                          |
| bury             | 1                                          |
| hatchet          | 1                                          |
| cease            | 1                                          |
| quarrel          | 1                                          |
| focused          | 1                                          |
| left             | 1                                          |
| adjust           | 1                                          |
| periodic         | 1                                          |
| included         | 1                                          |
| measure          | 1                                          |
| jointly          | 1                                          |
| times            | 1                                          |
| toyko            | 1                                          |
| boost            | 1                                          |
| shake            | 1                                          |
| fora             | 1                                          |
| beneficial       | 1                                          |
| conduct          | 1                                          |
| initiatives      | 1                                          |
| resist           | 1                                          |
| increase         | 1                                          |
| europeans        | 1                                          |
| crucial          | 1                                          |
| confirmation     | 1                                          |
| stated           | 1                                          |
| breached         | 1                                          |
| british          | 1                                          |
| sterling         | 1                                          |
| performance      | 1                                          |
| reassemble       | 1                                          |
| invited          | 1                                          |
| slowing          | 1                                          |
| stimulus         | 1                                          |
| emerged          | 1                                          |
| karl             | 1                                          |
| otto             | 1                                          |
| poehl            | 1                                          |
| follow           | 1                                          |
| suit             | 1                                          |
| approach         | 1                                          |
| provision        | 1                                          |
| talked           | 1                                          |
| public           | 1                                          |
| keeping          | 1                                          |
| unchanged        | 1                                          |
| sluggish         | 1                                          |
| remains          | 1                                          |
| stubbornly       | 1                                          |
| agenda           | 1                                          |

</details>

## Zadanie 7. Utwórz macierz częstotliwości TFM, w której element [di, ti] reprezentuje liczbę wystąpień słowa kluczowego ti w dokumencie di

<details>
<summary>Tabla wystąpień termów w poszczególnych plikach</summary>

|                      | 102.txt | 125.txt | 109.txt | 148.txt | 197.txt | 183.txt | 175.txt | 198.txt | 62.txt | 173.txt |
| -------------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- |
| **bank**             | 16      | 2       | 6       | 6       | 1       | 1       | 2       | 0       | 3      | 1       |
| **yen**              | 13      | 4       | 10      | 0       | 5       | 1       | 5       | 1       | 1      | 3       |
| **dollar**           | 12      | 11      | 23      | 4       | 15      | 12      | 5       | 4       | 4      | 5       |
| **japan**            | 10      | 12      | 4       | 4       | 2       | 5       | 5       | 8       | 2      | 3       |
| **currency**         | 9       | 3       | 3       | 0       | 8       | 1       | 7       | 0       | 4      | 5       |
| **dealers**          | 8       | 0       | 10      | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **central**          | 6       | 2       | 4       | 1       | 2       | 0       | 2       | 0       | 4      | 2       |
| **intervention**     | 6       | 1       | 7       | 0       | 0       | 0       | 3       | 0       | 1      | 2       |
| **market**           | 6       | 3       | 8       | 2       | 1       | 1       | 0       | 0       | 2      | 0       |
| **trade**            | 6       | 9       | 2       | 5       | 2       | 3       | 5       | 5       | 1      | 5       |
| **exchange**         | 4       | 2       | 0       | 1       | 0       | 1       | 3       | 0       | 1      | 3       |
| **authorities**      | 4       | 0       | 3       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **fed**              | 4       | 0       | 1       | 0       | 3       | 0       | 1       | 0       | 3      | 1       |
| **foreign**          | 3       | 1       | 0       | 1       | 2       | 0       | 0       | 1       | 0      | 0       |
| **markets**          | 3       | 3       | 1       | 3       | 1       | 7       | 4       | 2       | 4      | 2       |
| **nations**          | 3       | 5       | 4       | 1       | 1       | 1       | 7       | 4       | 3      | 6       |
| **economic**         | 3       | 6       | 0       | 5       | 5       | 2       | 4       | 4       | 8      | 3       |
| **england**          | 3       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **behalf**           | 3       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **bought**           | 3       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **dollars**          | 3       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **pact**             | 3       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 2      | 0       |
| **west**             | 3       | 3       | 2       | 1       | 2       | 4       | 4       | 9       | 3      | 4       |
| **germany**          | 3       | 4       | 2       | 1       | 2       | 4       | 4       | 7       | 2      | 4       |
| **retreat**          | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **major**            | 2       | 1       | 1       | 1       | 1       | 2       | 3       | 4       | 2      | 3       |
| **levels**           | 2       | 2       | 0       | 0       | 0       | 2       | 0       | 1       | 2      | 0       |
| **commitment**       | 2       | 0       | 0       | 0       | 0       | 3       | 1       | 0       | 0      | 1       |
| **accord**           | 2       | 8       | 3       | 1       | 1       | 1       | 3       | 0       | 2      | 3       |
| **banks**            | 2       | 1       | 1       | 1       | 1       | 0       | 0       | 0       | 0      | 0       |
| **post**             | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **war**              | 2       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **traders**          | 2       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **federal**          | 2       | 0       | 0       | 1       | 1       | 1       | 1       | 0       | 1      | 1       |
| **reserve**          | 2       | 0       | 0       | 0       | 1       | 1       | 1       | 0       | 1      | 1       |
| **actions**          | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 3       | 0      | 0       |
| **york**             | 2       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **level**            | 2       | 1       | 0       | 0       | 0       | 1       | 1       | 0       | 0      | 1       |
| **tokyo**            | 2       | 3       | 2       | 0       | 0       | 0       | 3       | 1       | 0      | 3       |
| **dlrs**             | 2       | 2       | 0       | 3       | 1       | 0       | 3       | 3       | 0      | 3       |
| **purchased**        | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **february**         | 2       | 0       | 1       | 1       | 0       | 1       | 3       | 1       | 1      | 2       |
| **account**          | 2       | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0      | 1       |
| **american**         | 2       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **view**             | 2       | 1       | 0       | 0       | 2       | 1       | 0       | 1       | 0      | 0       |
| **bourdain**         | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **bankamerica**      | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **corp**             | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **treasury**         | 2       | 1       | 1       | 1       | 1       | 2       | 1       | 1       | 1      | 1       |
| **deficit**          | 2       | 6       | 1       | 2       | 1       | 4       | 3       | 4       | 3      | 3       |
| **okada**            | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **expects**          | 2       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **drop**             | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **succeeded**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **staunching**       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **losses**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **senior**           | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **headed**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **widespread**       | 1       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **perceive**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **industrial**       | 1       | 2       | 1       | 4       | 2       | 2       | 3       | 3       | 4      | 3       |
| **differing**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stabilize**        | 1       | 1       | 0       | 0       | 1       | 1       | 1       | 2       | 0      | 1       |
| **currencies**       | 1       | 1       | 2       | 0       | 1       | 6       | 3       | 1       | 2      | 2       |
| **hard**             | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **realities**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **hold**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sway**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **argue**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **decline**          | 1       | 0       | 1       | 2       | 1       | 1       | 0       | 2       | 0      | 0       |
| **bigger**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **fundamentals**     | 1       | 3       | 0       | 0       | 0       | 2       | 2       | 0       | 0      | 1       |
| **fore**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **dealer**           | 1       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **dropped**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **lows**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **board**            | 1       | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0      | 1       |
| **intervened**       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **reports**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **helped**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1      | 0       |
| **recover**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **afternoon**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **east**             | 1       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **failed**           | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **regain**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **monday**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **closing**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **yesterday**        | 1       | 0       | 2       | 0       | 0       | 0       | 5       | 0       | 0      | 4       |
| **strong**           | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **rumors**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **modest**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **talk**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **circulated**       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **confirmed**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **january**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **mln**              | 1       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **coordination**     | 1       | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0      | 1       |
| **march**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **rumored**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **signalled**        | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **displeasure**      | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **surge**            | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **marks**            | 1       | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 1      | 0       |
| **appeared**         | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **paris**            | 1       | 7       | 5       | 2       | 1       | 4       | 7       | 2       | 6      | 5       |
| **britain**          | 1       | 1       | 2       | 1       | 1       | 1       | 1       | 1       | 1      | 1       |
| **france**           | 1       | 1       | 1       | 1       | 1       | 1       | 2       | 1       | 1      | 2       |
| **canada**           | 1       | 1       | 1       | 1       | 1       | 1       | 1       | 1       | 1      | 1       |
| **agreed**           | 1       | 3       | 1       | 2       | 0       | 2       | 2       | 1       | 2      | 0       |
| **cooperate**        | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **foster**           | 1       | 2       | 0       | 0       | 0       | 0       | 1       | 0       | 2      | 1       |
| **rate**             | 1       | 1       | 1       | 1       | 3       | 1       | 2       | 1       | 1      | 2       |
| **stability**        | 1       | 3       | 0       | 0       | 0       | 0       | 2       | 0       | 5      | 2       |
| **prevailing**       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **overly**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **impressed**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **soften**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **extreme**          | 1       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **moves**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **believed**         | 1       | 0       | 0       | 0       | 1       | 3       | 1       | 0       | 0      | 1       |
| **purchases**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **suggesting**       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **watered**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **action**           | 1       | 3       | 2       | 1       | 2       | 1       | 3       | 6       | 2      | 3       |
| **completed**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **japanese**         | 1       | 6       | 3       | 0       | 1       | 0       | 5       | 2       | 0      | 5       |
| **reinforcing**      | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **resolute**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **support**          | 1       | 0       | 1       | 1       | 7       | 0       | 0       | 0       | 0      | 0       |
| **doubts**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **token**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **gestures**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **chris**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **convinced**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **concerted**        | 1       | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **earl**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **johnson**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **harris**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **trust**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **savings**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **chicago**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **rising**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **wave**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **protectionist**    | 1       | 0       | 1       | 1       | 1       | 0       | 0       | 0       | 0      | 0       |
| **sentiment**        | 1       | 0       | 1       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **limits**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **extent**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **endorse**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stronger**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **break**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **key**              | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **ties**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **hands**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **intervene**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **strength**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **protectionism**    | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0      | 0       |
| **albert**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **soria**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **swiss**            | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **comments**         | 1       | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **reflect**          | 1       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **increasingly**     | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **politicized**      | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **official**         | 1       | 3       | 0       | 1       | 2       | 0       | 0       | 5       | 7      | 0       |
| **denials**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **feel**             | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **countenance**      | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **trim**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **nation**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **majority**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **dlr**              | 1       | 2       | 0       | 0       | 0       | 1       | 0       | 1       | 0      | 0       |
| **merchandise**      | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **secretary**        | 1       | 2       | 1       | 1       | 1       | 2       | 2       | 1       | 1      | 2       |
| **james**            | 1       | 1       | 1       | 1       | 1       | 1       | 1       | 1       | 1      | 1       |
| **baker**            | 1       | 2       | 2       | 2       | 2       | 5       | 2       | 1       | 1      | 2       |
| **comment**          | 1       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **sunday**           | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **established**      | 1       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **targets**          | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **read**             | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **signal**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sell**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **kicked**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **downside**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **based**            | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **frictions**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **financial**        | 1       | 0       | 0       | 1       | 1       | 1       | 2       | 2       | 3      | 1       |
| **services**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **political**        | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **natsuo**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sumitomo**         | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **week**             | 1       | 7       | 1       | 3       | 2       | 4       | 1       | 1       | 1      | 1       |
| **chance**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **april**            | 1       | 1       | 4       | 1       | 0       | 0       | 0       | 0       | 3      | 0       |
| **succeed**          | 1       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stimulating**      | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **economies**        | 1       | 1       | 0       | 2       | 2       | 0       | 0       | 0       | 1      | 0       |
| **solve**            | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **structural**       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **imbalances**       | 1       | 2       | 0       | 0       | 2       | 0       | 1       | 4       | 0      | 1       |
| **future**           | 1       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 2      | 1       |
| **expand**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **situation**        | 1       | 0       | 1       | 1       | 1       | 0       | 0       | 0       | 0      | 0       |
| **couple**           | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **days**             | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reuter**           | 1       | 1       | 1       | 1       | 1       | 1       | 1       | 1       | 1      | 1       |
| **officials**        | 0       | 6       | 0       | 0       | 3       | 2       | 0       | 8       | 3      | 0       |
| **source**           | 0       | 6       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **growth**           | 0       | 3       | 0       | 1       | 1       | 2       | 1       | 4       | 4      | 1       |
| **mulford**          | 0       | 3       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **monetary**         | 0       | 3       | 1       | 3       | 6       | 4       | 6       | 0       | 3      | 6       |
| **congress**         | 0       | 3       | 1       | 0       | 1       | 1       | 0       | 0       | 1      | 0       |
| **policies**         | 0       | 3       | 0       | 0       | 2       | 1       | 1       | 1       | 0      | 1       |
| **agreement**        | 0       | 3       | 1       | 0       | 0       | 3       | 3       | 0       | 6      | 3       |
| **developments**     | 0       | 3       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **speed**            | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 1       | 1      | 0       |
| **target**           | 0       | 2       | 1       | 0       | 0       | 0       | 2       | 1       | 2      | 2       |
| **strategy**         | 0       | 2       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **package**          | 0       | 2       | 0       | 0       | 6       | 0       | 2       | 0       | 1      | 2       |
| **ready**            | 0       | 2       | 0       | 0       | 1       | 0       | 0       | 0       | 1      | 0       |
| **cutting**          | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 1       | 1      | 0       |
| **white**            | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **house**            | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **months**           | 0       | 2       | 1       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **underlying**       | 0       | 2       | 0       | 0       | 0       | 1       | 0       | 0       | 1      | 0       |
| **budget**           | 0       | 2       | 0       | 2       | 0       | 3       | 2       | 5       | 2      | 2       |
| **joined**           | 0       | 2       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **measures**         | 0       | 2       | 0       | 0       | 4       | 0       | 0       | 0       | 1      | 0       |
| **fall**             | 0       | 2       | 4       | 0       | 1       | 0       | 3       | 0       | 0      | 3       |
| **international**    | 0       | 2       | 1       | 2       | 2       | 0       | 1       | 1       | 5      | 1       |
| **halt**             | 0       | 2       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **washington**       | 0       | 2       | 1       | 2       | 2       | 2       | 2       | 2       | 2      | 2       |
| **called**           | 0       | 2       | 0       | 2       | 0       | 0       | 0       | 3       | 0      | 0       |
| **report**           | 0       | 2       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **bid**              | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **hasten**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **promise**          | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 1       | 0      | 0       |
| **signaled**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **tolerance**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **aides**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **assistant**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **david**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **statement**        | 0       | 1       | 0       | 0       | 0       | 4       | 3       | 0       | 0      | 3       |
| **soaring**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **massive**          | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **slip**             | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **tongue**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **western**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 2       | 0      | 0       |
| **identified**       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **appears**          | 0       | 1       | 0       | 0       | 0       | 0       | 2       | 0       | 0      | 2       |
| **late**             | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **bolster**          | 0       | 1       | 0       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **domestic**         | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 1       | 0      | 0       |
| **demand**           | 0       | 1       | 2       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **indications**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **anytime**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reagan**           | 0       | 1       | 0       | 3       | 4       | 1       | 1       | 1       | 2      | 1       |
| **administration**   | 0       | 1       | 0       | 3       | 9       | 1       | 1       | 1       | 4      | 1       |
| **facing**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **uproar**           | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **apparent**         | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **lack**             | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **progress**         | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **learning**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **extract**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **dramatic**         | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **required**         | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **imposed**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **unprecedented**    | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **tariffs**          | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **electronic**       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **adhere**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **semi**             | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **conductor**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **pricing**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **countries**        | 0       | 1       | 1       | 13      | 0       | 1       | 3       | 0       | 3      | 2       |
| **shift**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **designed**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **appease**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **mounting**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **congressional**    | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **anger**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **weeks**            | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 1      | 0       |
| **reconvene**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **review**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **news**             | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **earned**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **record**           | 0       | 1       | 1       | 1       | 0       | 0       | 1       | 0       | 0      | 1       |
| **surplus**          | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **underscored**      | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **urgent**           | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **signs**            | 0       | 1       | 0       | 1       | 0       | 1       | 0       | 0       | 2      | 0       |
| **improvement**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stunned**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **derive**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **benefits**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **leading**          | 0       | 1       | 0       | 0       | 1       | 2       | 3       | 3       | 2      | 3       |
| **closely**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **ranges**           | 0       | 1       | 0       | 0       | 0       | 2       | 4       | 0       | 4      | 3       |
| **reflecting**       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **reality**          | 0       | 1       | 0       | 0       | 0       | 1       | 1       | 0       | 0      | 1       |
| **envisages**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **include**          | 0       | 1       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **united**           | 0       | 1       | 1       | 3       | 3       | 2       | 4       | 3       | 1      | 4       |
| **agree**            | 0       | 1       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **essential**        | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **redress**          | 0       | 1       | 0       | 0       | 2       | 0       | 1       | 0       | 0      | 1       |
| **huge**             | 0       | 1       | 1       | 0       | 1       | 0       | 1       | 1       | 0      | 1       |
| **global**           | 0       | 1       | 0       | 2       | 0       | 1       | 0       | 0       | 0      | 0       |
| **analysts**         | 0       | 1       | 0       | 0       | 5       | 0       | 0       | 0       | 2      | 0       |
| **imply**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stable**           | 0       | 1       | 0       | 0       | 0       | 3       | 1       | 0       | 0      | 1       |
| **confident**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **governments**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **including**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **cuts**             | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 3       | 1      | 1       |
| **carried**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sharp**            | 0       | 1       | 0       | 0       | 0       | 0       | 3       | 0       | 0      | 3       |
| **undermined**       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **cooperation**      | 0       | 1       | 0       | 0       | 0       | 0       | 3       | 1       | 0      | 3       |
| **policymaker**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **track**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **bonn**             | 0       | 1       | 0       | 0       | 0       | 1       | 3       | 3       | 1      | 3       |
| **stimulative**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **calls**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **sources**          | 0       | 1       | 0       | 3       | 2       | 5       | 5       | 0       | 3      | 5       |
| **unsettled**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **policymakers**     | 0       | 1       | 0       | 0       | 0       | 2       | 0       | 0       | 0      | 0       |
| **obvious**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **exception**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **feels**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **managed**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **spent**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **estimated**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **intervening**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **rise**             | 0       | 1       | 1       | 0       | 2       | 1       | 2       | 0       | 0      | 2       |
| **upset**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **america**          | 0       | 1       | 0       | 1       | 0       | 0       | 1       | 0       | 0      | 1       |
| **hearted**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **attempt**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **falling**          | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **flouting**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **outright**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **close**            | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **policymaking**     | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **understanding**    | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stood**            | 0       | 1       | 1       | 0       | 1       | 1       | 0       | 0       | 0      | 0       |
| **struck**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **extremely**        | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **worried**          | 0       | 1       | 0       | 0       | 0       | 1       | 1       | 0       | 0      | 1       |
| **change**           | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 2       | 1      | 0       |
| **reminder**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **issues**           | 0       | 1       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **departing**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **language**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **current**          | 0       | 1       | 1       | 0       | 1       | 2       | 2       | 1       | 2      | 2       |
| **triggered**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **live**             | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **responsibilities** | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stimulate**        | 0       | 1       | 0       | 2       | 1       | 1       | 1       | 1       | 0      | 1       |
| **unravel**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **spirit**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **realisation**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **leave**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **agrees**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **external**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **adjusted**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **cede**             | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **national**         | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sovereignty**      | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **moving**           | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **closer**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **operation**        | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **meeting**          | 0       | 1       | 1       | 0       | 0       | 0       | 3       | 3       | 1      | 3       |
| **italy**            | 0       | 1       | 1       | 1       | 1       | 1       | 1       | 1       | 1      | 1       |
| **status**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **explain**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **program**          | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **plans**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **faster**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **told**             | 0       | 1       | 0       | 0       | 0       | 2       | 0       | 0       | 1      | 0       |
| **time**             | 0       | 1       | 2       | 3       | 0       | 1       | 0       | 0       | 2      | 0       |
| **bring**            | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **serve**            | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **notice**           | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **wait**             | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reduce**           | 0       | 1       | 0       | 1       | 1       | 0       | 0       | 1       | 0      | 0       |
| **gap**              | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **german**           | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 3       | 3      | 0       |
| **surpluses**        | 0       | 1       | 0       | 1       | 0       | 1       | 1       | 1       | 0      | 1       |
| **sales**            | 0       | 0       | 3       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **sold**             | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **pleas**            | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stabilise**        | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **slow**             | 0       | 0       | 2       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **real**             | 0       | 0       | 2       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **manager**          | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **remain**           | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **push**             | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **exporters**        | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **trading**          | 0       | 0       | 2       | 1       | 0       | 0       | 1       | 0       | 0      | 0       |
| **industrialised**   | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **lost**             | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **credibility**      | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **ministers**        | 0       | 0       | 1       | 3       | 0       | 2       | 2       | 1       | 1      | 2       |
| **month**            | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 1       | 3      | 0       |
| **stabilisation**    | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reversal**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **success**          | 0       | 0       | 1       | 1       | 1       | 0       | 0       | 0       | 0      | 0       |
| **plaza**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **weaken**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **overvalued**       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **confusion**        | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **ranks**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **encouraged**       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **challenge**        | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **finance**          | 0       | 0       | 1       | 1       | 0       | 2       | 4       | 1       | 1      | 3       |
| **minister**         | 0       | 0       | 1       | 1       | 1       | 2       | 3       | 0       | 0      | 2       |
| **kiichi**           | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **miyazawa**         | 0       | 0       | 1       | 0       | 0       | 0       | 3       | 0       | 0      | 1       |
| **matched**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **weekend**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **zone**             | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reverse**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **remarks**          | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **chairman**         | 0       | 0       | 1       | 0       | 1       | 1       | 1       | 0       | 0      | 1       |
| **paul**             | 0       | 0       | 1       | 0       | 0       | 1       | 1       | 0       | 0      | 1       |
| **volcker**          | 0       | 0       | 1       | 0       | 0       | 1       | 2       | 0       | 0      | 2       |
| **governor**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **satoshi**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sumita**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **brought**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **raised**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **question**         | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **trend**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **cool**             | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **response**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reflected**        | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **basic**            | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **oversupply**       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **selling**          | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sheer**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **speculative**      | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **nature**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **koichi**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **miyazaki**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **deputy**           | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **sanwa**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **weak**             | 0       | 0       | 1       | 1       | 1       | 0       | 1       | 0       | 0      | 1       |
| **matter**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **operators**        | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **closed**           | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **tuesday**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **gain**             | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **temporary**        | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **meets**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **discuss**          | 0       | 0       | 1       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **chief**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **unsure**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **methods**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sceptical**        | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **particulary**      | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **prevent**          | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **continuing**       | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **pressure**         | 0       | 0       | 1       | 0       | 2       | 0       | 0       | 1       | 0      | 0       |
| **limiting**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **options**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **tadahiko**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **nashimoto**        | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **term**             | 0       | 0       | 1       | 0       | 0       | 0       | 2       | 1       | 4      | 2       |
| **credit**           | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 1      | 0       |
| **bearish**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **factor**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **expected**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **june**             | 0       | 0       | 1       | 0       | 1       | 0       | 1       | 1       | 0      | 1       |
| **export**           | 0       | 0       | 1       | 1       | 0       | 0       | 1       | 0       | 0      | 1       |
| **bills**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **september**        | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **delayed**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **expectation**      | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **depreciation**     | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **request**          | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **houses**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **ministry**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **industry**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **restrict**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **ineffective**      | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **light**            | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **anticipating**     | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **active**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **institutional**    | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **hedge**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **risks**            | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **bond**             | 0       | 0       | 1       | 1       | 0       | 1       | 0       | 1       | 0      | 0       |
| **holdings**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **business**         | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **starting**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **range**            | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **traded**           | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **considered**       | 0       | 0       | 1       | 0       | 0       | 0       | 2       | 0       | 0      | 2       |
| **falls**            | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **pick**             | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **renewed**          | 0       | 0       | 1       | 0       | 1       | 1       | 1       | 0       | 0      | 1       |
| **downward**         | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0       | 0      | 0       |
| **momentum**         | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **slide**            | 0       | 0       | 1       | 0       | 0       | 2       | 0       | 0       | 0      | 0       |
| **debt**             | 0       | 0       | 0       | 6       | 1       | 0       | 0       | 1       | 0      | 0       |
| **meetings**         | 0       | 0       | 0       | 4       | 0       | 2       | 2       | 1       | 1      | 2       |
| **loans**            | 0       | 0       | 0       | 4       | 0       | 0       | 0       | 0       | 0      | 0       |
| **developing**       | 0       | 0       | 0       | 4       | 0       | 0       | 0       | 0       | 0      | 0       |
| **plan**             | 0       | 0       | 0       | 3       | 1       | 0       | 0       | 0       | 0      | 0       |
| **debtor**           | 0       | 0       | 0       | 3       | 0       | 0       | 0       | 0       | 0      | 0       |
| **grow**             | 0       | 0       | 0       | 3       | 0       | 0       | 0       | 0       | 0      | 0       |
| **policy**           | 0       | 0       | 0       | 3       | 0       | 4       | 1       | 3       | 2      | 1       |
| **fund**             | 0       | 0       | 0       | 2       | 1       | 0       | 1       | 0       | 1      | 1       |
| **rates**            | 0       | 0       | 0       | 2       | 0       | 7       | 2       | 2       | 2      | 2       |
| **growing**          | 0       | 0       | 0       | 2       | 0       | 0       | 1       | 0       | 0      | 1       |
| **initiative**       | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **french**           | 0       | 0       | 0       | 2       | 0       | 1       | 0       | 0       | 0      | 0       |
| **poorest**          | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **issue**            | 0       | 0       | 0       | 2       | 1       | 0       | 0       | 0       | 0      | 0       |
| **strengthening**    | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **pct**              | 0       | 0       | 0       | 2       | 3       | 0       | 0       | 1       | 0      | 0       |
| **pressing**         | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **development**      | 0       | 0       | 0       | 2       | 0       | 0       | 1       | 1       | 0      | 1       |
| **environment**      | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **talks**            | 0       | 0       | 0       | 2       | 0       | 1       | 2       | 0       | 2      | 1       |
| **products**         | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0       | 0      | 0       |
| **concerns**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **inflation**        | 0       | 0       | 0       | 1       | 0       | 1       | 1       | 0       | 0      | 1       |
| **increases**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0      | 0       |
| **confrontations**   | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **bankers**          | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 2      | 1       |
| **meet**             | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 1       | 1      | 1       |
| **deteriorating**    | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **auspices**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sunk**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **upsetting**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **stock**            | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0      | 0       |
| **uncertainty**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **vitality**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **economy**          | 0       | 0       | 0       | 1       | 0       | 0       | 2       | 1       | 0      | 2       |
| **heavily**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **indebted**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **continue**         | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 1       | 1      | 1       |
| **carry**            | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **burden**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **vast**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **assistance**       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **diplomatic**       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sort**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **unveiled**         | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0      | 0       |
| **seoul**            | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **drawn**            | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **brazil**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **suspended**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **payments**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **commercial**       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **responded**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **laying**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **groundwork**       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **writing**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **brazilian**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **separately**       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **prime**            | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0      | 0       |
| **jacques**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **chirac**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **visit**            | 0       | 0       | 0       | 1       | 2       | 0       | 0       | 0       | 0      | 0       |
| **earlier**          | 0       | 0       | 0       | 1       | 0       | 1       | 1       | 0       | 0      | 1       |
| **president**        | 0       | 0       | 0       | 1       | 2       | 0       | 0       | 0       | 2      | 0       |
| **sounded**          | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0      | 1       |
| **funnel**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **worldwide**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **grain**            | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **discussed**        | 0       | 0       | 0       | 1       | 2       | 0       | 0       | 0       | 0      | 0       |
| **undoubtedly**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **embraced**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **special**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **position**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 1      | 0       |
| **suggested**        | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0      | 0       |
| **disussing**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **assess**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **funding**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **largest**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **attempting**       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **coordinate**       | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0      | 0       |
| **hope**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **controlling**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **deficits**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0      | 0       |
| **evidence**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **activity**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **forecasts**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **expansion**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 2       | 0      | 0       |
| **affect**           | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0      | 0       |
| **ability**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **difficulties**     | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0      | 0       |
| **absorbed**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **exports**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **country**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **allowing**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **earn**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **critical**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **cut**              | 0       | 0       | 0       | 1       | 0       | 1       | 1       | 1       | 2      | 1       |
| **running**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **import**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **discussions**      | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0      | 0       |
| **wide**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **ranging**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **touching**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **impact**           | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0      | 0       |
| **examination**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **pressures**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **wake**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **decision**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 1      | 0       |
| **microchip**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **accelerated**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **grew**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **alarmed**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **offing**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 1      | 0       |
| **concern**          | 0       | 0       | 0       | 1       | 2       | 0       | 0       | 0       | 1      | 0       |
| **prompted**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **charges**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **chip**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **fair**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **imports**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **undermining**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **fundamental**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **price**            | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **weakness**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **commodities**      | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **mainstay**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **gather**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **sliding**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **debate**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0      | 0       |
| **larger**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **approving**        | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **inter**            | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **link**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **loan**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **dams**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **projects**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **head**             | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **barber**           | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **conable**          | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reviewed**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **reorganization**   | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **prepared**         | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 0      | 0       |
| **carter**           | 0       | 0       | 0       | 0       | 6       | 0       | 0       | 0       | 0      | 0       |
| **hormats**          | 0       | 0       | 0       | 0       | 5       | 0       | 0       | 0       | 0      | 0       |
| **bonds**            | 0       | 0       | 0       | 0       | 4       | 0       | 0       | 0       | 0      | 0       |
| **issuing**          | 0       | 0       | 0       | 0       | 3       | 0       | 0       | 0       | 0      | 0       |
| **government**       | 0       | 0       | 0       | 0       | 3       | 0       | 0       | 0       | 0      | 0       |
| **confidence**       | 0       | 0       | 0       | 0       | 3       | 0       | 1       | 0       | 0      | 1       |
| **genuine**          | 0       | 0       | 0       | 0       | 2       | 1       | 0       | 0       | 0      | 0       |
| **discount**         | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **securities**       | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **vice**             | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **statements**       | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **supported**        | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0       | 0      | 0       |
| **politically**      | 0       | 0       | 0       | 0       | 2       | 0       | 1       | 0       | 2      | 1       |
| **prospect**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **assaults**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **force**            | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0      | 1       |
| **eventually**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **unveil**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **distasteful**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **economists**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **acknowledged**     | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **possibility**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **denominated**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **dismissed**        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **speculation**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **unusual**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **step**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **undertake**        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **internationally**  | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **coordinated**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 2      | 0       |
| **effort**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **instability**      | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 1      | 0       |
| **defense**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **accompanied**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **resisted**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **raise**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **chiefly**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **hurt**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **fragile**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **expect**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **divided**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **timing**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **announcement**     | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0      | 1       |
| **yasuhiro**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **nakasone**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **focus**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **steady**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **charles**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **taylor**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **analyst**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **prudential**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **bache**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **resort**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **mind**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **troubles**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **urged**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **faced**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **collapsed**        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **unleashed**        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **nov**              | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **resounding**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **robert**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **goldman**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **sachs**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **administrations**  | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **stands**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **rhetoric**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **evidencing**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **practice**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **short**            | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 1       | 2      | 1       |
| **unequivocally**    | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **declined**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 1      | 0       |
| **issued**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **mark**             | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 1      | 1       |
| **franc**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **aimed**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **essentially**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **buttressing**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **pyschological**    | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **attracting**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **investors**        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **notes**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **drawings**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **reserves**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **held**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **sdrs**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **imf**              | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 0      | 0       |
| **increased**        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **swap**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **lines**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **stepped**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **gold**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **stephen**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **axilrod**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **nikko**            | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **argued**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **difficult**        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **fulfill**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **pledges**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **undertaken**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **powers**           | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 2       | 0      | 1       |
| **coincide**         | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **venice**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0      | 0       |
| **summit**           | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0      | 1       |
| **leaders**          | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 1       | 0      | 1       |
| **democracies**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **forged**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **fundamentally**    | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **nearing**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **comfortable**      | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **reluctance**       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **firmly**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **desire**           | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **allies**           | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0      | 1       |
| **fear**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **fanning**          | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **damn**             | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0      | 0       |
| **commitments**      | 0       | 0       | 0       | 0       | 0       | 3       | 0       | 0       | 2      | 0       |
| **balladur**         | 0       | 0       | 0       | 0       | 0       | 3       | 0       | 0       | 0      | 0       |
| **accept**           | 0       | 0       | 0       | 0       | 0       | 3       | 0       | 0       | 0      | 0       |
| **recession**        | 0       | 0       | 0       | 0       | 0       | 3       | 0       | 0       | 0      | 0       |
| **darman**           | 0       | 0       | 0       | 0       | 0       | 3       | 0       | 0       | 0      | 0       |
| **consistent**       | 0       | 0       | 0       | 0       | 0       | 3       | 2       | 0       | 0      | 1       |
| **rapid**            | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0      | 0       |
| **descent**          | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0      | 0       |
| **artificially**     | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0      | 0       |
| **lead**             | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0      | 0       |
| **understood**       | 0       | 0       | 0       | 0       | 0       | 2       | 1       | 1       | 2      | 1       |
| **committed**        | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0       | 0      | 0       |
| **reaffirmed**       | 0       | 0       | 0       | 0       | 0       | 2       | 1       | 0       | 0      | 1       |
| **broadly**          | 0       | 0       | 0       | 0       | 0       | 2       | 1       | 0       | 2      | 1       |
| **deeply**           | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **efforts**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **strengthened**     | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **exasperated**      | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **drove**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **rapidly**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **severely**         | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **disrupted**        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **heed**             | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **reassure**         | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **edouard**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **americans**        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **weaker**           | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **gerhard**          | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0      | 1       |
| **stoltenberg**      | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0      | 1       |
| **involves**         | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **risk**             | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **tangible**         | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **threat**           | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **feared**           | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **picture**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **changed**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **settled**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **pattern**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **result**           | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 1       | 0      | 1       |
| **enthusiasm**       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **annual**           | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 2       | 0      | 0       |
| **curb**             | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 2      | 0       |
| **distaste**         | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **stems**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **fears**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **outgoing**         | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **richard**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **television**       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **interviewers**     | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **driving**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **adversely**        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **balance**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **ultimately**       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **drive**            | 0       | 0       | 0       | 0       | 0       | 1       | 2       | 0       | 0      | 2       |
| **throw**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **slower**           | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **maintained**       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **healthy**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **resorting**        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **acknowledging**    | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **life**             | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **adjustments**      | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **fixed**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **rein**             | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **deepens**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **implementing**     | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **undertakings**     | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **agreements**       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1      | 0       |
| **misinterpreted**   | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **wrongly**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **stabilizing**      | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **reach**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **compromise**       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **fight**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0      | 0       |
| **upturn**           | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 0      | 0       |
| **bolstered**        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **supplementary**    | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 1       | 0      | 1       |
| **applied**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **summarized**       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **governors**        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **focusing**         | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **created**          | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **prospective**      | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **european**         | 0       | 0       | 0       | 0       | 0       | 1       | 3       | 0       | 0      | 3       |
| **unconvinced**      | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 1       | 0      | 0       |
| **meant**            | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0      | 0       |
| **announced**        | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 1       | 0      | 2       |
| **departure**        | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0      | 2       |
| **wilson**           | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0      | 2       |
| **objectives**       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 1      | 2       |
| **balances**         | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0      | 2       |
| **zones**            | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0       | 0      | 2       |
| **sought**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **satisfied**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **reaffirm**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **stimulation**      | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **endorses**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **initial**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **reaction**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **demonstrates**     | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **sank**             | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **movement**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 0       |
| **defend**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 1      | 0       |
| **happened**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 1      | 0       |
| **worth**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **ruling**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **liberal**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **democratic**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **party**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **eve**              | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **attend**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **worded**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **terming**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **extraordinary**    | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **noting**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **repeated**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **willingness**      | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **unsuccessful**     | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **scale**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **successful**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **feeling**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **medium**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 1      | 1       |
| **replaced**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **bickering**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **differences**      | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **risen**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **acceptance**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **acceptable**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **argues**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **shifts**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **remedy**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **imbalance**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **mention**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **implied**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **reafffirmation**   | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **curbing**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **shortfall**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **reached**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **argument**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **capitol**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **hill**             | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **pose**             | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **substantial**      | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **inflationary**     | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **undermine**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **warned**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **independent**      | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **privately**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **welcomed**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **remained**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **unit**             | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **worry**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **blunts**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **monolith**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **concentrate**      | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **continued**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 1      | 1       |
| **binding**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **canadian**         | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **michael**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **prepare**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **norms**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **limited**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **conditions**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 2      | 1       |
| **deviations**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **guidelines**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **consultations**    | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **corrective**       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **inclusion**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **london**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **implies**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **direction**        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 0      | 1       |
| **unsuccessfully**   | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **limit**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **fluctuations**     | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **concept**          | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **rigid**            | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0      | 1       |
| **secret**           | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 2      | 1       |
| **study**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 7       | 0      | 0       |
| **fiscal**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 4       | 0      | 0       |
| **resolve**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0      | 0       |
| **oecd**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0      | 0       |
| **set**              | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 2      | 0       |
| **met**              | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0      | 0       |
| **deep**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0      | 0       |
| **roughly**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0      | 0       |
| **promised**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 0      | 0       |
| **tax**              | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2       | 1      | 0       |
| **organization**     | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **plaguing**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **paper**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **preparing**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **ministerial**      | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **forum**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **coordinating**     | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **significance**     | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **dogging**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **attempts**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **achieve**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **joint**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **goals**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1      | 0       |
| **unusually**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **unstable**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **focussed**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **attention**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **clues**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **air**              | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **concludes**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **looked**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **underscores**      | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **seperately**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **overtures**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **rebuffed**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **reductions**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **steep**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **widening**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **difference**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **yields**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **hand**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1      | 0       |
| **average**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **corrected**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **crisis**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **control**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **equally**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **suggests**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1      | 0       |
| **reduction**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **weakening**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **uncorrected**      | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **shave**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **main**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1      | 0       |
| **tough**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **figure**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **goal**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **leadership**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **representatives**  | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **warmly**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **caution**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **content**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **proposed**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **pushed**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **sharply**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **love**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **accelerate**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **fell**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **steeply**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **quarter**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **reassured**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **fails**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **emerge**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **planned**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0      | 0       |
| **prospects**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 3      | 0       |
| **refused**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **strengthen**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **specific**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **bands**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **bundesbank**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **private**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 2      | 0       |
| **narrow**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **movements**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **tamed**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **unruly**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **build**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **reason**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **calm**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **interview**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **concluded**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **period**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **bury**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **hatchet**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **cease**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **quarrel**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **focused**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **left**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **adjust**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **periodic**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **included**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **measure**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **jointly**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **times**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **toyko**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **boost**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **shake**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **fora**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **beneficial**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **conduct**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **initiatives**      | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **resist**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **increase**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **europeans**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **crucial**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **confirmation**     | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **stated**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **breached**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **british**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **sterling**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **performance**      | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **reassemble**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **invited**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **slowing**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **stimulus**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **emerged**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **karl**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **otto**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **poehl**            | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **follow**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **suit**             | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **approach**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **provision**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **talked**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **public**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **keeping**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **unchanged**        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **sluggish**         | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **remains**          | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **stubbornly**       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |
| **agenda**           | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1      | 0       |

</details>

## Zadanie 8. Utwórz podobną macierz do powyższej, ale tym razem użyj miary tf-idf

<details>
<summary>Tabla wartości tf-idf termów w poszczególnych plikach</summary>

|                      | 102.txt            | 125.txt            | 109.txt            | 148.txt            | 197.txt            | 183.txt            | 175.txt            | 198.txt            | 62.txt             | 173.txt            |
| -------------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| **bank**             | 4.909645111040875  | 1.1890697837836712 | 4.273907565289314  | 4.661138692114742  | 0.8176784432060454 | 0.8458493201727416 | 1.7329372147509547 | 0                  | 3                  | 1                  |
| **yen**              | 3.989086652720711  | 2.3781395675673425 | 7.123179275482191  | 0                  | 5                  | 1                  | 5                  | 1                  | 1                  | 3                  |
| **dollar**           | 3.6822338332806566 | 6.539883810810192  | 16.38331233360904  | 3.107425794743161  | 12.265176648090682 | 10.1501918420729   | 4.332343036877387  | 3.528867857374466  | 3.5785579373686947 | 4.523449100978375  |
| **japan**            | 3.068528194400547  | 7.134418702702027  | 2.8492717101928764 | 3.107425794743161  | 1.6353568864120909 | 4.229246600863708  | 4.332343036877387  | 7.057735714748932  | 1.7892789686843473 | 2.7140694605870253 |
| **currency**         | 2.7616753749604923 | 1.7836046756755068 | 2.136953782644657  | 0                  | 8                  | 1                  | 7                  | 0                  | 4.4711321426255335 | 5.526802578289132  |
| **dealers**          | 2.4548225555204377 | 0                  | 10                 | 0                  | 0                  | 0                  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **central**          | 1.8411169166403283 | 1.1890697837836712 | 2.8492717101928764 | 0.7768564486857903 | 1.6353568864120909 | 0                  | 2                  | 0                  | 4.4711321426255335 | 2.2107210313156527 |
| **intervention**     | 1.8411169166403283 | 0.5945348918918356 | 4.986225492837534  | 0                  | 0                  | 0                  | 4.009416709863639  | 0                  | 1.4054651081081644 | 2.713349887877465  |
| **market**           | 1.8411169166403283 | 1.7836046756755068 | 5.698543420385753  | 1.5537128973715806 | 0.8176784432060454 | 0.8458493201727416 | 0                  | 0                  | 2.2355660713127667 | 0                  |
| **trade**            | 1.8411169166403283 | 5.35081402702652   | 1.4246358550964382 | 3.8842822434289515 | 1.6353568864120909 | 2.537547960518225  | 4.332343036877387  | 4.411084821718083  | 0.8946394843421737 | 4.523449100978375  |
| **exchange**         | 1.2274112777602189 | 1.1890697837836712 | 0                  | 1                  | 0                  | 1.1823215567939547 | 3.462452039481775  | 0                  | 1.251314428280906  | 3.669430653942629  |
| **authorities**      | 1.2274112777602189 | 0                  | 3                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **fed**              | 1.2274112777602189 | 0                  | 1                  | 0                  | 3.669430653942629  | 0                  | 1.336472236621213  | 0                  | 4.216395324324493  | 1.3566749439387324 |
| **foreign**          | 0.9205584583201641 | 0.5945348918918356 | 0                  | 1                  | 2                  | 0                  | 0                  | 1.2876820724517808 | 0                  | 0                  |
| **markets**          | 0.9205584583201641 | 1.7836046756755068 | 0.7123179275482191 | 2.330569346057371  | 0.8176784432060454 | 5.920945241209191  | 3.4658744295019095 | 1.764433928687233  | 3.5785579373686947 | 1.8093796403913502 |
| **nations**          | 0.9205584583201641 | 2.972674459459178  | 2.8492717101928764 | 0.7768564486857903 | 0.8176784432060454 | 0.8458493201727416 | 6.065280251628342  | 3.528867857374466  | 2.683918453026521  | 5.4281389211740505 |
| **economic**         | 0.9205584583201641 | 3.5672093513510137 | 0                  | 5                  | 5                  | 2                  | 4                  | 4                  | 8                  | 3                  |
| **england**          | 0.9205584583201641 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **behalf**           | 0.9205584583201641 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **bought**           | 0.9205584583201641 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **dollars**          | 0.9205584583201641 | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pact**             | 0.9205584583201641 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 3.6218604324326575 | 0                  |
| **west**             | 0.9205584583201641 | 1.7836046756755068 | 1.4246358550964382 | 0.7768564486857903 | 1.6353568864120909 | 3.3833972806909665 | 3.4658744295019095 | 7.939952679092548  | 2.683918453026521  | 3.6187592807827005 |
| **germany**          | 0.9205584583201641 | 2.3781395675673425 | 1.4246358550964382 | 0.7768564486857903 | 1.6353568864120909 | 3.3833972806909665 | 3.4658744295019095 | 6.175518750405316  | 1.7892789686843473 | 3.6187592807827005 |
| **retreat**          | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **major**            | 0.6137056388801094 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 1.6916986403454832 | 2.5994058221264322 | 3.528867857374466  | 1.7892789686843473 | 2.7140694605870253 |
| **levels**           | 0.6137056388801094 | 1.1890697837836712 | 0                  | 0                  | 0                  | 2.8109302162163288 | 0                  | 1.4700036292457357 | 2.8109302162163288 | 0                  |
| **commitment**       | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 5.079441541679836  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **accord**           | 0.6137056388801094 | 4.756279135134685  | 2.136953782644657  | 0.7768564486857903 | 0.8176784432060454 | 0.8458493201727416 | 2.5994058221264322 | 0                  | 2                  | 3                  |
| **banks**            | 0.6137056388801094 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **post**             | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **war**              | 0.6137056388801094 | 0                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **traders**          | 0.6137056388801094 | 0                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **federal**          | 0.6137056388801094 | 0                  | 0                  | 1.2876820724517808 | 1.2231435513142097 | 1.1823215567939547 | 1.1541506798272583 | 0                  | 1.251314428280906  | 1.2231435513142097 |
| **reserve**          | 0.6137056388801094 | 0                  | 0                  | 0                  | 1.5108256237659907 | 1.4054651081081644 | 1.336472236621213  | 0                  | 1.4054651081081644 | 1.3566749439387324 |
| **actions**          | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 5.942487759035179  | 0                  | 0                  |
| **york**             | 0.6137056388801094 | 0                  | 2                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **level**            | 0.6137056388801094 | 0.5945348918918356 | 0                  | 0                  | 0                  | 1.4054651081081644 | 1.336472236621213  | 0                  | 0                  | 1.5108256237659907 |
| **tokyo**            | 0.6137056388801094 | 1.7836046756755068 | 1.4246358550964382 | 0                  | 0                  | 0                  | 4.009416709863639  | 1.2876820724517808 | 0                  | 4.070024831816197  |
| **dlrs**             | 0.6137056388801094 | 1.1890697837836712 | 0                  | 3                  | 1                  | 0                  | 3.462452039481775  | 3.4005941778735673 | 0                  | 3.669430653942629  |
| **purchased**        | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **february**         | 0.6137056388801094 | 0                  | 1                  | 1                  | 0                  | 1.1823215567939547 | 3.462452039481775  | 1.1335313926245225 | 1.1177830356563834 | 2.2107210313156527 |
| **account**          | 0.6137056388801094 | 0                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **american**         | 0.6137056388801094 | 0                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **view**             | 0.6137056388801094 | 0.5945348918918356 | 0                  | 0                  | 2.4462871026284194 | 1.1823215567939547 | 0                  | 1.2876820724517808 | 0                  | 0                  |
| **bourdain**         | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **bankamerica**      | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **corp**             | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **treasury**         | 0.6137056388801094 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 1.6916986403454832 | 0.8664686073754774 | 0.8822169643436165 | 0.8946394843421737 | 0.9046898201956751 |
| **deficit**          | 0.6137056388801094 | 3.5672093513510137 | 0.7123179275482191 | 1.5537128973715806 | 0.8176784432060454 | 3.3833972806909665 | 2.5994058221264322 | 3.528867857374466  | 2.683918453026521  | 2.7140694605870253 |
| **okada**            | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **expects**          | 0.6137056388801094 | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **drop**             | 0.6137056388801094 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **succeeded**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **staunching**       | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **losses**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **senior**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **headed**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **widespread**       | 0.3068528194400547 | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **perceive**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **industrial**       | 0.3068528194400547 | 1.1890697837836712 | 0.7123179275482191 | 3.107425794743161  | 1.6353568864120909 | 1.6916986403454832 | 2.5994058221264322 | 2.6466508930308494 | 3.5785579373686947 | 2.7140694605870253 |
| **differing**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stabilize**        | 0.3068528194400547 | 0.5945348918918356 | 0                  | 0                  | 1.2231435513142097 | 1.1823215567939547 | 1.1541506798272583 | 2.267062785249045  | 0                  | 1.2231435513142097 |
| **currencies**       | 0.3068528194400547 | 0.5945348918918356 | 1.4246358550964382 | 0                  | 1                  | 6                  | 3                  | 1                  | 2                  | 2                  |
| **hard**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **realities**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **hold**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sway**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **argue**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **decline**          | 0.3068528194400547 | 0                  | 1                  | 2                  | 1                  | 1                  | 0                  | 2.267062785249045  | 0                  | 0                  |
| **bigger**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **fundamentals**     | 0.3068528194400547 | 1.7836046756755068 | 0                  | 0                  | 0                  | 2.8109302162163288 | 2.672944473242426  | 0                  | 0                  | 1.5108256237659907 |
| **fore**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **dealer**           | 0.3068528194400547 | 0                  | 2                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **dropped**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **lows**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **board**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **intervened**       | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  |
| **reports**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **helped**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 1.8109302162163288 | 0                  |
| **recover**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **afternoon**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **east**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 0                  |
| **failed**           | 0.3068528194400547 | 0.5945348918918356 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **regain**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **monday**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **closing**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **yesterday**        | 0.3068528194400547 | 0                  | 2                  | 0                  | 0                  | 0                  | 7.798078939677113  | 0                  | 0                  | 6.772588722239782  |
| **strong**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **rumors**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **modest**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **talk**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **circulated**       | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **confirmed**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **january**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **mln**              | 0.3068528194400547 | 0                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **coordination**     | 0.3068528194400547 | 0                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **march**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **rumored**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **signalled**        | 0.3068528194400547 | 0.5945348918918356 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **displeasure**      | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **surge**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **marks**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 3.0216512475319814 | 0                  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **appeared**         | 0.3068528194400547 | 0.5945348918918356 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **paris**            | 0.3068528194400547 | 4.1617442432428495 | 3.5615896377410956 | 1.5537128973715806 | 0.8176784432060454 | 3.3833972806909665 | 6.065280251628342  | 1.764433928687233  | 5.367836906053042  | 4.523449100978375  |
| **britain**          | 0.3068528194400547 | 0.5945348918918356 | 1.4246358550964382 | 0.7768564486857903 | 0.8176784432060454 | 0.8458493201727416 | 0.8664686073754774 | 0.8822169643436165 | 0.8946394843421737 | 0.9046898201956751 |
| **france**           | 0.3068528194400547 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 0.8458493201727416 | 1.7329372147509547 | 0.8822169643436165 | 0.8946394843421737 | 1.8093796403913502 |
| **canada**           | 0.3068528194400547 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 0.8458493201727416 | 0.8664686073754774 | 0.8822169643436165 | 0.8946394843421737 | 0.9046898201956751 |
| **agreed**           | 0.3068528194400547 | 1.7836046756755068 | 0.7123179275482191 | 1.5537128973715806 | 0                  | 2                  | 2                  | 1                  | 2                  | 0                  |
| **cooperate**        | 0.3068528194400547 | 0.5945348918918356 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **foster**           | 0.3068528194400547 | 1.1890697837836712 | 0                  | 0                  | 0                  | 0                  | 1.5596157879354227 | 0                  | 3.175573329804238  | 1.5108256237659907 |
| **rate**             | 0.3068528194400547 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 2.453035329618136  | 0.8458493201727416 | 1.7329372147509547 | 0.8822169643436165 | 0.8946394843421737 | 1.8093796403913502 |
| **stability**        | 0.3068528194400547 | 1.7836046756755068 | 0                  | 0                  | 0                  | 0                  | 3.1192315758708453 | 0                  | 7.938933324510595  | 3.0216512475319814 |
| **prevailing**       | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **overly**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **impressed**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **soften**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **extreme**          | 0.3068528194400547 | 0                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **moves**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **believed**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 1.5108256237659907 | 4.216395324324493  | 1.336472236621213  | 0                  | 0                  | 1.5108256237659907 |
| **purchases**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **suggesting**       | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **watered**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **action**           | 0.3068528194400547 | 1.7836046756755068 | 1.4246358550964382 | 0.7768564486857903 | 1.6353568864120909 | 0.8458493201727416 | 2.5994058221264322 | 5.293301786061699  | 1.7892789686843473 | 2.7140694605870253 |
| **completed**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **japanese**         | 0.3068528194400547 | 3.5672093513510137 | 2.136953782644657  | 0                  | 1                  | 0                  | 5.770753399136291  | 2.267062785249045  | 0                  | 6.1157177565710485 |
| **reinforcing**      | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **resolute**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **support**          | 0.3068528194400547 | 0                  | 1                  | 1                  | 7                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **doubts**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **token**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **gestures**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **chris**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **convinced**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **concerted**        | 0.3068528194400547 | 0                  | 1                  | 0                  | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **earl**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **johnson**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **harris**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **trust**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **savings**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **chicago**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **rising**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **wave**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **protectionist**    | 0.3068528194400547 | 0                  | 1                  | 1                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sentiment**        | 0.3068528194400547 | 0                  | 1                  | 0                  | 2.4462871026284194 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **limits**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **extent**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **endorse**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stronger**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **break**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **key**              | 0.3068528194400547 | 0                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **ties**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **hands**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **intervene**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **strength**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **protectionism**    | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **albert**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **soria**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **swiss**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **comments**         | 0.3068528194400547 | 0.5945348918918356 | 0.7123179275482191 | 0                  | 0                  | 0                  | 0                  | 0                  | 1.587786664902119  | 0                  |
| **reflect**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 0                  |
| **increasingly**     | 0.3068528194400547 | 0                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **politicized**      | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **official**         | 0.3068528194400547 | 1.7836046756755068 | 0                  | 1                  | 2                  | 0                  | 0                  | 6.438410362258904  | 8.759200997966342  | 0                  |
| **denials**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **feel**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **countenance**      | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **trim**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **nation**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **majority**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **dlr**              | 0.3068528194400547 | 1.1890697837836712 | 0                  | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.4700036292457357 | 0                  | 0                  |
| **merchandise**      | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **secretary**        | 0.3068528194400547 | 1.1890697837836712 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 1.6916986403454832 | 1.7329372147509547 | 0.8822169643436165 | 0.8946394843421737 | 1.8093796403913502 |
| **james**            | 0.3068528194400547 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 0.8458493201727416 | 0.8664686073754774 | 0.8822169643436165 | 0.8946394843421737 | 0.9046898201956751 |
| **baker**            | 0.3068528194400547 | 1.1890697837836712 | 1.4246358550964382 | 1.5537128973715806 | 1.6353568864120909 | 4.229246600863708  | 1.7329372147509547 | 0.8822169643436165 | 0.8946394843421737 | 1.8093796403913502 |
| **comment**          | 0.3068528194400547 | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 3.6218604324326575 | 0                  |
| **sunday**           | 0.3068528194400547 | 0.5945348918918356 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **established**      | 0.3068528194400547 | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **targets**          | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **read**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **signal**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sell**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **kicked**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **downside**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **based**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **frictions**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **financial**        | 0.3068528194400547 | 0                  | 0                  | 1.2876820724517808 | 1.2231435513142097 | 1.1823215567939547 | 2.3083013596545165 | 2.267062785249045  | 3.35334910696915   | 1.1053605156578263 |
| **services**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **political**        | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **natsuo**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sumitomo**         | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **week**             | 0.3068528194400547 | 4.1617442432428495 | 0.7123179275482191 | 2.330569346057371  | 1.6353568864120909 | 3.3833972806909665 | 0.8664686073754774 | 0.8822169643436165 | 0.8946394843421737 | 0.9046898201956751 |
| **chance**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **april**            | 0.3068528194400547 | 0.5945348918918356 | 2.8492717101928764 | 0.7768564486857903 | 0                  | 0                  | 0                  | 0                  | 4.216395324324493  | 0                  |
| **succeed**          | 0.3068528194400547 | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stimulating**      | 0.3068528194400547 | 0.5945348918918356 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **economies**        | 0.3068528194400547 | 0.5945348918918356 | 0                  | 2                  | 2                  | 0                  | 0                  | 0                  | 1.4054651081081644 | 0                  |
| **solve**            | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **structural**       | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **imbalances**       | 0.3068528194400547 | 1.1890697837836712 | 0                  | 0                  | 2.4462871026284194 | 0                  | 1.336472236621213  | 5.150728289807123  | 0                  | 1.3566749439387324 |
| **future**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 3.6218604324326575 | 1.6931471805599454 |
| **expand**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **situation**        | 0.3068528194400547 | 0                  | 1                  | 1                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **couple**           | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **days**             | 0.3068528194400547 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reuter**           | 0.3068528194400547 | 0.5945348918918356 | 0.7123179275482191 | 0.7768564486857903 | 0.8176784432060454 | 0.8458493201727416 | 0.8664686073754774 | 0.8822169643436165 | 0.8946394843421737 | 0.9046898201956751 |
| **officials**        | 0                  | 6                  | 0                  | 0                  | 4.532476871297972  | 2.8109302162163288 | 0                  | 11.760029033965886 | 4.216395324324493  | 0                  |
| **source**           | 0                  | 6                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **growth**           | 0                  | 3                  | 0                  | 1.2876820724517808 | 1.2231435513142097 | 2.3646431135879094 | 1.1541506798272583 | 4.53412557049809   | 4.4711321426255335 | 1.1053605156578263 |
| **mulford**          | 0                  | 3                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **monetary**         | 0                  | 3                  | 1                  | 3                  | 6                  | 4                  | 6                  | 0                  | 3.35334910696915   | 6.632163093946958  |
| **congress**         | 0                  | 3                  | 1                  | 0                  | 1.2231435513142097 | 1.1823215567939547 | 0                  | 0                  | 1.4054651081081644 | 0                  |
| **policies**         | 0                  | 3                  | 0                  | 0                  | 3.0216512475319814 | 1.4054651081081644 | 1.336472236621213  | 1.2876820724517808 | 0                  | 1.3566749439387324 |
| **agreement**        | 0                  | 3                  | 1                  | 0                  | 0                  | 4.216395324324493  | 4.009416709863639  | 0                  | 8.432790648648986  | 4.070024831816197  |
| **developments**     | 0                  | 3                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **speed**            | 0                  | 2                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 1.8109302162163288 | 0                  |
| **target**           | 0                  | 2                  | 1                  | 0                  | 0                  | 0                  | 3.1192315758708453 | 1.4700036292457357 | 2.8109302162163288 | 2.713349887877465  |
| **strategy**         | 0                  | 2                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **package**          | 0                  | 2                  | 0                  | 0                  | 9.064953742595945  | 0                  | 3.1192315758708453 | 0                  | 1.587786664902119  | 3.0216512475319814 |
| **ready**            | 0                  | 2                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **cutting**          | 0                  | 2                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 1.8109302162163288 | 0                  |
| **white**            | 0                  | 2                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **house**            | 0                  | 2                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **months**           | 0                  | 2                  | 1                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **underlying**       | 0                  | 2                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **budget**           | 0                  | 2                  | 0                  | 2.5753641449035616 | 0                  | 4.216395324324493  | 2.672944473242426  | 6.438410362258904  | 2.502628856561812  | 2.4462871026284194 |
| **joined**           | 0                  | 2                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **measures**         | 0                  | 2                  | 0                  | 0                  | 6.043302495063963  | 0                  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **fall**             | 0                  | 2                  | 4                  | 0                  | 1.2231435513142097 | 0                  | 4.009416709863639  | 0                  | 0                  | 4.532476871297972  |
| **international**    | 0                  | 2                  | 1                  | 2                  | 2                  | 0                  | 1.1541506798272583 | 1.1335313926245225 | 5.588915178281917  | 1.1053605156578263 |
| **halt**             | 0                  | 2                  | 1                  | 0                  | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **washington**       | 0                  | 2                  | 1                  | 2                  | 2                  | 2                  | 2                  | 2                  | 2                  | 2                  |
| **called**           | 0                  | 2                  | 0                  | 2.5753641449035616 | 0                  | 0                  | 0                  | 5.079441541679836  | 0                  | 0                  |
| **report**           | 0                  | 2                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **bid**              | 0                  | 1                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **hasten**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **promise**          | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **signaled**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **tolerance**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **aides**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **assistant**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **david**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **statement**        | 0                  | 1                  | 0                  | 0                  | 0                  | 6.772588722239782  | 4.678847363806268  | 0                  | 0                  | 5.079441541679836  |
| **soaring**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **massive**          | 0                  | 1                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **slip**             | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **tongue**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **western**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 3.9616585060234524 | 0                  | 0                  |
| **identified**       | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **appears**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 3.6945957207744073 | 0                  | 0                  | 3.83258146374831   |
| **late**             | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **bolster**          | 0                  | 1                  | 0                  | 0                  | 3.0216512475319814 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **domestic**         | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **demand**           | 0                  | 1                  | 2                  | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  |
| **indications**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **anytime**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reagan**           | 0                  | 1                  | 0                  | 3.8630462173553424 | 4.892574205256839  | 1.1823215567939547 | 1.1541506798272583 | 1.1335313926245225 | 2.2355660713127667 | 1.1053605156578263 |
| **administration**   | 0                  | 1                  | 0                  | 3.8630462173553424 | 11.008291961827886 | 1.1823215567939547 | 1.1541506798272583 | 1.1335313926245225 | 4.4711321426255335 | 1.1053605156578263 |
| **facing**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **uproar**           | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **apparent**         | 0                  | 1                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **lack**             | 0                  | 1                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **progress**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 1.6931471805599454 | 0                  | 1.6931471805599454 |
| **learning**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **extract**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **dramatic**         | 0                  | 1                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **required**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **imposed**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **unprecedented**    | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **tariffs**          | 0                  | 1                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **electronic**       | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **adhere**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **semi**             | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **conductor**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pricing**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **countries**        | 0                  | 1                  | 1                  | 13                 | 0                  | 1.1823215567939547 | 3.462452039481775  | 0                  | 3.7539432848427183 | 2.4462871026284194 |
| **shift**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **designed**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **appease**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **mounting**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **congressional**    | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **anger**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **weeks**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 1.8109302162163288 | 0                  |
| **reconvene**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **review**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  |
| **news**             | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **earned**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **record**           | 0                  | 1                  | 1                  | 1                  | 0                  | 0                  | 1.336472236621213  | 0                  | 0                  | 1.5108256237659907 |
| **surplus**          | 0                  | 1                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **underscored**      | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **urgent**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **signs**            | 0                  | 1                  | 0                  | 1.2876820724517808 | 0                  | 1.4054651081081644 | 0                  | 0                  | 3.175573329804238  | 0                  |
| **improvement**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stunned**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **derive**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **benefits**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **leading**          | 0                  | 1                  | 0                  | 0                  | 1.5108256237659907 | 2.8109302162163288 | 4.009416709863639  | 3.8630462173553424 | 2.502628856561812  | 3.669430653942629  |
| **closely**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **ranges**           | 0                  | 1                  | 0                  | 0                  | 0                  | 3.386294361119891  | 6.238463151741691  | 0                  | 6.351146659608476  | 4.532476871297972  |
| **reflecting**       | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **reality**          | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **envisages**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **include**          | 0                  | 1                  | 0                  | 2.5753641449035616 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **united**           | 0                  | 1                  | 1                  | 3                  | 3                  | 2                  | 4                  | 3                  | 1                  | 4                  |
| **agree**            | 0                  | 1                  | 1                  | 0                  | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **essential**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **redress**          | 0                  | 1                  | 0                  | 0                  | 3.0216512475319814 | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **huge**             | 0                  | 1                  | 1                  | 0                  | 1.2231435513142097 | 0                  | 1.336472236621213  | 1.2876820724517808 | 0                  | 1.3566749439387324 |
| **global**           | 0                  | 1                  | 0                  | 2.5753641449035616 | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  |
| **analysts**         | 0                  | 1                  | 0                  | 0                  | 7.554128118829953  | 0                  | 0                  | 0                  | 3.6218604324326575 | 0                  |
| **imply**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stable**           | 0                  | 1                  | 0                  | 0                  | 0                  | 5.079441541679836  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **confident**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **governments**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **including**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **cuts**             | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 5.079441541679836  | 1.587786664902119  | 1.5108256237659907 |
| **carried**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sharp**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 5.541893581161611  | 0                  | 0                  | 5.748872195622465  |
| **undermined**       | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **cooperation**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 5.541893581161611  | 1.6931471805599454 | 0                  | 5.079441541679836  |
| **policymaker**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **track**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **bonn**             | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 4.678847363806268  | 4.410010887737207  | 1.4054651081081644 | 4.070024831816197  |
| **stimulative**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **calls**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **sources**          | 0                  | 1                  | 0                  | 3.8630462173553424 | 2.4462871026284194 | 5.911607783969774  | 5.770753399136291  | 0                  | 3.7539432848427183 | 6.1157177565710485 |
| **unsettled**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **policymakers**     | 0                  | 1                  | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  |
| **obvious**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **exception**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **feels**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **managed**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **spent**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **estimated**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **intervening**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **rise**             | 0                  | 1                  | 1                  | 0                  | 2.4462871026284194 | 1.1823215567939547 | 2.3083013596545165 | 0                  | 0                  | 2.713349887877465  |
| **upset**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **america**          | 0                  | 1                  | 0                  | 1.2876820724517808 | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **hearted**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **attempt**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **falling**          | 0                  | 1                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **flouting**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **outright**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **close**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **policymaking**     | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **understanding**    | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stood**            | 0                  | 1                  | 1                  | 0                  | 1.2231435513142097 | 1.1823215567939547 | 0                  | 0                  | 0                  | 0                  |
| **struck**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **extremely**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **worried**          | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **change**           | 0                  | 1                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 3.386294361119891  | 1.587786664902119  | 0                  |
| **reminder**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **issues**           | 0                  | 1                  | 0                  | 2.5753641449035616 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **departing**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **language**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **current**          | 0                  | 1                  | 1                  | 0                  | 1.2231435513142097 | 2.3646431135879094 | 2.3083013596545165 | 1.1335313926245225 | 2.2355660713127667 | 2.2107210313156527 |
| **triggered**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **live**             | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **responsibilities** | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stimulate**        | 0                  | 1                  | 0                  | 2.5753641449035616 | 1.2231435513142097 | 1.1823215567939547 | 1.1541506798272583 | 1.1335313926245225 | 0                  | 1.2231435513142097 |
| **unravel**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **spirit**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **realisation**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **leave**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **agrees**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **external**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **adjusted**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **cede**             | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **national**         | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sovereignty**      | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **moving**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 1.8472978603872037 | 1.6931471805599454 | 0                  | 1.6931471805599454 |
| **closer**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **operation**        | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **meeting**          | 0                  | 1                  | 1                  | 0                  | 0                  | 0                  | 4.678847363806268  | 4.410010887737207  | 1.4054651081081644 | 4.070024831816197  |
| **italy**            | 0                  | 1                  | 1                  | 1                  | 1                  | 1                  | 1                  | 1                  | 1                  | 1                  |
| **status**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **explain**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **program**          | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **plans**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **faster**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **told**             | 0                  | 1                  | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **time**             | 0                  | 1                  | 2                  | 3                  | 0                  | 1.1823215567939547 | 0                  | 0                  | 2.8109302162163288 | 0                  |
| **bring**            | 0                  | 1                  | 0                  | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **serve**            | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **notice**           | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **wait**             | 0                  | 1                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reduce**           | 0                  | 1                  | 0                  | 1.2876820724517808 | 1.2231435513142097 | 0                  | 0                  | 1.4700036292457357 | 0                  | 0                  |
| **gap**              | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **german**           | 0                  | 1                  | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 5.079441541679836  | 4.763359994706358  | 0                  |
| **surpluses**        | 0                  | 1                  | 0                  | 1.2876820724517808 | 0                  | 1.4054651081081644 | 1.336472236621213  | 1.2876820724517808 | 0                  | 1.3566749439387324 |
| **sales**            | 0                  | 0                  | 4.216395324324493  | 0                  | 3.0216512475319814 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sold**             | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pleas**            | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stabilise**        | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **slow**             | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **real**             | 0                  | 0                  | 2.8109302162163288 | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **manager**          | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **remain**           | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **push**             | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **exporters**        | 0                  | 0                  | 2.8109302162163288 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **trading**          | 0                  | 0                  | 2.8109302162163288 | 1.2876820724517808 | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 0                  |
| **industrialised**   | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **lost**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **credibility**      | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **ministers**        | 0                  | 0                  | 1.4054651081081644 | 3.8630462173553424 | 0                  | 2.8109302162163288 | 2.672944473242426  | 1.2876820724517808 | 1.251314428280906  | 2.4462871026284194 |
| **month**            | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 0                  | 0                  | 1.6931471805599454 | 4.763359994706358  | 0                  |
| **stabilisation**    | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reversal**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **success**          | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 1.2231435513142097 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **plaza**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **weaken**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **overvalued**       | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **confusion**        | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **ranks**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **encouraged**       | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **challenge**        | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **finance**          | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 2.8109302162163288 | 5.345888946484852  | 1.2876820724517808 | 1.251314428280906  | 3.669430653942629  |
| **minister**         | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 1.2231435513142097 | 2.3646431135879094 | 3.462452039481775  | 0                  | 0                  | 2.713349887877465  |
| **kiichi**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 0                  |
| **miyazawa**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 5.541893581161611  | 0                  | 0                  | 1.916290731874155  |
| **matched**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **weekend**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **zone**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reverse**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **remarks**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **chairman**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.5108256237659907 | 1.4054651081081644 | 1.336472236621213  | 0                  | 0                  | 1.5108256237659907 |
| **paul**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 1.6931471805599454 | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **volcker**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 1.6931471805599454 | 3.1192315758708453 | 0                  | 0                  | 3.386294361119891  |
| **governor**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **satoshi**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sumita**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **brought**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **raised**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **question**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **trend**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **cool**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **response**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reflected**        | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **basic**            | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **oversupply**       | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **selling**          | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sheer**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **speculative**      | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **nature**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **koichi**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **miyazaki**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **deputy**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **sanwa**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **weak**             | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 1.2231435513142097 | 0                  | 1.336472236621213  | 0                  | 0                  | 1.5108256237659907 |
| **matter**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **operators**        | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **closed**           | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **tuesday**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **gain**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **temporary**        | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **meets**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **discuss**          | 0                  | 0                  | 1.4054651081081644 | 2.5753641449035616 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **chief**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **unsure**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **methods**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sceptical**        | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **particulary**      | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **prevent**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **continuing**       | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pressure**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 3.0216512475319814 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **limiting**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **options**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **tadahiko**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **nashimoto**        | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **term**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 3.6945957207744073 | 1.6931471805599454 | 6.351146659608476  | 3.0216512475319814 |
| **credit**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **bearish**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **factor**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **expected**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **june**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.5108256237659907 | 0                  | 1.5596157879354227 | 1.4700036292457357 | 0                  | 1.5108256237659907 |
| **export**           | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 0                  | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **bills**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **september**        | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **delayed**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **expectation**      | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **depreciation**     | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **request**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **houses**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **ministry**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **industry**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **restrict**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **ineffective**      | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **light**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **anticipating**     | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **active**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **institutional**    | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **hedge**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **risks**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **bond**             | 0                  | 0                  | 1.4054651081081644 | 1.2876820724517808 | 0                  | 1.4054651081081644 | 0                  | 1.4700036292457357 | 0                  | 0                  |
| **holdings**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **business**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **starting**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **range**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 0                  |
| **traded**           | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **considered**       | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 3.6945957207744073 | 0                  | 0                  | 3.83258146374831   |
| **falls**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pick**             | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **renewed**          | 0                  | 0                  | 1.4054651081081644 | 0                  | 1.5108256237659907 | 1.4054651081081644 | 1.336472236621213  | 0                  | 0                  | 1.5108256237659907 |
| **downward**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **momentum**         | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **slide**            | 0                  | 0                  | 1.4054651081081644 | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  |
| **debt**             | 0                  | 0                  | 0                  | 10.158883083359672 | 1.5108256237659907 | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **meetings**         | 0                  | 0                  | 0                  | 6.772588722239782  | 0                  | 3.386294361119891  | 3.1192315758708453 | 1.4700036292457357 | 1.4054651081081644 | 2.713349887877465  |
| **loans**            | 0                  | 0                  | 0                  | 6.772588722239782  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **developing**       | 0                  | 0                  | 0                  | 6.772588722239782  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **plan**             | 0                  | 0                  | 0                  | 5.079441541679836  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **debtor**           | 0                  | 0                  | 0                  | 5.079441541679836  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **grow**             | 0                  | 0                  | 0                  | 5.079441541679836  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **policy**           | 0                  | 0                  | 0                  | 5.079441541679836  | 0                  | 6.772588722239782  | 1.5596157879354227 | 4.410010887737207  | 2.8109302162163288 | 1.3566749439387324 |
| **fund**             | 0                  | 0                  | 0                  | 3.386294361119891  | 1.5108256237659907 | 0                  | 1.5596157879354227 | 0                  | 1.587786664902119  | 1.5108256237659907 |
| **rates**            | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 11.852030263919618 | 3.1192315758708453 | 2.9400072584914714 | 2.8109302162163288 | 2.713349887877465  |
| **growing**          | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **initiative**       | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **french**           | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **poorest**          | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **issue**            | 0                  | 0                  | 0                  | 3.386294361119891  | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **strengthening**    | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pct**              | 0                  | 0                  | 0                  | 3.386294361119891  | 4.532476871297972  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  |
| **pressing**         | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **development**      | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 1.8472978603872037 | 1.6931471805599454 | 0                  | 1.6931471805599454 |
| **environment**      | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **talks**            | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 1.6931471805599454 | 3.1192315758708453 | 0                  | 3.175573329804238  | 1.5108256237659907 |
| **products**         | 0                  | 0                  | 0                  | 3.386294361119891  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **concerns**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **inflation**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **increases**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **confrontations**   | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **bankers**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 1.8472978603872037 | 0                  | 3.6218604324326575 | 1.6931471805599454 |
| **meet**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 1.8472978603872037 | 1.6931471805599454 | 1.587786664902119  | 1.5108256237659907 |
| **deteriorating**    | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **auspices**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sunk**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **upsetting**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stock**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **uncertainty**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **vitality**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **economy**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 3.6945957207744073 | 1.6931471805599454 | 0                  | 3.386294361119891  |
| **heavily**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **indebted**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **continue**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 1.8472978603872037 | 1.6931471805599454 | 1.587786664902119  | 1.5108256237659907 |
| **carry**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **burden**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **vast**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **assistance**       | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **diplomatic**       | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sort**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **unveiled**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **seoul**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **drawn**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **brazil**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **suspended**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **payments**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **commercial**       | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **responded**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **laying**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **groundwork**       | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **writing**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **brazilian**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **separately**       | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **prime**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **jacques**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **chirac**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **visit**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 3.0216512475319814 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **earlier**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 1.5596157879354227 | 0                  | 0                  | 1.6931471805599454 |
| **president**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 3.0216512475319814 | 0                  | 0                  | 0                  | 3.6218604324326575 | 0                  |
| **sounded**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **funnel**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **worldwide**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **grain**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **discussed**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 3.0216512475319814 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **undoubtedly**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **embraced**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **special**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **position**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **suggested**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **disussing**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **assess**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **funding**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **largest**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **attempting**       | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **coordinate**       | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **hope**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **controlling**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **deficits**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **evidence**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **activity**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **forecasts**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **expansion**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 3.9616585060234524 | 0                  | 0                  |
| **affect**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **ability**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **difficulties**     | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **absorbed**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **exports**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **country**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **allowing**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **earn**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **critical**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **cut**              | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 1.6931471805599454 | 1.5596157879354227 | 1.4700036292457357 | 2.8109302162163288 | 1.3566749439387324 |
| **running**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **import**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **discussions**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 1.8472978603872037 | 0                  | 0                  | 0                  |
| **wide**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **ranging**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **touching**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **impact**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 1.5108256237659907 | 0                  | 0                  | 0                  | 0                  | 0                  |
| **examination**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pressures**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **wake**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **decision**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **microchip**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **accelerated**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **grew**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **alarmed**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **offing**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **concern**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 3.0216512475319814 | 0                  | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **prompted**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **charges**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **chip**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **fair**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **imports**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **undermining**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **fundamental**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **price**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **weakness**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **commodities**      | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **mainstay**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **gather**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sliding**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **debate**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **larger**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **approving**        | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **inter**            | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **link**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **loan**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **dams**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **projects**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **head**             | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **barber**           | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **conable**          | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reviewed**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reorganization**   | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **prepared**         | 0                  | 0                  | 0                  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **carter**           | 0                  | 0                  | 0                  | 0                  | 11.49774439124493  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **hormats**          | 0                  | 0                  | 0                  | 0                  | 9.581453659370776  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **bonds**            | 0                  | 0                  | 0                  | 0                  | 7.66516292749662   | 0                  | 0                  | 0                  | 0                  | 0                  |
| **issuing**          | 0                  | 0                  | 0                  | 0                  | 5.748872195622465  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **government**       | 0                  | 0                  | 0                  | 0                  | 5.748872195622465  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **confidence**       | 0                  | 0                  | 0                  | 0                  | 5.748872195622465  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **genuine**          | 0                  | 0                  | 0                  | 0                  | 3.83258146374831   | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **discount**         | 0                  | 0                  | 0                  | 0                  | 3.83258146374831   | 0                  | 0                  | 0                  | 0                  | 0                  |
| **securities**       | 0                  | 0                  | 0                  | 0                  | 3.83258146374831   | 0                  | 0                  | 0                  | 0                  | 0                  |
| **vice**             | 0                  | 0                  | 0                  | 0                  | 3.83258146374831   | 0                  | 0                  | 0                  | 0                  | 0                  |
| **statements**       | 0                  | 0                  | 0                  | 0                  | 3.83258146374831   | 0                  | 0                  | 0                  | 0                  | 0                  |
| **supported**        | 0                  | 0                  | 0                  | 0                  | 3.83258146374831   | 0                  | 0                  | 0                  | 0                  | 0                  |
| **politically**      | 0                  | 0                  | 0                  | 0                  | 3.83258146374831   | 0                  | 1.8472978603872037 | 0                  | 3.6218604324326575 | 1.6931471805599454 |
| **prospect**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **assaults**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **force**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **eventually**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **unveil**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **distasteful**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **economists**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **acknowledged**     | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **possibility**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **denominated**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **dismissed**        | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **speculation**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **unusual**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **step**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **undertake**        | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **internationally**  | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **coordinated**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  |
| **effort**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **instability**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 1.6931471805599454 | 0                  | 0                  | 1.8109302162163288 | 0                  |
| **defense**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **accompanied**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **resisted**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **raise**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **chiefly**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **hurt**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **fragile**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **expect**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **divided**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **timing**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **announcement**     | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **yasuhiro**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **nakasone**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **focus**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **steady**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **charles**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **taylor**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **analyst**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **prudential**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **bache**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **resort**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **mind**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **troubles**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **urged**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **faced**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **collapsed**        | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **unleashed**        | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **nov**              | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **resounding**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **robert**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **goldman**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sachs**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **administrations**  | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stands**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **rhetoric**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **evidencing**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **practice**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **short**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 1.6931471805599454 | 3.175573329804238  | 1.5108256237659907 |
| **unequivocally**    | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **declined**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **issued**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **mark**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 0                  | 1.8109302162163288 | 1.6931471805599454 |
| **franc**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **aimed**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **essentially**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **buttressing**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pyschological**    | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **attracting**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **investors**        | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **notes**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **drawings**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reserves**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **held**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **sdrs**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **imf**              | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 1.6931471805599454 | 0                  | 0                  | 0                  | 0                  |
| **increased**        | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **swap**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **lines**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stepped**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **gold**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **stephen**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **axilrod**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **nikko**            | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **argued**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **difficult**        | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **fulfill**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **pledges**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **undertaken**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **powers**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 3.386294361119891  | 0                  | 1.6931471805599454 |
| **coincide**         | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **venice**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **summit**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **leaders**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 1.6931471805599454 | 0                  | 1.6931471805599454 |
| **democracies**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **forged**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **fundamentally**    | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **nearing**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **comfortable**      | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **reluctance**       | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **firmly**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **desire**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **allies**           | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **fear**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **fanning**          | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **damn**             | 0                  | 0                  | 0                  | 0                  | 1.916290731874155  | 0                  | 0                  | 0                  | 0                  | 0                  |
| **commitments**      | 0                  | 0                  | 0                  | 0                  | 0                  | 6.295836866004329  | 0                  | 0                  | 4.197224577336219  | 0                  |
| **balladur**         | 0                  | 0                  | 0                  | 0                  | 0                  | 6.295836866004329  | 0                  | 0                  | 0                  | 0                  |
| **accept**           | 0                  | 0                  | 0                  | 0                  | 0                  | 6.295836866004329  | 0                  | 0                  | 0                  | 0                  |
| **recession**        | 0                  | 0                  | 0                  | 0                  | 0                  | 6.295836866004329  | 0                  | 0                  | 0                  | 0                  |
| **darman**           | 0                  | 0                  | 0                  | 0                  | 0                  | 6.295836866004329  | 0                  | 0                  | 0                  | 0                  |
| **consistent**       | 0                  | 0                  | 0                  | 0                  | 0                  | 6.295836866004329  | 3.6945957207744073 | 0                  | 0                  | 1.916290731874155  |
| **rapid**            | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  | 0                  | 0                  | 0                  |
| **descent**          | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  | 0                  | 0                  | 0                  |
| **artificially**     | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  | 0                  | 0                  | 0                  |
| **lead**             | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  | 0                  | 0                  | 0                  |
| **understood**       | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 1.8472978603872037 | 1.6931471805599454 | 3.175573329804238  | 1.5108256237659907 |
| **committed**        | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 0                  | 0                  | 0                  | 0                  |
| **reaffirmed**       | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **broadly**          | 0                  | 0                  | 0                  | 0                  | 0                  | 4.197224577336219  | 1.8472978603872037 | 0                  | 3.6218604324326575 | 1.6931471805599454 |
| **deeply**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **efforts**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **strengthened**     | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **exasperated**      | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **drove**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **rapidly**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **severely**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **disrupted**        | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **heed**             | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **reassure**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **edouard**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **americans**        | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **weaker**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **gerhard**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **stoltenberg**      | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 1.8472978603872037 | 0                  | 0                  | 1.916290731874155  |
| **involves**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **risk**             | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **tangible**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **threat**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **feared**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **picture**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **changed**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **settled**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **pattern**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **result**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 1.8472978603872037 | 1.6931471805599454 | 0                  | 1.6931471805599454 |
| **enthusiasm**       | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **annual**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 3.9616585060234524 | 0                  | 0                  |
| **curb**             | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 4.197224577336219  | 0                  |
| **distaste**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **stems**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **fears**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **outgoing**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **richard**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **television**       | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **interviewers**     | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **driving**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **adversely**        | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **balance**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **ultimately**       | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **drive**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 3.6945957207744073 | 0                  | 0                  | 3.83258146374831   |
| **throw**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **slower**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **maintained**       | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **healthy**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **resorting**        | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **acknowledging**    | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **life**             | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **adjustments**      | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **fixed**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **rein**             | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **deepens**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **implementing**     | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **undertakings**     | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **agreements**       | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 2.0986122886681096 | 0                  |
| **misinterpreted**   | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **wrongly**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **stabilizing**      | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **reach**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **compromise**       | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **fight**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **upturn**           | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 1.9808292530117262 | 0                  | 0                  |
| **bolstered**        | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **supplementary**    | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 1.8472978603872037 | 1.6931471805599454 | 0                  | 1.6931471805599454 |
| **applied**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **summarized**       | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **governors**        | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **focusing**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **created**          | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **prospective**      | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **european**         | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 5.541893581161611  | 0                  | 0                  | 5.748872195622465  |
| **unconvinced**      | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 1.8472978603872037 | 1.6931471805599454 | 0                  | 0                  |
| **meant**            | 0                  | 0                  | 0                  | 0                  | 0                  | 2.0986122886681096 | 0                  | 0                  | 0                  | 0                  |
| **announced**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.505525936990736  | 1.9808292530117262 | 0                  | 3.83258146374831   |
| **departure**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.505525936990736  | 0                  | 0                  | 4.407945608651872  |
| **wilson**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.505525936990736  | 0                  | 0                  | 4.407945608651872  |
| **objectives**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.505525936990736  | 0                  | 2.0986122886681096 | 3.83258146374831   |
| **balances**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.505525936990736  | 0                  | 0                  | 4.407945608651872  |
| **zones**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.505525936990736  | 0                  | 0                  | 4.407945608651872  |
| **sought**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **satisfied**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **reaffirm**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **stimulation**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **endorses**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **initial**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 0                  |
| **reaction**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 0                  |
| **demonstrates**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 0                  |
| **sank**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 0                  |
| **movement**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 0                  |
| **defend**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 2.0986122886681096 | 0                  |
| **happened**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 2.0986122886681096 | 0                  |
| **worth**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **ruling**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 1.9808292530117262 | 0                  | 1.916290731874155  |
| **liberal**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **democratic**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 1.9808292530117262 | 0                  | 1.916290731874155  |
| **party**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **eve**              | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **attend**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **worded**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **terming**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **extraordinary**    | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **noting**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 1.9808292530117262 | 0                  | 1.916290731874155  |
| **repeated**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **willingness**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **unsuccessful**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **scale**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **successful**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **feeling**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **medium**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 2.0986122886681096 | 1.916290731874155  |
| **replaced**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **bickering**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **differences**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **risen**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **acceptance**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **acceptable**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **argues**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **shifts**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **remedy**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **imbalance**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **mention**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **implied**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **reafffirmation**   | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **curbing**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 1.9808292530117262 | 0                  | 1.916290731874155  |
| **shortfall**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **reached**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **argument**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **capitol**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **hill**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **pose**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **substantial**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **inflationary**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **undermine**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **warned**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **independent**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **privately**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **welcomed**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 1.9808292530117262 | 0                  | 1.916290731874155  |
| **remained**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **unit**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **worry**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **blunts**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **monolith**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **concentrate**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **continued**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 2.0986122886681096 | 1.916290731874155  |
| **binding**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **canadian**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **michael**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **prepare**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **norms**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **limited**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **conditions**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 4.197224577336219  | 1.916290731874155  |
| **deviations**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **guidelines**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **consultations**    | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **corrective**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **inclusion**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **london**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **implies**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 1.9808292530117262 | 0                  | 1.916290731874155  |
| **direction**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 1.9808292530117262 | 0                  | 1.916290731874155  |
| **unsuccessfully**   | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **limit**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **fluctuations**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **concept**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **rigid**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 0                  | 2.203972804325936  |
| **secret**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.252762968495368  | 0                  | 4.197224577336219  | 1.916290731874155  |
| **study**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 16.704060527839236 | 0                  | 0                  |
| **fiscal**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 9.545177444479563  | 0                  | 0                  |
| **resolve**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 0                  | 0                  |
| **oecd**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 0                  | 0                  |
| **set**              | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 4.197224577336219  | 0                  |
| **met**              | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 0                  | 0                  |
| **deep**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 0                  | 0                  |
| **roughly**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 0                  | 0                  |
| **promised**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 0                  | 0                  |
| **tax**              | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 4.772588722239782  | 2.0986122886681096 | 0                  |
| **organization**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **plaguing**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **paper**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **preparing**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **ministerial**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **forum**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **coordinating**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **significance**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **dogging**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **attempts**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **achieve**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **joint**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **goals**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 2.0986122886681096 | 0                  |
| **unusually**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **unstable**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **focussed**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **attention**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **clues**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **air**              | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **concludes**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **looked**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **underscores**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **seperately**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **overtures**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **rebuffed**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **reductions**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **steep**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **widening**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **difference**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **yields**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **hand**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 2.0986122886681096 | 0                  |
| **average**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **corrected**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **crisis**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **control**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **equally**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **suggests**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 2.0986122886681096 | 0                  |
| **reduction**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **weakening**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **uncorrected**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **shave**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **main**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 2.0986122886681096 | 0                  |
| **tough**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **figure**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **goal**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **leadership**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **representatives**  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **warmly**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **caution**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **content**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **proposed**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **pushed**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **sharply**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **love**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **accelerate**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **fell**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **steeply**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **quarter**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **reassured**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **fails**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **emerge**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **planned**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.386294361119891  | 0                  | 0                  |
| **prospects**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 7.512232190328822  | 0                  |
| **refused**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 5.008154793552548  | 0                  |
| **strengthen**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 5.008154793552548  | 0                  |
| **specific**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 5.008154793552548  | 0                  |
| **bands**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 5.008154793552548  | 0                  |
| **bundesbank**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 5.008154793552548  | 0                  |
| **private**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 5.008154793552548  | 0                  |
| **narrow**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **movements**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **tamed**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **unruly**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **build**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **reason**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **calm**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **interview**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **concluded**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **period**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **bury**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **hatchet**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **cease**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **quarrel**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **focused**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **left**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **adjust**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **periodic**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **included**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **measure**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **jointly**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **times**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **toyko**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **boost**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **shake**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **fora**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **beneficial**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **conduct**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **initiatives**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **resist**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **increase**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **europeans**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **crucial**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **confirmation**     | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **stated**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **breached**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **british**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **sterling**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **performance**      | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **reassemble**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **invited**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **slowing**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **stimulus**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **emerged**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **karl**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **otto**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **poehl**            | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **follow**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **suit**             | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **approach**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **provision**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **talked**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **public**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **keeping**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **unchanged**        | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **sluggish**         | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **remains**          | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **stubbornly**       | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |
| **agenda**           | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 0                  | 2.504077396776274  | 0                  |

</details>