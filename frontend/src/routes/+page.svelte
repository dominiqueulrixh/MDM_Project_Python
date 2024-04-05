<script>
    import { dev } from "$app/environment";

    let url = location.protocol + "//" + location.host;
    if (dev) {
        url = "http://localhost:5000";
    }

    let downhill = 0;
    let uphill = 0;
    let length = 0;

    let prediction = "n.a.";
    let din33466 = "n.a.";
    let sac = "n.a.";

    let showResults = false;
    let isLoading = false;

    async function predict() {
        isLoading = true; // Setze isLoading auf true, wenn die Berechnung beginnt

        // Füge eine Verzögerung von 1 Sekunde ein
        setTimeout(async () => {
            let result = await fetch(
                url +
                    "/api/predict?" +
                    new URLSearchParams({
                        downhill: downhill,
                        uphill: uphill,
                        length: length,
                    }),
                {
                    method: "GET",
                },
            );
            let data = await result.json();
            console.log(data);
            prediction = data.time;
            din33466 = data.din33466;
            sac = data.sac;

            isLoading = false; // Setze isLoading auf false, wenn die Berechnung abgeschlossen ist
            showResults = true; // Zeige die Ergebnisse nach dem Berechnen an
        }, 1000); // 1000 Millisekunden = 1 Sekunde
    }
</script>

<title>HikePlanner</title>

<div class="background"></div>

<div class="content">
    <h1>HikePlanner</h1>
    <p>Erfasse alle Zahlen in Meter</p>
    <br>
    <p>
        Abwärts&nbsp; 
        <label>
            <input type="number" bind:value={downhill} min="0" max="10000" />
            <input type="range" bind:value={downhill} min="0" max="10000" />
        </label>
    </p>

    <p>
        Aufwärts
        <label>
            <input type="number" bind:value={uphill} min="0" max="10000" />
            <input type="range" bind:value={uphill} min="0" max="10000" />
        </label>
    </p>

    <p>
        Distanz&nbsp;&nbsp;
        <label>
            <input type="number" bind:value={length} min="0" max="30000" />
            <input type="range" bind:value={length} min="0" max="30000" />
        </label>
    </p>

    <button class="berechnen" on:click={predict}
        >{#if isLoading}
            <!-- Ladesymbol hier -->
            <div class="laden">Laden...</div>
        {:else}
            Berechnen
        {/if}
    </button>
</div>

{#if showResults}
    <table class="results">
        <tr>
            <td><strong>Dauer:</strong></td><td>{prediction}</td>
        </tr>
        <tr>
            <td><strong>DIN33466:</strong></td><td>{din33466}</td>
        </tr>
        <tr>
            <td><strong>SAC:</strong></td><td>{sac}</td>
        </tr>
    </table>

    <div class="content">Kurze Erklärung:</div>

    <table class="results">
        <tr>
            <td>Dauer:</td><td>geschätzte Zeit, die benötigt wird, um eine Wanderung oder einen Weg zurückzulegen</td>
        </tr>
        <tr>
            <td>DIN33466:</td><td>Norm für die Zeitangabe von den Wegweiser für Wanderwege</td>
        </tr>
        <tr>
            <td>SAC:</td><td>Berechnungsmethode des Schweizer Alpen-Clubs (SAC)</td>
        </tr>
    </table>

{/if}

<style>
    h1 {
        margin: 0; /* Margin des h1-Elements auf 0 setzen */
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("../../public/loser-panorama-road-3874030_1920.jpg");
        background-size: cover; /* Bild so skalieren, dass es den gesamten Bildschirm ausfüllt */
        background-position: center; /* Bild zentrieren */
        background-repeat: no-repeat; /* Bild nicht wiederholen */
        opacity: 40%; /* Transparenz für das Hintergrundbild einstellen */
    }

    .content {
        position: relative; /* Relative Positionierung für den Textinhalt */
        padding: 40px; /* Optional: Links einen Abstand hinzufügen */

        position: relative; /* Positionierung für das Hintergrundbild */
        overflow: hidden;

        color: black;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;


    }

    .results {
        justify-content: center;
        display: table;
        margin: 0 auto;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    /* CSS */
    .berechnen {
        align-self: center;
        background-color: #fff;
        background-image: none;
        background-position: 0 90%;
        background-repeat: repeat no-repeat;
        background-size: 4px 3px;
        border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
        border-style: solid;
        border-width: 2px;
        box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
        box-sizing: border-box;
        color: #41403e;
        cursor: pointer;
        display: inline-block;
        font-family: Neucha, sans-serif;
        font-size: 1rem;
        line-height: 23px;
        outline: none;
        padding: 0.75rem;
        text-decoration: none;
        transition: all 235ms ease-in-out;
        border-bottom-left-radius: 15px 255px;
        border-bottom-right-radius: 225px 15px;
        border-top-left-radius: 255px 15px;
        border-top-right-radius: 15px 225px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .berechnen:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
    }

    .berechnen:focus {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
    }

    .laden {
        color: grey;
    }

    input[type="number"] {
        box-sizing: border-box;
        font-family: inherit;
        font-size: 14px;
        vertical-align: baseline;
        font-weight: 400;
        line-height: 1.29;
        letter-spacing: 0.16px;
        border-radius: 0;
        outline: 2px solid transparent;
        outline-offset: -2px;
        width: 100%;
        height: 40px;
        border: none;
        border-bottom: 1px solid #8d8d8d;
        background-color: #f4f4f4;
        padding: 0 16px;
        color: #161616;
        transition:
            background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
            outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
        width: 10%;
    }

    input[type="range"]:focus {
        outline: none;
    }

    input[type="range"] {
        appearance: none;
        width: 100%;
        border-radius: 6px;
        height: 12px;
        background-color: #787878;
        width: 10%;
    }

    input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        background-color: black;
        border: 1.5px solid #3b3b3b;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>
