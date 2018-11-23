<template>
	<div class="container">
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
		  New Book
		</button>
		<table class="table table-response">
			<thead>
				<th>Book ID</th>
				<th>Book Author</th>
				<th>Book Title</th>
				<th>Actions</th>
			</thead>
			<tbody>
				<tr v-for="love,key in data">
					<td>{{love.id}}</td>
					<td>{{love.author}}</td>
					<td>{{love.title}}</td>
					<td>
						<button class="btn btn-danger btn-sm" @click="clickDelete(love.id,key)">Delete</button>
						<button class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal2" @click="clickView(love.id)">View</button>
						<button class="btn btn-warning btn-sm">Edit</button>
					</td>
				</tr>
			</tbody>
		</table>


		<div class="modal" id="myModal">
		  <div class="modal-dialog">
		    <div class="modal-content">

		      <!-- Modal Header -->
		      <div class="modal-header">
		        <h4 class="modal-title">Modal Heading</h4>
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		      </div>

		      <!-- Modal body -->
		      <div class="modal-body">
		       <div class="form-group">
		       		<label>Book Author</label>
		       		<input type="text" id="book_author" class="form-control" v-model="book.author">
		       </div>
		       <div class="form-group">
		       		<label>Book Title</label>
		       		<input type="text" id="book_title" class="form-control" v-model="book.title">
		       </div>
		       <div class="form-group">
		       		<label>Book Description</label>
		       		<textarea id="book_description" class="form-control" v-model="book.description">
		       			
		       		</textarea>
		       </div>
		      </div>

		      <!-- Modal footer -->
		      <div class="modal-footer">
		        
		        <button type="button" class="btn btn-primary" @click="clickSubmit">Submit</button>
		      </div>

		    </div>
		  </div>
		</div>

		<div class="modal" id="myModal2">
		  <div class="modal-dialog">
		    <div class="modal-content">

		      <!-- Modal Header -->
		      <div class="modal-header">
		        <h4 class="modal-title">Modal Heading</h4>
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		      </div>

		      <!-- Modal body -->
		      <div class="modal-body">
		       <div class="form-group">
		       		<label>Book Author</label>
		       		<input type="text" id="book_author" class="form-control" disabled="" :value="find.author">
		       </div>
		       <div class="form-group">
		       		<label>Book Title</label>
		       		<input type="text" id="book_title" class="form-control" disabled="":value="find.title">
		       </div>
		       <div class="form-group">
		       		<label>Book Description</label>
		       		<textarea id="book_description" class="form-control" disabled="" :value="find.description">
		       			
		       		</textarea>
		       </div>
		      </div>

		     

		    </div>
		  </div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				book: {
					title:'',
					author:'',
					description: ''
				},
				data: {},
				find: {},
			}
		},
		mounted(){
			this.getBooks();
		},
		methods: {
			clickSubmit(){
				
				axios.post('/api/user/books?token='+localStorage.getItem("token"), this.$data.book)
					.then((response)=> {
						console.log(response);
						if(response.status == 200){
							$('#myModal').modal('hide');
							Object.assign(this.$data, this.$options.data());
							this.getBooks();
						}
					}).catch((error)=> console.log(error));
			},

			getBooks(){
				axios.get('/api/user/books')
					.then((response)=> {
						if(response.status == 200){
							
							this.data = response.data;
							console.log(this.data);
						}
					}).catch((error)=> console.log(error));
			},
			clickView(bookId){
				
				axios.get('/api/user/books/'+bookId)
					.then((response)=> {
						
						if(response.status == 200){
							this.find = response.data;
							console.log(this.find);
						}
					}).catch((error)=> console.log(error));
			},
			clickDelete(bookId,key){

				if(confirm("Are you sure to delete?")){
					axios.delete('/api/user/books/'+bookId)
					.then((response)=> {
						if(response.status == 200){
							console.log(response);
							this.data.splice(key,1);		
						}
						
					}).catch((error)=> console.log(error));
				}else{

				}
			}
		}

	}
</script>