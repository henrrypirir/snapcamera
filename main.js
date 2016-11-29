;(function(){

    var camara = new Camara("video", "canvas", function(){

      var snap = document.getElementById('snap')
      var downloadBtn = document.getElementById('download')
      var cancelBtn = document.getElementById('cancel')
      var stickersBtn = document.getElementById('sticker')

      // document.querySelectorAll(".sticker").forEach(function(el) {
      //   el.addEventListener("click", addSticker)
      // })

      snap.addEventListener("click", function(){
        alert("click pausa");
        camara.snap()
        document.getElementById('action').style.display = "block"
      })

      downloadBtn.addEventListener('click', function(){
        alert("click descarga");
        var imagenURL = camara.canvas.toDataURL('image/png')

        var link = document.getElementById("download-link")
        link.href = imagenURL
        link.download = "photo.png"

        link.click();
      })

      cancelBtn.addEventListener("click", function(){
        camara.unSnap()
        document.getElementById('action').style.display = "none"
        alert("click cancel");
      })

      stickersBtn.addEventListener("click", function(){
        alert("click div stickes");
        document.getElementById('stickers').style.display = "block"
      })
      //
      // function addSticker() {
      //   camara.addSticker(this)
      //   document.getElementById('action').style.display = "none"
      // }
    })

})()
