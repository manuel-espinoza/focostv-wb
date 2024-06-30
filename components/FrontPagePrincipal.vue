<template>
  <section class="front-page-principal-section">
    <div class="principal-card">
      <div class="principal-card-img">
        <img src="/assets/img/image 2.png" alt="notice thumb" />
      </div>
      <div class="principal-card-content">
        <div class="principal-card-title">
          <h2>
            Organizaciones: el régimen de excepción es un pilar del
            autoritarismo de Bukele
          </h2>
        </div>
        <div class="principal-card-resume">
          <p class="resume-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            veniam consequatur quasi, debitis sit harum qui unde facilis quam
            rem facere quibusdam asperiores suscipit minus fugit eaque ab
            mollitia ad.
          </p>
        </div>
        <div class="principal-card-actions">
          <button>
            <label>Leer Nota</label
            ><font-awesome :icon="faSquareArrowUpRight" />
          </button>
        </div>
      </div>
    </div>
    <div class="secondary-card-container">
      <div class="secondary-card">
        <div class="secondary-card-content">
          <h3>
            El Estado y las empresas contra Pescadito de Oro (y las comunidades
            con sed)
          </h3>
          <button>
            <label>Leer Nota</label
            ><font-awesome :icon="faSquareArrowUpRight" />
          </button>
        </div>
        <div class="secondary-card-img">
          <img src="/assets/img/Rectangle 3925.png" alt="image thum" />
        </div>
      </div>
      <div class="secondary-card">
        <div class="secondary-card-content">
          <h3>
            Los menores del Bajo Lempa perseguidos por el régimen se refugiaron
            en Estados Unidos
          </h3>
          <button>
            <label>Leer Nota</label
            ><font-awesome :icon="faSquareArrowUpRight" />
          </button>
        </div>
        <div class="secondary-card-img">
          <img src="/assets/img/Rectangle 3925_1.png" alt="image thum" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
</script>
