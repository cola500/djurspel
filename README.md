# Experiment 013: Djur-Memory

## Hypotes

Kan vi bygga ett tillgangligt memory-spel optimerat for barn med synnedsattning, med hog kontrast, stora touch targets och ljudfeedback?

## Kora projektet

```bash
npm install
npm run dev
```

Oppna pa telefon (samma natverk) eller anvand mobil-emulering i webblasar-devtools.

## Designbeslut

### Tillganglighet
- **Mork bakgrund** (#030712) med starka farger for maximal kontrast
- **Stora touch targets** - korten fyller skarmen, minst 80x80px
- **Trippla ledtradar**: farg + form + ljud for varje djur
- **1.5s visningstid** for uppvanda kort (langre an standard 1s)
- **Inga sma texter** - helt visuellt grannsnitt

### Teknik
- **SVG-silhuetter** direkt i koden - enkla, feta former som ar latta att kanna igen
- **Web Audio API** for syntetiserade djurljud - inga externa filer behovs
- **CSS 3D transforms** for realistisk kortvandningsanimation
- **Next.js med Tailwind** for snabb utveckling

### Ljuddesign
Djurljud syntetiseras med oscillatorer:
- Katt: fallande sinusvag (mjau-liknande)
- Hund: kort fyrkantvag (skall)
- Ko: lag sagtandsvag (mu)
- Etc.

## Framganskriterier

- [x] Hog kontrast - starka farger mot mork bakgrund
- [x] Stora touch targets for mobilanvandning
- [x] Ljud som feedbacksystem
- [x] Valbar svarighetsgrad (4/6/8 par)
- [x] Flip-animation och glow-effekt
- [x] Firandeanimation vid vinst
- [x] Responsiv design for mobiltelefon
