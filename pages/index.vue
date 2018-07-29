<<template>
    <section>
    <link href='https://fonts.googleapis.com/css?family=Josefin+Sans:100,300' rel='stylesheet' type='text/css'>
    
<div class="cover super-centered-container">
  <canvas id="can">Get a browser</canvas>
  
    
  <div class="overlay-static">    
    <div class="inline-blocks">
      <h2 class="twenty-one block">2</h2>
      <img class="image block" src="~/assets/yesha.jpg"><h2 class="twenty-one block"></h2>
    </div>
    <h1 class="bday">Happy Birthday Yeshuu</h1>
  </div>

</div>
</section>
</template>>

<style>
.inline-blocks > .block {
  display: inline-block;
  vertical-align: middle;
}
.image {
  height: 140px;
  width: 140px;
  border-radius: 180px;
  border: 3px solid #fff;
  margin-top: 22px;
  margin-right: 40px;
}

.twenty-one {
  font-size: 240px;
  font-family: "Josefin Sans";
  font-weight: 100;
  line-height: 180px;
  color: #fff;
  margin: 40px 0;
}

.bday {
  font-size: 24px;
  color: #fff;
  font-family: "Josefin Sans";
  font-weight: 300;
  text-align: center;
}

.cover {
  background: rgba(0, 0, 0, 0.82);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

#can {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.super-centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #131313;
  overflow: hidden;
  background: url("~/assets/background.jpg");
  background-position: center center;
  background-size: contain;
}

a {
  color: skyblue;
  text-decoration: none;
}

.overlay-static {
  position: relative;
  z-index: 1000;
  margin-bottom: 100px;
}
</style>
>
