<template>
    <div class="navbar navbar-dark bg-dark">
        <div class="navbar-brand">
            <img src='../assets/logo.png' width="45" height="45" class="d-inline-block align-top" alt="" />
            <router-link :to="{ name: 'home' }" class="btn btn-dark mr-2 oneclass">&nbsp; Vue + TS Template</router-link>
        </div>
        <div class="d-flex">
            <router-link :to="{ name: 'store' }" class="btn btn-dark mr-2" to="/store">Store Example</router-link>
        </div>
    </div>
</template>