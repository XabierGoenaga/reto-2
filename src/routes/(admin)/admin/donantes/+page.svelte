<script lang="ts">
	import { faker } from '@faker-js/faker';
	import { donationTypesDisplayName } from '$lib/constant';
</script>

<table class="table">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Nombre Completo</th>
			<th scope="col">Numero Telefono</th>
			<th scope="col">Tipo</th>
		</tr>
	</thead>
	<tbody>
		{#each { length: 10 }}
			<tr>
				<th scope="row">1</th>
				<td>{faker.person.fullName()}</td>
				<td>{faker.phone.number({ style: 'human' })}</td>
				<td>{faker.helpers.arrayElement(donationTypesDisplayName)}</td>
			</tr>
		{/each}
	</tbody>
</table>
