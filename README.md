# Moment 3 i kursen DT208G - Programmering i TypeScript - Angular

## Uppgiftsbeskrivning
Denna uppgift gick ut på att skapa en webbapplikation som bygger på Angular. Webbplatsen består utav tre undersidor, varav en undersida för konvertering av värden. Uppgiften avser moment 3 i kursen DT208G - programmering i TypeScript.

## Skapande
Webbapplikationen är byggd med Angular, HTML, TypeScript och styling med CSS. Samtlig användarinteraktion sköts via angulars komponenter (components) och databindningstekniker. 

Min webbapplikation består utav tre sidor inklusive startsidan.

**Startsidan** består utav en kort text som beskriver momentet för kursen samt en hänvisning till navigeringsmenyn för vidare information. 

**Konverterings-sidan** erbjuder ett konverteringsverktyg där man kan konvertera mellan olika enheter; från meter till fot, och från celsius till fahrenheit och vice versa. Detta är skapat med Angulars komponenter och databindning (ngModel för tvåvägsdatabindning).

**Om-sidan** består utav en undersida som beskriver hur uppgiften är löst samt slutsatser.

## Funktioner

Förutom konverteringsverktyget så har navigeringen på webbplatsen skapats med Angulars router-modul. Samtliga rutter är definerade i app.routes.ts för att koppla sökvägar till specifika komponenter och navigera användaren mellan de olika undersidorna utan att alla sidor laddas om. I navigeringen har även routerLink och routerLinkActive använts för att binda länkarna till en specifik rutt och för att visa vilken länk som är aktiv. 

## Komponenter

Utöver de tre komponenterna för undersidorna har även två andra komponenter skapats för header och footer som har infogats på samtliga undersidor. 

## Skapad av:
- Julie Andersson
- Webbutvecklingsprogrammet på Mittuniversitetet i Sundsvall
- Moment 3 i kursen DT208 Programmering i TypeScript
