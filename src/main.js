import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Dylan & Susan</h1>
    <p>Giorno del Matrimonio • Agriturismo Castello di Vezio • Maggio 2026 • Lago di Como, Italia</p>
    <nav>
      <a href="#agenda">Agenda</a>
      <a href="#locatie">Locatie</a>
      <a href="#voorbereidingen">Voorbereidingen</a>
      <a href="#fotos">Foto's bruiloft</a>
      <a href="#faq">Veelgestelde vragen</a>
      <a href="#menukaart">Menukaart</a>
      <a href="#drankkaart">Drankkaart</a>
    </nav>
  </header>

  <section id="intro">
    <h2>Intro</h2>
    <p>Binnenkort is het zover, we gaan samen naar het prachtige Comomeer om onze bruiloft te vieren. De grote dag komt nu écht dichtbij en wij kunnen niet wachten om samen met jou herinneringen te maken vol liefde, gezelligheid, lekker eten, mooie gesprekken en natuurlijk heel veel feest. 💍🍋</p>
    <p>Wij vinden het ontzettend speciaal dat jij erbij bent en samen met ons deze bijzondere momenten wilt beleven. Op deze website vind je alle informatie rondom het weekend, zodat je helemaal klaar bent voor een heerlijke Italiaanse bruiloftsweekend vol wedding vibes.</p>
    <p>Heb je tussendoor nog vragen of is er iets onduidelijk? Laat het ons vooral weten — we helpen je met alle liefde verder ❤️</p>
  </section>

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
    <div class="location-info">
      <p>Het hele weekend verblijven we bij Agriturismo Castello di Vezio, een prachtig agriturismo aan het Comomeer. Hier slapen we, eten we en vieren we ons huwelijk.</p>
    </div>
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

  <section id="fotos">
    <h2>Foto's bruiloft</h2>
    <div class="location-info">
      <p>Voel je vrij om tijdens ons trouwweekend foto's te maken! Via de onderstaande QR-code kunnen jullie alle foto's eenvoudig toevoegen aan ons gezamenlijke album, zodat we samen alle mooie momenten kunnen bewaren.</p>
      <p>Op vrijdag is er geen fotograaf aanwezig, dus dan vinden we het extra leuk als jullie veel foto's maken en delen. Op zaterdag is er van 10:00 tot 22:00 uur een foto- en videograaf aanwezig, dus geniet die dag vooral lekker van het moment.</p>
      <p>Alvast bedankt voor het delen van jullie herinneringen! 📸</p>
    </div>
    <div class="qr-code">
      <img src="/QR-code foto's bruiloft.jpeg" alt="QR-code foto's bruiloft">
    </div>
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
    <h2>🍋 Menukaart 🍋</h2>
    <div class="menu-content">
      <div class="menu-column">
        <h3>Hapjes vrijdag</h3>
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
        <div class="separator">✦</div>
        <h3>Pizzaparty vrijdag</h3>
        <ul>
          <li>Pizza salami: mozzarella, tomaat & salami</li>
          <li>Pizza caprese: mozzarella, tomaat, basilicum & pesto</li>
          <li>Pizza chichen: mozzarella, tomaat, kip, paprika & ui</li>
          <li>Pizza Hawaii: mozzarella, tomaat, ham & ananas</li>
          <li>Pizza special: mozzarella, tomaat, ham, salami, champignons, paprika & ui</li>
        </ul>
      </div>
      <div class="menu-column">
        <h3>Hapjes zaterdag</h3>
        <ul>
          <li>Crudo & melone</li>
          <li>Polpetta with yoghurt sauce</li>
        </ul>
        <div class="separator">✦</div>
        <h3>Diner zaterdag</h3>
        <ul>
          <li><strong>Voor:</strong> Caprese salade & bruschetta</li>
          <li><strong>Hoofd:</strong> Saffraan risotto of pasta arrabiata</li>
          <li><strong>Na:</strong> Limoncello</li>
        </ul>
        <div class="separator">✦</div>
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
      </div>
    </div>
  </section>

  <section id="drankkaart">
    <h2>🍷 Drankkaart 🍷</h2>
    <div class="menu-content">
      <div class="menu-column">
        <h3>Warme dranken</h3>
        <ul>
          <li>Koffie</li>
          <li>Thee</li>
        </ul>
        <div class="separator">✦</div>
        <h3>Frisdrank</h3>
        <ul>
          <li>Cola</li>
          <li>Fanta</li>
          <li>Ice tea</li>
          <li>Water (ranja)</li>
        </ul>
        <div class="separator">✦</div>
        <h3>Bier</h3>
        <ul>
          <li>Villacher Marzen Bier (lager)</li>
          <li>Leffe Blond</li>
          <li>Kapuziner Hefeweiss</li>
        </ul>
      </div>
      <div class="menu-column">
        <h3>Wijn</h3>
        <ul>
          <li><strong>Wit:</strong> Lugana Olivini</li>
          <li><strong>Rood:</strong> Red doc guardiano</li>
        </ul>
        <div class="separator">✦</div>
        <h3>Cocktail</h3>
        <ul>
          <li>Gin tonic (op=op)</li>
        </ul>
      </div>
    </div>
  </section>

  <footer>
    <p>Con tanto affetto, Dylan & Susan</p>
  </footer>
`

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});