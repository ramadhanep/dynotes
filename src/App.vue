<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
  @font-face {
    font-family: "Varela Round";
    src: url("assets/fonts/varela-round/VarelaRound-Regular.ttf");
  }
  #app {
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  *{
    padding: 0;
    margin: 0;
  }
  body{
    margin: 0 !important;
    letter-spacing: .5px;
  }
  .alert-wrapper{
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .alert{
    color: #fff;
    padding: 10px;
    background-color: #2c3e50;
  }
  .alert.danger{
    background-color: #EA2027;
  }
  .loader-wrapper{
    position: fixed;
    z-index: 9999999;
    background-color: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
      border: 5px solid #f3f3f3;
      border-radius: 50%;
      border-top: 5px solid #2c3e50;
      border-bottom: 5px solid #2c3e50;
      width: 50px;
      height: 50px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
  .container{
    padding: 20px !important;
    position: relative;
    overflow: hidden;
  }
  .bg-color{
      background-color: #f9f9f9;
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .text-center{
    text-align: center;
  }

  input{
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: .1px solid #ddd;
    background: transparent;
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
  input::placeholder{
    color: #ccc;
  }
  .search-form{
    margin-top: 25px;
    position: relative;
    overflow: hidden;
  }
  .input-distance{
    margin-top: 15px;
  }
  .top-distance{
    margin-top: 40px;
  }
  .top-distance.sm{
    margin-top: 25px;
  }

  .btn-submit{
    border: none;
    outline: none;
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    color: #fff;
    background-color: #2c3e50;
    padding: 12px;
    border-radius: 5px;
    width: 100%;
    transition: .4s all;
  }

  .card{
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
  }
  .card + .card{
    margin-top: 15px;
  }
  .card-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-footer p{
    font-size: 12px;
  }
</style>