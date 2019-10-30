<template>
    <div class="bg-color-theme">
        <div class="container">
            <div class="top-distance"></div>
            <h1 class="theme">List Notes</h1>
            <div class="search-form">
                <form>
                    <input type="text" placeholder="Search..." class="theme">
                </form>
            </div>
            <div class="notes">
                <div class="top-distance sm"></div>
                <div class="card">
                    <h3>Hari yang indah</h3>
                    <div class="top-distance sm"></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, ducimus consectetur explicabo nostrum placeat quo ullam. Laudantium natus, accusamus cum veniam voluptatem sequi voluptatibus eligendi fugit, facere, rem totam mollitia! ...</p>
                    <div class="top-distance sm"></div>
                    <div class="card-footer">
                        <p>11.00 AM</p>
                        <p>17 Jun 2019</p>
                    </div>
                </div>
                <div class="card">
                    <h3>Hari yang indah</h3>
                    <div class="top-distance sm"></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, ducimus consectetur explicabo nostrum placeat quo ullam. Laudantium natus, accusamus cum veniam voluptatem sequi voluptatibus eligendi fugit, facere, rem totam mollitia! ...</p>
                    <div class="top-distance sm"></div>
                    <div class="card-footer">
                        <p>11.00 AM</p>
                        <p>17 Jun 2019</p>
                    </div>
                </div>
                <div class="card">
                    <h3>Hari yang indah</h3>
                    <div class="top-distance sm"></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, ducimus consectetur explicabo nostrum placeat quo ullam. Laudantium natus, accusamus cum veniam voluptatem sequi voluptatibus eligendi fugit, facere, rem totam mollitia! ...</p>
                    <div class="top-distance sm"></div>
                    <div class="card-footer">
                        <p>11.00 AM</p>
                        <p>17 Jun 2019</p>
                    </div>
                </div>
                <div class="card">
                    <h3>Hari yang indah</h3>
                    <div class="top-distance sm"></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, ducimus consectetur explicabo nostrum placeat quo ullam. Laudantium natus, accusamus cum veniam voluptatem sequi voluptatibus eligendi fugit, facere, rem totam mollitia! ...</p>
                    <div class="top-distance sm"></div>
                    <div class="card-footer">
                        <p>11.00 AM</p>
                        <p>17 Jun 2019</p>
                    </div>
                </div>
            </div>
            <!-- <button @click="doPageDetailNote">Detail</button> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        doPageDetailNote(){
            this.$router.push({name: "NoteDetail", params: 2})
        }
    }
}
</script>