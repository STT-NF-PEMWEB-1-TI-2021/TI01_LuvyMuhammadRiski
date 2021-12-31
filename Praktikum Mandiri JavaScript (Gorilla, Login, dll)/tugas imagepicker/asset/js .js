function cetakgambar() {
    const anime = document.getElementById('anime');
    const gambar = document.getElementById('gambar');
    let list_anime = document.getElementById("anime");
    let idx = list_anime.selectedIndex;
    console.log("anime_index ke-" + idx + " adalah " + list_anime[idx].value);
    let area_gambar = document.getElementById("gambar");
    area_gambar.src="gambar/" + list_anime[idx].value + ".jpg" + ".png"
alert("ini adalah:" + list_anime.value)
    if (anime.value === 'Asta') {
        gambar.src = "images/asta.jpg"
    }
    if (anime.value === 'Eren') {
        gambar.src = "images/eren.png"
    }
    if (anime.value === 'Gojou') {
        gambar.src = "images/gojo.jpg"
    }
    if (anime.value === 'Hinata') {
        gambar.src="images/hinata.jpg"
    }
    if (anime.value === 'Itadori') {
        gambar.src = "images/itadori.png"
    }
    if (anime.value === "Kageyama") {
        gambar.src = "images/kageyama.png"
    }
    if (anime.value === "Levi") {
        gambar.src ="images/levi.jpg"
    }
    if (anime.value === "Megumi") {
        gambar.src ="images/megumi.jpg"
    }
}