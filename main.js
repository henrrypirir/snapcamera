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
        camara.snap()
        document.getElementById('action').style.display = "block"
      })

      downloadBtn.addEventListener('click', function(){
        var imagenURL = camara.canvas.toDataURL('image/png')

        var link = document.getElementById("download-link")
        link.href = imagenURL
        link.download = "photo.png"

        link.click();
      })

      cancelBtn.addEventListener("click", function(){
        camara.unSnap()
        document.getElementById('action').style.display = "none"
      })

      // stickersBtn.addEventListener("click", function(){
      //   document.getElementById('stickers').style.display = "block"
      // })
      //
      // function addSticker() {
      //   camara.addSticker(this)
      //   document.getElementById('action').style.display = "none"
      // }
    })

})()
