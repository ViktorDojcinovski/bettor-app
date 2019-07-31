<template>
  <div class="calc-wrapper">
    <h5>Enter the stake and the odds, and the calculator will calculate your payout!</h5>
    <label for="format">Select Odds Format:</label>
    <select name="format" id="format" v-model="odds_format" @change="reasignFormat">
      <option value="decimal">Decimal</option>
      <option value="american">American</option>
      <option value="fractional">Fractional</option>
    </select>
    <div class="col-12">
      <div class="row">
        <div class="col-6">
          <h5>Stake</h5>
          <input
            type="text"
            name="stake"
            id="stake"
            placeholder="Enter stake"
            v-model="stake"
            @input="calculatePayout(calculatedOdds())"
          />
        </div>
        <div class="col-6">
          <h5>Odds</h5>
          <TextInput
            v-for="(field, index) in oddsFields"
            :key="index"
            :placeholder="field.placeholder"
            :value="field.value"
            :format="field.odds_format"
            @input="changeFieldValue($event, field)"
          />
          <button class="btn btn-success ml-auto" @click.prevent="addOddsField">Add odds</button>
          <button class="btn btn-danger ml-auto" @click.prevent="resetOddsFields">Clear</button>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="col-12">
        <div class="payout-wrapper">
          <span>Payout</span>
          <div class="badge badge-secondary m-3">$ {{ payout }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import LoadingIndicator from "@/components/LoadinIndicator";
import TextInput from "@/components/TextInput";
import { validateInput, calculate } from "../utils";

export default Vue.extend({
  name: "calculator",
  components: {
    TextInput,
    LoadingIndicator
  },
  data() {
    return {
      stake: null,
      payout: 0,
      odds_format: "decimal",
      oddsFields: []
    };
  },
  methods: {
    calculatePayout(odds) {
      this.payout = (this.stake * odds).toFixed(2);
    },
    changeFieldValue(event, field) {
      field.value = event;
      this.calculatePayout(this.calculatedOdds());
    },
    addOddsField() {
      this.oddsFields.push({
        placeholder: "Enter odds",
        value: null,
        format: this.odds_format
      });
    },
    calculatedOdds() {
      return (
        this.oddsFields.reduce((acc, current) => {
          const decimalValue = calculate(
            validateInput(current),
            current.format
          );
          if (decimalValue) {
            return acc * decimalValue;
          }
        }, 1) || 0
      );
    },
    resetOddsFields() {
      this.oddsFields = [
        {
          placeholder: "Enter odds",
          value: null,
          format: this.odds_format
        }
      ];
      this.calculatePayout(this.calculatedOdds());
    },
    reasignFormat() {
      this.oddsFields.forEach(field => {
        field.format = this.odds_format;
      });
    }
  }
});
</script>

<style lang="scss">
.calc-wrapper {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #eee;
  h5 {
    text-align: left;
    font-weight: bold;
    font-size: 1em;
  }
  input {
    width: 100%;
    height: 40px;
    margin: 5px 0;
    border: 1px solid #aaa;
    text-align: center;
    font-size: 14px;
    color: #aaa;
  }
  select {
    height: 40px;
    margin-left: 20px;
    font-size: 14px;
    color: #aaa;
  }
  button.btn {
    height: 40px;
    margin-top: 5px;
    width: 50%;
    font-size: 0.6em;
  }
  .payout-wrapper {
    text-align: right;
    div {
      font-size: 1.8em;
    }
  }
}
</style>
