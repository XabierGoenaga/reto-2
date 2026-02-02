<script lang="ts">
	import { faker } from '@faker-js/faker';
</script>

<table class="table">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Nombre Producto</th>
			<th scope="col">Descripción</th>
			<th scope="col">Cantidad</th>
		</tr>
	</thead>
	<tbody>
		{#each { length: 10 }}
			<tr>
				<th scope="row">1</th>
				<td>{faker.commerce.productName()}</td>
				<td>{faker.commerce.productDescription()}</td>
				<td>{faker.helpers.rangeToNumber({ min: 3, max: 20 })}</td>
			</tr>
		{/each}
	</tbody>
</table>
