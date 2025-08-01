    $(document).ready(function() {
            // Albüm resimlerini yükle
            const memories = [
                { img: 'img/2.jpg', caption: '' },
                { img: 'img/6.JPG', caption: '' },
                { img: 'img/13.JPG', caption: '' },
                { img: 'img/5.JPG', caption: '' },
                { img: 'img/3.jpeg', caption: '' },
                { img: 'img/7.JPG', caption: '' },
                { img: 'img/8.JPG', caption: '' },
                { img: 'img/9.JPG', caption: '' },
                { img: 'img/10.JPG', caption: '' },
                { img: 'img/11.JPG', caption: '' },
                { img: 'img/12.JPG', caption: '' },
                { img: 'img/14.JPG', caption: '' },
                  { img: 'img/15.JPG', caption: '' },
                { img: 'img/16.JPG', caption: '' },
              
                
            ];
            
            const album = $('#memory-album');
            memories.forEach(memory => {
                album.append(`
                    <div class="album-item">
                        <img src="${memory.img}" alt="${memory.caption}" title="${memory.caption}">
                    </div>
                `);
            });
            
            // Modal işlevselliği
            const modal = $('#imageModal');
            const modalImg = $('#zoomedImage');
            const closeBtn = $('.close');
            
            $('.album img').click(function() {
                modal.show();
                modalImg.attr('src', this.src);
            });
            
            closeBtn.click(function() {
                modal.hide();
            });
            
            $(window).click(function(event) {
                if (event.target == modal[0]) {
                    modal.hide();
                }
            });
            
            // Sayfa yüklendiğinde yavaşça görünür yap
            $('body').hide().fadeIn(1000);
        });
$(window).on("scroll", function() {
    const heart = $("#scrollHeart");
    if ($(this).scrollTop() > 400) {
        heart.css("opacity", 1);
    } else {
        heart.css("opacity", 0);
    }
});
