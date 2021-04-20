<template><Chart :options="PieChartOptionCreator()" /></template>

<script setup>
import Chart from './Chart.vue';
import PieChartOptionCreator from '../charts/pieChartOptions';
</script>

<style scoped></style>
