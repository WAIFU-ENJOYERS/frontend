### Project setup guide
```
npm install
npm run format
```
### Run project
```
npm run dev
```
### Run storybook
```
npm run storybook
```
**noted: run the above commands in the project and in the terminal**
### requesting data from backend guide
Run the backend using
```
python manage.py runserver
```
put the code below in the view you want to request data from the backend
```ts
<script>
    data() {
            return {
                data: [] //noted that you can change data to any name you want
            }
        },
        mounted() {
            this.get_data();
        },
        methods: {
            get_data() { //noted that you can change get_data to any name you want
                axios({
                    method: '<http_method>', //get, post, etc
                    url: '<backend_url>',
                }).then(response => this.data = response.data);
            }
        }
<\script>
```
finally, run the frontend and access the view
