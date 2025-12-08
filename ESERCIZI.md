# # 📘 Esercizi JavaScript — Percorso Progressivo

Questo documento contiene un percorso strutturato di esercizi JavaScript, dal livello base fino a progetti avanzati da portfolio.
Tutti gli esercizi sono pensati per situazioni reali di lavoro (eCommerce, dashboard, form, API, UI interattive).

---

---

# ## ⭐ SEZIONE 1 — Quick Wins

### ### **1.1 — Text Formatter Tool**

**Scenario:** strumento per trasformare testo in maiuscolo/minuscolo (utile a un social media manager).

**Obiettivo:** usare DOM, `addEventListener`, metodi stringa.

**Funzionalità richieste:**

* Campo input di testo
* Bottone "MAIUSCOLE"
* Bottone "minuscole"
* Output che mostra il testo trasformato

--- *COMPLETATO*

### ### **1.2 — Mini Calcolatore IVA**

**Scenario:** tool per chi lavora in eCommerce.

**Obiettivo:** usare parsing numerico e update del DOM.

**Funzionalità richieste:**

* Input prezzo
* Select percentuale IVA (22%, 10%…)
* Bottone "Calcola"
* Output totale formattato

--- *COMPLETATO*

### ### **1.3 — Counter con Limiti**

**Scenario:** limite caratteri per descrizione prodotto.

**Obiettivo:** condizioni, classi dinamiche.

**Funzionalità richieste:**

* Counter che parte da 0
* Max 200 caratteri
* > 180 → colore arancione
* =200 → rosso + blocca incremento

--- *COMPLETATO*

---

# ## 🚀 SEZIONE 2 — Livello Intermedio

### ### **2.1 — To-Do List con Persistenza**

**Scenario:** esercizio “classico” da colloquio frontend.

**Obiettivi tecnici:**

* Array
* DOM dinamico
* Rimozione elementi
* localStorage

**Funzionalità richieste:**

* Aggiungi task
* Cancella task
* Salva automaticamente la lista

---*COMPLETATO*

### ### **2.2 — Mini Product Filter (eCommerce)**

**Scenario:** filtrare prodotti per prezzo in un negozio.

**Obiettivi tecnici:** `array.filter()`, rendering dinamico.

**Dati esempio:**

```js
const products = [
  { name: "Crema Viso", price: 29 },
  { name: "Mousse", price: 19 },
  { name: "Olio Gel", price: 24 }
];
```

**Funzionalità richieste:**

* Input prezzo massimo
* Mostrare solo i prodotti ≤ prezzo inserito
* Messaggio "0 risultati" se necessario

---

### ### **2.3 — Countdown Timer Professionale**

**Scenario:** landing page con offerta a tempo.

**Obiettivi tecnici:** `Date()`, `setInterval`.

**Funzionalità richieste:**

* Timer di 1 ora
* Update ogni secondo
* Alla fine → mostra messaggio “Offerta scaduta”

---

---

# ## 🧩 SEZIONE 3 — Avanzato / Job Interview

### ### **3.1 — Crypto Price Checker**

**Scenario:** dashboard finanziaria o test tecnico.

**Obiettivi tecnici:**

* fetch API
* async/await
* gestione errori

**Funzionalità richieste:**

* Select crypto (BTC, ETH, SOL)
* Bottone "Mostra prezzo"
* Chiamata API pubblica
* Mostrare prezzo + variazione 24h

---

### ### **3.2 — Weather Dashboard**

**Scenario:** molto richiesto nei colloqui frontend.

**Obiettivi tecnici:** fetch, gestione errori, DOM.

**Funzionalità richieste:**

* Input città
* Chiamata API meteo
* Mostrare:

  * temperatura
  * condizioni
  * icona meteo
* Messaggio "Città non trovata"

---

### ### **3.3 — Form Validator Professionale**

**Scenario:** registrazioni utenti, checkout, landing.

**Obiettivi tecnici:** regex, validazione in tempo reale.

**Campi richiesti:**

* Email valida
* Password con requisiti
* Conferma password
* Feedback dinamico (verde/rosso)

---

---

# ## 🏗️ SEZIONE 4 — Mini Progetti da Portfolio

### ### **4.1 — Expense Tracker (Gestione Spese)**

**Obiettivi tecnici:**

* CRUD completo
* Filtri e ordinamenti
* localStorage
* Calcoli dinamici

**Funzionalità richieste:**

* Aggiungi spesa (categoria, data, importo)
* Filtri per categoria/data
* Totale aggiornato
* Possibile grafico semplice

---

### ### **4.2 — Mini Dashboard eCommerce**

**Obiettivi tecnici:** API, grafici, calcoli.

**Funzionalità richieste:**

* Caricare dati finti o via API
* Mostrare:

  * ricavi totali
  * prodotti più venduti
  * conversion rate
* Tabelle dinamiche
* Grafici (anche senza librerie esterne)

---

### ### **4.3 — Landing Page Interattiva**

**Scenario:** molto utile per portfolio.

**Obiettivi tecnici:** modali, scroll animation, UI interattive.

**Funzionalità richieste:**

* Menu sticky
* Effetti on-scroll
* Modale con form
* Sezione FAQ apribile/chiudibile

---

---

# ## 🎯 SEZIONE 5 — Progetto Finale (Livello Colloquio)

### ### **5.1 — Product Customizer (tipo Shopify)**

**Obiettivi tecnici:**

* Gestione varianti
* Aggiornamento dinamico dei prezzi
* Carrello semplice
* Manipolazione avanzata del DOM

**Funzionalità richieste:**

* Cambiare variante colore
* Cambiare quantità
* Calcolare prezzo in tempo reale
* Aggiungere al carrello
* Mostrare carrello aggiornato

---

