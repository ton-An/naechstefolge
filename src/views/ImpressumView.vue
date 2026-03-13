<script lang="ts">
/**
 * ImpressumView
 *
 * Legal notice (Impressum) as required by § 5 TMG.
 */
export default {}
</script>

<script setup lang="ts">
import LegalPageLayout from '@/components/LegalPageLayout.vue'
</script>

<template>
  <LegalPageLayout title="Impressum">
    <section>
      <h2 class="text-base font-semibold text-gray-900 mb-2">Angaben gemäß § 5 TMG</h2>
      <p class="mb-0">
        Anton Heuchert<br />
        Regensburger Str. 21a<br />
        85055 Ingolstadt
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-gray-900 mb-2">Kontakt</h2>
      <p class="mb-0">
        Telefon: +49 173 5442286<br />
        E-Mail: anton@antons-webfabrik.eu
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-gray-900 mb-2">EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
    </section>

    <section>
      <h2 class="text-base font-semibold text-gray-900 mb-2">
        Verbraucherstreitbeilegung/Universalschlichtungsstelle
      </h2>
      <p class="mb-0">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </section>

    <p class="text-xs text-gray-500 mt-12">
      Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">e-recht24.de</a>
    </p>
  </LegalPageLayout>
</template>
