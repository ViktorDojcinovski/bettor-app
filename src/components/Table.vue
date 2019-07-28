<template>
  <div>
    <h5>
      Premier league odds from Marathon Bet betting house
      <small>*home team is green colored</small>
    </h5>
    <div>
      <input
        type="text"
        placeholder="search team"
        v-model="team_search"
        @input="onSearchCallback()"
      />
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="clickable" @click="sort('index'    )">#</th>
          <th scope="col">Game</th>
          <th scope="col" class="clickable" @click="sort('hostWin')">Host win</th>
          <th scope="col" class="clickable" @click="sort('tied')">Tied</th>
          <th scope="col" class="clickable" @click="sort('guestWin')">Guest win</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in sortedGames" :key="index">
          <th scope="row">{{ game.index }}</th>
          <td>
            <span :class="{ 'text-success': game.homeTeam === game.firstTeam }">{{ game.firstTeam }}</span> -
            <span
              :class="{ 'text-success': game.homeTeam === game.secondTeam }"
            >{{ game.secondTeam }}</span>
          </td>
          <td>{{ game.hostWin }}</td>
          <td>{{ game.tied }}</td>
          <td>{{ game.guestWin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      team_search: "",
      games: [],
      filteredGames: [],
      currentSort: "index",
      currentSortDir: "asc"
    };
  },
  methods: {
    ...mapActions(["getOddsApiData"]),
    onSearchCallback() {
      this.filteredGames = this.games.filter(game => {
        const teams = `${game.firstTeam} ${game.secondTeam}`;
        return teams.toLowerCase().includes(this.team_search.toLowerCase());
      });
    },
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    structureData(data) {
      const items = [];
      let index = 1;
      for (let item of data) {
        const structuredItem = {};

        structuredItem.index = index;
        structuredItem.homeTeam = item.home_team;
        structuredItem.hostWin = item.sites[0].odds.h2h[1];
        structuredItem.secondTeam = item.teams[1];
        structuredItem.firstTeam = item.teams[0];
        structuredItem.tied = item.sites[0].odds.h2h[0];
        structuredItem.guestWin = item.sites[0].odds.h2h[2];

        items.push(structuredItem);
        index++;
      }
      return items;
    }
  },
  mounted: function() {
    this.getOddsApiData().then(data => {
      this.games = this.structureData(data.data);
      this.filteredGames = this.structureData(data.data);
    });
  },
  computed: {
    sortedGames: function() {
      return this.filteredGames.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  }
};
</script>

<style>
th.clickable {
  cursor: pointer;
}
</style>
