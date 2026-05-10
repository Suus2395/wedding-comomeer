(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <header>
    <h1>Dylan & Susan</h1>
    <p>Trouwen aan het Comomeer</p>
    <nav>
      <a href="#agenda">Agenda</a>
      <a href="#locatie">Locatie</a>
      <a href="#voorbereidingen">Voorbereidingen</a>
      <a href="#faq">Veelgestelde vragen</a>
      <a href="#menukaart">Menukaart</a>
      <a href="#drankkaart">Drankkaart</a>
    </nav>
  </header>

  <section id="agenda">
    <h2>Agenda</h2>
    <div class="day">
      <h3>Vrijdag 29 mei</h3>
      <ul>
        <li><strong>15:30 – Welkom aan het Comomeer!</strong><br>Ontvangst met heerlijke hapjes, bubbels en natuurlijk heel veel gezelligheid 🍸</li>
        <li><strong>19:30 – Pizza Party 🍕</strong><br>Italiaanse pizza’s, goede muziek en de perfecte start van ons trouwweekend</li>
        <li><strong>23:30 – Tijd om op te laden 💤</strong><br>Morgen wordt een dag om nooit te vergeten</li>
      </ul>
    </div>
    <div class="day">
      <h3>Zaterdag 30 mei</h3>
      <ul>
        <li><strong>09:00 – 11:00 – Ontbijt ☕🥐</strong><br>Rustig wakker worden met een heerlijke cappuccino, croissants, yoghurt en uitzicht op het meer</li>
        <li><strong>11:00 – 13:00 – Relax & get ready ✨</strong><br>Tijd om te ontspannen, mooi te maken en alvast in de wedding sfeer te komen</li>
        <li><strong>13:00 – De ceremonie 💍</strong><br>Het moment waar we samen naartoe leven</li>
        <li><strong>14:00 – Pre-dinner party 🍹</strong><br>Proosten, kleine hapjes en samen genieten onder de Italiaanse zon</li>
        <li><strong>18:00 – Diner 🍷</strong><br>Lange tafels, goed eten en proosten op de mooie momenten samen</li>
        <li><strong>20:00 – Party time! 🎉</strong><br>Dansen, drankjes en samen het leven vieren tot in de late uurtjes</li>
        <li><strong>00:00 – Sweet dreams 🌙</strong><br>Met een hoofd vol mooie herinneringen</li>
      </ul>
    </div>
    <div class="day">
      <h3>Zondag 31 mei</h3>
      <ul>
        <li><strong>08:00 – 10:00 – Ontbijt 🍳</strong><br>Nog één keer samen genieten van la dolce vita</li>
        <li><strong>10:00 – Uitchecken 👋</strong></li>
      </ul>
    </div>
  </section>

  <section id="locatie">
    <h2>Locatie</h2>
    <p>Het hele weekend verblijven we bij Agriturismo Castello di Vezio, een prachtig agriturismo aan het Comomeer. Hier slapen we, eten we en vieren we ons huwelijk.</p>
    <div class="location-info">
      <h3>📍 Adres</h3>
      <p><strong>Via del Castellano, 16</strong><br>23828 Vezio di Perledo – Varenna (LC)<br>Italia</p>
      <p><strong>Contact:</strong><br>Tel: +39 335 1802302 | +39 338 5752372<br>Email: info@agriturismocastellodivezio.it</p>
    </div>
    <div class="images">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2020/05/Agriturismo-Castello-di-Vezio-vista-lago-new2-768x349.jpg" alt="Vista lago">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2018/11/Agriturismo-Castello-di-Vezio-Castello.jpg" alt="Castello">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2018/11/Agriturismo-Castello-di-Vezio-giardino-fiori.jpg" alt="Giardino fiori">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2019/06/Agriturismo-Castello-di-Vezio-Photogallery9.jpg" alt="Landscape">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2019/06/Agriturismo-Castello-di-Vezio-Photogallery12.jpg" alt="Landscape">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2019/06/Agriturismo-Castello-di-Vezio-Photogallery8.jpg" alt="Landscape">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2019/06/Agriturismo-Castello-di-Vezio-Photogallery13.jpg" alt="Garden">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2019/08/Agriturismo-Castello-di-Vezio-Orto2.jpg" alt="Garden">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2019/06/Agriturismo-Castello-di-Vezio-Photogallery10.jpg" alt="Main House">
      <img src="https://agriturismocastellodivezio.it/wp-content/uploads/2019/06/Agriturismo-Castello-di-Vezio-Photogallery14.jpg" alt="Main House">
    </div>
  </section>

  <section id="voorbereidingen">
    <h2>Voorbereidingen</h2>
    <ul>
      <li><strong>Paspoort / ID-kaart 🇮🇹</strong><br>Vergeet je reisdocument niet, want Italië wacht op ons!</li>
      <li><strong>Een lief kaartje voor in ons wijnvaatje 🍷💌</strong><br>Wij hebben een speciaal wijnvaatje klaarstaan waarin jullie kaartjes kunnen achterlaten. Schrijf een mooie wens, grappige herinnering of lieve boodschap voor ons — iets wat we later met heel veel liefde terug kunnen lezen.</li>
      <li><strong>Je allerbeste humeur 😄</strong><br>Neem vooral veel gezelligheid, dansmoves en wedding vibes mee… de rest regelen wij!</li>
      <li><strong>Check vlak voor vertrek nog even het weer ☀️🌙</strong><br>Overdag hopen we natuurlijk op Italiaanse zonnestralen, maar ’s avonds kan het wat afkoelen aan het Comomeer. Een jasje meenemen is dus geen overbodige luxe.</li>
      <li><strong>Badkleding mee! 👙🏖️</strong><br>Er zijn maar liefst 2 zwembaden aanwezig. Dus als de zon zich laat zien, kun je heerlijk ontspannen en misschien zelfs een frisse duik nemen! ✨</li>
    </ul>
  </section>

  <section id="faq">
    <h2>Veelgestelde vragen</h2>
    <div class="faq-item">
      <h3>Welke kleding trek ik aan op vrijdag? 👗🍸</h3>
      <p>Denk: feestelijk, gezellig en Italiaanse summer vibes. Er is geen strikte dresscode, dus trek vooral iets aan waar jij je mooi, comfortabel en helemaal jezelf in voelt.</p>
    </div>
    <div class="faq-item">
      <h3>Welke kleding trek ik aan op zaterdag? 💍✨</h3>
      <p>Ook zaterdag geldt: feestelijk en passend bij een bruiloft aan het Comomeer. Geen stress over dresscodes — wij vertrouwen volledig op jullie gevoel voor stijl 😉 Kortom: trek iets aan waarin je wilt proosten, dineren én dansen tot laat.</p>
    </div>
    <div class="faq-item">
      <h3>Welke kleding trek ik aan tijdens het ontbijt? ☕🥐</h3>
      <p>Vooral lekker comfortabel! Denk aan je relaxte ochtend-outfit, zonnebril op en rustig wakker worden in Italiaanse sferen.</p>
    </div>
    <div class="faq-item">
      <h3>Ik wil een stukje voordragen of een speech doen. Bij wie moet ik zijn? 🎤❤️</h3>
      <p>Hoe leuk! Marcel (vader van Dylan) neemt hierin het voortouw. Wil je iets voordragen, een verrassing plannen of even afstemmen? Stuur hem gerust een berichtje op 06-20717282.</p>
    </div>
  </section>

  <section id="menukaart">
    <h2>Menukaart</h2>
    <h3>Hapjes op vrijdag:</h3>
    <ul>
      <li>Mini caprese in finger</li>
      <li>Mozzarelline avvolte in zucchine grigliate</li>
      <li>Burrate fresche</li>
      <li>Crudo e melone</li>
      <li>Arancini con salsa al pomodoro</li>
      <li>Pollo fritto con salsa</li>
      <li>Rostì di patate</li>
      <li>Polpette con salsa spicy</li>
      <li>Verdure pastellate (fries)</li>
      <li>Mini Salt brioches</li>
    </ul>
    <h3>Pizzaparty vrijdag</h3>
    <ul>
      <li>Pizza salami: mozzarella, tomaat & salami</li>
      <li>Pizza caprese: mozzarella, tomaat, basilicum & pesto</li>
      <li>Pizza chichen: mozzarella, tomaat, kip, paprika & ui</li>
      <li>Pizza Hawaii: mozzarella, tomaat, ham & ananas</li>
      <li>Pizza special: mozzarella, tomaat, ham, salami, champignons, paprika & ui</li>
    </ul>
    <h3>Hapjes zaterdag</h3>
    <ul>
      <li>Crudo & melone</li>
      <li>Polpetta with yoghurt sauce</li>
    </ul>
    <h3>Diner zaterdag</h3>
    <ul>
      <li>Voor: Caprese salade & bruschetta</li>
      <li>Hoofd: Saffraan risotto of pasta arrabiata</li>
      <li>Na: Limoncello</li>
    </ul>
    <h3>Ontbijt zaterdag & zondag</h3>
    <ul>
      <li>Koffie, thee & sap</li>
      <li>Croissants</li>
      <li>Geroosterd brood</li>
      <li>Yoghurt (met muesli)</li>
      <li>Scrambled eggs</li>
      <li>Sandwiches</li>
      <li>Beleg</li>
    </ul>
  </section>

  <section id="drankkaart">
    <h2>Drankkaart</h2>
    <h3>Warme dranken</h3>
    <ul>
      <li>Koffie</li>
      <li>Thee</li>
    </ul>
    <h3>Frisdrank:</h3>
    <ul>
      <li>Cola</li>
      <li>Fanta</li>
      <li>Ice tea</li>
      <li>Water (ranja)</li>
    </ul>
    <h3>Bier</h3>
    <ul>
      <li>Villacher Marzen Bier (lager)</li>
      <li>Leffe Blond</li>
      <li>Kapuziner Hefeweiss</li>
    </ul>
    <h3>Wijn</h3>
    <ul>
      <li>Lugana Olivini (wit)</li>
      <li>Red doc guardiano (rood)</li>
    </ul>
    <h3>Cocktail</h3>
    <ul>
      <li>Gin tonic (op=op)</li>
    </ul>
  </section>

  <footer>
    <p>Met liefde, Dylan & Susan</p>
  </footer>
`;document.querySelectorAll("nav a").forEach(o=>{o.addEventListener("click",function(a){a.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});
