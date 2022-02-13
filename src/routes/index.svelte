<script>
  import Header from '../components/Header.svelte';
  import Result from '../components/Result.svelte';
  import AddInput from '../components/AddInput.svelte';
  import Input from '../components/Input.svelte';

  let inputs = [
    {
      subject: 'History',
      score: 100,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
  ];

  $: average = Math.round(
    inputs.map((item) => item.score).reduce((prev, curr) => prev + curr, 0) /
      inputs.length
  );

  $: gpa =
    average > 97
      ? '4.0'
      : average > 93
      ? '4.0'
      : average > 90
      ? '3.7'
      : average > 87
      ? '3.3'
      : average > 83
      ? '3.0'
      : average > 80
      ? '2.7'
      : average > 77
      ? '2.3'
      : average > 73
      ? '2.0'
      : average > 70
      ? '1.7'
      : average > 67
      ? '1.3'
      : average > 65
      ? '1.0'
      : '0.0';
</script>

<main>
  <Header title="GPA Calculator" />
  <div>
    {#each inputs as input}
      <Input bind:input bind:inputs />
    {/each}
    <AddInput bind:inputs />
  </div>
  <Result bind:average bind:gpa />
  <a
    href="https://www.collegesimply.com/guides/{gpa}-gpa-colleges/"
    target="_blank"
    class="w-full flex justify-center text-blue-500 underline my-10"
    >Find Colleges you can Apply</a
  >
</main>
