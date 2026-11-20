//region block: polyfills
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === 'undefined') {
  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
  Object.defineProperty(Array.prototype, 'fill', {value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this); // Steps 3-5.
    var len = O.length >>> 0; // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0; // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Step 11.
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    ; // Step 13.
    return O;
  }});
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function (TypedArray) {
  if (typeof TypedArray.prototype.fill === 'undefined') {
    Object.defineProperty(TypedArray.prototype, 'fill', {value: Array.prototype.fill});
  }
});
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
if (typeof String.prototype.startsWith === 'undefined') {
  Object.defineProperty(String.prototype, 'startsWith', {value: function (searchString, position) {
    position = position || 0;
    return this.lastIndexOf(searchString, position) === position;
  }});
}
//endregion
//region block: imports
var imul_0 = Math.imul;
var isView = ArrayBuffer.isView;
var clz32 = Math.clz32;
//endregion
//region block: pre-declaration
initMetadataForInterface(CharSequence, 'CharSequence');
initMetadataForInterface(Comparable, 'Comparable');
initMetadataForClass(Number_0, 'Number');
initMetadataForClass(asSequence$$inlined$Sequence$1);
initMetadataForClass(asIterable$$inlined$Iterable$1);
initMetadataForClass(Char, 'Char', VOID, VOID, [Comparable]);
initMetadataForInterface(Collection, 'Collection');
initMetadataForInterface(KtList, 'List', VOID, VOID, [Collection]);
initMetadataForInterface(Entry, 'Entry');
initMetadataForInterface(KtMap, 'Map');
initMetadataForInterface(KtSet, 'Set', VOID, VOID, [Collection]);
initMetadataForCompanion(Companion);
initMetadataForClass(Enum, 'Enum', VOID, VOID, [Comparable]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(Long, 'Long', VOID, Number_0, [Number_0, Comparable]);
initMetadataForInterface(FunctionAdapter, 'FunctionAdapter');
initMetadataForClass(arrayIterator$1);
initMetadataForObject(Digit, 'Digit');
initMetadataForInterface(Comparator, 'Comparator');
initMetadataForObject(Unit, 'Unit');
initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, AbstractCollection, [AbstractCollection, Collection]);
initMetadataForClass(IteratorImpl, 'IteratorImpl');
initMetadataForClass(ListIteratorImpl, 'ListIteratorImpl', VOID, IteratorImpl);
initMetadataForClass(AbstractMutableList, 'AbstractMutableList', VOID, AbstractMutableCollection, [AbstractMutableCollection, Collection, KtList]);
initMetadataForClass(AbstractMap, 'AbstractMap', VOID, VOID, [KtMap]);
initMetadataForClass(AbstractMutableMap, 'AbstractMutableMap', VOID, AbstractMap, [AbstractMap, KtMap]);
initMetadataForClass(AbstractMutableSet, 'AbstractMutableSet', VOID, AbstractMutableCollection, [AbstractMutableCollection, KtSet, Collection]);
initMetadataForCompanion(Companion_1);
initMetadataForInterface(RandomAccess, 'RandomAccess');
initMetadataForClass(ArrayList, 'ArrayList', ArrayList_init_$Create$, AbstractMutableList, [AbstractMutableList, Collection, KtList, RandomAccess]);
initMetadataForClass(HashMap, 'HashMap', HashMap_init_$Create$, AbstractMutableMap, [AbstractMutableMap, KtMap]);
initMetadataForClass(HashMapEntrySetBase, 'HashMapEntrySetBase', VOID, AbstractMutableSet, [KtSet, Collection, AbstractMutableSet]);
initMetadataForClass(HashMapEntrySet, 'HashMapEntrySet', VOID, HashMapEntrySetBase);
initMetadataForClass(HashSet, 'HashSet', HashSet_init_$Create$, AbstractMutableSet, [AbstractMutableSet, KtSet, Collection]);
initMetadataForCompanion(Companion_2);
initMetadataForClass(Itr, 'Itr');
initMetadataForClass(KeysItr, 'KeysItr', VOID, Itr);
initMetadataForClass(EntriesItr, 'EntriesItr', VOID, Itr);
initMetadataForClass(EntryRef, 'EntryRef', VOID, VOID, [Entry]);
function containsAllEntries(m) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(m, Collection)) {
      tmp = m.k();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = m.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.InternalMap.containsAllEntries.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var entry = element;
      var tmp_0;
      if (!(entry == null) ? isInterface(entry, Entry) : false) {
        tmp_0 = this.j5(entry);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
}
initMetadataForInterface(InternalMap, 'InternalMap');
initMetadataForClass(InternalHashMap, 'InternalHashMap', InternalHashMap_init_$Create$, VOID, [InternalMap]);
initMetadataForClass(LinkedHashMap, 'LinkedHashMap', LinkedHashMap_init_$Create$, HashMap, [HashMap, KtMap]);
initMetadataForClass(LinkedHashSet, 'LinkedHashSet', LinkedHashSet_init_$Create$, HashSet, [HashSet, KtSet, Collection]);
initMetadataForClass(Exception, 'Exception', Exception_init_$Create$, Error);
initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException_init_$Create$, Exception);
initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException_init_$Create$, RuntimeException);
initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException_init_$Create$, RuntimeException);
initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException_init_$Create$, RuntimeException);
initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException_init_$Create$, RuntimeException);
initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException_init_$Create$, RuntimeException);
initMetadataForClass(ArithmeticException, 'ArithmeticException', ArithmeticException_init_$Create$, RuntimeException);
initMetadataForClass(NumberFormatException, 'NumberFormatException', NumberFormatException_init_$Create$, IllegalArgumentException);
initMetadataForClass(ConcurrentModificationException, 'ConcurrentModificationException', ConcurrentModificationException_init_$Create$, RuntimeException);
initMetadataForClass(NullPointerException, 'NullPointerException', NullPointerException_init_$Create$, RuntimeException);
initMetadataForClass(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', NoWhenBranchMatchedException_init_$Create$, RuntimeException);
initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException_init_$Create$, RuntimeException);
initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder_init_$Create$_0, VOID, [CharSequence]);
initMetadataForCompanion(Companion_3);
initMetadataForClass(Regex, 'Regex');
initMetadataForClass(MatchGroup, 'MatchGroup');
initMetadataForClass(findNext$1$groups$1, VOID, VOID, AbstractCollection, [Collection, AbstractCollection]);
initMetadataForClass(AbstractList, 'AbstractList', VOID, AbstractCollection, [AbstractCollection, KtList]);
initMetadataForClass(findNext$1$groupValues$1, VOID, VOID, AbstractList);
initMetadataForClass(findNext$1);
initMetadataForClass(IteratorImpl_0, 'IteratorImpl');
initMetadataForClass(ListIteratorImpl_0, 'ListIteratorImpl', VOID, IteratorImpl_0);
initMetadataForCompanion(Companion_4);
initMetadataForCompanion(Companion_5);
initMetadataForCompanion(Companion_6);
initMetadataForObject(EmptyList, 'EmptyList', VOID, VOID, [KtList, RandomAccess]);
initMetadataForClass(ArrayAsCollection, 'ArrayAsCollection', VOID, VOID, [Collection]);
initMetadataForObject(EmptyIterator, 'EmptyIterator');
initMetadataForInterface(MapWithDefault, 'MapWithDefault', VOID, VOID, [KtMap]);
initMetadataForObject(EmptyMap, 'EmptyMap', VOID, VOID, [KtMap]);
initMetadataForClass(IntIterator, 'IntIterator');
initMetadataForClass(TransformingSequence$iterator$1);
initMetadataForClass(TransformingSequence, 'TransformingSequence');
initMetadataForObject(EmptySet, 'EmptySet', VOID, VOID, [KtSet]);
initMetadataForObject(NaturalOrderComparator, 'NaturalOrderComparator', VOID, VOID, [Comparator]);
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(EnumEntriesList, 'EnumEntriesList', VOID, AbstractList, [KtList, AbstractList]);
initMetadataForCompanion(Companion_7);
initMetadataForClass(IntProgression, 'IntProgression');
initMetadataForClass(IntRange, 'IntRange', VOID, IntProgression);
initMetadataForClass(IntProgressionIterator, 'IntProgressionIterator', VOID, IntIterator);
initMetadataForCompanion(Companion_8);
initMetadataForClass(DelimitedRangesSequence$iterator$1);
initMetadataForClass(DelimitedRangesSequence, 'DelimitedRangesSequence');
initMetadataForObject(State, 'State');
initMetadataForClass(LinesIterator, 'LinesIterator');
initMetadataForClass(lineSequence$$inlined$Sequence$1);
initMetadataForCompanion(Companion_9);
initMetadataForClass(Failure, 'Failure');
initMetadataForClass(Pair, 'Pair');
initMetadataForClass(RezimHlaseni, 'RezimHlaseni', VOID, Enum);
initMetadataForObject(Hlaseni, 'Hlaseni');
initMetadataForClass(Hlasky, 'Hlasky');
initMetadataForCompanion(Companion_10);
initMetadataForClass(Jazyk, 'Jazyk', VOID, Enum);
initMetadataForClass(Krok, 'Krok');
initMetadataForClass(Delky, 'Delky');
initMetadataForObject(Casy, 'Casy');
initMetadataForObject(Engine, 'Engine');
initMetadataForClass(Okno, 'Okno');
initMetadataForClass(Rozpis, 'Rozpis');
initMetadataForObject(Harmonogram, 'Harmonogram');
initMetadataForCompanion(Companion_11);
initMetadataForClass(Hodnoty, 'Hodnoty', Hodnoty);
initMetadataForClass(Ucastnik, 'Ucastnik');
initMetadataForObject(JmenaVen, 'JmenaVen');
initMetadataForClass(Souhrn, 'Souhrn', Souhrn);
initMetadataForObject(Prehled, 'Prehled');
initMetadataForClass(Vzorek, 'Vzorek');
initMetadataForClass(Usek, 'Usek');
initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(PrubehTepu, 'PrubehTepu');
initMetadataForClass(Radek, 'Radek');
initMetadataForObject(Rozhodci, 'Rozhodci');
initMetadataForClass(Gem, 'Gem');
initMetadataForObject(Rozpis_0, 'Rozpis');
initMetadataForCompanion(Companion_12);
initMetadataForClass(Udaj, 'Udaj', VOID, Enum);
initMetadataForCompanion(Companion_13);
initMetadataForClass(Hrac, 'Hrac');
initMetadataForClass(Cisla, 'Cisla', Cisla);
initMetadataForClass(Sada, 'Sada');
initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(Statistiky, 'Statistiky');
initMetadataForClass(TymId, 'TymId', VOID, Enum);
initMetadataForClass(Barva, 'Barva', VOID, Enum);
initMetadataForClass(Tym, 'Tym');
initMetadataForClass(Tymy, 'Tymy');
initMetadataForClass(Podani, 'Podani');
initMetadataForClass(Shoda, 'Shoda', VOID, Enum);
initMetadataForClass(ProhazovaniStran, 'ProhazovaniStran', VOID, Enum);
initMetadataForClass(Format, 'Format', VOID, Enum);
initMetadataForClass(Pravidla, 'Pravidla', Pravidla);
initMetadataForClass(Faze, 'Faze', VOID, Enum);
initMetadataForClass(SetSkore, 'SetSkore');
initMetadataForClass(StavZapasu, 'StavZapasu');
initMetadataForClass(Bod, 'Bod');
initMetadataForObject(Zpet, 'Zpet');
initMetadataForObject(UkoncitZapas, 'UkoncitZapas');
initMetadataForClass(ZvolPodavajiciho, 'ZvolPodavajiciho');
initMetadataForClass(ZvolTieBreak, 'ZvolTieBreak');
initMetadataForObject(KonecCasu, 'KonecCasu');
initMetadataForClass(ProhodStranyHracu, 'ProhodStranyHracu');
initMetadataForObject(Kdokoli, 'Kdokoli');
initMetadataForClass(ZTymu, 'ZTymu');
initMetadataForClass(BodPripsan, 'BodPripsan');
initMetadataForObject(Shoda_0, 'Shoda');
initMetadataForClass(Vyhoda, 'Vyhoda');
initMetadataForObject(StarPoint, 'StarPoint');
initMetadataForClass(GemZiskan, 'GemZiskan');
initMetadataForClass(SetZiskan, 'SetZiskan');
initMetadataForClass(ZapasSkoncil, 'ZapasSkoncil');
initMetadataForObject(StranyProhozeny, 'StranyProhozeny');
initMetadataForClass(PodaniZmeneno, 'PodaniZmeneno');
initMetadataForObject(BodVracen, 'BodVracen');
initMetadataForObject(TieBreak, 'TieBreak');
initMetadataForObject(SuperTieBreak, 'SuperTieBreak');
initMetadataForClass(KoloSkoncilo, 'KoloSkoncilo');
initMetadataForObject(CasVyprsel, 'CasVyprsel');
initMetadataForObject(RozhodujiciBod, 'RozhodujiciBod');
initMetadataForClass(Zapas, 'Zapas');
initMetadataForClass(Prijato, 'Prijato');
initMetadataForClass(Odmitnuto, 'Odmitnuto');
initMetadataForClass(Polozka, 'Polozka', VOID, Enum);
initMetadataForClass(Data, 'Data');
initMetadataForObject(Studio, 'Studio');
initMetadataForObject(TextBodu, 'TextBodu');
initMetadataForClass(Vychozi, 'Vychozi');
initMetadataForClass(Sdileni, 'Sdileni', Sdileni);
initMetadataForClass(Obnoveno, 'Obnoveno');
initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(Ulozeni, 'Ulozeni');
initMetadataForObject(Zprava, 'Zprava');
initMetadataForCompanion(Companion_14);
initMetadataForClass(PravidlaProWeb, 'PravidlaProWeb');
initMetadataForObject(Jadro_0, 'Jadro');
initMetadataForClass(JSONObject, 'JSONObject', JSONObject);
initMetadataForClass(JSONArray, 'JSONArray', JSONArray);
//endregion
function CharSequence() {
}
function Comparable() {
}
function Number_0() {
}
function getOrNull(_this__u8e3s4, index) {
  return (0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false) ? _this__u8e3s4[index] : null;
}
function filterNotNull(_this__u8e3s4) {
  return filterNotNullTo(_this__u8e3s4, ArrayList_init_$Create$());
}
function single(_this__u8e3s4) {
  var tmp;
  switch (_this__u8e3s4.length) {
    case 0:
      throw NoSuchElementException_init_$Create$_0('Array is empty.');
    case 1:
      tmp = _this__u8e3s4[0];
      break;
    default:
      throw IllegalArgumentException_init_$Create$_0('Array has more than one element.');
  }
  return tmp;
}
function toSet(_this__u8e3s4) {
  switch (_this__u8e3s4.length) {
    case 0:
      return emptySet();
    case 1:
      return setOf(_this__u8e3s4[0]);
    default:
      return toCollection(_this__u8e3s4, LinkedHashSet_init_$Create$_1(mapCapacity(_this__u8e3s4.length)));
  }
}
function indexOf(_this__u8e3s4, element) {
  if (element == null) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4[index] == null) {
          return index;
        }
      }
       while (inductionVariable <= last);
  } else {
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (equals(element, _this__u8e3s4[index_0])) {
          return index_0;
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  return -1;
}
function filterNotNullTo(_this__u8e3s4, destination) {
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  while (inductionVariable < last) {
    var element = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (!(element == null)) {
      destination.e(element);
    }
  }
  return destination;
}
function toCollection(_this__u8e3s4, destination) {
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  while (inductionVariable < last) {
    var item = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    destination.e(item);
  }
  return destination;
}
function get_lastIndex(_this__u8e3s4) {
  return _this__u8e3s4.length - 1 | 0;
}
function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.f(prefix);
  var count = 0;
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  $l$loop: while (inductionVariable < last) {
    var element = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    count = count + 1 | 0;
    if (count > 1) {
      buffer.f(separator);
    }
    if (limit < 0 || count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break $l$loop;
  }
  if (limit >= 0 && count > limit) {
    buffer.f(truncated);
  }
  buffer.f(postfix);
  return buffer;
}
function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.f(prefix);
  var count = 0;
  var _iterator__ex2g4s = _this__u8e3s4.g();
  $l$loop: while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    count = count + 1 | 0;
    if (count > 1) {
      buffer.f(separator);
    }
    if (limit < 0 || count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break $l$loop;
  }
  if (limit >= 0 && count > limit) {
    buffer.f(truncated);
  }
  buffer.f(postfix);
  return buffer;
}
function firstOrNull(_this__u8e3s4) {
  return _this__u8e3s4.k() ? null : _this__u8e3s4.j(0);
}
function getOrNull_0(_this__u8e3s4, index) {
  return (0 <= index ? index < _this__u8e3s4.l() : false) ? _this__u8e3s4.j(index) : null;
}
function first(_this__u8e3s4) {
  if (_this__u8e3s4.k())
    throw NoSuchElementException_init_$Create$_0('List is empty.');
  return _this__u8e3s4.j(0);
}
function plus(_this__u8e3s4, element) {
  var result = ArrayList_init_$Create$_0(_this__u8e3s4.l() + 1 | 0);
  result.p(_this__u8e3s4);
  result.e(element);
  return result;
}
function toList(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    var tmp;
    switch (_this__u8e3s4.l()) {
      case 0:
        tmp = emptyList();
        break;
      case 1:
        var tmp_0;
        if (isInterface(_this__u8e3s4, KtList)) {
          tmp_0 = _this__u8e3s4.j(0);
        } else {
          tmp_0 = _this__u8e3s4.g().i();
        }

        tmp = listOf(tmp_0);
        break;
      default:
        tmp = toMutableList(_this__u8e3s4);
        break;
    }
    return tmp;
  }
  return optimizeReadOnlyList(toMutableList_0(_this__u8e3s4));
}
function sum(_this__u8e3s4) {
  var sum = new Long(0, 0);
  var _iterator__ex2g4s = _this__u8e3s4.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    sum = sum.s(element);
  }
  return sum;
}
function lastOrNull(_this__u8e3s4) {
  return _this__u8e3s4.k() ? null : _this__u8e3s4.j(_this__u8e3s4.l() - 1 | 0);
}
function dropLast(_this__u8e3s4, n) {
  // Inline function 'kotlin.require' call
  if (!(n >= 0)) {
    // Inline function 'kotlin.collections.dropLast.<anonymous>' call
    var message = 'Requested element count ' + n + ' is less than zero.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return take(_this__u8e3s4, coerceAtLeast(_this__u8e3s4.l() - n | 0, 0));
}
function last(_this__u8e3s4) {
  if (_this__u8e3s4.k())
    throw NoSuchElementException_init_$Create$_0('List is empty.');
  return _this__u8e3s4.j(get_lastIndex_0(_this__u8e3s4));
}
function plus_0(_this__u8e3s4, elements) {
  if (isInterface(elements, Collection)) {
    var result = ArrayList_init_$Create$_0(_this__u8e3s4.l() + elements.l() | 0);
    result.p(_this__u8e3s4);
    result.p(elements);
    return result;
  } else {
    var result_0 = ArrayList_init_$Create$_1(_this__u8e3s4);
    addAll(result_0, elements);
    return result_0;
  }
}
function single_0(_this__u8e3s4) {
  var tmp;
  switch (_this__u8e3s4.l()) {
    case 0:
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    case 1:
      tmp = _this__u8e3s4.j(0);
      break;
    default:
      throw IllegalArgumentException_init_$Create$_0('List has more than one element.');
  }
  return tmp;
}
function average(_this__u8e3s4) {
  var sum = 0.0;
  var count = 0;
  var _iterator__ex2g4s = _this__u8e3s4.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    sum = sum + element;
    count = count + 1 | 0;
    checkCountOverflow(count);
  }
  return count === 0 ? NaN : sum / count;
}
function maxOrNull(_this__u8e3s4) {
  var iterator = _this__u8e3s4.g();
  if (!iterator.h())
    return null;
  var max = iterator.i();
  while (iterator.h()) {
    var e = iterator.i();
    if (compareTo(max, e) < 0)
      max = e;
  }
  return max;
}
function zipWithNext(_this__u8e3s4) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.zipWithNext' call
    var iterator = _this__u8e3s4.g();
    if (!iterator.h()) {
      tmp$ret$0 = emptyList();
      break $l$block;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var current = iterator.i();
    while (iterator.h()) {
      var next = iterator.i();
      // Inline function 'kotlin.collections.zipWithNext.<anonymous>' call
      var a = current;
      var tmp$ret$2 = to(a, next);
      result.e(tmp$ret$2);
      current = next;
    }
    tmp$ret$0 = result;
  }
  return tmp$ret$0;
}
function drop(_this__u8e3s4, n) {
  // Inline function 'kotlin.require' call
  if (!(n >= 0)) {
    // Inline function 'kotlin.collections.drop.<anonymous>' call
    var message = 'Requested element count ' + n + ' is less than zero.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  if (n === 0)
    return toList(_this__u8e3s4);
  var list;
  if (isInterface(_this__u8e3s4, Collection)) {
    var resultSize = _this__u8e3s4.l() - n | 0;
    if (resultSize <= 0)
      return emptyList();
    if (resultSize === 1)
      return listOf(last_0(_this__u8e3s4));
    list = ArrayList_init_$Create$_0(resultSize);
    if (isInterface(_this__u8e3s4, KtList)) {
      if (isInterface(_this__u8e3s4, RandomAccess)) {
        var inductionVariable = n;
        var last = _this__u8e3s4.l();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            list.e(_this__u8e3s4.j(index));
          }
           while (inductionVariable < last);
      } else {
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s = _this__u8e3s4.t(n);
        while (_iterator__ex2g4s.h()) {
          var item = _iterator__ex2g4s.i();
          list.e(item);
        }
      }
      return list;
    }
  } else {
    list = ArrayList_init_$Create$();
  }
  var count = 0;
  var _iterator__ex2g4s_0 = _this__u8e3s4.g();
  while (_iterator__ex2g4s_0.h()) {
    var item_0 = _iterator__ex2g4s_0.i();
    if (count >= n)
      list.e(item_0);
    else {
      count = count + 1 | 0;
    }
  }
  return optimizeReadOnlyList(list);
}
function toSet_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    var tmp;
    switch (_this__u8e3s4.l()) {
      case 0:
        tmp = emptySet();
        break;
      case 1:
        var tmp_0;
        if (isInterface(_this__u8e3s4, KtList)) {
          tmp_0 = _this__u8e3s4.j(0);
        } else {
          tmp_0 = _this__u8e3s4.g().i();
        }

        tmp = setOf(tmp_0);
        break;
      default:
        tmp = toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$_1(mapCapacity(_this__u8e3s4.l())));
        break;
    }
    return tmp;
  }
  return optimizeReadOnlySet(toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$()));
}
function sorted(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    if (_this__u8e3s4.l() <= 1)
      return toList(_this__u8e3s4);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = copyToArray(_this__u8e3s4);
    // Inline function 'kotlin.apply' call
    var this_0 = isArray(tmp) ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.sorted.<anonymous>' call
    sort(this_0);
    return asList(this_0);
  }
  // Inline function 'kotlin.apply' call
  var this_1 = toMutableList_0(_this__u8e3s4);
  // Inline function 'kotlin.collections.sorted.<anonymous>' call
  sort_0(this_1);
  return this_1;
}
function distinct(_this__u8e3s4) {
  return toList(toMutableSet(_this__u8e3s4));
}
function firstOrNull_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, KtList)) {
    if (_this__u8e3s4.k())
      return null;
    else
      return _this__u8e3s4.j(0);
  } else {
    var iterator = _this__u8e3s4.g();
    if (!iterator.h())
      return null;
    return iterator.i();
  }
}
function take(_this__u8e3s4, n) {
  // Inline function 'kotlin.require' call
  if (!(n >= 0)) {
    // Inline function 'kotlin.collections.take.<anonymous>' call
    var message = 'Requested element count ' + n + ' is less than zero.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  if (n === 0)
    return emptyList();
  if (isInterface(_this__u8e3s4, Collection)) {
    if (n >= _this__u8e3s4.l())
      return toList(_this__u8e3s4);
    if (n === 1)
      return listOf(first_0(_this__u8e3s4));
  }
  var count = 0;
  var list = ArrayList_init_$Create$_0(n);
  var _iterator__ex2g4s = _this__u8e3s4.g();
  $l$loop: while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    list.e(item);
    count = count + 1 | 0;
    if (count === n)
      break $l$loop;
  }
  return optimizeReadOnlyList(list);
}
function takeLast(_this__u8e3s4, n) {
  // Inline function 'kotlin.require' call
  if (!(n >= 0)) {
    // Inline function 'kotlin.collections.takeLast.<anonymous>' call
    var message = 'Requested element count ' + n + ' is less than zero.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  if (n === 0)
    return emptyList();
  var size = _this__u8e3s4.l();
  if (n >= size)
    return toList(_this__u8e3s4);
  if (n === 1)
    return listOf(last(_this__u8e3s4));
  var list = ArrayList_init_$Create$_0(n);
  if (isInterface(_this__u8e3s4, RandomAccess)) {
    var inductionVariable = size - n | 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        list.e(_this__u8e3s4.j(index));
      }
       while (inductionVariable < size);
  } else {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.t(size - n | 0);
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      list.e(item);
    }
  }
  return list;
}
function toMutableList(_this__u8e3s4) {
  return ArrayList_init_$Create$_1(_this__u8e3s4);
}
function sortedWith(_this__u8e3s4, comparator) {
  if (isInterface(_this__u8e3s4, Collection)) {
    if (_this__u8e3s4.l() <= 1)
      return toList(_this__u8e3s4);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = copyToArray(_this__u8e3s4);
    // Inline function 'kotlin.apply' call
    var this_0 = isArray(tmp) ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.sortedWith.<anonymous>' call
    sortWith(this_0, comparator);
    return asList(this_0);
  }
  // Inline function 'kotlin.apply' call
  var this_1 = toMutableList_0(_this__u8e3s4);
  // Inline function 'kotlin.collections.sortedWith.<anonymous>' call
  sortWith_0(this_1, comparator);
  return this_1;
}
function toMutableList_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection))
    return toMutableList(_this__u8e3s4);
  return toCollection_0(_this__u8e3s4, ArrayList_init_$Create$());
}
function last_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, KtList))
    return last(_this__u8e3s4);
  else {
    var iterator = _this__u8e3s4.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$_0('Collection is empty.');
    var last_0 = iterator.i();
    while (iterator.h())
      last_0 = iterator.i();
    return last_0;
  }
}
function toCollection_0(_this__u8e3s4, destination) {
  var _iterator__ex2g4s = _this__u8e3s4.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    destination.e(item);
  }
  return destination;
}
function toMutableSet(_this__u8e3s4) {
  var tmp;
  if (isInterface(_this__u8e3s4, Collection)) {
    tmp = LinkedHashSet_init_$Create$_0(_this__u8e3s4);
  } else {
    tmp = toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$());
  }
  return tmp;
}
function first_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, KtList))
    return first(_this__u8e3s4);
  else {
    var iterator = _this__u8e3s4.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$_0('Collection is empty.');
    return iterator.i();
  }
}
function single_1(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, KtList))
    return single_0(_this__u8e3s4);
  else {
    var iterator = _this__u8e3s4.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$_0('Collection is empty.');
    var single = iterator.i();
    if (iterator.h())
      throw IllegalArgumentException_init_$Create$_0('Collection has more than one element.');
    return single;
  }
}
function asSequence(_this__u8e3s4) {
  // Inline function 'kotlin.sequences.Sequence' call
  return new asSequence$$inlined$Sequence$1(_this__u8e3s4);
}
function asSequence$$inlined$Sequence$1($this_asSequence) {
  this.u_1 = $this_asSequence;
}
protoOf(asSequence$$inlined$Sequence$1).g = function () {
  // Inline function 'kotlin.collections.asSequence.<anonymous>' call
  return this.u_1.g();
};
function until(_this__u8e3s4, to) {
  if (to <= -2147483648)
    return Companion_getInstance_7().v_1;
  return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
}
function coerceAtMost(_this__u8e3s4, maximumValue) {
  return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
}
function coerceAtLeast(_this__u8e3s4, minimumValue) {
  return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
}
function coerceIn(_this__u8e3s4, minimumValue, maximumValue) {
  if (minimumValue > maximumValue)
    throw IllegalArgumentException_init_$Create$_0('Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
  if (_this__u8e3s4 < minimumValue)
    return minimumValue;
  if (_this__u8e3s4 > maximumValue)
    return maximumValue;
  return _this__u8e3s4;
}
function downTo(_this__u8e3s4, to) {
  return Companion_instance_8.w(_this__u8e3s4, to, -1);
}
function asIterable(_this__u8e3s4) {
  // Inline function 'kotlin.collections.Iterable' call
  return new asIterable$$inlined$Iterable$1(_this__u8e3s4);
}
function toList_0(_this__u8e3s4) {
  var it = _this__u8e3s4.g();
  if (!it.h())
    return emptyList();
  var element = it.i();
  if (!it.h())
    return listOf(element);
  var dst = ArrayList_init_$Create$();
  dst.e(element);
  while (it.h()) {
    dst.e(it.i());
  }
  return dst;
}
function map(_this__u8e3s4, transform) {
  return new TransformingSequence(_this__u8e3s4, transform);
}
function asIterable$$inlined$Iterable$1($this_asIterable) {
  this.x_1 = $this_asIterable;
}
protoOf(asIterable$$inlined$Iterable$1).g = function () {
  // Inline function 'kotlin.sequences.asIterable.<anonymous>' call
  return this.x_1.g();
};
function plus_1(_this__u8e3s4, element) {
  var result = LinkedHashSet_init_$Create$_1(mapCapacity(_this__u8e3s4.l() + 1 | 0));
  result.p(_this__u8e3s4);
  result.e(element);
  return result;
}
function take_0(_this__u8e3s4, n) {
  // Inline function 'kotlin.require' call
  if (!(n >= 0)) {
    // Inline function 'kotlin.text.take.<anonymous>' call
    var message = 'Requested character count ' + n + ' is less than zero.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.text.substring' call
  var endIndex = coerceAtMost(n, _this__u8e3s4.length);
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4.substring(0, endIndex);
}
function _Char___init__impl__6a9atx(value) {
  return value;
}
function _get_value__a43j40($this) {
  return $this;
}
function _Char___init__impl__6a9atx_0(code) {
  // Inline function 'kotlin.UShort.toInt' call
  var tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
  return _Char___init__impl__6a9atx(tmp$ret$0);
}
function Char__compareTo_impl_ypi4mb($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__minus_impl_a2frrh($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__toInt_impl_vasixd($this) {
  return _get_value__a43j40($this);
}
function toString($this) {
  // Inline function 'kotlin.js.unsafeCast' call
  return String.fromCharCode(_get_value__a43j40($this));
}
function Char() {
}
function KtList() {
}
function Collection() {
}
function Entry() {
}
function KtMap() {
}
function KtSet() {
}
function Companion() {
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function Enum(name, ordinal) {
  this.g1_1 = name;
  this.h1_1 = ordinal;
}
protoOf(Enum).i1 = function (other) {
  return compareTo(this.h1_1, other.h1_1);
};
protoOf(Enum).d = function (other) {
  return this.i1(other instanceof Enum ? other : THROW_CCE());
};
protoOf(Enum).equals = function (other) {
  return this === other;
};
protoOf(Enum).hashCode = function () {
  return identityHashCode(this);
};
protoOf(Enum).toString = function () {
  return this.g1_1;
};
function toString_0(_this__u8e3s4) {
  var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
  return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
}
function Companion_0() {
  Companion_instance_0 = this;
  this.j1_1 = new Long(0, -2147483648);
  this.k1_1 = new Long(-1, 2147483647);
  this.l1_1 = 8;
  this.m1_1 = 64;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function Long(low, high) {
  Companion_getInstance_0();
  Number_0.call(this);
  this.q_1 = low;
  this.r_1 = high;
}
protoOf(Long).n1 = function (other) {
  return compare(this, other);
};
protoOf(Long).d = function (other) {
  return this.n1(other instanceof Long ? other : THROW_CCE());
};
protoOf(Long).s = function (other) {
  return add(this, other);
};
protoOf(Long).o1 = function (other) {
  return subtract(this, other);
};
protoOf(Long).p1 = function (other) {
  return multiply(this, other);
};
protoOf(Long).q1 = function (other) {
  return divide(this, other);
};
protoOf(Long).r1 = function () {
  return this.s(new Long(1, 0));
};
protoOf(Long).s1 = function () {
  return this.t1().s(new Long(1, 0));
};
protoOf(Long).t1 = function () {
  return new Long(~this.q_1, ~this.r_1);
};
protoOf(Long).u1 = function () {
  return this.q_1;
};
protoOf(Long).v1 = function () {
  return toNumber(this);
};
protoOf(Long).toString = function () {
  return toStringImpl(this, 10);
};
protoOf(Long).equals = function (other) {
  var tmp;
  if (other instanceof Long) {
    tmp = equalsLong(this, other);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Long).hashCode = function () {
  return hashCode_0(this);
};
protoOf(Long).valueOf = function () {
  return this.v1();
};
function implement(interfaces) {
  var maxSize = 1;
  var masks = [];
  var inductionVariable = 0;
  var last = interfaces.length;
  while (inductionVariable < last) {
    var i = interfaces[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var currentSize = maxSize;
    var tmp0_elvis_lhs = i.prototype.$imask$;
    var imask = tmp0_elvis_lhs == null ? i.$imask$ : tmp0_elvis_lhs;
    if (!(imask == null)) {
      masks.push(imask);
      currentSize = imask.length;
    }
    var iid = i.$metadata$.iid;
    var tmp;
    if (iid == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.js.implement.<anonymous>' call
      tmp = bitMaskWith(iid);
    }
    var iidImask = tmp;
    if (!(iidImask == null)) {
      masks.push(iidImask);
      currentSize = Math.max(currentSize, iidImask.length);
    }
    if (currentSize > maxSize) {
      maxSize = currentSize;
    }
  }
  return compositeBitMask(maxSize, masks);
}
function bitMaskWith(activeBit) {
  var numberIndex = activeBit >> 5;
  var intArray = new Int32Array(numberIndex + 1 | 0);
  var positionInNumber = activeBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
  return intArray;
}
function compositeBitMask(capacity, masks) {
  var tmp = 0;
  var tmp_0 = new Int32Array(capacity);
  while (tmp < capacity) {
    var tmp_1 = tmp;
    var result = 0;
    var inductionVariable = 0;
    var last = masks.length;
    while (inductionVariable < last) {
      var mask = masks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (tmp_1 < mask.length) {
        result = result | mask[tmp_1];
      }
    }
    tmp_0[tmp_1] = result;
    tmp = tmp + 1 | 0;
  }
  return tmp_0;
}
function isBitSet(_this__u8e3s4, possibleActiveBit) {
  var numberIndex = possibleActiveBit >> 5;
  if (numberIndex > _this__u8e3s4.length)
    return false;
  var positionInNumber = possibleActiveBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
}
function FunctionAdapter() {
}
function fillArrayVal(array, initValue) {
  var inductionVariable = 0;
  var last = array.length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      array[i] = initValue;
    }
     while (!(i === last));
  return array;
}
function arrayIterator(array) {
  return new arrayIterator$1(array);
}
function charArrayOf(arr) {
  var tmp0 = 'CharArray';
  // Inline function 'withType' call
  var array = new Uint16Array(arr);
  array.$type$ = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  return array;
}
function arrayIterator$1($array) {
  this.y1_1 = $array;
  this.x1_1 = 0;
}
protoOf(arrayIterator$1).h = function () {
  return !(this.x1_1 === this.y1_1.length);
};
protoOf(arrayIterator$1).i = function () {
  var tmp;
  if (!(this.x1_1 === this.y1_1.length)) {
    var _unary__edvuaz = this.x1_1;
    this.x1_1 = _unary__edvuaz + 1 | 0;
    tmp = this.y1_1[_unary__edvuaz];
  } else {
    throw NoSuchElementException_init_$Create$_0('' + this.x1_1);
  }
  return tmp;
};
function get_buf() {
  _init_properties_bitUtils_kt__nfcg4k();
  return buf;
}
var buf;
function get_bufFloat64() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufFloat64;
}
var bufFloat64;
var bufFloat32;
function get_bufInt32() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufInt32;
}
var bufInt32;
function get_lowIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return lowIndex;
}
var lowIndex;
function get_highIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return highIndex;
}
var highIndex;
function getNumberHashCode(obj) {
  _init_properties_bitUtils_kt__nfcg4k();
  // Inline function 'kotlin.js.jsBitwiseOr' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  if ((obj | 0) === obj) {
    return numberToInt(obj);
  }
  get_bufFloat64()[0] = obj;
  return imul_0(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
}
var properties_initialized_bitUtils_kt_i2bo3e;
function _init_properties_bitUtils_kt__nfcg4k() {
  if (!properties_initialized_bitUtils_kt_i2bo3e) {
    properties_initialized_bitUtils_kt_i2bo3e = true;
    buf = new ArrayBuffer(8);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufFloat64 = new Float64Array(get_buf());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufFloat32 = new Float32Array(get_buf());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    bufInt32 = new Int32Array(get_buf());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.js.lowIndex.<anonymous>' call
    get_bufFloat64()[0] = -1.0;
    lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
    highIndex = 1 - get_lowIndex() | 0;
  }
}
function charSequenceGet(a, index) {
  var tmp;
  if (isString(a)) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.Char' call
    var code = a.charCodeAt(index);
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(0);
    if (code < Char__toInt_impl_vasixd(this_0)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(65535);
      tmp_0 = code > Char__toInt_impl_vasixd(this_1);
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$_0('Invalid Char code: ' + code);
    }
    tmp = numberToChar(code);
  } else {
    tmp = a.b(index);
  }
  return tmp;
}
function isString(a) {
  return typeof a === 'string';
}
function charSequenceLength(a) {
  var tmp;
  if (isString(a)) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = a.length;
  } else {
    tmp = a.a();
  }
  return tmp;
}
function charSequenceSubSequence(a, startIndex, endIndex) {
  var tmp;
  if (isString(a)) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = a.substring(startIndex, endIndex);
  } else {
    tmp = a.c(startIndex, endIndex);
  }
  return tmp;
}
function arrayToString(array) {
  return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
}
function arrayToString$lambda(it) {
  return toString_1(it);
}
function compareTo(a, b) {
  var tmp;
  switch (typeof a) {
    case 'number':
      var tmp_0;
      if (typeof b === 'number') {
        tmp_0 = doubleCompareTo(a, b);
      } else {
        if (b instanceof Long) {
          tmp_0 = doubleCompareTo(a, b.v1());
        } else {
          tmp_0 = primitiveCompareTo(a, b);
        }
      }

      tmp = tmp_0;
      break;
    case 'string':
    case 'boolean':
      tmp = primitiveCompareTo(a, b);
      break;
    default:
      tmp = compareToDoNotIntrinsicify(a, b);
      break;
  }
  return tmp;
}
function doubleCompareTo(a, b) {
  var tmp;
  if (a < b) {
    tmp = -1;
  } else if (a > b) {
    tmp = 1;
  } else if (a === b) {
    var tmp_0;
    if (a !== 0) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      var ia = 1 / a;
      var tmp_1;
      // Inline function 'kotlin.js.asDynamic' call
      if (ia === 1 / b) {
        tmp_1 = 0;
      } else {
        if (ia < 0) {
          tmp_1 = -1;
        } else {
          tmp_1 = 1;
        }
      }
      tmp_0 = tmp_1;
    }
    tmp = tmp_0;
  } else if (a !== a) {
    tmp = b !== b ? 0 : 1;
  } else {
    tmp = -1;
  }
  return tmp;
}
function primitiveCompareTo(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function compareToDoNotIntrinsicify(a, b) {
  return a.d(b);
}
function identityHashCode(obj) {
  return getObjectHashCode(obj);
}
function getObjectHashCode(obj) {
  // Inline function 'kotlin.js.jsIn' call
  if (!('kotlinHashCodeValue$' in obj)) {
    var hash = calculateRandomHash();
    var descriptor = new Object();
    descriptor.value = hash;
    descriptor.enumerable = false;
    Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
  }
  // Inline function 'kotlin.js.unsafeCast' call
  return obj['kotlinHashCodeValue$'];
}
function calculateRandomHash() {
  // Inline function 'kotlin.js.jsBitwiseOr' call
  return Math.random() * 4.294967296E9 | 0;
}
function defineProp(obj, name, getter, setter) {
  return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
}
function objectCreate(proto) {
  proto = proto === VOID ? null : proto;
  return Object.create(proto);
}
function toString_1(o) {
  var tmp;
  if (o == null) {
    tmp = 'null';
  } else if (isArrayish(o)) {
    tmp = '[...]';
  } else if (!(typeof o.toString === 'function')) {
    tmp = anyToString(o);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = o.toString();
  }
  return tmp;
}
function anyToString(o) {
  return Object.prototype.toString.call(o);
}
function hashCode(obj) {
  if (obj == null)
    return 0;
  var typeOf = typeof obj;
  var tmp;
  switch (typeOf) {
    case 'object':
      tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
      break;
    case 'function':
      tmp = getObjectHashCode(obj);
      break;
    case 'number':
      tmp = getNumberHashCode(obj);
      break;
    case 'boolean':
      // Inline function 'kotlin.js.unsafeCast' call

      tmp = getBooleanHashCode(obj);
      break;
    case 'string':
      tmp = getStringHashCode(String(obj));
      break;
    case 'bigint':
      tmp = getBigIntHashCode(obj);
      break;
    case 'symbol':
      tmp = getSymbolHashCode(obj);
      break;
    default:
      tmp = function () {
        throw new Error('Unexpected typeof `' + typeOf + '`');
      }();
      break;
  }
  return tmp;
}
function getBooleanHashCode(value) {
  return value ? 1231 : 1237;
}
function getStringHashCode(str) {
  var hash = 0;
  var length = str.length;
  var inductionVariable = 0;
  var last = length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var code = str.charCodeAt(i);
      hash = imul_0(hash, 31) + code | 0;
    }
     while (!(i === last));
  return hash;
}
function getBigIntHashCode(value) {
  var shiftNumber = BigInt(32);
  var MASK = BigInt(4.294967295E9);
  var bigNumber = value < 0 ? -value : value;
  var hashCode = 0;
  var signum = value < 0 ? -1 : 1;
  while (bigNumber != 0) {
    // Inline function 'kotlin.js.unsafeCast' call
    var chunk = Number(bigNumber & MASK);
    hashCode = imul_0(31, hashCode) + chunk | 0;
    bigNumber = bigNumber >> shiftNumber;
  }
  return imul_0(hashCode, signum);
}
function getSymbolHashCode(value) {
  var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
  var cachedHashCode = hashCodeMap.get(value);
  if (cachedHashCode !== VOID)
    return cachedHashCode;
  var hash = calculateRandomHash();
  hashCodeMap.set(value, hash);
  return hash;
}
function symbolIsSharable(symbol) {
  return Symbol.keyFor(symbol) != VOID;
}
function getSymbolMap() {
  if (symbolMap === VOID) {
    symbolMap = new Map();
  }
  return symbolMap;
}
function getSymbolWeakMap() {
  if (symbolWeakMap === VOID) {
    symbolWeakMap = new WeakMap();
  }
  return symbolWeakMap;
}
var symbolMap;
var symbolWeakMap;
function equals(obj1, obj2) {
  if (obj1 == null) {
    return obj2 == null;
  }
  if (obj2 == null) {
    return false;
  }
  if (typeof obj1 === 'object' && typeof obj1.equals === 'function') {
    return obj1.equals(obj2);
  }
  if (obj1 !== obj1) {
    return obj2 !== obj2;
  }
  if (typeof obj1 === 'number' && typeof obj2 === 'number') {
    var tmp;
    if (obj1 === obj2) {
      var tmp_0;
      if (obj1 !== 0) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = 1 / obj1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp_1 === 1 / obj2;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  return obj1 === obj2;
}
function unboxIntrinsic(x) {
  var message = 'Should be lowered';
  throw IllegalStateException_init_$Create$_0(toString_1(message));
}
function captureStack(instance, constructorFunction) {
  if (Error.captureStackTrace != null) {
    Error.captureStackTrace(instance, constructorFunction);
  } else {
    // Inline function 'kotlin.js.asDynamic' call
    instance.stack = (new Error()).stack;
  }
}
function protoOf(constructor) {
  return constructor.prototype;
}
function extendThrowable(this_, message, cause) {
  Error.call(this_);
  setPropertiesToThrowableInstance(this_, message, cause);
}
function setPropertiesToThrowableInstance(this_, message, cause) {
  var errorInfo = calculateErrorInfo(Object.getPrototypeOf(this_));
  if ((errorInfo & 1) === 0) {
    var tmp;
    if (message == null) {
      var tmp_0;
      if (!(message === null)) {
        var tmp1_elvis_lhs = cause == null ? null : cause.toString();
        tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
      } else {
        tmp_0 = VOID;
      }
      tmp = tmp_0;
    } else {
      tmp = message;
    }
    this_.message = tmp;
  }
  if ((errorInfo & 2) === 0) {
    this_.cause = cause;
  }
  this_.name = Object.getPrototypeOf(this_).constructor.name;
}
function ensureNotNull(v) {
  var tmp;
  if (v == null) {
    THROW_NPE();
  } else {
    tmp = v;
  }
  return tmp;
}
function THROW_NPE() {
  throw NullPointerException_init_$Create$();
}
function noWhenBranchMatchedException() {
  throw NoWhenBranchMatchedException_init_$Create$();
}
function THROW_CCE() {
  throw ClassCastException_init_$Create$();
}
function THROW_IAE(msg) {
  throw IllegalArgumentException_init_$Create$_0(msg);
}
function get_ZERO() {
  _init_properties_longJs_kt__elc2w5();
  return ZERO;
}
var ZERO;
function get_ONE() {
  _init_properties_longJs_kt__elc2w5();
  return ONE;
}
var ONE;
function get_NEG_ONE() {
  _init_properties_longJs_kt__elc2w5();
  return NEG_ONE;
}
var NEG_ONE;
function get_MAX_VALUE() {
  _init_properties_longJs_kt__elc2w5();
  return MAX_VALUE;
}
var MAX_VALUE;
function get_MIN_VALUE() {
  _init_properties_longJs_kt__elc2w5();
  return MIN_VALUE;
}
var MIN_VALUE;
function get_TWO_PWR_24_() {
  _init_properties_longJs_kt__elc2w5();
  return TWO_PWR_24_;
}
var TWO_PWR_24_;
function compare(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  if (equalsLong(_this__u8e3s4, other)) {
    return 0;
  }
  var thisNeg = isNegative(_this__u8e3s4);
  var otherNeg = isNegative(other);
  return thisNeg && !otherNeg ? -1 : !thisNeg && otherNeg ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
}
function add(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  var a48 = _this__u8e3s4.r_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.r_1 & 65535;
  var a16 = _this__u8e3s4.q_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.q_1 & 65535;
  var b48 = other.r_1 >>> 16 | 0;
  var b32 = other.r_1 & 65535;
  var b16 = other.q_1 >>> 16 | 0;
  var b00 = other.q_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + (a00 + b00 | 0) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + (a16 + b16 | 0) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + (a32 + b32 | 0) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (a48 + b48 | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function subtract(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return add(_this__u8e3s4, other.s1());
}
function multiply(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  } else if (isZero(other)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = multiply(negate(_this__u8e3s4), negate(other));
    } else {
      tmp = negate(multiply(negate(_this__u8e3s4), other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(multiply(_this__u8e3s4, negate(other)));
  }
  if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) && lessThan(other, get_TWO_PWR_24_())) {
    return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
  }
  var a48 = _this__u8e3s4.r_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.r_1 & 65535;
  var a16 = _this__u8e3s4.q_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.q_1 & 65535;
  var b48 = other.r_1 >>> 16 | 0;
  var b32 = other.r_1 & 65535;
  var b16 = other.q_1 >>> 16 | 0;
  var b00 = other.q_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + imul_0(a00, b00) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + imul_0(a16, b00) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c16 = c16 + imul_0(a00, b16) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + imul_0(a32, b00) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a16, b16) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a00, b32) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (((imul_0(a48, b00) + imul_0(a32, b16) | 0) + imul_0(a16, b32) | 0) + imul_0(a00, b48) | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function divide(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  if (isZero(other)) {
    throw Exception_init_$Create$_0('division by zero');
  } else if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    if (equalsLong(other, get_ONE()) || equalsLong(other, get_NEG_ONE())) {
      return get_MIN_VALUE();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ONE();
    } else {
      var halfThis = shiftRight(_this__u8e3s4, 1);
      var approx = shiftLeft(halfThis.q1(other), 1);
      if (equalsLong(approx, get_ZERO())) {
        return isNegative(other) ? get_ONE() : get_NEG_ONE();
      } else {
        var rem = subtract(_this__u8e3s4, multiply(other, approx));
        return add(approx, rem.q1(other));
      }
    }
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = negate(_this__u8e3s4).q1(negate(other));
    } else {
      tmp = negate(negate(_this__u8e3s4).q1(other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(_this__u8e3s4.q1(negate(other)));
  }
  var res = get_ZERO();
  var rem_0 = _this__u8e3s4;
  while (greaterThanOrEqual(rem_0, other)) {
    var approxDouble = toNumber(rem_0) / toNumber(other);
    var approx2 = Math.max(1.0, Math.floor(approxDouble));
    var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
    var delta = log2 <= 48 ? 1.0 : Math.pow(2.0, log2 - 48);
    var approxRes = fromNumber(approx2);
    var approxRem = multiply(approxRes, other);
    while (isNegative(approxRem) || greaterThan(approxRem, rem_0)) {
      approx2 = approx2 - delta;
      approxRes = fromNumber(approx2);
      approxRem = multiply(approxRes, other);
    }
    if (isZero(approxRes)) {
      approxRes = get_ONE();
    }
    res = add(res, approxRes);
    rem_0 = subtract(rem_0, approxRem);
  }
  return res;
}
function shiftLeft(_this__u8e3s4, numBits) {
  _init_properties_longJs_kt__elc2w5();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.q_1 << numBits_0, _this__u8e3s4.r_1 << numBits_0 | (_this__u8e3s4.q_1 >>> (32 - numBits_0 | 0) | 0));
    } else {
      return new Long(0, _this__u8e3s4.q_1 << (numBits_0 - 32 | 0));
    }
  }
}
function shiftRight(_this__u8e3s4, numBits) {
  _init_properties_longJs_kt__elc2w5();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.q_1 >>> numBits_0 | 0 | _this__u8e3s4.r_1 << (32 - numBits_0 | 0), _this__u8e3s4.r_1 >> numBits_0);
    } else {
      return new Long(_this__u8e3s4.r_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.r_1 >= 0 ? 0 : -1);
    }
  }
}
function toNumber(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.r_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
}
function toStringImpl(_this__u8e3s4, radix) {
  _init_properties_longJs_kt__elc2w5();
  if (radix < 2 || 36 < radix) {
    throw Exception_init_$Create$_0('radix out of range: ' + radix);
  }
  if (isZero(_this__u8e3s4)) {
    return '0';
  }
  if (isNegative(_this__u8e3s4)) {
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      var radixLong = fromInt(radix);
      var div = _this__u8e3s4.q1(radixLong);
      var rem = subtract(multiply(div, radixLong), _this__u8e3s4).u1();
      var tmp = toStringImpl(div, radix);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      return tmp + rem.toString(radix);
    } else {
      return '-' + toStringImpl(negate(_this__u8e3s4), radix);
    }
  }
  var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
  var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
  var rem_0 = _this__u8e3s4;
  var result = '';
  while (true) {
    var remDiv = rem_0.q1(radixToPower);
    var intval = subtract(rem_0, multiply(remDiv, radixToPower)).u1();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var digits = intval.toString(radix);
    rem_0 = remDiv;
    if (isZero(rem_0)) {
      return digits + result;
    } else {
      while (digits.length < digitsPerTime) {
        digits = '0' + digits;
      }
      result = digits + result;
    }
  }
}
function equalsLong(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.r_1 === other.r_1 && _this__u8e3s4.q_1 === other.q_1;
}
function hashCode_0(l) {
  _init_properties_longJs_kt__elc2w5();
  return l.q_1 ^ l.r_1;
}
function fromInt(value) {
  _init_properties_longJs_kt__elc2w5();
  return new Long(value, value < 0 ? -1 : 0);
}
function isNegative(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.r_1 < 0;
}
function isZero(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.r_1 === 0 && _this__u8e3s4.q_1 === 0;
}
function isOdd(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return (_this__u8e3s4.q_1 & 1) === 1;
}
function negate(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.s1();
}
function lessThan(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return compare(_this__u8e3s4, other) < 0;
}
function fromNumber(value) {
  _init_properties_longJs_kt__elc2w5();
  if (isNaN_0(value)) {
    return get_ZERO();
  } else if (value <= -9.223372036854776E18) {
    return get_MIN_VALUE();
  } else if (value + 1 >= 9.223372036854776E18) {
    return get_MAX_VALUE();
  } else if (value < 0) {
    return negate(fromNumber(-value));
  } else {
    var twoPwr32 = 4.294967296E9;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp = value % twoPwr32 | 0;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp$ret$1 = value / twoPwr32 | 0;
    return new Long(tmp, tmp$ret$1);
  }
}
function greaterThan(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return compare(_this__u8e3s4, other) > 0;
}
function greaterThanOrEqual(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return compare(_this__u8e3s4, other) >= 0;
}
function getLowBitsUnsigned(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.q_1 >= 0 ? _this__u8e3s4.q_1 : 4.294967296E9 + _this__u8e3s4.q_1;
}
var properties_initialized_longJs_kt_4syf89;
function _init_properties_longJs_kt__elc2w5() {
  if (!properties_initialized_longJs_kt_4syf89) {
    properties_initialized_longJs_kt_4syf89 = true;
    ZERO = fromInt(0);
    ONE = fromInt(1);
    NEG_ONE = fromInt(-1);
    MAX_VALUE = new Long(-1, 2147483647);
    MIN_VALUE = new Long(0, -2147483648);
    TWO_PWR_24_ = fromInt(16777216);
  }
}
function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  var undef = VOID;
  var iid = kind === 'interface' ? generateInterfaceId() : VOID;
  return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
}
function generateInterfaceId() {
  if (globalInterfaceId === VOID) {
    globalInterfaceId = 0;
  }
  // Inline function 'kotlin.js.unsafeCast' call
  globalInterfaceId = globalInterfaceId + 1 | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  return globalInterfaceId;
}
var globalInterfaceId;
function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  if (!(parent == null)) {
    ctor.prototype = Object.create(parent.prototype);
    ctor.prototype.constructor = ctor;
  }
  var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
  ctor.$metadata$ = metadata;
  if (!(interfaces == null)) {
    var receiver = !equals(metadata.iid, VOID) ? ctor : ctor.prototype;
    receiver.$imask$ = implement(interfaces);
  }
}
function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'class';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'object';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'interface';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
  initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function numberToInt(a) {
  var tmp;
  if (a instanceof Long) {
    tmp = a.u1();
  } else {
    tmp = doubleToInt(a);
  }
  return tmp;
}
function doubleToInt(a) {
  var tmp;
  if (a > 2147483647) {
    tmp = 2147483647;
  } else if (a < -2147483648) {
    tmp = -2147483648;
  } else {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    tmp = a | 0;
  }
  return tmp;
}
function toShort(a) {
  // Inline function 'kotlin.js.unsafeCast' call
  return a << 16 >> 16;
}
function numberToLong(a) {
  var tmp;
  if (a instanceof Long) {
    tmp = a;
  } else {
    tmp = fromNumber(a);
  }
  return tmp;
}
function numberToChar(a) {
  // Inline function 'kotlin.toUShort' call
  var this_0 = numberToInt(a);
  var tmp$ret$0 = _UShort___init__impl__jigrne(toShort(this_0));
  return _Char___init__impl__6a9atx_0(tmp$ret$0);
}
function toLong(a) {
  return fromInt(a);
}
function numberRangeToNumber(start, endInclusive) {
  return new IntRange(start, endInclusive);
}
function isArrayish(o) {
  return isJsArray(o) || isView(o);
}
function isJsArray(obj) {
  // Inline function 'kotlin.js.unsafeCast' call
  return Array.isArray(obj);
}
function isInterface(obj, iface) {
  return isInterfaceImpl(obj, iface.$metadata$.iid);
}
function isInterfaceImpl(obj, iface) {
  // Inline function 'kotlin.js.unsafeCast' call
  var tmp0_elvis_lhs = obj.$imask$;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var mask = tmp;
  return isBitSet(mask, iface);
}
function isArray(obj) {
  var tmp;
  if (isJsArray(obj)) {
    // Inline function 'kotlin.js.asDynamic' call
    tmp = !obj.$type$;
  } else {
    tmp = false;
  }
  return tmp;
}
function isNumber(a) {
  var tmp;
  if (typeof a === 'number') {
    tmp = true;
  } else {
    tmp = a instanceof Long;
  }
  return tmp;
}
function isComparable(value) {
  var type = typeof value;
  return type === 'string' || type === 'boolean' || isNumber(value) || isInterface(value, Comparable);
}
function isCharSequence(value) {
  return typeof value === 'string' || isInterface(value, CharSequence);
}
function calculateErrorInfo(proto) {
  var tmp0_safe_receiver = proto.constructor;
  var metadata = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.$metadata$;
  var tmp2_safe_receiver = metadata == null ? null : metadata.errorInfo;
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp2_safe_receiver;
  }
  var result = 0;
  if (hasProp(proto, 'message'))
    result = result | 1;
  if (hasProp(proto, 'cause'))
    result = result | 2;
  if (!(result === 3)) {
    var parentProto = getPrototypeOf(proto);
    if (parentProto != Error.prototype) {
      result = result | calculateErrorInfo(parentProto);
    }
  }
  if (!(metadata == null)) {
    metadata.errorInfo = result;
  }
  return result;
}
function hasProp(proto, propName) {
  return proto.hasOwnProperty(propName);
}
function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
}
function get_VOID() {
  _init_properties_void_kt__3zg9as();
  return VOID;
}
var VOID;
var properties_initialized_void_kt_e4ret2;
function _init_properties_void_kt__3zg9as() {
  if (!properties_initialized_void_kt_e4ret2) {
    properties_initialized_void_kt_e4ret2 = true;
    VOID = void 0;
  }
}
function asList(_this__u8e3s4) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return new ArrayList(_this__u8e3s4);
}
function sort(_this__u8e3s4) {
  if (_this__u8e3s4.length > 1) {
    sortArray(_this__u8e3s4);
  }
}
function sortWith(_this__u8e3s4, comparator) {
  if (_this__u8e3s4.length > 1) {
    sortArrayWith(_this__u8e3s4, comparator);
  }
}
function copyOf(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.require' call
  if (!(newSize >= 0)) {
    // Inline function 'kotlin.collections.copyOf.<anonymous>' call
    var message = 'Invalid new array size: ' + newSize + '.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return fillFrom(_this__u8e3s4, new Int32Array(newSize));
}
function copyOf_0(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.require' call
  if (!(newSize >= 0)) {
    // Inline function 'kotlin.collections.copyOf.<anonymous>' call
    var message = 'Invalid new array size: ' + newSize + '.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return arrayCopyResize(_this__u8e3s4, newSize, null);
}
function digitToIntImpl(_this__u8e3s4) {
  // Inline function 'kotlin.code' call
  var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
  var index = binarySearchRange(Digit_getInstance().z1_1, ch);
  var diff = ch - Digit_getInstance().z1_1[index] | 0;
  return diff < 10 ? diff : -1;
}
function binarySearchRange(array, needle) {
  var bottom = 0;
  var top = array.length - 1 | 0;
  var middle = -1;
  var value = 0;
  while (bottom <= top) {
    middle = (bottom + top | 0) / 2 | 0;
    value = array[middle];
    if (needle > value)
      bottom = middle + 1 | 0;
    else if (needle === value)
      return middle;
    else
      top = middle - 1 | 0;
  }
  return middle - (needle < value ? 1 : 0) | 0;
}
function Digit() {
  Digit_instance = this;
  var tmp = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp.z1_1 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
}
var Digit_instance;
function Digit_getInstance() {
  if (Digit_instance == null)
    new Digit();
  return Digit_instance;
}
function isWhitespaceImpl(_this__u8e3s4) {
  // Inline function 'kotlin.code' call
  var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
  return (9 <= ch ? ch <= 13 : false) || (28 <= ch ? ch <= 32 : false) || ch === 160 || (ch > 4096 && (ch === 5760 || (8192 <= ch ? ch <= 8202 : false) || ch === 8232 || ch === 8233 || ch === 8239 || ch === 8287 || ch === 12288));
}
function Comparator() {
}
function isNaN_0(_this__u8e3s4) {
  return !(_this__u8e3s4 === _this__u8e3s4);
}
function takeHighestOneBit(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 === 0) {
    tmp = 0;
  } else {
    // Inline function 'kotlin.countLeadingZeroBits' call
    tmp = 1 << (31 - clz32(_this__u8e3s4) | 0);
  }
  return tmp;
}
function Unit() {
}
protoOf(Unit).toString = function () {
  return 'kotlin.Unit';
};
var Unit_instance;
function Unit_getInstance() {
  return Unit_instance;
}
function collectionToArray(collection) {
  return collectionToArrayCommonImpl(collection);
}
function listOf(element) {
  return arrayListOf([element]);
}
function setOf(element) {
  return hashSetOf([element]);
}
function mapCapacity(expectedSize) {
  return expectedSize;
}
function checkCountOverflow(count) {
  if (count < 0) {
    throwCountOverflow();
  }
  return count;
}
function sort_0(_this__u8e3s4) {
  collectionsSort(_this__u8e3s4, naturalOrder());
}
function sortWith_0(_this__u8e3s4, comparator) {
  collectionsSort(_this__u8e3s4, comparator);
}
function checkIndexOverflow(index) {
  if (index < 0) {
    throwIndexOverflow();
  }
  return index;
}
function mapOf(pair) {
  return hashMapOf([pair]);
}
function copyToArray(collection) {
  var tmp;
  // Inline function 'kotlin.js.asDynamic' call
  if (collection.toArray !== undefined) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = collection.toArray();
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = collectionToArray(collection);
  }
  return tmp;
}
function collectionsSort(list, comparator) {
  if (list.l() <= 1)
    return Unit_instance;
  var array = copyToArray(list);
  sortArrayWith(array, comparator);
  var inductionVariable = 0;
  var last = array.length;
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      list.a2(i, array[i]);
    }
     while (inductionVariable < last);
}
function AbstractMutableCollection() {
  AbstractCollection.call(this);
}
protoOf(AbstractMutableCollection).p = function (elements) {
  this.b2();
  var modified = false;
  var _iterator__ex2g4s = elements.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    if (this.e(element))
      modified = true;
  }
  return modified;
};
protoOf(AbstractMutableCollection).toJSON = function () {
  return this.toArray();
};
protoOf(AbstractMutableCollection).b2 = function () {
};
function IteratorImpl($outer) {
  this.e2_1 = $outer;
  this.c2_1 = 0;
  this.d2_1 = -1;
}
protoOf(IteratorImpl).h = function () {
  return this.c2_1 < this.e2_1.l();
};
protoOf(IteratorImpl).i = function () {
  if (!this.h())
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.c2_1;
  this.c2_1 = _unary__edvuaz + 1 | 0;
  tmp.d2_1 = _unary__edvuaz;
  return this.e2_1.j(this.d2_1);
};
function ListIteratorImpl($outer, index) {
  this.i2_1 = $outer;
  IteratorImpl.call(this, $outer);
  Companion_instance_4.k2(index, this.i2_1.l());
  this.c2_1 = index;
}
protoOf(ListIteratorImpl).l2 = function () {
  return this.c2_1 > 0;
};
protoOf(ListIteratorImpl).m2 = function () {
  if (!this.l2())
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  this.c2_1 = this.c2_1 - 1 | 0;
  tmp.d2_1 = this.c2_1;
  return this.i2_1.j(this.d2_1);
};
function AbstractMutableList() {
  AbstractMutableCollection.call(this);
  this.n2_1 = 0;
}
protoOf(AbstractMutableList).e = function (element) {
  this.b2();
  this.o2(this.l(), element);
  return true;
};
protoOf(AbstractMutableList).g = function () {
  return new IteratorImpl(this);
};
protoOf(AbstractMutableList).z = function (element) {
  return this.q2(element) >= 0;
};
protoOf(AbstractMutableList).q2 = function (element) {
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.indexOfFirst' call
    var index = 0;
    var _iterator__ex2g4s = this.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.AbstractMutableList.indexOf.<anonymous>' call
      if (equals(item, element)) {
        tmp$ret$1 = index;
        break $l$block;
      }
      index = index + 1 | 0;
    }
    tmp$ret$1 = -1;
  }
  return tmp$ret$1;
};
protoOf(AbstractMutableList).t = function (index) {
  return new ListIteratorImpl(this, index);
};
protoOf(AbstractMutableList).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtList) : false))
    return false;
  return Companion_instance_4.r2(this, other);
};
protoOf(AbstractMutableList).hashCode = function () {
  return Companion_instance_4.s2(this);
};
function AbstractMutableMap() {
  AbstractMap.call(this);
  this.v2_1 = null;
  this.w2_1 = null;
}
function AbstractMutableSet() {
  AbstractMutableCollection.call(this);
}
protoOf(AbstractMutableSet).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtSet) : false))
    return false;
  return Companion_instance_6.b3(this, other);
};
protoOf(AbstractMutableSet).hashCode = function () {
  return Companion_instance_6.c3(this);
};
function arrayOfUninitializedElements(capacity) {
  // Inline function 'kotlin.require' call
  if (!(capacity >= 0)) {
    // Inline function 'kotlin.collections.arrayOfUninitializedElements.<anonymous>' call
    var message = 'capacity must be non-negative.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.arrayOfNulls' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return fillArrayVal(Array(capacity), null);
}
function resetRange(_this__u8e3s4, fromIndex, toIndex) {
  // Inline function 'kotlin.js.nativeFill' call
  // Inline function 'kotlin.js.asDynamic' call
  _this__u8e3s4.fill(null, fromIndex, toIndex);
}
function copyOfUninitializedElements(_this__u8e3s4, newSize) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return copyOf_0(_this__u8e3s4, newSize);
}
function Companion_1() {
  Companion_instance_1 = this;
  var tmp = this;
  // Inline function 'kotlin.also' call
  var this_0 = ArrayList_init_$Create$_0(0);
  // Inline function 'kotlin.collections.Companion.Empty.<anonymous>' call
  this_0.o_1 = true;
  tmp.d3_1 = this_0;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function ArrayList_init_$Init$($this) {
  // Inline function 'kotlin.emptyArray' call
  var tmp$ret$0 = [];
  ArrayList.call($this, tmp$ret$0);
  return $this;
}
function ArrayList_init_$Create$() {
  return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
}
function ArrayList_init_$Init$_0(initialCapacity, $this) {
  // Inline function 'kotlin.emptyArray' call
  var tmp$ret$0 = [];
  ArrayList.call($this, tmp$ret$0);
  // Inline function 'kotlin.require' call
  if (!(initialCapacity >= 0)) {
    // Inline function 'kotlin.collections.ArrayList.<init>.<anonymous>' call
    var message = 'Negative initial capacity: ' + initialCapacity;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return $this;
}
function ArrayList_init_$Create$_0(initialCapacity) {
  return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
}
function ArrayList_init_$Init$_1(elements, $this) {
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp$ret$0 = copyToArray(elements);
  ArrayList.call($this, tmp$ret$0);
  return $this;
}
function ArrayList_init_$Create$_1(elements) {
  return ArrayList_init_$Init$_1(elements, objectCreate(protoOf(ArrayList)));
}
function increaseLength($this, amount) {
  var previous = $this.l();
  // Inline function 'kotlin.js.asDynamic' call
  $this.n_1.length = $this.l() + amount | 0;
  return previous;
}
function rangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
  Companion_instance_4.e3(index, $this.l());
  return index;
}
function insertionRangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
  Companion_instance_4.k2(index, $this.l());
  return index;
}
function ArrayList(array) {
  Companion_getInstance_1();
  AbstractMutableList.call(this);
  this.n_1 = array;
  this.o_1 = false;
}
protoOf(ArrayList).l = function () {
  return this.n_1.length;
};
protoOf(ArrayList).j = function (index) {
  var tmp = this.n_1[rangeCheck(this, index)];
  return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
};
protoOf(ArrayList).a2 = function (index, element) {
  this.b2();
  rangeCheck(this, index);
  // Inline function 'kotlin.apply' call
  var this_0 = this.n_1[index];
  // Inline function 'kotlin.collections.ArrayList.set.<anonymous>' call
  this.n_1[index] = element;
  var tmp = this_0;
  return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
};
protoOf(ArrayList).e = function (element) {
  this.b2();
  // Inline function 'kotlin.js.asDynamic' call
  this.n_1.push(element);
  this.n2_1 = this.n2_1 + 1 | 0;
  return true;
};
protoOf(ArrayList).o2 = function (index, element) {
  this.b2();
  // Inline function 'kotlin.js.asDynamic' call
  this.n_1.splice(insertionRangeCheck(this, index), 0, element);
  this.n2_1 = this.n2_1 + 1 | 0;
};
protoOf(ArrayList).p = function (elements) {
  this.b2();
  if (elements.k())
    return false;
  var offset = increaseLength(this, elements.l());
  // Inline function 'kotlin.collections.forEachIndexed' call
  var index = 0;
  var _iterator__ex2g4s = elements.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.collections.ArrayList.addAll.<anonymous>' call
    var index_0 = checkIndexOverflow(_unary__edvuaz);
    this.n_1[offset + index_0 | 0] = item;
  }
  this.n2_1 = this.n2_1 + 1 | 0;
  return true;
};
protoOf(ArrayList).p2 = function (index) {
  this.b2();
  rangeCheck(this, index);
  this.n2_1 = this.n2_1 + 1 | 0;
  var tmp;
  if (index === get_lastIndex_0(this)) {
    // Inline function 'kotlin.js.asDynamic' call
    tmp = this.n_1.pop();
  } else {
    // Inline function 'kotlin.js.asDynamic' call
    tmp = this.n_1.splice(index, 1)[0];
  }
  return tmp;
};
protoOf(ArrayList).q2 = function (element) {
  return indexOf(this.n_1, element);
};
protoOf(ArrayList).toString = function () {
  return arrayToString(this.n_1);
};
protoOf(ArrayList).f3 = function () {
  return [].slice.call(this.n_1);
};
protoOf(ArrayList).toArray = function () {
  return this.f3();
};
protoOf(ArrayList).b2 = function () {
  if (this.o_1)
    throw UnsupportedOperationException_init_$Create$();
};
var _stableSortingIsSupported;
function sortArrayWith(array, comparator) {
  if (getStableSortingIsSupported()) {
    var comparison = sortArrayWith$lambda(comparator);
    // Inline function 'kotlin.js.asDynamic' call
    array.sort(comparison);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    mergeSort(array, 0, get_lastIndex(array), comparator);
  }
}
function sortArray(array) {
  if (getStableSortingIsSupported()) {
    var comparison = sortArray$lambda;
    // Inline function 'kotlin.js.asDynamic' call
    array.sort(comparison);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    mergeSort(array, 0, get_lastIndex(array), naturalOrder());
  }
}
function getStableSortingIsSupported() {
  var tmp0_safe_receiver = _stableSortingIsSupported;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  _stableSortingIsSupported = false;
  // Inline function 'kotlin.js.unsafeCast' call
  var array = [];
  var inductionVariable = 0;
  if (inductionVariable < 600)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      array.push(index);
    }
     while (inductionVariable < 600);
  var comparison = getStableSortingIsSupported$lambda;
  // Inline function 'kotlin.js.asDynamic' call
  array.sort(comparison);
  var inductionVariable_0 = 1;
  var last = array.length;
  if (inductionVariable_0 < last)
    do {
      var index_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var a = array[index_0 - 1 | 0];
      var b = array[index_0];
      if ((a & 3) === (b & 3) && a >= b)
        return false;
    }
     while (inductionVariable_0 < last);
  _stableSortingIsSupported = true;
  return true;
}
function mergeSort(array, start, endInclusive, comparator) {
  // Inline function 'kotlin.arrayOfNulls' call
  var size = array.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var buffer = fillArrayVal(Array(size), null);
  var result = mergeSort_0(array, buffer, start, endInclusive, comparator);
  if (!(result === array)) {
    var inductionVariable = start;
    if (inductionVariable <= endInclusive)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = result[i];
      }
       while (!(i === endInclusive));
  }
}
function mergeSort_0(array, buffer, start, end, comparator) {
  if (start === end) {
    return array;
  }
  var median = (start + end | 0) / 2 | 0;
  var left = mergeSort_0(array, buffer, start, median, comparator);
  var right = mergeSort_0(array, buffer, median + 1 | 0, end, comparator);
  var target = left === buffer ? array : buffer;
  var leftIndex = start;
  var rightIndex = median + 1 | 0;
  var inductionVariable = start;
  if (inductionVariable <= end)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (leftIndex <= median && rightIndex <= end) {
        var leftValue = left[leftIndex];
        var rightValue = right[rightIndex];
        if (comparator.compare(leftValue, rightValue) <= 0) {
          target[i] = leftValue;
          leftIndex = leftIndex + 1 | 0;
        } else {
          target[i] = rightValue;
          rightIndex = rightIndex + 1 | 0;
        }
      } else if (leftIndex <= median) {
        target[i] = left[leftIndex];
        leftIndex = leftIndex + 1 | 0;
      } else {
        target[i] = right[rightIndex];
        rightIndex = rightIndex + 1 | 0;
      }
    }
     while (!(i === end));
  return target;
}
function sortArrayWith$lambda($comparator) {
  return function (a, b) {
    return $comparator.compare(a, b);
  };
}
function sortArray$lambda(a, b) {
  return compareTo(a, b);
}
function getStableSortingIsSupported$lambda(a, b) {
  return (a & 3) - (b & 3) | 0;
}
function HashMap_init_$Init$(internalMap, $this) {
  AbstractMutableMap.call($this);
  HashMap.call($this);
  $this.k3_1 = internalMap;
  return $this;
}
function HashMap_init_$Init$_0($this) {
  HashMap_init_$Init$(InternalHashMap_init_$Create$(), $this);
  return $this;
}
function HashMap_init_$Create$() {
  return HashMap_init_$Init$_0(objectCreate(protoOf(HashMap)));
}
function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
  HashMap_init_$Init$(InternalHashMap_init_$Create$_2(initialCapacity, loadFactor), $this);
  return $this;
}
function HashMap_init_$Init$_2(initialCapacity, $this) {
  HashMap_init_$Init$_1(initialCapacity, 1.0, $this);
  return $this;
}
function HashMap_init_$Create$_0(initialCapacity) {
  return HashMap_init_$Init$_2(initialCapacity, objectCreate(protoOf(HashMap)));
}
function HashMap_init_$Init$_3(original, $this) {
  HashMap_init_$Init$(InternalHashMap_init_$Create$_1(original), $this);
  return $this;
}
protoOf(HashMap).d1 = function (key) {
  return this.k3_1.m3(key);
};
protoOf(HashMap).f1 = function () {
  var tmp0_elvis_lhs = this.l3_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = new HashMapEntrySet(this.k3_1);
    // Inline function 'kotlin.collections.HashMap.<get-entries>.<anonymous>' call
    this.l3_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(HashMap).e1 = function (key) {
  return this.k3_1.e1(key);
};
protoOf(HashMap).x2 = function (key, value) {
  return this.k3_1.x2(key, value);
};
protoOf(HashMap).l = function () {
  return this.k3_1.l();
};
function HashMap() {
  this.l3_1 = null;
}
function HashMapEntrySet(backing) {
  HashMapEntrySetBase.call(this, backing);
}
protoOf(HashMapEntrySet).g = function () {
  return this.o3_1.p3();
};
function HashMapEntrySetBase(backing) {
  AbstractMutableSet.call(this);
  this.o3_1 = backing;
}
protoOf(HashMapEntrySetBase).l = function () {
  return this.o3_1.l();
};
protoOf(HashMapEntrySetBase).k = function () {
  return this.o3_1.l() === 0;
};
protoOf(HashMapEntrySetBase).q3 = function (element) {
  return this.o3_1.s3(element);
};
protoOf(HashMapEntrySetBase).z = function (element) {
  if (!(!(element == null) ? isInterface(element, Entry) : false))
    return false;
  return this.q3((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
};
protoOf(HashMapEntrySetBase).r3 = function (element) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(HashMapEntrySetBase).e = function (element) {
  return this.r3((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
};
protoOf(HashMapEntrySetBase).p = function (elements) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(HashMapEntrySetBase).a1 = function (elements) {
  return this.o3_1.t3(elements);
};
protoOf(HashMapEntrySetBase).b2 = function () {
  return this.o3_1.u3();
};
function HashSet_init_$Init$(map, $this) {
  AbstractMutableSet.call($this);
  HashSet.call($this);
  $this.y_1 = map;
  return $this;
}
function HashSet_init_$Init$_0($this) {
  HashSet_init_$Init$(InternalHashMap_init_$Create$(), $this);
  return $this;
}
function HashSet_init_$Create$() {
  return HashSet_init_$Init$_0(objectCreate(protoOf(HashSet)));
}
function HashSet_init_$Init$_1(elements, $this) {
  HashSet_init_$Init$(InternalHashMap_init_$Create$_0(elements.l()), $this);
  var _iterator__ex2g4s = elements.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    $this.y_1.x2(element, true);
  }
  return $this;
}
function HashSet_init_$Init$_2(initialCapacity, loadFactor, $this) {
  HashSet_init_$Init$(InternalHashMap_init_$Create$_2(initialCapacity, loadFactor), $this);
  return $this;
}
function HashSet_init_$Init$_3(initialCapacity, $this) {
  HashSet_init_$Init$_2(initialCapacity, 1.0, $this);
  return $this;
}
function HashSet_init_$Create$_0(initialCapacity) {
  return HashSet_init_$Init$_3(initialCapacity, objectCreate(protoOf(HashSet)));
}
protoOf(HashSet).e = function (element) {
  return this.y_1.x2(element, true) == null;
};
protoOf(HashSet).z = function (element) {
  return this.y_1.m3(element);
};
protoOf(HashSet).k = function () {
  return this.y_1.l() === 0;
};
protoOf(HashSet).g = function () {
  return this.y_1.v3();
};
protoOf(HashSet).l = function () {
  return this.y_1.l();
};
function HashSet() {
}
function computeHashSize($this, capacity) {
  return takeHighestOneBit(imul_0(coerceAtLeast(capacity, 1), 3));
}
function computeShift($this, hashSize) {
  // Inline function 'kotlin.countLeadingZeroBits' call
  return clz32(hashSize) + 1 | 0;
}
function checkForComodification($this) {
  if (!($this.g4_1.d4_1 === $this.i4_1))
    throw ConcurrentModificationException_init_$Create$_0('The backing map has been modified after this entry was obtained.');
}
function InternalHashMap_init_$Init$($this) {
  InternalHashMap_init_$Init$_0(8, $this);
  return $this;
}
function InternalHashMap_init_$Create$() {
  return InternalHashMap_init_$Init$(objectCreate(protoOf(InternalHashMap)));
}
function InternalHashMap_init_$Init$_0(initialCapacity, $this) {
  InternalHashMap.call($this, arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_2, initialCapacity)), 2, 0);
  return $this;
}
function InternalHashMap_init_$Create$_0(initialCapacity) {
  return InternalHashMap_init_$Init$_0(initialCapacity, objectCreate(protoOf(InternalHashMap)));
}
function InternalHashMap_init_$Init$_1(original, $this) {
  InternalHashMap_init_$Init$_0(original.l(), $this);
  $this.j4(original);
  return $this;
}
function InternalHashMap_init_$Create$_1(original) {
  return InternalHashMap_init_$Init$_1(original, objectCreate(protoOf(InternalHashMap)));
}
function InternalHashMap_init_$Init$_2(initialCapacity, loadFactor, $this) {
  InternalHashMap_init_$Init$_0(initialCapacity, $this);
  // Inline function 'kotlin.require' call
  if (!(loadFactor > 0)) {
    // Inline function 'kotlin.collections.InternalHashMap.<init>.<anonymous>' call
    var message = 'Non-positive load factor: ' + loadFactor;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return $this;
}
function InternalHashMap_init_$Create$_2(initialCapacity, loadFactor) {
  return InternalHashMap_init_$Init$_2(initialCapacity, loadFactor, objectCreate(protoOf(InternalHashMap)));
}
function _get_capacity__a9k9f3($this) {
  return $this.w3_1.length;
}
function _get_hashSize__tftcho($this) {
  return $this.z3_1.length;
}
function registerModification($this) {
  $this.d4_1 = $this.d4_1 + 1 | 0;
}
function ensureExtraCapacity($this, n) {
  if (shouldCompact($this, n)) {
    compact($this, true);
  } else {
    ensureCapacity($this, $this.b4_1 + n | 0);
  }
}
function shouldCompact($this, extraCapacity) {
  var spareCapacity = _get_capacity__a9k9f3($this) - $this.b4_1 | 0;
  var gaps = $this.b4_1 - $this.l() | 0;
  return spareCapacity < extraCapacity && (gaps + spareCapacity | 0) >= extraCapacity && gaps >= (_get_capacity__a9k9f3($this) / 4 | 0);
}
function ensureCapacity($this, minCapacity) {
  if (minCapacity < 0)
    throw RuntimeException_init_$Create$_0('too many elements');
  if (minCapacity > _get_capacity__a9k9f3($this)) {
    var newSize = Companion_instance_4.k4(_get_capacity__a9k9f3($this), minCapacity);
    $this.w3_1 = copyOfUninitializedElements($this.w3_1, newSize);
    var tmp = $this;
    var tmp0_safe_receiver = $this.x3_1;
    tmp.x3_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
    $this.y3_1 = copyOf($this.y3_1, newSize);
    var newHashSize = computeHashSize(Companion_instance_2, newSize);
    if (newHashSize > _get_hashSize__tftcho($this)) {
      rehash($this, newHashSize);
    }
  }
}
function allocateValuesArray($this) {
  var curValuesArray = $this.x3_1;
  if (!(curValuesArray == null))
    return curValuesArray;
  var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
  $this.x3_1 = newValuesArray;
  return newValuesArray;
}
function hash($this, key) {
  return key == null ? 0 : imul_0(hashCode(key), -1640531527) >>> $this.c4_1 | 0;
}
function compact($this, updateHashArray) {
  var i = 0;
  var j = 0;
  var valuesArray = $this.x3_1;
  while (i < $this.b4_1) {
    var hash = $this.y3_1[i];
    if (hash >= 0) {
      $this.w3_1[j] = $this.w3_1[i];
      if (!(valuesArray == null)) {
        valuesArray[j] = valuesArray[i];
      }
      if (updateHashArray) {
        $this.y3_1[j] = hash;
        $this.z3_1[hash] = j + 1 | 0;
      }
      j = j + 1 | 0;
    }
    i = i + 1 | 0;
  }
  resetRange($this.w3_1, j, $this.b4_1);
  if (valuesArray == null)
    null;
  else {
    resetRange(valuesArray, j, $this.b4_1);
  }
  $this.b4_1 = j;
}
function rehash($this, newHashSize) {
  registerModification($this);
  if ($this.b4_1 > $this.e4_1) {
    compact($this, false);
  }
  $this.z3_1 = new Int32Array(newHashSize);
  $this.c4_1 = computeShift(Companion_instance_2, newHashSize);
  var i = 0;
  while (i < $this.b4_1) {
    var _unary__edvuaz = i;
    i = _unary__edvuaz + 1 | 0;
    if (!putRehash($this, _unary__edvuaz)) {
      throw IllegalStateException_init_$Create$_0('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
    }
  }
}
function putRehash($this, i) {
  var hash_0 = hash($this, $this.w3_1[i]);
  var probesLeft = $this.a4_1;
  while (true) {
    var index = $this.z3_1[hash_0];
    if (index === 0) {
      $this.z3_1[hash_0] = i + 1 | 0;
      $this.y3_1[i] = hash_0;
      return true;
    }
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return false;
    var _unary__edvuaz = hash_0;
    hash_0 = _unary__edvuaz - 1 | 0;
    if (_unary__edvuaz === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function findKey($this, key) {
  var hash_0 = hash($this, key);
  var probesLeft = $this.a4_1;
  while (true) {
    var index = $this.z3_1[hash_0];
    if (index === 0)
      return -1;
    if (index > 0 && equals($this.w3_1[index - 1 | 0], key))
      return index - 1 | 0;
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return -1;
    var _unary__edvuaz = hash_0;
    hash_0 = _unary__edvuaz - 1 | 0;
    if (_unary__edvuaz === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function addKey($this, key) {
  $this.u3();
  retry: while (true) {
    var hash_0 = hash($this, key);
    var tentativeMaxProbeDistance = coerceAtMost(imul_0($this.a4_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
    var probeDistance = 0;
    while (true) {
      var index = $this.z3_1[hash_0];
      if (index <= 0) {
        if ($this.b4_1 >= _get_capacity__a9k9f3($this)) {
          ensureExtraCapacity($this, 1);
          continue retry;
        }
        var _unary__edvuaz = $this.b4_1;
        $this.b4_1 = _unary__edvuaz + 1 | 0;
        var putIndex = _unary__edvuaz;
        $this.w3_1[putIndex] = key;
        $this.y3_1[putIndex] = hash_0;
        $this.z3_1[hash_0] = putIndex + 1 | 0;
        $this.e4_1 = $this.e4_1 + 1 | 0;
        registerModification($this);
        if (probeDistance > $this.a4_1)
          $this.a4_1 = probeDistance;
        return putIndex;
      }
      if (equals($this.w3_1[index - 1 | 0], key)) {
        return -index | 0;
      }
      probeDistance = probeDistance + 1 | 0;
      if (probeDistance > tentativeMaxProbeDistance) {
        rehash($this, imul_0(_get_hashSize__tftcho($this), 2));
        continue retry;
      }
      var _unary__edvuaz_0 = hash_0;
      hash_0 = _unary__edvuaz_0 - 1 | 0;
      if (_unary__edvuaz_0 === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
}
function contentEquals($this, other) {
  return $this.e4_1 === other.l() && $this.t3(other.f1());
}
function putEntry($this, entry) {
  var index = addKey($this, entry.b1());
  var valuesArray = allocateValuesArray($this);
  if (index >= 0) {
    valuesArray[index] = entry.c1();
    return true;
  }
  var oldValue = valuesArray[(-index | 0) - 1 | 0];
  if (!equals(entry.c1(), oldValue)) {
    valuesArray[(-index | 0) - 1 | 0] = entry.c1();
    return true;
  }
  return false;
}
function putAllEntries($this, from) {
  if (from.k())
    return false;
  ensureExtraCapacity($this, from.l());
  var it = from.g();
  var updated = false;
  while (it.h()) {
    if (putEntry($this, it.i()))
      updated = true;
  }
  return updated;
}
function Companion_2() {
  this.l4_1 = -1640531527;
  this.m4_1 = 8;
  this.n4_1 = 2;
  this.o4_1 = -1;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
function Itr(map) {
  this.p4_1 = map;
  this.q4_1 = 0;
  this.r4_1 = -1;
  this.s4_1 = this.p4_1.d4_1;
  this.t4();
}
protoOf(Itr).t4 = function () {
  while (this.q4_1 < this.p4_1.b4_1 && this.p4_1.y3_1[this.q4_1] < 0) {
    this.q4_1 = this.q4_1 + 1 | 0;
  }
};
protoOf(Itr).h = function () {
  return this.q4_1 < this.p4_1.b4_1;
};
protoOf(Itr).u4 = function () {
  if (!(this.p4_1.d4_1 === this.s4_1))
    throw ConcurrentModificationException_init_$Create$();
};
function KeysItr(map) {
  Itr.call(this, map);
}
protoOf(KeysItr).i = function () {
  this.u4();
  if (this.q4_1 >= this.p4_1.b4_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.q4_1;
  this.q4_1 = _unary__edvuaz + 1 | 0;
  tmp.r4_1 = _unary__edvuaz;
  var result = this.p4_1.w3_1[this.r4_1];
  this.t4();
  return result;
};
function EntriesItr(map) {
  Itr.call(this, map);
}
protoOf(EntriesItr).i = function () {
  this.u4();
  if (this.q4_1 >= this.p4_1.b4_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.q4_1;
  this.q4_1 = _unary__edvuaz + 1 | 0;
  tmp.r4_1 = _unary__edvuaz;
  var result = new EntryRef(this.p4_1, this.r4_1);
  this.t4();
  return result;
};
protoOf(EntriesItr).d5 = function () {
  if (this.q4_1 >= this.p4_1.b4_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.q4_1;
  this.q4_1 = _unary__edvuaz + 1 | 0;
  tmp.r4_1 = _unary__edvuaz;
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver = this.p4_1.w3_1[this.r4_1];
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver_0 = ensureNotNull(this.p4_1.x3_1)[this.r4_1];
  var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
  var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  this.t4();
  return result;
};
protoOf(EntriesItr).e5 = function (sb) {
  if (this.q4_1 >= this.p4_1.b4_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var _unary__edvuaz = this.q4_1;
  this.q4_1 = _unary__edvuaz + 1 | 0;
  tmp.r4_1 = _unary__edvuaz;
  var key = this.p4_1.w3_1[this.r4_1];
  if (equals(key, this.p4_1))
    sb.h5('(this Map)');
  else
    sb.g5(key);
  sb.i5(_Char___init__impl__6a9atx(61));
  var value = ensureNotNull(this.p4_1.x3_1)[this.r4_1];
  if (equals(value, this.p4_1))
    sb.h5('(this Map)');
  else
    sb.g5(value);
  this.t4();
};
function EntryRef(map, index) {
  this.g4_1 = map;
  this.h4_1 = index;
  this.i4_1 = this.g4_1.d4_1;
}
protoOf(EntryRef).b1 = function () {
  checkForComodification(this);
  return this.g4_1.w3_1[this.h4_1];
};
protoOf(EntryRef).c1 = function () {
  checkForComodification(this);
  return ensureNotNull(this.g4_1.x3_1)[this.h4_1];
};
protoOf(EntryRef).equals = function (other) {
  var tmp;
  var tmp_0;
  if (!(other == null) ? isInterface(other, Entry) : false) {
    tmp_0 = equals(other.b1(), this.b1());
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = equals(other.c1(), this.c1());
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EntryRef).hashCode = function () {
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver = this.b1();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  // Inline function 'kotlin.hashCode' call
  var tmp0_safe_receiver_0 = this.c1();
  var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
  return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
};
protoOf(EntryRef).toString = function () {
  return toString_0(this.b1()) + '=' + toString_0(this.c1());
};
function InternalHashMap(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
  this.w3_1 = keysArray;
  this.x3_1 = valuesArray;
  this.y3_1 = presenceArray;
  this.z3_1 = hashArray;
  this.a4_1 = maxProbeDistance;
  this.b4_1 = length;
  this.c4_1 = computeShift(Companion_instance_2, _get_hashSize__tftcho(this));
  this.d4_1 = 0;
  this.e4_1 = 0;
  this.f4_1 = false;
}
protoOf(InternalHashMap).l = function () {
  return this.e4_1;
};
protoOf(InternalHashMap).e1 = function (key) {
  var index = findKey(this, key);
  if (index < 0)
    return null;
  return ensureNotNull(this.x3_1)[index];
};
protoOf(InternalHashMap).m3 = function (key) {
  return findKey(this, key) >= 0;
};
protoOf(InternalHashMap).x2 = function (key, value) {
  var index = addKey(this, key);
  var valuesArray = allocateValuesArray(this);
  if (index < 0) {
    var oldValue = valuesArray[(-index | 0) - 1 | 0];
    valuesArray[(-index | 0) - 1 | 0] = value;
    return oldValue;
  } else {
    valuesArray[index] = value;
    return null;
  }
};
protoOf(InternalHashMap).j4 = function (from) {
  this.u3();
  putAllEntries(this, from.f1());
};
protoOf(InternalHashMap).equals = function (other) {
  var tmp;
  if (other === this) {
    tmp = true;
  } else {
    var tmp_0;
    if (!(other == null) ? isInterface(other, KtMap) : false) {
      tmp_0 = contentEquals(this, other);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(InternalHashMap).hashCode = function () {
  var result = 0;
  var it = this.p3();
  while (it.h()) {
    result = result + it.d5() | 0;
  }
  return result;
};
protoOf(InternalHashMap).toString = function () {
  var sb = StringBuilder_init_$Create$(2 + imul_0(this.e4_1, 3) | 0);
  sb.h5('{');
  var i = 0;
  var it = this.p3();
  while (it.h()) {
    if (i > 0) {
      sb.h5(', ');
    }
    it.e5(sb);
    i = i + 1 | 0;
  }
  sb.h5('}');
  return sb.toString();
};
protoOf(InternalHashMap).u3 = function () {
  if (this.f4_1)
    throw UnsupportedOperationException_init_$Create$();
};
protoOf(InternalHashMap).s3 = function (entry) {
  var index = findKey(this, entry.b1());
  if (index < 0)
    return false;
  return equals(ensureNotNull(this.x3_1)[index], entry.c1());
};
protoOf(InternalHashMap).j5 = function (entry) {
  return this.s3(isInterface(entry, Entry) ? entry : THROW_CCE());
};
protoOf(InternalHashMap).v3 = function () {
  return new KeysItr(this);
};
protoOf(InternalHashMap).p3 = function () {
  return new EntriesItr(this);
};
function InternalMap() {
}
function LinkedHashMap_init_$Init$($this) {
  HashMap_init_$Init$_0($this);
  LinkedHashMap.call($this);
  return $this;
}
function LinkedHashMap_init_$Create$() {
  return LinkedHashMap_init_$Init$(objectCreate(protoOf(LinkedHashMap)));
}
function LinkedHashMap_init_$Init$_0(initialCapacity, $this) {
  HashMap_init_$Init$_2(initialCapacity, $this);
  LinkedHashMap.call($this);
  return $this;
}
function LinkedHashMap_init_$Create$_0(initialCapacity) {
  return LinkedHashMap_init_$Init$_0(initialCapacity, objectCreate(protoOf(LinkedHashMap)));
}
function LinkedHashMap_init_$Init$_1(original, $this) {
  HashMap_init_$Init$_3(original, $this);
  LinkedHashMap.call($this);
  return $this;
}
function LinkedHashMap_init_$Create$_1(original) {
  return LinkedHashMap_init_$Init$_1(original, objectCreate(protoOf(LinkedHashMap)));
}
function LinkedHashMap() {
}
function LinkedHashSet_init_$Init$($this) {
  HashSet_init_$Init$_0($this);
  LinkedHashSet.call($this);
  return $this;
}
function LinkedHashSet_init_$Create$() {
  return LinkedHashSet_init_$Init$(objectCreate(protoOf(LinkedHashSet)));
}
function LinkedHashSet_init_$Init$_0(elements, $this) {
  HashSet_init_$Init$_1(elements, $this);
  LinkedHashSet.call($this);
  return $this;
}
function LinkedHashSet_init_$Create$_0(elements) {
  return LinkedHashSet_init_$Init$_0(elements, objectCreate(protoOf(LinkedHashSet)));
}
function LinkedHashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
  HashSet_init_$Init$_2(initialCapacity, loadFactor, $this);
  LinkedHashSet.call($this);
  return $this;
}
function LinkedHashSet_init_$Init$_2(initialCapacity, $this) {
  LinkedHashSet_init_$Init$_1(initialCapacity, 1.0, $this);
  return $this;
}
function LinkedHashSet_init_$Create$_1(initialCapacity) {
  return LinkedHashSet_init_$Init$_2(initialCapacity, objectCreate(protoOf(LinkedHashSet)));
}
protoOf(LinkedHashSet).b2 = function () {
  return this.y_1.u3();
};
function LinkedHashSet() {
}
function RandomAccess() {
}
function Exception_init_$Init$($this) {
  extendThrowable($this);
  Exception.call($this);
  return $this;
}
function Exception_init_$Create$() {
  var tmp = Exception_init_$Init$(objectCreate(protoOf(Exception)));
  captureStack(tmp, Exception_init_$Create$);
  return tmp;
}
function Exception_init_$Init$_0(message, $this) {
  extendThrowable($this, message);
  Exception.call($this);
  return $this;
}
function Exception_init_$Create$_0(message) {
  var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
  captureStack(tmp, Exception_init_$Create$_0);
  return tmp;
}
function Exception() {
  captureStack(this, Exception);
}
function IllegalArgumentException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IllegalArgumentException.call($this);
  return $this;
}
function IllegalArgumentException_init_$Create$() {
  var tmp = IllegalArgumentException_init_$Init$(objectCreate(protoOf(IllegalArgumentException)));
  captureStack(tmp, IllegalArgumentException_init_$Create$);
  return tmp;
}
function IllegalArgumentException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  IllegalArgumentException.call($this);
  return $this;
}
function IllegalArgumentException_init_$Create$_0(message) {
  var tmp = IllegalArgumentException_init_$Init$_0(message, objectCreate(protoOf(IllegalArgumentException)));
  captureStack(tmp, IllegalArgumentException_init_$Create$_0);
  return tmp;
}
function IllegalArgumentException() {
  captureStack(this, IllegalArgumentException);
}
function IllegalStateException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IllegalStateException.call($this);
  return $this;
}
function IllegalStateException_init_$Create$() {
  var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
  captureStack(tmp, IllegalStateException_init_$Create$);
  return tmp;
}
function IllegalStateException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  IllegalStateException.call($this);
  return $this;
}
function IllegalStateException_init_$Create$_0(message) {
  var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
  captureStack(tmp, IllegalStateException_init_$Create$_0);
  return tmp;
}
function IllegalStateException() {
  captureStack(this, IllegalStateException);
}
function UnsupportedOperationException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  UnsupportedOperationException.call($this);
  return $this;
}
function UnsupportedOperationException_init_$Create$() {
  var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
  captureStack(tmp, UnsupportedOperationException_init_$Create$);
  return tmp;
}
function UnsupportedOperationException() {
  captureStack(this, UnsupportedOperationException);
}
function RuntimeException_init_$Init$($this) {
  Exception_init_$Init$($this);
  RuntimeException.call($this);
  return $this;
}
function RuntimeException_init_$Create$() {
  var tmp = RuntimeException_init_$Init$(objectCreate(protoOf(RuntimeException)));
  captureStack(tmp, RuntimeException_init_$Create$);
  return tmp;
}
function RuntimeException_init_$Init$_0(message, $this) {
  Exception_init_$Init$_0(message, $this);
  RuntimeException.call($this);
  return $this;
}
function RuntimeException_init_$Create$_0(message) {
  var tmp = RuntimeException_init_$Init$_0(message, objectCreate(protoOf(RuntimeException)));
  captureStack(tmp, RuntimeException_init_$Create$_0);
  return tmp;
}
function RuntimeException() {
  captureStack(this, RuntimeException);
}
function NoSuchElementException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NoSuchElementException.call($this);
  return $this;
}
function NoSuchElementException_init_$Create$() {
  var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
  captureStack(tmp, NoSuchElementException_init_$Create$);
  return tmp;
}
function NoSuchElementException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  NoSuchElementException.call($this);
  return $this;
}
function NoSuchElementException_init_$Create$_0(message) {
  var tmp = NoSuchElementException_init_$Init$_0(message, objectCreate(protoOf(NoSuchElementException)));
  captureStack(tmp, NoSuchElementException_init_$Create$_0);
  return tmp;
}
function NoSuchElementException() {
  captureStack(this, NoSuchElementException);
}
function IndexOutOfBoundsException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IndexOutOfBoundsException.call($this);
  return $this;
}
function IndexOutOfBoundsException_init_$Create$() {
  var tmp = IndexOutOfBoundsException_init_$Init$(objectCreate(protoOf(IndexOutOfBoundsException)));
  captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
  return tmp;
}
function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  IndexOutOfBoundsException.call($this);
  return $this;
}
function IndexOutOfBoundsException_init_$Create$_0(message) {
  var tmp = IndexOutOfBoundsException_init_$Init$_0(message, objectCreate(protoOf(IndexOutOfBoundsException)));
  captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
  return tmp;
}
function IndexOutOfBoundsException() {
  captureStack(this, IndexOutOfBoundsException);
}
function ArithmeticException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ArithmeticException.call($this);
  return $this;
}
function ArithmeticException_init_$Create$() {
  var tmp = ArithmeticException_init_$Init$(objectCreate(protoOf(ArithmeticException)));
  captureStack(tmp, ArithmeticException_init_$Create$);
  return tmp;
}
function ArithmeticException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  ArithmeticException.call($this);
  return $this;
}
function ArithmeticException_init_$Create$_0(message) {
  var tmp = ArithmeticException_init_$Init$_0(message, objectCreate(protoOf(ArithmeticException)));
  captureStack(tmp, ArithmeticException_init_$Create$_0);
  return tmp;
}
function ArithmeticException() {
  captureStack(this, ArithmeticException);
}
function NumberFormatException_init_$Init$($this) {
  IllegalArgumentException_init_$Init$($this);
  NumberFormatException.call($this);
  return $this;
}
function NumberFormatException_init_$Create$() {
  var tmp = NumberFormatException_init_$Init$(objectCreate(protoOf(NumberFormatException)));
  captureStack(tmp, NumberFormatException_init_$Create$);
  return tmp;
}
function NumberFormatException_init_$Init$_0(message, $this) {
  IllegalArgumentException_init_$Init$_0(message, $this);
  NumberFormatException.call($this);
  return $this;
}
function NumberFormatException_init_$Create$_0(message) {
  var tmp = NumberFormatException_init_$Init$_0(message, objectCreate(protoOf(NumberFormatException)));
  captureStack(tmp, NumberFormatException_init_$Create$_0);
  return tmp;
}
function NumberFormatException() {
  captureStack(this, NumberFormatException);
}
function ConcurrentModificationException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ConcurrentModificationException.call($this);
  return $this;
}
function ConcurrentModificationException_init_$Create$() {
  var tmp = ConcurrentModificationException_init_$Init$(objectCreate(protoOf(ConcurrentModificationException)));
  captureStack(tmp, ConcurrentModificationException_init_$Create$);
  return tmp;
}
function ConcurrentModificationException_init_$Init$_0(message, $this) {
  RuntimeException_init_$Init$_0(message, $this);
  ConcurrentModificationException.call($this);
  return $this;
}
function ConcurrentModificationException_init_$Create$_0(message) {
  var tmp = ConcurrentModificationException_init_$Init$_0(message, objectCreate(protoOf(ConcurrentModificationException)));
  captureStack(tmp, ConcurrentModificationException_init_$Create$_0);
  return tmp;
}
function ConcurrentModificationException() {
  captureStack(this, ConcurrentModificationException);
}
function NullPointerException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NullPointerException.call($this);
  return $this;
}
function NullPointerException_init_$Create$() {
  var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
  captureStack(tmp, NullPointerException_init_$Create$);
  return tmp;
}
function NullPointerException() {
  captureStack(this, NullPointerException);
}
function NoWhenBranchMatchedException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NoWhenBranchMatchedException.call($this);
  return $this;
}
function NoWhenBranchMatchedException_init_$Create$() {
  var tmp = NoWhenBranchMatchedException_init_$Init$(objectCreate(protoOf(NoWhenBranchMatchedException)));
  captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
  return tmp;
}
function NoWhenBranchMatchedException() {
  captureStack(this, NoWhenBranchMatchedException);
}
function ClassCastException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ClassCastException.call($this);
  return $this;
}
function ClassCastException_init_$Create$() {
  var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
  captureStack(tmp, ClassCastException_init_$Create$);
  return tmp;
}
function ClassCastException() {
  captureStack(this, ClassCastException);
}
function fillFrom(src, dst) {
  var srcLen = src.length;
  var dstLen = dst.length;
  var index = 0;
  // Inline function 'kotlin.js.unsafeCast' call
  var arr = dst;
  while (index < srcLen && index < dstLen) {
    var tmp = index;
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    arr[tmp] = src[_unary__edvuaz];
  }
  return dst;
}
function arrayCopyResize(source, newSize, defaultValue) {
  // Inline function 'kotlin.js.unsafeCast' call
  var result = source.slice(0, newSize);
  // Inline function 'kotlin.copyArrayType' call
  if (source.$type$ !== undefined) {
    result.$type$ = source.$type$;
  }
  var index = source.length;
  if (newSize > index) {
    // Inline function 'kotlin.js.asDynamic' call
    result.length = newSize;
    while (index < newSize) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      result[_unary__edvuaz] = defaultValue;
    }
  }
  return result;
}
function abs(n) {
  return n < 0 ? -n | 0 | 0 : n;
}
function roundToInt(_this__u8e3s4) {
  var tmp;
  if (isNaN_0(_this__u8e3s4)) {
    throw IllegalArgumentException_init_$Create$_0('Cannot round NaN value.');
  } else if (_this__u8e3s4 > 2147483647) {
    tmp = 2147483647;
  } else if (_this__u8e3s4 < -2147483648) {
    tmp = -2147483648;
  } else {
    tmp = numberToInt(Math.round(_this__u8e3s4));
  }
  return tmp;
}
function reset(_this__u8e3s4) {
  _this__u8e3s4.lastIndex = 0;
}
function StringBuilder_init_$Init$(capacity, $this) {
  StringBuilder_init_$Init$_0($this);
  return $this;
}
function StringBuilder_init_$Create$(capacity) {
  return StringBuilder_init_$Init$(capacity, objectCreate(protoOf(StringBuilder)));
}
function StringBuilder_init_$Init$_0($this) {
  StringBuilder.call($this, '');
  return $this;
}
function StringBuilder_init_$Create$_0() {
  return StringBuilder_init_$Init$_0(objectCreate(protoOf(StringBuilder)));
}
function StringBuilder(content) {
  this.f5_1 = content;
}
protoOf(StringBuilder).a = function () {
  // Inline function 'kotlin.js.asDynamic' call
  return this.f5_1.length;
};
protoOf(StringBuilder).b = function (index) {
  // Inline function 'kotlin.text.getOrElse' call
  var this_0 = this.f5_1;
  var tmp;
  if (0 <= index ? index <= (charSequenceLength(this_0) - 1 | 0) : false) {
    tmp = charSequenceGet(this_0, index);
  } else {
    throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', length: ' + this.a() + '}');
  }
  return tmp;
};
protoOf(StringBuilder).c = function (startIndex, endIndex) {
  // Inline function 'kotlin.text.substring' call
  // Inline function 'kotlin.js.asDynamic' call
  return this.f5_1.substring(startIndex, endIndex);
};
protoOf(StringBuilder).i5 = function (value) {
  this.f5_1 = this.f5_1 + toString(value);
  return this;
};
protoOf(StringBuilder).f = function (value) {
  this.f5_1 = this.f5_1 + toString_0(value);
  return this;
};
protoOf(StringBuilder).n5 = function (value, startIndex, endIndex) {
  return this.o5(value == null ? 'null' : value, startIndex, endIndex);
};
protoOf(StringBuilder).g5 = function (value) {
  this.f5_1 = this.f5_1 + toString_0(value);
  return this;
};
protoOf(StringBuilder).h5 = function (value) {
  var tmp = this;
  var tmp_0 = this.f5_1;
  tmp.f5_1 = tmp_0 + (value == null ? 'null' : value);
  return this;
};
protoOf(StringBuilder).toString = function () {
  return this.f5_1;
};
protoOf(StringBuilder).o5 = function (value, startIndex, endIndex) {
  var stringCsq = toString_1(value);
  Companion_instance_4.p5(startIndex, endIndex, stringCsq.length);
  var tmp = this;
  var tmp_0 = this.f5_1;
  // Inline function 'kotlin.text.substring' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.f5_1 = tmp_0 + stringCsq.substring(startIndex, endIndex);
  return this;
};
function uppercaseChar(_this__u8e3s4) {
  // Inline function 'kotlin.text.uppercase' call
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.js.unsafeCast' call
  var uppercase = toString(_this__u8e3s4).toUpperCase();
  return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
}
function isWhitespace(_this__u8e3s4) {
  return isWhitespaceImpl(_this__u8e3s4);
}
function checkRadix(radix) {
  if (!(2 <= radix ? radix <= 36 : false)) {
    throw IllegalArgumentException_init_$Create$_0('radix ' + radix + ' was not in valid range 2..36');
  }
  return radix;
}
function toDoubleOrNull(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.takeIf' call
  var this_0 = +_this__u8e3s4;
  var tmp;
  // Inline function 'kotlin.text.toDoubleOrNull.<anonymous>' call
  if (!(isNaN_0(this_0) && !isNaN_1(_this__u8e3s4) || (this_0 === 0.0 && isBlank(_this__u8e3s4)))) {
    tmp = this_0;
  } else {
    tmp = null;
  }
  return tmp;
}
function toLong_0(_this__u8e3s4) {
  var tmp0_elvis_lhs = toLongOrNull(_this__u8e3s4);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    numberFormatError(_this__u8e3s4);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function toInt(_this__u8e3s4) {
  var tmp0_elvis_lhs = toIntOrNull(_this__u8e3s4);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    numberFormatError(_this__u8e3s4);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function toDouble(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.also' call
  var this_0 = +_this__u8e3s4;
  // Inline function 'kotlin.text.toDouble.<anonymous>' call
  if (isNaN_0(this_0) && !isNaN_1(_this__u8e3s4) || (this_0 === 0.0 && isBlank(_this__u8e3s4))) {
    numberFormatError(_this__u8e3s4);
  }
  return this_0;
}
function toBoolean(_this__u8e3s4) {
  var tmp;
  if (!(_this__u8e3s4 == null)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.toLowerCase() === 'true';
  } else {
    tmp = false;
  }
  return tmp;
}
function digitOf(char, radix) {
  // Inline function 'kotlin.let' call
  // Inline function 'kotlin.text.digitOf.<anonymous>' call
  var it = Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
  return it >= radix ? -1 : it;
}
function isNaN_1(_this__u8e3s4) {
  // Inline function 'kotlin.text.lowercase' call
  // Inline function 'kotlin.js.asDynamic' call
  switch (_this__u8e3s4.toLowerCase()) {
    case 'nan':
    case '+nan':
    case '-nan':
      return true;
    default:
      return false;
  }
}
function Regex_init_$Init$(pattern, $this) {
  Regex.call($this, pattern, emptySet());
  return $this;
}
function Regex_init_$Create$(pattern) {
  return Regex_init_$Init$(pattern, objectCreate(protoOf(Regex)));
}
function Companion_3() {
  Companion_instance_3 = this;
  this.q5_1 = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
  this.r5_1 = new RegExp('[\\\\$]', 'g');
  this.s5_1 = new RegExp('\\$', 'g');
}
protoOf(Companion_3).t5 = function (literal) {
  // Inline function 'kotlin.text.nativeReplace' call
  var pattern = this.q5_1;
  // Inline function 'kotlin.js.asDynamic' call
  return literal.replace(pattern, '\\$&');
};
protoOf(Companion_3).u5 = function (literal) {
  // Inline function 'kotlin.text.nativeReplace' call
  var pattern = this.s5_1;
  // Inline function 'kotlin.js.asDynamic' call
  return literal.replace(pattern, '$$$$');
};
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 == null)
    new Companion_3();
  return Companion_instance_3;
}
function Regex(pattern, options) {
  Companion_getInstance_3();
  this.v5_1 = pattern;
  this.w5_1 = toSet_0(options);
  this.x5_1 = new RegExp(pattern, toFlags(options, 'gu'));
  this.y5_1 = null;
  this.z5_1 = null;
}
protoOf(Regex).a6 = function (input) {
  reset(this.x5_1);
  var match = this.x5_1.exec(toString_1(input));
  return !(match == null) && match.index === 0 && this.x5_1.lastIndex === charSequenceLength(input);
};
protoOf(Regex).b6 = function (input, startIndex) {
  if (startIndex < 0 || startIndex > charSequenceLength(input)) {
    throw IndexOutOfBoundsException_init_$Create$_0('Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
  }
  return findNext(this.x5_1, toString_1(input), startIndex, this.x5_1);
};
protoOf(Regex).c6 = function (input, startIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  return $super === VOID ? this.b6(input, startIndex) : $super.b6.call(this, input, startIndex);
};
protoOf(Regex).d6 = function (input, transform) {
  var match = this.c6(input);
  if (match == null)
    return toString_1(input);
  var lastStart = 0;
  var length = charSequenceLength(input);
  var sb = StringBuilder_init_$Create$(length);
  do {
    var foundMatch = ensureNotNull(match);
    sb.n5(input, lastStart, foundMatch.e6().i6());
    sb.f(transform(foundMatch));
    lastStart = foundMatch.e6().j6() + 1 | 0;
    match = foundMatch.i();
  }
   while (lastStart < length && !(match == null));
  if (lastStart < length) {
    sb.n5(input, lastStart, length);
  }
  return sb.toString();
};
protoOf(Regex).toString = function () {
  return this.x5_1.toString();
};
function toFlags(_this__u8e3s4, prepend) {
  return joinToString_0(_this__u8e3s4, '', prepend, VOID, VOID, VOID, toFlags$lambda);
}
function findNext(_this__u8e3s4, input, from, nextPattern) {
  _this__u8e3s4.lastIndex = from;
  var match = _this__u8e3s4.exec(input);
  if (match == null)
    return null;
  var range = numberRangeToNumber(match.index, _this__u8e3s4.lastIndex - 1 | 0);
  return new findNext$1(range, match, nextPattern, input);
}
function MatchGroup(value) {
  this.k6_1 = value;
}
protoOf(MatchGroup).toString = function () {
  return 'MatchGroup(value=' + this.k6_1 + ')';
};
protoOf(MatchGroup).hashCode = function () {
  return getStringHashCode(this.k6_1);
};
protoOf(MatchGroup).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof MatchGroup))
    return false;
  var tmp0_other_with_cast = other instanceof MatchGroup ? other : THROW_CCE();
  if (!(this.k6_1 === tmp0_other_with_cast.k6_1))
    return false;
  return true;
};
function toFlags$lambda(it) {
  return it.n6_1;
}
function findNext$o$groups$o$iterator$lambda(this$0) {
  return function (it) {
    return this$0.j(it);
  };
}
function advanceToNextCharacter($this, index) {
  if (index < get_lastIndex_1($this.w6_1)) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var code1 = $this.w6_1.charCodeAt(index);
    if (55296 <= code1 ? code1 <= 56319 : false) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var code2 = $this.w6_1.charCodeAt(index + 1 | 0);
      if (56320 <= code2 ? code2 <= 57343 : false) {
        return index + 2 | 0;
      }
    }
  }
  return index + 1 | 0;
}
function findNext$1$groups$1($match, this$0) {
  this.o6_1 = $match;
  this.p6_1 = this$0;
  AbstractCollection.call(this);
}
protoOf(findNext$1$groups$1).l = function () {
  return this.o6_1.length;
};
protoOf(findNext$1$groups$1).g = function () {
  var tmp = asSequence(get_indices(this));
  return map(tmp, findNext$o$groups$o$iterator$lambda(this)).g();
};
protoOf(findNext$1$groups$1).j = function (index) {
  // Inline function 'kotlin.js.get' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp0_safe_receiver = this.o6_1[index];
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.text.<no name provided>.get.<anonymous>' call
    tmp = new MatchGroup(tmp0_safe_receiver);
  }
  return tmp;
};
function findNext$1$groupValues$1($match) {
  this.x6_1 = $match;
  AbstractList.call(this);
}
protoOf(findNext$1$groupValues$1).l = function () {
  return this.x6_1.length;
};
protoOf(findNext$1$groupValues$1).j = function (index) {
  // Inline function 'kotlin.js.get' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp0_elvis_lhs = this.x6_1[index];
  return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
};
function findNext$1($range, $match, $nextPattern, $input) {
  this.t6_1 = $range;
  this.u6_1 = $match;
  this.v6_1 = $nextPattern;
  this.w6_1 = $input;
  this.q6_1 = $range;
  var tmp = this;
  tmp.r6_1 = new findNext$1$groups$1($match, this);
  this.s6_1 = null;
}
protoOf(findNext$1).e6 = function () {
  return this.q6_1;
};
protoOf(findNext$1).y6 = function () {
  if (this.s6_1 == null) {
    var tmp = this;
    tmp.s6_1 = new findNext$1$groupValues$1(this.u6_1);
  }
  return ensureNotNull(this.s6_1);
};
protoOf(findNext$1).i = function () {
  return findNext(this.v6_1, this.w6_1, this.t6_1.k() ? advanceToNextCharacter(this, this.t6_1.i6()) : this.t6_1.j6() + 1 | 0, this.v6_1);
};
function startsWith(_this__u8e3s4, prefix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (!ignoreCase) {
    // Inline function 'kotlin.text.nativeStartsWith' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.startsWith(prefix, 0);
  } else
    return regionMatches(_this__u8e3s4, 0, prefix, 0, prefix.length, ignoreCase);
}
function replace(_this__u8e3s4, oldValue, newValue, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp1 = new RegExp(Companion_getInstance_3().t5(oldValue), ignoreCase ? 'gui' : 'gu');
  // Inline function 'kotlin.text.nativeReplace' call
  var replacement = Companion_getInstance_3().u5(newValue);
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4.replace(tmp1, replacement);
}
function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
}
function AbstractCollection$toString$lambda(this$0) {
  return function (it) {
    return it === this$0 ? '(this Collection)' : toString_0(it);
  };
}
function AbstractCollection() {
}
protoOf(AbstractCollection).z = function (element) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(this, Collection)) {
      tmp = this.k();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = this.g();
    while (_iterator__ex2g4s.h()) {
      var element_0 = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
      if (equals(element_0, element)) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
};
protoOf(AbstractCollection).a1 = function (elements) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(elements, Collection)) {
      tmp = elements.k();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
      if (!this.z(element)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
};
protoOf(AbstractCollection).k = function () {
  return this.l() === 0;
};
protoOf(AbstractCollection).toString = function () {
  return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
};
protoOf(AbstractCollection).toArray = function () {
  return collectionToArray(this);
};
function IteratorImpl_0($outer) {
  this.a7_1 = $outer;
  this.z6_1 = 0;
}
protoOf(IteratorImpl_0).h = function () {
  return this.z6_1 < this.a7_1.l();
};
protoOf(IteratorImpl_0).i = function () {
  if (!this.h())
    throw NoSuchElementException_init_$Create$();
  var _unary__edvuaz = this.z6_1;
  this.z6_1 = _unary__edvuaz + 1 | 0;
  return this.a7_1.j(_unary__edvuaz);
};
function ListIteratorImpl_0($outer, index) {
  this.d7_1 = $outer;
  IteratorImpl_0.call(this, $outer);
  Companion_instance_4.k2(index, this.d7_1.l());
  this.z6_1 = index;
}
protoOf(ListIteratorImpl_0).l2 = function () {
  return this.z6_1 > 0;
};
protoOf(ListIteratorImpl_0).m2 = function () {
  if (!this.l2())
    throw NoSuchElementException_init_$Create$();
  this.z6_1 = this.z6_1 - 1 | 0;
  return this.d7_1.j(this.z6_1);
};
function Companion_4() {
  this.j2_1 = 2147483639;
}
protoOf(Companion_4).e3 = function (index, size) {
  if (index < 0 || index >= size) {
    throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
  }
};
protoOf(Companion_4).k2 = function (index, size) {
  if (index < 0 || index > size) {
    throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
  }
};
protoOf(Companion_4).p5 = function (startIndex, endIndex, size) {
  if (startIndex < 0 || endIndex > size) {
    throw IndexOutOfBoundsException_init_$Create$_0('startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size);
  }
  if (startIndex > endIndex) {
    throw IllegalArgumentException_init_$Create$_0('startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
  }
};
protoOf(Companion_4).k4 = function (oldCapacity, minCapacity) {
  var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
  if ((newCapacity - minCapacity | 0) < 0)
    newCapacity = minCapacity;
  if ((newCapacity - 2147483639 | 0) > 0)
    newCapacity = minCapacity > 2147483639 ? 2147483647 : 2147483639;
  return newCapacity;
};
protoOf(Companion_4).s2 = function (c) {
  var hashCode_0 = 1;
  var _iterator__ex2g4s = c.g();
  while (_iterator__ex2g4s.h()) {
    var e = _iterator__ex2g4s.i();
    var tmp = imul_0(31, hashCode_0);
    var tmp1_elvis_lhs = e == null ? null : hashCode(e);
    hashCode_0 = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  }
  return hashCode_0;
};
protoOf(Companion_4).r2 = function (c, other) {
  if (!(c.l() === other.l()))
    return false;
  var otherIterator = other.g();
  var _iterator__ex2g4s = c.g();
  while (_iterator__ex2g4s.h()) {
    var elem = _iterator__ex2g4s.i();
    var elemOther = otherIterator.i();
    if (!equals(elem, elemOther)) {
      return false;
    }
  }
  return true;
};
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
function AbstractList() {
  AbstractCollection.call(this);
}
protoOf(AbstractList).g = function () {
  return new IteratorImpl_0(this);
};
protoOf(AbstractList).t = function (index) {
  return new ListIteratorImpl_0(this, index);
};
protoOf(AbstractList).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtList) : false))
    return false;
  return Companion_instance_4.r2(this, other);
};
protoOf(AbstractList).hashCode = function () {
  return Companion_instance_4.s2(this);
};
function toString_2($this, entry) {
  return toString_3($this, entry.b1()) + '=' + toString_3($this, entry.c1());
}
function toString_3($this, o) {
  return o === $this ? '(this Map)' : toString_0(o);
}
function implFindEntry($this, key) {
  var tmp0 = $this.f1();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.AbstractMap.implFindEntry.<anonymous>' call
      if (equals(element.b1(), key)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return tmp$ret$1;
}
function Companion_5() {
}
var Companion_instance_5;
function Companion_getInstance_5() {
  return Companion_instance_5;
}
function AbstractMap$toString$lambda(this$0) {
  return function (it) {
    return toString_2(this$0, it);
  };
}
function AbstractMap() {
  this.y2_1 = null;
  this.z2_1 = null;
}
protoOf(AbstractMap).d1 = function (key) {
  return !(implFindEntry(this, key) == null);
};
protoOf(AbstractMap).a3 = function (entry) {
  if (!(!(entry == null) ? isInterface(entry, Entry) : false))
    return false;
  var key = entry.b1();
  var value = entry.c1();
  // Inline function 'kotlin.collections.get' call
  var ourValue = (isInterface(this, KtMap) ? this : THROW_CCE()).e1(key);
  if (!equals(value, ourValue)) {
    return false;
  }
  var tmp;
  if (ourValue == null) {
    // Inline function 'kotlin.collections.containsKey' call
    tmp = !(isInterface(this, KtMap) ? this : THROW_CCE()).d1(key);
  } else {
    tmp = false;
  }
  if (tmp) {
    return false;
  }
  return true;
};
protoOf(AbstractMap).equals = function (other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, KtMap) : false))
    return false;
  if (!(this.l() === other.l()))
    return false;
  var tmp0 = other.f1();
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.all' call
    var tmp;
    if (isInterface(tmp0, Collection)) {
      tmp = tmp0.k();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.AbstractMap.equals.<anonymous>' call
      if (!this.a3(element)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
};
protoOf(AbstractMap).e1 = function (key) {
  var tmp0_safe_receiver = implFindEntry(this, key);
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1();
};
protoOf(AbstractMap).hashCode = function () {
  return hashCode(this.f1());
};
protoOf(AbstractMap).k = function () {
  return this.l() === 0;
};
protoOf(AbstractMap).l = function () {
  return this.f1().l();
};
protoOf(AbstractMap).toString = function () {
  var tmp = this.f1();
  return joinToString_0(tmp, ', ', '{', '}', VOID, VOID, AbstractMap$toString$lambda(this));
};
function Companion_6() {
}
protoOf(Companion_6).c3 = function (c) {
  var hashCode_0 = 0;
  var _iterator__ex2g4s = c.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    var tmp = hashCode_0;
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    hashCode_0 = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  }
  return hashCode_0;
};
protoOf(Companion_6).b3 = function (c, other) {
  if (!(c.l() === other.l()))
    return false;
  return c.a1(other);
};
var Companion_instance_6;
function Companion_getInstance_6() {
  return Companion_instance_6;
}
function collectionToArrayCommonImpl(collection) {
  if (collection.k()) {
    // Inline function 'kotlin.emptyArray' call
    return [];
  }
  // Inline function 'kotlin.arrayOfNulls' call
  var size = collection.l();
  var destination = fillArrayVal(Array(size), null);
  var iterator = collection.g();
  var index = 0;
  while (iterator.h()) {
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    destination[_unary__edvuaz] = iterator.i();
  }
  return destination;
}
function listOfNotNull(elements) {
  return filterNotNull(elements);
}
function listOf_0(elements) {
  return elements.length > 0 ? asList(elements) : emptyList();
}
function emptyList() {
  return EmptyList_getInstance();
}
function mutableListOf(elements) {
  return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
}
function get_indices(_this__u8e3s4) {
  return numberRangeToNumber(0, _this__u8e3s4.l() - 1 | 0);
}
function optimizeReadOnlyList(_this__u8e3s4) {
  switch (_this__u8e3s4.l()) {
    case 0:
      return emptyList();
    case 1:
      return listOf(_this__u8e3s4.j(0));
    default:
      return _this__u8e3s4;
  }
}
function get_lastIndex_0(_this__u8e3s4) {
  return _this__u8e3s4.l() - 1 | 0;
}
function EmptyList() {
  EmptyList_instance = this;
  this.e7_1 = new Long(-1478467534, -1720727600);
}
protoOf(EmptyList).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, KtList) : false) {
    tmp = other.k();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EmptyList).hashCode = function () {
  return 1;
};
protoOf(EmptyList).toString = function () {
  return '[]';
};
protoOf(EmptyList).l = function () {
  return 0;
};
protoOf(EmptyList).k = function () {
  return true;
};
protoOf(EmptyList).f7 = function (element) {
  return false;
};
protoOf(EmptyList).z = function (element) {
  if (!false)
    return false;
  var tmp;
  if (false) {
    tmp = element;
  } else {
    tmp = THROW_CCE();
  }
  return this.f7(tmp);
};
protoOf(EmptyList).j = function (index) {
  throw IndexOutOfBoundsException_init_$Create$_0("Empty list doesn't contain element at index " + index + '.');
};
protoOf(EmptyList).g = function () {
  return EmptyIterator_instance;
};
protoOf(EmptyList).t = function (index) {
  if (!(index === 0))
    throw IndexOutOfBoundsException_init_$Create$_0('Index: ' + index);
  return EmptyIterator_instance;
};
var EmptyList_instance;
function EmptyList_getInstance() {
  if (EmptyList_instance == null)
    new EmptyList();
  return EmptyList_instance;
}
function ArrayAsCollection(values, isVarargs) {
  this.g7_1 = values;
  this.h7_1 = isVarargs;
}
protoOf(ArrayAsCollection).l = function () {
  return this.g7_1.length;
};
protoOf(ArrayAsCollection).k = function () {
  // Inline function 'kotlin.collections.isEmpty' call
  return this.g7_1.length === 0;
};
protoOf(ArrayAsCollection).g = function () {
  return arrayIterator(this.g7_1);
};
function EmptyIterator() {
}
protoOf(EmptyIterator).h = function () {
  return false;
};
protoOf(EmptyIterator).l2 = function () {
  return false;
};
protoOf(EmptyIterator).i = function () {
  throw NoSuchElementException_init_$Create$();
};
protoOf(EmptyIterator).m2 = function () {
  throw NoSuchElementException_init_$Create$();
};
var EmptyIterator_instance;
function EmptyIterator_getInstance() {
  return EmptyIterator_instance;
}
function arrayListOf(elements) {
  return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
}
function throwCountOverflow() {
  throw ArithmeticException_init_$Create$_0('Count overflow has happened.');
}
function throwIndexOverflow() {
  throw ArithmeticException_init_$Create$_0('Index overflow has happened.');
}
function collectionSizeOrDefault(_this__u8e3s4, default_0) {
  var tmp;
  if (isInterface(_this__u8e3s4, Collection)) {
    tmp = _this__u8e3s4.l();
  } else {
    tmp = default_0;
  }
  return tmp;
}
function getOrImplicitDefault(_this__u8e3s4, key) {
  if (isInterface(_this__u8e3s4, MapWithDefault))
    return _this__u8e3s4.i7(key);
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.getOrElseNullable' call
    var value = _this__u8e3s4.e1(key);
    if (value == null && !_this__u8e3s4.d1(key)) {
      throw NoSuchElementException_init_$Create$_0('Key ' + toString_0(key) + ' is missing in the map.');
    } else {
      tmp$ret$0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      break $l$block;
    }
  }
  return tmp$ret$0;
}
function MapWithDefault() {
}
function getValue(_this__u8e3s4, key) {
  return getOrImplicitDefault(_this__u8e3s4, key);
}
function mapOf_0(pairs) {
  return pairs.length > 0 ? toMap_0(pairs, LinkedHashMap_init_$Create$_0(mapCapacity(pairs.length))) : emptyMap();
}
function emptyMap() {
  var tmp = EmptyMap_getInstance();
  return isInterface(tmp, KtMap) ? tmp : THROW_CCE();
}
function plus_2(_this__u8e3s4, pair) {
  var tmp;
  if (_this__u8e3s4.k()) {
    tmp = mapOf(pair);
  } else {
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_1(_this__u8e3s4);
    // Inline function 'kotlin.collections.plus.<anonymous>' call
    this_0.x2(pair.j7_1, pair.k7_1);
    tmp = this_0;
  }
  return tmp;
}
function toMap(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    var tmp;
    switch (_this__u8e3s4.l()) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        var tmp_0;
        if (isInterface(_this__u8e3s4, KtList)) {
          tmp_0 = _this__u8e3s4.j(0);
        } else {
          tmp_0 = _this__u8e3s4.g().i();
        }

        tmp = mapOf(tmp_0);
        break;
      default:
        tmp = toMap_1(_this__u8e3s4, LinkedHashMap_init_$Create$_0(mapCapacity(_this__u8e3s4.l())));
        break;
    }
    return tmp;
  }
  return optimizeReadOnlyMap(toMap_1(_this__u8e3s4, LinkedHashMap_init_$Create$()));
}
function toMutableMap(_this__u8e3s4) {
  return LinkedHashMap_init_$Create$_1(_this__u8e3s4);
}
function toMap_0(_this__u8e3s4, destination) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.collections.toMap.<anonymous>' call
  putAll(destination, _this__u8e3s4);
  return destination;
}
function EmptyMap() {
  EmptyMap_instance = this;
  this.l7_1 = new Long(-888910638, 1920087921);
}
protoOf(EmptyMap).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, KtMap) : false) {
    tmp = other.k();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EmptyMap).hashCode = function () {
  return 0;
};
protoOf(EmptyMap).toString = function () {
  return '{}';
};
protoOf(EmptyMap).l = function () {
  return 0;
};
protoOf(EmptyMap).k = function () {
  return true;
};
protoOf(EmptyMap).m7 = function (key) {
  return false;
};
protoOf(EmptyMap).d1 = function (key) {
  if (!(key == null ? true : !(key == null)))
    return false;
  return this.m7((key == null ? true : !(key == null)) ? key : THROW_CCE());
};
protoOf(EmptyMap).n7 = function (key) {
  return null;
};
protoOf(EmptyMap).e1 = function (key) {
  if (!(key == null ? true : !(key == null)))
    return null;
  return this.n7((key == null ? true : !(key == null)) ? key : THROW_CCE());
};
protoOf(EmptyMap).f1 = function () {
  return EmptySet_getInstance();
};
var EmptyMap_instance;
function EmptyMap_getInstance() {
  if (EmptyMap_instance == null)
    new EmptyMap();
  return EmptyMap_instance;
}
function toMap_1(_this__u8e3s4, destination) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.collections.toMap.<anonymous>' call
  putAll_0(destination, _this__u8e3s4);
  return destination;
}
function optimizeReadOnlyMap(_this__u8e3s4) {
  var tmp;
  switch (_this__u8e3s4.l()) {
    case 0:
      tmp = emptyMap();
      break;
    case 1:
      // Inline function 'kotlin.collections.toSingletonMapOrSelf' call

      tmp = _this__u8e3s4;
      break;
    default:
      tmp = _this__u8e3s4;
      break;
  }
  return tmp;
}
function putAll(_this__u8e3s4, pairs) {
  var inductionVariable = 0;
  var last = pairs.length;
  while (inductionVariable < last) {
    var _destruct__k2r9zo = pairs[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var key = _destruct__k2r9zo.o7();
    var value = _destruct__k2r9zo.p7();
    _this__u8e3s4.x2(key, value);
  }
}
function putAll_0(_this__u8e3s4, pairs) {
  var _iterator__ex2g4s = pairs.g();
  while (_iterator__ex2g4s.h()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.i();
    var key = _destruct__k2r9zo.o7();
    var value = _destruct__k2r9zo.p7();
    _this__u8e3s4.x2(key, value);
  }
}
function hashMapOf(pairs) {
  // Inline function 'kotlin.apply' call
  var this_0 = HashMap_init_$Create$_0(mapCapacity(pairs.length));
  // Inline function 'kotlin.collections.hashMapOf.<anonymous>' call
  putAll(this_0, pairs);
  return this_0;
}
function addAll(_this__u8e3s4, elements) {
  if (isInterface(elements, Collection))
    return _this__u8e3s4.p(elements);
  else {
    var result = false;
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      if (_this__u8e3s4.e(item))
        result = true;
    }
    return result;
  }
}
function IntIterator() {
}
protoOf(IntIterator).i = function () {
  return this.q7();
};
function TransformingSequence$iterator$1(this$0) {
  this.s7_1 = this$0;
  this.r7_1 = this$0.t7_1.g();
}
protoOf(TransformingSequence$iterator$1).i = function () {
  return this.s7_1.u7_1(this.r7_1.i());
};
protoOf(TransformingSequence$iterator$1).h = function () {
  return this.r7_1.h();
};
function TransformingSequence(sequence, transformer) {
  this.t7_1 = sequence;
  this.u7_1 = transformer;
}
protoOf(TransformingSequence).g = function () {
  return new TransformingSequence$iterator$1(this);
};
function emptySet() {
  return EmptySet_getInstance();
}
function setOf_0(elements) {
  return toSet(elements);
}
function optimizeReadOnlySet(_this__u8e3s4) {
  switch (_this__u8e3s4.l()) {
    case 0:
      return emptySet();
    case 1:
      return setOf(_this__u8e3s4.g().i());
    default:
      return _this__u8e3s4;
  }
}
function EmptySet() {
  EmptySet_instance = this;
  this.v7_1 = new Long(1993859828, 793161749);
}
protoOf(EmptySet).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, KtSet) : false) {
    tmp = other.k();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EmptySet).hashCode = function () {
  return 0;
};
protoOf(EmptySet).toString = function () {
  return '[]';
};
protoOf(EmptySet).l = function () {
  return 0;
};
protoOf(EmptySet).k = function () {
  return true;
};
protoOf(EmptySet).f7 = function (element) {
  return false;
};
protoOf(EmptySet).z = function (element) {
  if (!false)
    return false;
  var tmp;
  if (false) {
    tmp = element;
  } else {
    tmp = THROW_CCE();
  }
  return this.f7(tmp);
};
protoOf(EmptySet).w7 = function (elements) {
  return elements.k();
};
protoOf(EmptySet).a1 = function (elements) {
  return this.w7(elements);
};
protoOf(EmptySet).g = function () {
  return EmptyIterator_instance;
};
var EmptySet_instance;
function EmptySet_getInstance() {
  if (EmptySet_instance == null)
    new EmptySet();
  return EmptySet_instance;
}
function hashSetOf(elements) {
  return toCollection(elements, HashSet_init_$Create$_0(mapCapacity(elements.length)));
}
function compareBy(selectors) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(selectors.length > 0)) {
    // Inline function 'kotlin.require.<anonymous>' call
    var message = 'Failed requirement.';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  var tmp = compareBy$lambda(selectors);
  return new sam$kotlin_Comparator$0(tmp);
}
function naturalOrder() {
  var tmp = NaturalOrderComparator_instance;
  return isInterface(tmp, Comparator) ? tmp : THROW_CCE();
}
function compareValuesByImpl(a, b, selectors) {
  var inductionVariable = 0;
  var last = selectors.length;
  while (inductionVariable < last) {
    var fn = selectors[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var v1 = fn(a);
    var v2 = fn(b);
    var diff = compareValues(v1, v2);
    if (!(diff === 0))
      return diff;
  }
  return 0;
}
function NaturalOrderComparator() {
}
protoOf(NaturalOrderComparator).x7 = function (a, b) {
  return compareTo(a, b);
};
protoOf(NaturalOrderComparator).compare = function (a, b) {
  var tmp = (!(a == null) ? isComparable(a) : false) ? a : THROW_CCE();
  return this.x7(tmp, (!(b == null) ? isComparable(b) : false) ? b : THROW_CCE());
};
var NaturalOrderComparator_instance;
function NaturalOrderComparator_getInstance() {
  return NaturalOrderComparator_instance;
}
function compareValues(a, b) {
  if (a === b)
    return 0;
  if (a == null)
    return -1;
  if (b == null)
    return 1;
  return compareTo((!(a == null) ? isComparable(a) : false) ? a : THROW_CCE(), b);
}
function sam$kotlin_Comparator$0(function_0) {
  this.y7_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).z7 = function (a, b) {
  return this.y7_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
  return this.z7(a, b);
};
protoOf(sam$kotlin_Comparator$0).w1 = function () {
  return this.y7_1;
};
protoOf(sam$kotlin_Comparator$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.w1(), other.w1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0).hashCode = function () {
  return hashCode(this.w1());
};
function compareBy$lambda($selectors) {
  return function (a, b) {
    return compareValuesByImpl(a, b, $selectors);
  };
}
function enumEntries(entries) {
  return new EnumEntriesList(entries);
}
function EnumEntriesList(entries) {
  AbstractList.call(this);
  this.a8_1 = entries;
}
protoOf(EnumEntriesList).l = function () {
  return this.a8_1.length;
};
protoOf(EnumEntriesList).j = function (index) {
  Companion_instance_4.e3(index, this.a8_1.length);
  return this.a8_1[index];
};
protoOf(EnumEntriesList).b8 = function (element) {
  if (element === null)
    return false;
  var target = getOrNull(this.a8_1, element.h1_1);
  return target === element;
};
protoOf(EnumEntriesList).z = function (element) {
  if (!(element instanceof Enum))
    return false;
  return this.b8(element instanceof Enum ? element : THROW_CCE());
};
function getProgressionLastElement(start, end, step) {
  var tmp;
  if (step > 0) {
    tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
  } else if (step < 0) {
    tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
  } else {
    throw IllegalArgumentException_init_$Create$_0('Step is zero.');
  }
  return tmp;
}
function differenceModulo(a, b, c) {
  return mod(mod(a, c) - mod(b, c) | 0, c);
}
function mod(a, b) {
  var mod = a % b | 0;
  return mod >= 0 ? mod : mod + b | 0;
}
function Companion_7() {
  Companion_instance_7 = this;
  this.v_1 = new IntRange(1, 0);
}
var Companion_instance_7;
function Companion_getInstance_7() {
  if (Companion_instance_7 == null)
    new Companion_7();
  return Companion_instance_7;
}
function IntRange(start, endInclusive) {
  Companion_getInstance_7();
  IntProgression.call(this, start, endInclusive, 1);
}
protoOf(IntRange).i6 = function () {
  return this.c8_1;
};
protoOf(IntRange).j6 = function () {
  return this.d8_1;
};
protoOf(IntRange).k = function () {
  return this.c8_1 > this.d8_1;
};
protoOf(IntRange).equals = function (other) {
  var tmp;
  if (other instanceof IntRange) {
    tmp = this.k() && other.k() || (this.c8_1 === other.c8_1 && this.d8_1 === other.d8_1);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(IntRange).hashCode = function () {
  return this.k() ? -1 : imul_0(31, this.c8_1) + this.d8_1 | 0;
};
protoOf(IntRange).toString = function () {
  return '' + this.c8_1 + '..' + this.d8_1;
};
function IntProgressionIterator(first, last, step) {
  IntIterator.call(this);
  this.f8_1 = step;
  this.g8_1 = last;
  this.h8_1 = this.f8_1 > 0 ? first <= last : first >= last;
  this.i8_1 = this.h8_1 ? first : this.g8_1;
}
protoOf(IntProgressionIterator).h = function () {
  return this.h8_1;
};
protoOf(IntProgressionIterator).q7 = function () {
  var value = this.i8_1;
  if (value === this.g8_1) {
    if (!this.h8_1)
      throw NoSuchElementException_init_$Create$();
    this.h8_1 = false;
  } else {
    this.i8_1 = this.i8_1 + this.f8_1 | 0;
  }
  return value;
};
function Companion_8() {
}
protoOf(Companion_8).w = function (rangeStart, rangeEnd, step) {
  return new IntProgression(rangeStart, rangeEnd, step);
};
var Companion_instance_8;
function Companion_getInstance_8() {
  return Companion_instance_8;
}
function IntProgression(start, endInclusive, step) {
  if (step === 0)
    throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
  if (step === -2147483648)
    throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
  this.c8_1 = start;
  this.d8_1 = getProgressionLastElement(start, endInclusive, step);
  this.e8_1 = step;
}
protoOf(IntProgression).g = function () {
  return new IntProgressionIterator(this.c8_1, this.d8_1, this.e8_1);
};
protoOf(IntProgression).k = function () {
  return this.e8_1 > 0 ? this.c8_1 > this.d8_1 : this.c8_1 < this.d8_1;
};
protoOf(IntProgression).equals = function (other) {
  var tmp;
  if (other instanceof IntProgression) {
    tmp = this.k() && other.k() || (this.c8_1 === other.c8_1 && this.d8_1 === other.d8_1 && this.e8_1 === other.e8_1);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(IntProgression).hashCode = function () {
  return this.k() ? -1 : imul_0(31, imul_0(31, this.c8_1) + this.d8_1 | 0) + this.e8_1 | 0;
};
protoOf(IntProgression).toString = function () {
  return this.e8_1 > 0 ? '' + this.c8_1 + '..' + this.d8_1 + ' step ' + this.e8_1 : '' + this.c8_1 + ' downTo ' + this.d8_1 + ' step ' + (-this.e8_1 | 0);
};
function appendElement(_this__u8e3s4, element, transform) {
  if (!(transform == null))
    _this__u8e3s4.f(transform(element));
  else {
    if (element == null ? true : isCharSequence(element))
      _this__u8e3s4.f(element);
    else {
      if (element instanceof Char)
        _this__u8e3s4.i5(element.j8_1);
      else {
        _this__u8e3s4.f(toString_1(element));
      }
    }
  }
}
function equals_0(_this__u8e3s4, other, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (_this__u8e3s4 === other)
    return true;
  if (!ignoreCase)
    return false;
  var thisUpper = uppercaseChar(_this__u8e3s4);
  var otherUpper = uppercaseChar(other);
  var tmp;
  if (thisUpper === otherUpper) {
    tmp = true;
  } else {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2 = toString(thisUpper).toLowerCase();
    var tmp_0 = charSequenceGet(tmp$ret$2, 0);
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6 = toString(otherUpper).toLowerCase();
    tmp = tmp_0 === charSequenceGet(tmp$ret$6, 0);
  }
  return tmp;
}
function toIntOrNull(_this__u8e3s4) {
  return toIntOrNull_0(_this__u8e3s4, 10);
}
function toLongOrNull(_this__u8e3s4) {
  return toLongOrNull_0(_this__u8e3s4, 10);
}
function toIntOrNull_0(_this__u8e3s4, radix) {
  checkRadix(radix);
  var length = _this__u8e3s4.length;
  if (length === 0)
    return null;
  var start;
  var isNegative;
  var limit;
  var firstChar = charSequenceGet(_this__u8e3s4, 0);
  if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
    if (length === 1)
      return null;
    start = 1;
    if (firstChar === _Char___init__impl__6a9atx(45)) {
      isNegative = true;
      limit = -2147483648;
    } else if (firstChar === _Char___init__impl__6a9atx(43)) {
      isNegative = false;
      limit = -2147483647;
    } else
      return null;
  } else {
    start = 0;
    isNegative = false;
    limit = -2147483647;
  }
  var limitForMaxRadix = -59652323;
  var limitBeforeMul = limitForMaxRadix;
  var result = 0;
  var inductionVariable = start;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var digit = digitOf(charSequenceGet(_this__u8e3s4, i), radix);
      if (digit < 0)
        return null;
      if (result < limitBeforeMul) {
        if (limitBeforeMul === limitForMaxRadix) {
          limitBeforeMul = limit / radix | 0;
          if (result < limitBeforeMul) {
            return null;
          }
        } else {
          return null;
        }
      }
      result = imul_0(result, radix);
      if (result < (limit + digit | 0))
        return null;
      result = result - digit | 0;
    }
     while (inductionVariable < length);
  return isNegative ? result : -result | 0;
}
function toLongOrNull_0(_this__u8e3s4, radix) {
  checkRadix(radix);
  var length = _this__u8e3s4.length;
  if (length === 0)
    return null;
  var start;
  var isNegative;
  var limit;
  var firstChar = charSequenceGet(_this__u8e3s4, 0);
  if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
    if (length === 1)
      return null;
    start = 1;
    if (firstChar === _Char___init__impl__6a9atx(45)) {
      isNegative = true;
      limit = new Long(0, -2147483648);
    } else if (firstChar === _Char___init__impl__6a9atx(43)) {
      isNegative = false;
      limit = new Long(1, -2147483648);
    } else
      return null;
  } else {
    start = 0;
    isNegative = false;
    limit = new Long(1, -2147483648);
  }
  // Inline function 'kotlin.Long.div' call
  var limitForMaxRadix = (new Long(1, -2147483648)).q1(toLong(36));
  var limitBeforeMul = limitForMaxRadix;
  var result = new Long(0, 0);
  var inductionVariable = start;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var digit = digitOf(charSequenceGet(_this__u8e3s4, i), radix);
      if (digit < 0)
        return null;
      if (result.n1(limitBeforeMul) < 0) {
        if (limitBeforeMul.equals(limitForMaxRadix)) {
          // Inline function 'kotlin.Long.div' call
          limitBeforeMul = limit.q1(toLong(radix));
          if (result.n1(limitBeforeMul) < 0) {
            return null;
          }
        } else {
          return null;
        }
      }
      // Inline function 'kotlin.Long.times' call
      result = result.p1(toLong(radix));
      var tmp = result;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = limit.s(toLong(digit));
      if (tmp.n1(tmp$ret$3) < 0)
        return null;
      // Inline function 'kotlin.Long.minus' call
      result = result.o1(toLong(digit));
    }
     while (inductionVariable < length);
  return isNegative ? result : result.s1();
}
function numberFormatError(input) {
  throw NumberFormatException_init_$Create$_0("Invalid number format: '" + input + "'");
}
function split(_this__u8e3s4, delimiters, ignoreCase, limit) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  limit = limit === VOID ? 0 : limit;
  if (delimiters.length === 1) {
    return split_1(_this__u8e3s4, toString(delimiters[0]), ignoreCase, limit);
  }
  // Inline function 'kotlin.collections.map' call
  var this_0 = asIterable(rangesDelimitedBy(_this__u8e3s4, delimiters, VOID, ignoreCase, limit));
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'kotlin.text.split.<anonymous>' call
    var tmp$ret$0 = substring(_this__u8e3s4, item);
    destination.e(tmp$ret$0);
  }
  return destination;
}
function substringBefore(_this__u8e3s4, delimiter, missingDelimiterValue) {
  missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
  var index = indexOf_0(_this__u8e3s4, delimiter);
  var tmp;
  if (index === -1) {
    tmp = missingDelimiterValue;
  } else {
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.substring(0, index);
  }
  return tmp;
}
function substringAfter(_this__u8e3s4, delimiter, missingDelimiterValue) {
  missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
  var index = indexOf_0(_this__u8e3s4, delimiter);
  var tmp;
  if (index === -1) {
    tmp = missingDelimiterValue;
  } else {
    var tmp1 = index + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    var endIndex = _this__u8e3s4.length;
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.substring(tmp1, endIndex);
  }
  return tmp;
}
function removePrefix(_this__u8e3s4, prefix) {
  if (startsWith_0(_this__u8e3s4, prefix)) {
    // Inline function 'kotlin.text.substring' call
    var startIndex = charSequenceLength(prefix);
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.substring(startIndex);
  }
  return _this__u8e3s4;
}
function isBlank(_this__u8e3s4) {
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.text.all' call
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
      var element = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.text.isBlank.<anonymous>' call
      if (!isWhitespace(element)) {
        tmp$ret$1 = false;
        break $l$block;
      }
    }
    tmp$ret$1 = true;
  }
  return tmp$ret$1;
}
function lines(_this__u8e3s4) {
  return toList_0(lineSequence(_this__u8e3s4));
}
function split_0(_this__u8e3s4, delimiters, ignoreCase, limit) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  limit = limit === VOID ? 0 : limit;
  if (delimiters.length === 1) {
    var delimiter = delimiters[0];
    // Inline function 'kotlin.text.isEmpty' call
    if (!(charSequenceLength(delimiter) === 0)) {
      return split_1(_this__u8e3s4, delimiter, ignoreCase, limit);
    }
  }
  // Inline function 'kotlin.collections.map' call
  var this_0 = asIterable(rangesDelimitedBy_0(_this__u8e3s4, delimiters, VOID, ignoreCase, limit));
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'kotlin.text.split.<anonymous>' call
    var tmp$ret$1 = substring(_this__u8e3s4, item);
    destination.e(tmp$ret$1);
  }
  return destination;
}
function substringBefore_0(_this__u8e3s4, delimiter, missingDelimiterValue) {
  missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
  var index = indexOf_1(_this__u8e3s4, delimiter);
  var tmp;
  if (index === -1) {
    tmp = missingDelimiterValue;
  } else {
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.substring(0, index);
  }
  return tmp;
}
function substringAfter_0(_this__u8e3s4, delimiter, missingDelimiterValue) {
  missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
  var index = indexOf_1(_this__u8e3s4, delimiter);
  var tmp;
  if (index === -1) {
    tmp = missingDelimiterValue;
  } else {
    var tmp1 = index + delimiter.length | 0;
    // Inline function 'kotlin.text.substring' call
    var endIndex = _this__u8e3s4.length;
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.substring(tmp1, endIndex);
  }
  return tmp;
}
function split_1(_this__u8e3s4, delimiter, ignoreCase, limit) {
  requireNonNegativeLimit(limit);
  var currentOffset = 0;
  var nextIndex = indexOf_1(_this__u8e3s4, delimiter, currentOffset, ignoreCase);
  if (nextIndex === -1 || limit === 1) {
    return listOf(toString_1(_this__u8e3s4));
  }
  var isLimited = limit > 0;
  var result = ArrayList_init_$Create$_0(isLimited ? coerceAtMost(limit, 10) : 10);
  $l$loop: do {
    var tmp1 = currentOffset;
    // Inline function 'kotlin.text.substring' call
    var endIndex = nextIndex;
    var tmp$ret$0 = toString_1(charSequenceSubSequence(_this__u8e3s4, tmp1, endIndex));
    result.e(tmp$ret$0);
    currentOffset = nextIndex + delimiter.length | 0;
    if (isLimited && result.l() === (limit - 1 | 0))
      break $l$loop;
    nextIndex = indexOf_1(_this__u8e3s4, delimiter, currentOffset, ignoreCase);
  }
   while (!(nextIndex === -1));
  var tmp4 = currentOffset;
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = charSequenceLength(_this__u8e3s4);
  var tmp$ret$1 = toString_1(charSequenceSubSequence(_this__u8e3s4, tmp4, endIndex_0));
  result.e(tmp$ret$1);
  return result;
}
function substring(_this__u8e3s4, range) {
  return toString_1(charSequenceSubSequence(_this__u8e3s4, range.i6(), range.j6() + 1 | 0));
}
function rangesDelimitedBy(_this__u8e3s4, delimiters, startIndex, ignoreCase, limit) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  limit = limit === VOID ? 0 : limit;
  requireNonNegativeLimit(limit);
  return new DelimitedRangesSequence(_this__u8e3s4, startIndex, limit, rangesDelimitedBy$lambda(delimiters, ignoreCase));
}
function trim(_this__u8e3s4) {
  // Inline function 'kotlin.text.trim' call
  var startIndex = 0;
  var endIndex = charSequenceLength(_this__u8e3s4) - 1 | 0;
  var startFound = false;
  $l$loop: while (startIndex <= endIndex) {
    var index = !startFound ? startIndex : endIndex;
    // Inline function 'kotlin.text.trim.stub_for_inlining' call
    var p0 = charSequenceGet(_this__u8e3s4, index);
    var match = isWhitespace(p0);
    if (!startFound) {
      if (!match)
        startFound = true;
      else
        startIndex = startIndex + 1 | 0;
    } else {
      if (!match)
        break $l$loop;
      else
        endIndex = endIndex - 1 | 0;
    }
  }
  return charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex + 1 | 0);
}
function indexOf_0(_this__u8e3s4, char, startIndex, ignoreCase) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (ignoreCase) {
    tmp_0 = true;
  } else {
    tmp_0 = !(typeof _this__u8e3s4 === 'string');
  }
  if (tmp_0) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([char]);
    tmp = indexOfAny(_this__u8e3s4, tmp$ret$0, startIndex, ignoreCase);
  } else {
    // Inline function 'kotlin.text.nativeIndexOf' call
    // Inline function 'kotlin.text.nativeIndexOf' call
    var str = toString(char);
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.indexOf(str, startIndex);
  }
  return tmp;
}
function startsWith_0(_this__u8e3s4, prefix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (!ignoreCase) {
    tmp_0 = typeof _this__u8e3s4 === 'string';
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = typeof prefix === 'string';
  } else {
    tmp = false;
  }
  if (tmp)
    return startsWith(_this__u8e3s4, prefix);
  else {
    return regionMatchesImpl(_this__u8e3s4, 0, prefix, 0, charSequenceLength(prefix), ignoreCase);
  }
}
function lineSequence(_this__u8e3s4) {
  // Inline function 'kotlin.sequences.Sequence' call
  return new lineSequence$$inlined$Sequence$1(_this__u8e3s4);
}
function rangesDelimitedBy_0(_this__u8e3s4, delimiters, startIndex, ignoreCase, limit) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  limit = limit === VOID ? 0 : limit;
  requireNonNegativeLimit(limit);
  var delimitersList = asList(delimiters);
  return new DelimitedRangesSequence(_this__u8e3s4, startIndex, limit, rangesDelimitedBy$lambda_0(delimitersList, ignoreCase));
}
function indexOf_1(_this__u8e3s4, string, startIndex, ignoreCase) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (ignoreCase) {
    tmp_0 = true;
  } else {
    tmp_0 = !(typeof _this__u8e3s4 === 'string');
  }
  if (tmp_0) {
    tmp = indexOf_2(_this__u8e3s4, string, startIndex, charSequenceLength(_this__u8e3s4), ignoreCase);
  } else {
    // Inline function 'kotlin.text.nativeIndexOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.indexOf(string, startIndex);
  }
  return tmp;
}
function requireNonNegativeLimit(limit) {
  var tmp;
  if (!(limit >= 0)) {
    // Inline function 'kotlin.text.requireNonNegativeLimit.<anonymous>' call
    var message = 'Limit must be non-negative, but was ' + limit;
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  return tmp;
}
function calcNext($this) {
  if ($this.m8_1 < 0) {
    $this.k8_1 = 0;
    $this.n8_1 = null;
  } else {
    var tmp;
    var tmp_0;
    if ($this.p8_1.s8_1 > 0) {
      $this.o8_1 = $this.o8_1 + 1 | 0;
      tmp_0 = $this.o8_1 >= $this.p8_1.s8_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = $this.m8_1 > charSequenceLength($this.p8_1.q8_1);
    }
    if (tmp) {
      $this.n8_1 = numberRangeToNumber($this.l8_1, get_lastIndex_1($this.p8_1.q8_1));
      $this.m8_1 = -1;
    } else {
      var match = $this.p8_1.t8_1($this.p8_1.q8_1, $this.m8_1);
      if (match == null) {
        $this.n8_1 = numberRangeToNumber($this.l8_1, get_lastIndex_1($this.p8_1.q8_1));
        $this.m8_1 = -1;
      } else {
        var index = match.o7();
        var length = match.p7();
        $this.n8_1 = until($this.l8_1, index);
        $this.l8_1 = index + length | 0;
        $this.m8_1 = $this.l8_1 + (length === 0 ? 1 : 0) | 0;
      }
    }
    $this.k8_1 = 1;
  }
}
function DelimitedRangesSequence$iterator$1(this$0) {
  this.p8_1 = this$0;
  this.k8_1 = -1;
  this.l8_1 = coerceIn(this$0.r8_1, 0, charSequenceLength(this$0.q8_1));
  this.m8_1 = this.l8_1;
  this.n8_1 = null;
  this.o8_1 = 0;
}
protoOf(DelimitedRangesSequence$iterator$1).i = function () {
  if (this.k8_1 === -1) {
    calcNext(this);
  }
  if (this.k8_1 === 0)
    throw NoSuchElementException_init_$Create$();
  var tmp = this.n8_1;
  var result = tmp instanceof IntRange ? tmp : THROW_CCE();
  this.n8_1 = null;
  this.k8_1 = -1;
  return result;
};
protoOf(DelimitedRangesSequence$iterator$1).h = function () {
  if (this.k8_1 === -1) {
    calcNext(this);
  }
  return this.k8_1 === 1;
};
function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
  this.q8_1 = input;
  this.r8_1 = startIndex;
  this.s8_1 = limit;
  this.t8_1 = getNextMatch;
}
protoOf(DelimitedRangesSequence).g = function () {
  return new DelimitedRangesSequence$iterator$1(this);
};
function indexOfAny(_this__u8e3s4, chars, startIndex, ignoreCase) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  if (!ignoreCase && chars.length === 1) {
    tmp = typeof _this__u8e3s4 === 'string';
  } else {
    tmp = false;
  }
  if (tmp) {
    var char = single(chars);
    // Inline function 'kotlin.text.nativeIndexOf' call
    // Inline function 'kotlin.text.nativeIndexOf' call
    var str = toString(char);
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.indexOf(str, startIndex);
  }
  var inductionVariable = coerceAtLeast(startIndex, 0);
  var last = get_lastIndex_1(_this__u8e3s4);
  if (inductionVariable <= last)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var charAtIndex = charSequenceGet(_this__u8e3s4, index);
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.collections.any' call
        var inductionVariable_0 = 0;
        var last_0 = chars.length;
        while (inductionVariable_0 < last_0) {
          var element = chars[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'kotlin.text.indexOfAny.<anonymous>' call
          if (equals_0(element, charAtIndex, ignoreCase)) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      if (tmp$ret$4)
        return index;
    }
     while (!(index === last));
  return -1;
}
function regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
  if (otherOffset < 0 || thisOffset < 0 || thisOffset > (charSequenceLength(_this__u8e3s4) - length | 0) || otherOffset > (charSequenceLength(other) - length | 0)) {
    return false;
  }
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!equals_0(charSequenceGet(_this__u8e3s4, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
        return false;
    }
     while (inductionVariable < length);
  return true;
}
function get_lastIndex_1(_this__u8e3s4) {
  return charSequenceLength(_this__u8e3s4) - 1 | 0;
}
function State() {
  this.u8_1 = 0;
  this.v8_1 = 1;
  this.w8_1 = 2;
}
var State_instance;
function State_getInstance() {
  return State_instance;
}
function LinesIterator(string) {
  this.x8_1 = string;
  this.y8_1 = 0;
  this.z8_1 = 0;
  this.a9_1 = 0;
  this.b9_1 = 0;
}
protoOf(LinesIterator).h = function () {
  if (!(this.y8_1 === 0)) {
    return this.y8_1 === 1;
  }
  if (this.b9_1 < 0) {
    this.y8_1 = 2;
    return false;
  }
  var _delimiterLength = -1;
  var _delimiterStartIndex = charSequenceLength(this.x8_1);
  var inductionVariable = this.z8_1;
  var last = charSequenceLength(this.x8_1);
  if (inductionVariable < last)
    $l$loop: do {
      var idx = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var c = charSequenceGet(this.x8_1, idx);
      if (c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13)) {
        _delimiterLength = c === _Char___init__impl__6a9atx(13) && (idx + 1 | 0) < charSequenceLength(this.x8_1) && charSequenceGet(this.x8_1, idx + 1 | 0) === _Char___init__impl__6a9atx(10) ? 2 : 1;
        _delimiterStartIndex = idx;
        break $l$loop;
      }
    }
     while (inductionVariable < last);
  this.y8_1 = 1;
  this.b9_1 = _delimiterLength;
  this.a9_1 = _delimiterStartIndex;
  return true;
};
protoOf(LinesIterator).i = function () {
  if (!this.h()) {
    throw NoSuchElementException_init_$Create$();
  }
  this.y8_1 = 0;
  var lastIndex = this.a9_1;
  var firstIndex = this.z8_1;
  this.z8_1 = this.a9_1 + this.b9_1 | 0;
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.x8_1;
  return toString_1(charSequenceSubSequence(this_0, firstIndex, lastIndex));
};
function findAnyOf(_this__u8e3s4, strings, startIndex, ignoreCase, last) {
  if (!ignoreCase && strings.l() === 1) {
    var string = single_1(strings);
    var index = !last ? indexOf_1(_this__u8e3s4, string, startIndex) : lastIndexOf(_this__u8e3s4, string, startIndex);
    return index < 0 ? null : to(index, string);
  }
  var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this__u8e3s4)) : downTo(coerceAtMost(startIndex, get_lastIndex_1(_this__u8e3s4)), 0);
  if (typeof _this__u8e3s4 === 'string') {
    var inductionVariable = indices.c8_1;
    var last_0 = indices.d8_1;
    var step = indices.e8_1;
    if (step > 0 && inductionVariable <= last_0 || (step < 0 && last_0 <= inductionVariable))
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + step | 0;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = strings.g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            // Inline function 'kotlin.text.findAnyOf.<anonymous>' call
            if (regionMatches(element, 0, _this__u8e3s4, index_0, element.length, ignoreCase)) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var matchingString = tmp$ret$1;
        if (!(matchingString == null))
          return to(index_0, matchingString);
      }
       while (!(index_0 === last_0));
  } else {
    var inductionVariable_0 = indices.c8_1;
    var last_1 = indices.d8_1;
    var step_0 = indices.e8_1;
    if (step_0 > 0 && inductionVariable_0 <= last_1 || (step_0 < 0 && last_1 <= inductionVariable_0))
      do {
        var index_1 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + step_0 | 0;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_0 = strings.g();
          while (_iterator__ex2g4s_0.h()) {
            var element_0 = _iterator__ex2g4s_0.i();
            // Inline function 'kotlin.text.findAnyOf.<anonymous>' call
            if (regionMatchesImpl(element_0, 0, _this__u8e3s4, index_1, element_0.length, ignoreCase)) {
              tmp$ret$3 = element_0;
              break $l$block_0;
            }
          }
          tmp$ret$3 = null;
        }
        var matchingString_0 = tmp$ret$3;
        if (!(matchingString_0 == null))
          return to(index_1, matchingString_0);
      }
       while (!(index_1 === last_1));
  }
  return null;
}
function indexOf_2(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last) {
  last = last === VOID ? false : last;
  var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__u8e3s4))) : downTo(coerceAtMost(startIndex, get_lastIndex_1(_this__u8e3s4)), coerceAtLeast(endIndex, 0));
  var tmp;
  if (typeof _this__u8e3s4 === 'string') {
    tmp = typeof other === 'string';
  } else {
    tmp = false;
  }
  if (tmp) {
    var inductionVariable = indices.c8_1;
    var last_0 = indices.d8_1;
    var step = indices.e8_1;
    if (step > 0 && inductionVariable <= last_0 || (step < 0 && last_0 <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step | 0;
        if (regionMatches(other, 0, _this__u8e3s4, index, other.length, ignoreCase))
          return index;
      }
       while (!(index === last_0));
  } else {
    var inductionVariable_0 = indices.c8_1;
    var last_1 = indices.d8_1;
    var step_0 = indices.e8_1;
    if (step_0 > 0 && inductionVariable_0 <= last_1 || (step_0 < 0 && last_1 <= inductionVariable_0))
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + step_0 | 0;
        if (regionMatchesImpl(other, 0, _this__u8e3s4, index_0, charSequenceLength(other), ignoreCase))
          return index_0;
      }
       while (!(index_0 === last_1));
  }
  return -1;
}
function lastIndexOf(_this__u8e3s4, string, startIndex, ignoreCase) {
  startIndex = startIndex === VOID ? get_lastIndex_1(_this__u8e3s4) : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (ignoreCase) {
    tmp_0 = true;
  } else {
    tmp_0 = !(typeof _this__u8e3s4 === 'string');
  }
  if (tmp_0) {
    tmp = indexOf_2(_this__u8e3s4, string, startIndex, 0, ignoreCase, true);
  } else {
    // Inline function 'kotlin.text.nativeLastIndexOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = _this__u8e3s4.lastIndexOf(string, startIndex);
  }
  return tmp;
}
function rangesDelimitedBy$lambda($delimiters, $ignoreCase) {
  return function ($this$DelimitedRangesSequence, currentIndex) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.text.rangesDelimitedBy.<anonymous>.<anonymous>' call
    var it = indexOfAny($this$DelimitedRangesSequence, $delimiters, currentIndex, $ignoreCase);
    return it < 0 ? null : to(it, 1);
  };
}
function lineSequence$$inlined$Sequence$1($this_lineSequence) {
  this.c9_1 = $this_lineSequence;
}
protoOf(lineSequence$$inlined$Sequence$1).g = function () {
  // Inline function 'kotlin.text.lineSequence.<anonymous>' call
  return new LinesIterator(this.c9_1);
};
function rangesDelimitedBy$lambda_0($delimitersList, $ignoreCase) {
  return function ($this$DelimitedRangesSequence, currentIndex) {
    var tmp0_safe_receiver = findAnyOf($this$DelimitedRangesSequence, $delimitersList, currentIndex, $ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.text.rangesDelimitedBy.<anonymous>.<anonymous>' call
      tmp = to(tmp0_safe_receiver.j7_1, tmp0_safe_receiver.k7_1.length);
    }
    return tmp;
  };
}
function _Result___init__impl__xyqfz8(value) {
  return value;
}
function _Result___get_value__impl__bjfvqg($this) {
  return $this;
}
function _Result___get_isFailure__impl__jpiriv($this) {
  var tmp = _Result___get_value__impl__bjfvqg($this);
  return tmp instanceof Failure;
}
function Companion_9() {
}
var Companion_instance_9;
function Companion_getInstance_9() {
  return Companion_instance_9;
}
function Failure(exception) {
  this.d9_1 = exception;
}
protoOf(Failure).equals = function (other) {
  var tmp;
  if (other instanceof Failure) {
    tmp = equals(this.d9_1, other.d9_1);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Failure).hashCode = function () {
  return hashCode(this.d9_1);
};
protoOf(Failure).toString = function () {
  return 'Failure(' + this.d9_1.toString() + ')';
};
function createFailure(exception) {
  return new Failure(exception);
}
function Pair(first, second) {
  this.j7_1 = first;
  this.k7_1 = second;
}
protoOf(Pair).toString = function () {
  return '(' + toString_0(this.j7_1) + ', ' + toString_0(this.k7_1) + ')';
};
protoOf(Pair).o7 = function () {
  return this.j7_1;
};
protoOf(Pair).p7 = function () {
  return this.k7_1;
};
protoOf(Pair).hashCode = function () {
  var result = this.j7_1 == null ? 0 : hashCode(this.j7_1);
  result = imul_0(result, 31) + (this.k7_1 == null ? 0 : hashCode(this.k7_1)) | 0;
  return result;
};
protoOf(Pair).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Pair))
    return false;
  var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
  if (!equals(this.j7_1, tmp0_other_with_cast.j7_1))
    return false;
  if (!equals(this.k7_1, tmp0_other_with_cast.k7_1))
    return false;
  return true;
};
function to(_this__u8e3s4, that) {
  return new Pair(_this__u8e3s4, that);
}
function _UShort___init__impl__jigrne(data) {
  return data;
}
function _UShort___get_data__impl__g0245($this) {
  return $this;
}
var RezimHlaseni_PODAVAJICI_instance;
var RezimHlaseni_BARVY_instance;
var RezimHlaseni_VEDOUCI_instance;
var RezimHlaseni_JEN_CISLA_instance;
function values() {
  return [RezimHlaseni_PODAVAJICI_getInstance(), RezimHlaseni_BARVY_getInstance(), RezimHlaseni_VEDOUCI_getInstance(), RezimHlaseni_JEN_CISLA_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var RezimHlaseni_entriesInitialized;
function RezimHlaseni_initEntries() {
  if (RezimHlaseni_entriesInitialized)
    return Unit_instance;
  RezimHlaseni_entriesInitialized = true;
  RezimHlaseni_PODAVAJICI_instance = new RezimHlaseni('PODAVAJICI', 0);
  RezimHlaseni_BARVY_instance = new RezimHlaseni('BARVY', 1);
  RezimHlaseni_VEDOUCI_instance = new RezimHlaseni('VEDOUCI', 2);
  RezimHlaseni_JEN_CISLA_instance = new RezimHlaseni('JEN_CISLA', 3);
}
var $ENTRIES;
function RezimHlaseni(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function vetaBezCasu($this, stav, udalosti, rezim, h) {
  // Inline function 'kotlin.collections.filterIsInstance' call
  // Inline function 'kotlin.collections.filterIsInstanceTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = udalosti.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    if (element instanceof KoloSkoncilo) {
      destination.e(element);
    }
  }
  var tmp0_safe_receiver = firstOrNull(destination);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var vitez = tmp0_safe_receiver.e9_1;
    var tmp;
    if (vitez == null) {
      tmp = to(h.f9_1, true);
    } else {
      tmp = to(format(h.g9_1, [jmeno(Hlaseni_instance, stav, vitez, h)]), true);
    }
    return tmp;
  }
  // Inline function 'kotlin.collections.filterIsInstance' call
  // Inline function 'kotlin.collections.filterIsInstanceTo' call
  var destination_0 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = udalosti.g();
  while (_iterator__ex2g4s_0.h()) {
    var element_0 = _iterator__ex2g4s_0.i();
    if (element_0 instanceof ZapasSkoncil) {
      destination_0.e(element_0);
    }
  }
  var tmp1_safe_receiver = firstOrNull(destination_0);
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return to(format(h.h9_1, [jmeno(Hlaseni_instance, stav, tmp1_safe_receiver.ga_1, h)]), true);
  }
  // Inline function 'kotlin.collections.filterIsInstance' call
  // Inline function 'kotlin.collections.filterIsInstanceTo' call
  var destination_1 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_1 = udalosti.g();
  while (_iterator__ex2g4s_1.h()) {
    var element_1 = _iterator__ex2g4s_1.i();
    if (element_1 instanceof SetZiskan) {
      destination_1.e(element_1);
    }
  }
  var tmp2_safe_receiver = firstOrNull(destination_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return to(format(h.m9_1, [jmeno(Hlaseni_instance, stav, tmp2_safe_receiver.ha_1, h)]), true);
  }
  // Inline function 'kotlin.collections.filterIsInstance' call
  // Inline function 'kotlin.collections.filterIsInstanceTo' call
  var destination_2 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_2 = udalosti.g();
  while (_iterator__ex2g4s_2.h()) {
    var element_2 = _iterator__ex2g4s_2.i();
    if (element_2 instanceof GemZiskan) {
      destination_2.e(element_2);
    }
  }
  var tmp3_safe_receiver = firstOrNull(destination_2);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return to(format(h.n9_1, [jmeno(Hlaseni_instance, stav, tmp3_safe_receiver.ia_1, h)]) + ' ' + gemyASety(Hlaseni_instance, stav, h), true);
  }
  var tmp$ret$12;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp_0;
    if (isInterface(udalosti, Collection)) {
      tmp_0 = udalosti.k();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp$ret$12 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_3 = udalosti.g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'cz.padelcesko.score.command.Hlaseni.vetaBezCasu.<anonymous>' call
      if (element_3 instanceof BodVracen) {
        tmp$ret$12 = true;
        break $l$block_0;
      }
    }
    tmp$ret$12 = false;
  }
  if (tmp$ret$12)
    return to(h.o9_1, false);
  var tmp$ret$14;
  $l$block_2: {
    // Inline function 'kotlin.collections.any' call
    var tmp_1;
    if (isInterface(udalosti, Collection)) {
      tmp_1 = udalosti.k();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp$ret$14 = false;
      break $l$block_2;
    }
    var _iterator__ex2g4s_4 = udalosti.g();
    while (_iterator__ex2g4s_4.h()) {
      var element_4 = _iterator__ex2g4s_4.i();
      // Inline function 'cz.padelcesko.score.command.Hlaseni.vetaBezCasu.<anonymous>' call
      if (element_4 instanceof StarPoint) {
        tmp$ret$14 = true;
        break $l$block_2;
      }
    }
    tmp$ret$14 = false;
  }
  if (tmp$ret$14)
    return to(h.p9_1, true);
  // Inline function 'kotlin.collections.filterIsInstance' call
  // Inline function 'kotlin.collections.filterIsInstanceTo' call
  var destination_3 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_5 = udalosti.g();
  while (_iterator__ex2g4s_5.h()) {
    var element_5 = _iterator__ex2g4s_5.i();
    if (element_5 instanceof Vyhoda) {
      destination_3.e(element_5);
    }
  }
  var tmp4_safe_receiver = firstOrNull(destination_3);
  if (tmp4_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return to(format(h.q9_1, [jmeno(Hlaseni_instance, stav, tmp4_safe_receiver.ja_1, h)]), false);
  }
  var tmp$ret$19;
  $l$block_4: {
    // Inline function 'kotlin.collections.any' call
    var tmp_2;
    if (isInterface(udalosti, Collection)) {
      tmp_2 = udalosti.k();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp$ret$19 = false;
      break $l$block_4;
    }
    var _iterator__ex2g4s_6 = udalosti.g();
    while (_iterator__ex2g4s_6.h()) {
      var element_6 = _iterator__ex2g4s_6.i();
      // Inline function 'cz.padelcesko.score.command.Hlaseni.vetaBezCasu.<anonymous>' call
      if (element_6 instanceof Shoda_0) {
        tmp$ret$19 = true;
        break $l$block_4;
      }
    }
    tmp$ret$19 = false;
  }
  if (tmp$ret$19)
    return to(h.t9_1, false);
  var tmp$ret$21;
  $l$block_6: {
    // Inline function 'kotlin.collections.any' call
    var tmp_3;
    if (isInterface(udalosti, Collection)) {
      tmp_3 = udalosti.k();
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp$ret$21 = false;
      break $l$block_6;
    }
    var _iterator__ex2g4s_7 = udalosti.g();
    while (_iterator__ex2g4s_7.h()) {
      var element_7 = _iterator__ex2g4s_7.i();
      // Inline function 'cz.padelcesko.score.command.Hlaseni.vetaBezCasu.<anonymous>' call
      if (element_7 instanceof BodPripsan) {
        tmp$ret$21 = true;
        break $l$block_6;
      }
    }
    tmp$ret$21 = false;
  }
  if (tmp$ret$21)
    return to(skore($this, stav, rezim, h), false);
  return null;
}
function skore($this, stav, rezim, h) {
  if (stav.sa_1.equals(Faze_KONEC_getInstance()))
    return h.u9_1;
  var a = stav.qa_1.db(TymId_A_getInstance());
  var b = stav.qa_1.db(TymId_B_getInstance());
  var tmp;
  switch (rezim.h1_1) {
    case 0:
      var p = stav.ma_1.eb_1;
      tmp = format(h.v9_1, [hrac($this, stav), cislo($this, stav, p, h), cislo($this, stav, p.ib(), h)]);
      break;
    case 1:
      tmp = format(h.x9_1, [barva($this, stav, TymId_A_getInstance(), h), cislo($this, stav, TymId_A_getInstance(), h), barva($this, stav, TymId_B_getInstance(), h), cislo($this, stav, TymId_B_getInstance(), h)]);
      break;
    case 2:
      tmp = a === b ? cislo($this, stav, TymId_A_getInstance(), h) + ' ' + cislo($this, stav, TymId_B_getInstance(), h) + '.' : a > b ? format(h.y9_1, [jmeno($this, stav, TymId_A_getInstance(), h), cislo($this, stav, TymId_A_getInstance(), h), cislo($this, stav, TymId_B_getInstance(), h)]) : format(h.y9_1, [jmeno($this, stav, TymId_B_getInstance(), h), cislo($this, stav, TymId_B_getInstance(), h), cislo($this, stav, TymId_A_getInstance(), h)]);
      break;
    case 3:
      tmp = cislo($this, stav, TymId_A_getInstance(), h) + ' ' + cislo($this, stav, TymId_B_getInstance(), h) + '.';
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function gemyASety($this, stav, h) {
  var tmp0_safe_receiver = stav.jb();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return format(h.ba_1, [tmp0_safe_receiver]);
  }
  var g = stav.pa_1;
  var s = stav.kb();
  var sety = (s.bb_1 + s.cb_1 | 0) > 0 ? ' ' + format(h.aa_1, [s.bb_1, s.cb_1]) : '';
  return format(h.z9_1, [g.bb_1, g.cb_1]) + sety;
}
function cislo($this, stav, tym, h) {
  if (!stav.sa_1.equals(Faze_GEM_getInstance()))
    return stav.qa_1.db(tym).toString();
  var muj = stav.qa_1.db(tym);
  var soupere = stav.qa_1.db(tym.ib());
  if (muj >= 3 && soupere >= 3) {
    return muj > soupere ? h.da_1 : h.ca_1.j(3);
  }
  return h.ca_1.j(coerceAtMost(muj, 3));
}
function jmeno($this, stav, tym, h) {
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = stav.la_1.db(tym).mb_1;
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.command.Hlaseni.jmeno.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(element)) {
      destination.e(element);
    }
  }
  var hraci = destination;
  if (hraci.k())
    return barva($this, stav, tym, h);
  return joinToString_0(hraci, h.fa_1);
}
function barva($this, stav, tym, h) {
  return getValue(h.ea_1, stav.la_1.db(tym).lb_1);
}
function hrac($this, stav) {
  var tym = stav.la_1.db(stav.ma_1.eb_1);
  var tmp0 = tym.mb_1;
  // Inline function 'kotlin.collections.getOrElse' call
  var index = stav.ma_1.fb_1;
  var tmp;
  if (0 <= index ? index < tmp0.l() : false) {
    tmp = tmp0.j(index);
  } else {
    // Inline function 'cz.padelcesko.score.command.Hlaseni.hrac.<anonymous>' call
    tmp = first(tym.mb_1);
  }
  return tmp;
}
function Hlaseni() {
}
protoOf(Hlaseni).pb = function (stav, udalosti, rezim, jazyk) {
  var h = hlasky(jazyk);
  if (udalosti.z(CasVyprsel_instance)) {
    var tmp;
    if (udalosti.z(RozhodujiciBod_instance)) {
      tmp = h.l9_1;
    } else {
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = udalosti.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (element instanceof ZapasSkoncil) {
          destination.e(element);
        }
      }
      var tmp0_safe_receiver = firstOrNull(destination);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'cz.padelcesko.score.command.Hlaseni.veta.<anonymous>' call
        tmp_0 = format(h.j9_1, [jmeno(Hlaseni_instance, stav, tmp0_safe_receiver.ga_1, h)]);
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? h.k9_1 : tmp1_elvis_lhs;
    }
    var dal = tmp;
    return to(h.i9_1 + ' ' + dal, true);
  }
  if (udalosti.z(RozhodujiciBod_instance)) {
    var tmp2_safe_receiver = vetaBezCasu(this, stav, udalosti, rezim, h);
    var zaklad = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j7_1;
    return to(joinToString_0(listOfNotNull([zaklad, h.l9_1]), ' '), true);
  }
  return vetaBezCasu(this, stav, udalosti, rezim, h);
};
protoOf(Hlaseni).qb = function (stav, kod, tym, jazyk) {
  var h = hlasky(jazyk);
  var tmp;
  switch (kod) {
    case 'eso':
      tmp = h.r9_1;
      break;
    case 'dvojchyba':
      tmp = h.s9_1;
      break;
    default:
      return null;
  }
  var sablona = tmp;
  return format(sablona, [jmeno(this, stav, tym, h)]);
};
protoOf(Hlaseni).rb = function (stav, jazyk) {
  if (stav.sa_1.equals(Faze_KONEC_getInstance()))
    return null;
  var h = hlasky(jazyk);
  var tym = stav.la_1.db(stav.ma_1.eb_1);
  var tmp0_elvis_lhs = getOrNull_0(tym.mb_1, stav.ma_1.fb_1);
  var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(tym.mb_1) : tmp0_elvis_lhs;
  var kdo = tmp1_elvis_lhs == null ? getValue(h.ea_1, tym.lb_1) : tmp1_elvis_lhs;
  return format(h.w9_1, [kdo]);
};
var Hlaseni_instance;
function Hlaseni_getInstance() {
  return Hlaseni_instance;
}
function RezimHlaseni_PODAVAJICI_getInstance() {
  RezimHlaseni_initEntries();
  return RezimHlaseni_PODAVAJICI_instance;
}
function RezimHlaseni_BARVY_getInstance() {
  RezimHlaseni_initEntries();
  return RezimHlaseni_BARVY_instance;
}
function RezimHlaseni_VEDOUCI_getInstance() {
  RezimHlaseni_initEntries();
  return RezimHlaseni_VEDOUCI_instance;
}
function RezimHlaseni_JEN_CISLA_getInstance() {
  RezimHlaseni_initEntries();
  return RezimHlaseni_JEN_CISLA_instance;
}
function get_HLASKY() {
  _init_properties_Hlasky_kt__wm1ksc();
  return HLASKY;
}
var HLASKY;
function Hlasky(konecKolaDelba, konecKolaVyhrava, konecVyhrava, konecCasu, vyhrava, gemSeDohraje, rozhodujiciBod, set, gem, bodVracen, starPoint, vyhoda, eso, dvojchyba, shoda, zapasSkoncil, podava, podavaSam, poBarvach, vede, gemy, sety, zbyva, cisla, vyhodaVeSkore, barvy, aMezi) {
  this.f9_1 = konecKolaDelba;
  this.g9_1 = konecKolaVyhrava;
  this.h9_1 = konecVyhrava;
  this.i9_1 = konecCasu;
  this.j9_1 = vyhrava;
  this.k9_1 = gemSeDohraje;
  this.l9_1 = rozhodujiciBod;
  this.m9_1 = set;
  this.n9_1 = gem;
  this.o9_1 = bodVracen;
  this.p9_1 = starPoint;
  this.q9_1 = vyhoda;
  this.r9_1 = eso;
  this.s9_1 = dvojchyba;
  this.t9_1 = shoda;
  this.u9_1 = zapasSkoncil;
  this.v9_1 = podava;
  this.w9_1 = podavaSam;
  this.x9_1 = poBarvach;
  this.y9_1 = vede;
  this.z9_1 = gemy;
  this.aa_1 = sety;
  this.ba_1 = zbyva;
  this.ca_1 = cisla;
  this.da_1 = vyhodaVeSkore;
  this.ea_1 = barvy;
  this.fa_1 = aMezi;
}
protoOf(Hlasky).toString = function () {
  return 'Hlasky(konecKolaDelba=' + this.f9_1 + ', konecKolaVyhrava=' + this.g9_1 + ', konecVyhrava=' + this.h9_1 + ', konecCasu=' + this.i9_1 + ', vyhrava=' + this.j9_1 + ', gemSeDohraje=' + this.k9_1 + ', rozhodujiciBod=' + this.l9_1 + ', set=' + this.m9_1 + ', gem=' + this.n9_1 + ', bodVracen=' + this.o9_1 + ', starPoint=' + this.p9_1 + ', vyhoda=' + this.q9_1 + ', eso=' + this.r9_1 + ', dvojchyba=' + this.s9_1 + ', shoda=' + this.t9_1 + ', zapasSkoncil=' + this.u9_1 + ', podava=' + this.v9_1 + ', podavaSam=' + this.w9_1 + ', poBarvach=' + this.x9_1 + ', vede=' + this.y9_1 + ', gemy=' + this.z9_1 + ', sety=' + this.aa_1 + ', zbyva=' + this.ba_1 + ', cisla=' + toString_1(this.ca_1) + ', vyhodaVeSkore=' + this.da_1 + ', barvy=' + toString_1(this.ea_1) + ', aMezi=' + this.fa_1 + ')';
};
protoOf(Hlasky).hashCode = function () {
  var result = getStringHashCode(this.f9_1);
  result = imul_0(result, 31) + getStringHashCode(this.g9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.h9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.i9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.j9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.k9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.l9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.m9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.n9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.o9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.p9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.q9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.r9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.s9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.t9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.u9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.v9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.w9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.x9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.y9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.z9_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.aa_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.ba_1) | 0;
  result = imul_0(result, 31) + hashCode(this.ca_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.da_1) | 0;
  result = imul_0(result, 31) + hashCode(this.ea_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.fa_1) | 0;
  return result;
};
protoOf(Hlasky).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Hlasky))
    return false;
  var tmp0_other_with_cast = other instanceof Hlasky ? other : THROW_CCE();
  if (!(this.f9_1 === tmp0_other_with_cast.f9_1))
    return false;
  if (!(this.g9_1 === tmp0_other_with_cast.g9_1))
    return false;
  if (!(this.h9_1 === tmp0_other_with_cast.h9_1))
    return false;
  if (!(this.i9_1 === tmp0_other_with_cast.i9_1))
    return false;
  if (!(this.j9_1 === tmp0_other_with_cast.j9_1))
    return false;
  if (!(this.k9_1 === tmp0_other_with_cast.k9_1))
    return false;
  if (!(this.l9_1 === tmp0_other_with_cast.l9_1))
    return false;
  if (!(this.m9_1 === tmp0_other_with_cast.m9_1))
    return false;
  if (!(this.n9_1 === tmp0_other_with_cast.n9_1))
    return false;
  if (!(this.o9_1 === tmp0_other_with_cast.o9_1))
    return false;
  if (!(this.p9_1 === tmp0_other_with_cast.p9_1))
    return false;
  if (!(this.q9_1 === tmp0_other_with_cast.q9_1))
    return false;
  if (!(this.r9_1 === tmp0_other_with_cast.r9_1))
    return false;
  if (!(this.s9_1 === tmp0_other_with_cast.s9_1))
    return false;
  if (!(this.t9_1 === tmp0_other_with_cast.t9_1))
    return false;
  if (!(this.u9_1 === tmp0_other_with_cast.u9_1))
    return false;
  if (!(this.v9_1 === tmp0_other_with_cast.v9_1))
    return false;
  if (!(this.w9_1 === tmp0_other_with_cast.w9_1))
    return false;
  if (!(this.x9_1 === tmp0_other_with_cast.x9_1))
    return false;
  if (!(this.y9_1 === tmp0_other_with_cast.y9_1))
    return false;
  if (!(this.z9_1 === tmp0_other_with_cast.z9_1))
    return false;
  if (!(this.aa_1 === tmp0_other_with_cast.aa_1))
    return false;
  if (!(this.ba_1 === tmp0_other_with_cast.ba_1))
    return false;
  if (!equals(this.ca_1, tmp0_other_with_cast.ca_1))
    return false;
  if (!(this.da_1 === tmp0_other_with_cast.da_1))
    return false;
  if (!equals(this.ea_1, tmp0_other_with_cast.ea_1))
    return false;
  if (!(this.fa_1 === tmp0_other_with_cast.fa_1))
    return false;
  return true;
};
function hlasky(jazyk) {
  _init_properties_Hlasky_kt__wm1ksc();
  return getValue(get_HLASKY(), jazyk);
}
var properties_initialized_Hlasky_kt_shi02i;
function _init_properties_Hlasky_kt__wm1ksc() {
  if (!properties_initialized_Hlasky_kt_shi02i) {
    properties_initialized_Hlasky_kt_shi02i = true;
    HLASKY = mapOf_0([to(Jazyk_CS_getInstance(), new Hlasky('Konec kola. D\u011Bl\xEDte se o body.', 'Konec kola. Vyhr\xE1v\xE1 %s.', 'Konec. Vyhr\xE1v\xE1 %s.', 'Konec \u010Dasu.', 'Vyhr\xE1v\xE1 %s.', 'Gem se dohraje.', 'Rozhoduj\xEDc\xED m\xED\u010Dek.', 'Set %s.', 'Gem %s.', 'Bod vr\xE1cen.', 'Star point.', 'V\xFDhoda %s.', 'Eso, %s.', 'Dvojchyba, %s.', 'Shoda.', 'Z\xE1pas skon\u010Dil.', 'Pod\xE1v\xE1 %1$s, %2$s %3$s.', 'Pod\xE1v\xE1 %s.', '%1$s %2$s, %3$s %4$s.', '%1$s vede %2$s %3$s.', 'Gemy %1$s %2$s.', 'Sety %1$s %2$s.', 'Zb\xFDv\xE1 %s.', listOf_0(['nula', 'patn\xE1ct', 't\u0159icet', '\u010Dty\u0159icet']), 'v\xFDhoda', mapOf_0([to(Barva_MODRA_getInstance(), 'modr\xE1'), to(Barva_CERVENA_getInstance(), '\u010Derven\xE1'), to(Barva_ZELENA_getInstance(), 'zelen\xE1'), to(Barva_ZLUTA_getInstance(), '\u017Elut\xE1'), to(Barva_BILA_getInstance(), 'b\xEDl\xE1'), to(Barva_CERNA_getInstance(), '\u010Dern\xE1')]), ' a ')), to(Jazyk_EN_getInstance(), new Hlasky('End of the round. You share the points.', 'End of the round. %s wins.', 'Match over. %s wins.', 'Time is up.', '%s wins.', 'The game is played out.', 'Deciding point.', 'Set %s.', 'Game %s.', 'Point taken back.', 'Star point.', 'Advantage %s.', 'Ace, %s.', 'Double fault, %s.', 'Deuce.', 'The match is over.', '%1$s to serve, %2$s %3$s.', '%s to serve.', '%1$s %2$s, %3$s %4$s.', '%1$s lead %2$s %3$s.', 'Games %1$s %2$s.', 'Sets %1$s %2$s.', '%s to go.', listOf_0(['love', 'fifteen', 'thirty', 'forty']), 'advantage', mapOf_0([to(Barva_MODRA_getInstance(), 'blue'), to(Barva_CERVENA_getInstance(), 'red'), to(Barva_ZELENA_getInstance(), 'green'), to(Barva_ZLUTA_getInstance(), 'yellow'), to(Barva_BILA_getInstance(), 'white'), to(Barva_CERNA_getInstance(), 'black')]), ' and ')), to(Jazyk_DE_getInstance(), new Hlasky('Runde zu Ende. Ihr teilt euch die Punkte.', 'Runde zu Ende. %s gewinnt.', 'Spielende. %s gewinnt.', 'Die Zeit ist um.', '%s gewinnt.', 'Das Spiel wird zu Ende gespielt.', 'Entscheidungspunkt.', 'Satz %s.', 'Spiel %s.', 'Punkt zur\xFCckgenommen.', 'Star Point.', 'Vorteil %s.', 'Ass, %s.', 'Doppelfehler, %s.', 'Einstand.', 'Das Spiel ist zu Ende.', '%1$s schl\xE4gt auf, %2$s %3$s.', '%s schl\xE4gt auf.', '%1$s %2$s, %3$s %4$s.', '%1$s f\xFChrt %2$s %3$s.', 'Spiele %1$s %2$s.', 'S\xE4tze %1$s %2$s.', 'Noch %s.', listOf_0(['null', 'f\xFCnfzehn', 'drei\xDFig', 'vierzig']), 'Vorteil', mapOf_0([to(Barva_MODRA_getInstance(), 'Blau'), to(Barva_CERVENA_getInstance(), 'Rot'), to(Barva_ZELENA_getInstance(), 'Gr\xFCn'), to(Barva_ZLUTA_getInstance(), 'Gelb'), to(Barva_BILA_getInstance(), 'Wei\xDF'), to(Barva_CERNA_getInstance(), 'Schwarz')]), ' und ')), to(Jazyk_ES_getInstance(), new Hlasky('Fin de la ronda. Os repart\xEDs los puntos.', 'Fin de la ronda. Gana %s.', 'Fin del partido. Gana %s.', 'Se acab\xF3 el tiempo.', 'Gana %s.', 'Se termina el juego.', 'Punto decisivo.', 'Set %s.', 'Juego %s.', 'Punto anulado.', 'Star point.', 'Ventaja %s.', 'Ace, %s.', 'Doble falta, %s.', 'Iguales.', 'El partido ha terminado.', 'Saca %1$s, %2$s %3$s.', 'Saca %s.', '%1$s %2$s, %3$s %4$s.', '%1$s va por delante %2$s %3$s.', 'Juegos %1$s %2$s.', 'Sets %1$s %2$s.', 'Quedan %s.', listOf_0(['cero', 'quince', 'treinta', 'cuarenta']), 'ventaja', mapOf_0([to(Barva_MODRA_getInstance(), 'azul'), to(Barva_CERVENA_getInstance(), 'rojo'), to(Barva_ZELENA_getInstance(), 'verde'), to(Barva_ZLUTA_getInstance(), 'amarillo'), to(Barva_BILA_getInstance(), 'blanco'), to(Barva_CERNA_getInstance(), 'negro')]), ' y ')), to(Jazyk_FR_getInstance(), new Hlasky('Fin de la manche. Vous partagez les points.', 'Fin de la manche. %s gagne.', 'Fin du match. %s gagne.', 'Temps \xE9coul\xE9.', '%s gagne.', 'Le jeu se termine.', 'Point d\xE9cisif.', 'Set %s.', 'Jeu %s.', 'Point annul\xE9.', 'Star point.', 'Avantage %s.', 'Ace, %s.', 'Double faute, %s.', '\xC9galit\xE9.', 'Le match est termin\xE9.', '%1$s au service, %2$s %3$s.', '%s au service.', '%1$s %2$s, %3$s %4$s.', '%1$s m\xE8ne %2$s %3$s.', 'Jeux %1$s %2$s.', 'Sets %1$s %2$s.', 'Encore %s.', listOf_0(['z\xE9ro', 'quinze', 'trente', 'quarante']), 'avantage', mapOf_0([to(Barva_MODRA_getInstance(), 'bleu'), to(Barva_CERVENA_getInstance(), 'rouge'), to(Barva_ZELENA_getInstance(), 'vert'), to(Barva_ZLUTA_getInstance(), 'jaune'), to(Barva_BILA_getInstance(), 'blanc'), to(Barva_CERNA_getInstance(), 'noir')]), ' et ')), to(Jazyk_IT_getInstance(), new Hlasky('Fine del turno. Vi dividete i punti.', 'Fine del turno. Vince %s.', 'Partita finita. Vince %s.', 'Tempo scaduto.', 'Vince %s.', 'Si finisce il game.', 'Punto decisivo.', 'Set %s.', 'Gioco %s.', 'Punto annullato.', 'Star point.', 'Vantaggio %s.', 'Ace, %s.', 'Doppio fallo, %s.', 'Parit\xE0.', 'La partita \xE8 finita.', 'Serve %1$s, %2$s %3$s.', 'Serve %s.', '%1$s %2$s, %3$s %4$s.', '%1$s conduce %2$s %3$s.', 'Giochi %1$s %2$s.', 'Set %1$s %2$s.', 'Mancano %s.', listOf_0(['zero', 'quindici', 'trenta', 'quaranta']), 'vantaggio', mapOf_0([to(Barva_MODRA_getInstance(), 'blu'), to(Barva_CERVENA_getInstance(), 'rosso'), to(Barva_ZELENA_getInstance(), 'verde'), to(Barva_ZLUTA_getInstance(), 'giallo'), to(Barva_BILA_getInstance(), 'bianco'), to(Barva_CERNA_getInstance(), 'nero')]), ' e ')), to(Jazyk_PT_getInstance(), new Hlasky('Fim da ronda. Dividem os pontos.', 'Fim da ronda. Ganha %s.', 'Fim da partida. Ganha %s.', 'Acabou o tempo.', 'Ganha %s.', 'Termina-se o jogo.', 'Ponto decisivo.', 'Set %s.', 'Jogo %s.', 'Ponto anulado.', 'Star point.', 'Vantagem %s.', '\xC1s, %s.', 'Dupla falta, %s.', 'Iguais.', 'A partida terminou.', 'Serve %1$s, %2$s %3$s.', 'Serve %s.', '%1$s %2$s, %3$s %4$s.', '%1$s vai \xE0 frente %2$s %3$s.', 'Jogos %1$s %2$s.', 'Sets %1$s %2$s.', 'Faltam %s.', listOf_0(['zero', 'quinze', 'trinta', 'quarenta']), 'vantagem', mapOf_0([to(Barva_MODRA_getInstance(), 'azul'), to(Barva_CERVENA_getInstance(), 'vermelho'), to(Barva_ZELENA_getInstance(), 'verde'), to(Barva_ZLUTA_getInstance(), 'amarelo'), to(Barva_BILA_getInstance(), 'branco'), to(Barva_CERNA_getInstance(), 'preto')]), ' e ')), to(Jazyk_NL_getInstance(), new Hlasky('Einde van de ronde. Jullie delen de punten.', 'Einde van de ronde. %s wint.', 'Einde van de wedstrijd. %s wint.', 'De tijd is om.', '%s wint.', 'De game wordt uitgespeeld.', 'Beslissend punt.', 'Set %s.', 'Game %s.', 'Punt teruggedraaid.', 'Star point.', 'Voordeel %s.', 'Ace, %s.', 'Dubbele fout, %s.', 'Deuce.', 'De wedstrijd is voorbij.', '%1$s serveert, %2$s %3$s.', '%s serveert.', '%1$s %2$s, %3$s %4$s.', '%1$s staat voor, %2$s %3$s.', 'Games %1$s %2$s.', 'Sets %1$s %2$s.', 'Nog %s.', listOf_0(['nul', 'vijftien', 'dertig', 'veertig']), 'voordeel', mapOf_0([to(Barva_MODRA_getInstance(), 'blauw'), to(Barva_CERVENA_getInstance(), 'rood'), to(Barva_ZELENA_getInstance(), 'groen'), to(Barva_ZLUTA_getInstance(), 'geel'), to(Barva_BILA_getInstance(), 'wit'), to(Barva_CERNA_getInstance(), 'zwart')]), ' en ')), to(Jazyk_SV_getInstance(), new Hlasky('Rundan \xE4r slut. Ni delar p\xE5 po\xE4ngen.', 'Rundan \xE4r slut. %s vinner.', 'Matchen \xE4r slut. %s vinner.', 'Tiden \xE4r ute.', '%s vinner.', 'Gamet spelas klart.', 'Avg\xF6rande po\xE4ng.', 'Set %s.', 'Game %s.', 'Po\xE4ngen \xE5ngrad.', 'Star point.', 'F\xF6rdel %s.', 'Ess, %s.', 'Dubbelfel, %s.', 'Lika.', 'Matchen \xE4r slut.', '%1$s servar, %2$s %3$s.', '%s servar.', '%1$s %2$s, %3$s %4$s.', '%1$s leder %2$s %3$s.', 'Game %1$s %2$s.', 'Set %1$s %2$s.', '%s kvar.', listOf_0(['noll', 'femton', 'trettio', 'fyrtio']), 'f\xF6rdel', mapOf_0([to(Barva_MODRA_getInstance(), 'bl\xE5'), to(Barva_CERVENA_getInstance(), 'r\xF6d'), to(Barva_ZELENA_getInstance(), 'gr\xF6n'), to(Barva_ZLUTA_getInstance(), 'gul'), to(Barva_BILA_getInstance(), 'vit'), to(Barva_CERNA_getInstance(), 'svart')]), ' och ')), to(Jazyk_DA_getInstance(), new Hlasky('Runden er slut. I deler pointene.', 'Runden er slut. %s vinder.', 'Kampen er slut. %s vinder.', 'Tiden er g\xE5et.', '%s vinder.', 'Partiet spilles f\xE6rdigt.', 'Afg\xF8rende point.', 'S\xE6t %s.', 'Parti %s.', 'Point fortrudt.', 'Star point.', 'Fordel %s.', 'Es, %s.', 'Dobbeltfejl, %s.', 'Lige.', 'Kampen er slut.', '%1$s server, %2$s %3$s.', '%s server.', '%1$s %2$s, %3$s %4$s.', '%1$s f\xF8rer %2$s %3$s.', 'Partier %1$s %2$s.', 'S\xE6t %1$s %2$s.', '%s tilbage.', listOf_0(['nul', 'femten', 'tredive', 'fyrre']), 'fordel', mapOf_0([to(Barva_MODRA_getInstance(), 'bl\xE5'), to(Barva_CERVENA_getInstance(), 'r\xF8d'), to(Barva_ZELENA_getInstance(), 'gr\xF8n'), to(Barva_ZLUTA_getInstance(), 'gul'), to(Barva_BILA_getInstance(), 'hvid'), to(Barva_CERNA_getInstance(), 'sort')]), ' og ')), to(Jazyk_NB_getInstance(), new Hlasky('Runden er slutt. Dere deler poengene.', 'Runden er slutt. %s vinner.', 'Kampen er slutt. %s vinner.', 'Tiden er ute.', '%s vinner.', 'Gamet spilles ferdig.', 'Avgj\xF8rende poeng.', 'Sett %s.', 'Game %s.', 'Poeng angret.', 'Star point.', 'Fordel %s.', 'Ess, %s.', 'Dobbeltfeil, %s.', 'Likt.', 'Kampen er slutt.', '%1$s server, %2$s %3$s.', '%s server.', '%1$s %2$s, %3$s %4$s.', '%1$s leder %2$s %3$s.', 'Game %1$s %2$s.', 'Sett %1$s %2$s.', '%s igjen.', listOf_0(['null', 'femten', 'tretti', 'f\xF8rti']), 'fordel', mapOf_0([to(Barva_MODRA_getInstance(), 'bl\xE5'), to(Barva_CERVENA_getInstance(), 'r\xF8d'), to(Barva_ZELENA_getInstance(), 'gr\xF8nn'), to(Barva_ZLUTA_getInstance(), 'gul'), to(Barva_BILA_getInstance(), 'hvit'), to(Barva_CERNA_getInstance(), 'svart')]), ' og ')), to(Jazyk_FI_getInstance(), new Hlasky('Kierros p\xE4\xE4ttyi. Jaatte pisteet.', 'Kierros p\xE4\xE4ttyi. %s voittaa.', 'Ottelu p\xE4\xE4ttyi. %s voittaa.', 'Aika loppui.', '%s voittaa.', 'Peli pelataan loppuun.', 'Ratkaiseva piste.', 'Er\xE4 %s.', 'Peli %s.', 'Piste peruttu.', 'Star point.', 'Etu %s.', '\xC4ss\xE4, %s.', 'Kaksoisvirhe, %s.', 'Tasan.', 'Ottelu on p\xE4\xE4ttynyt.', '%1$s sy\xF6tt\xE4\xE4, %2$s %3$s.', '%s sy\xF6tt\xE4\xE4.', '%1$s %2$s, %3$s %4$s.', '%1$s johtaa %2$s %3$s.', 'Pelit %1$s %2$s.', 'Er\xE4t %1$s %2$s.', '%s j\xE4ljell\xE4.', listOf_0(['nolla', 'viisitoista', 'kolmekymment\xE4', 'nelj\xE4kymment\xE4']), 'etu', mapOf_0([to(Barva_MODRA_getInstance(), 'sininen'), to(Barva_CERVENA_getInstance(), 'punainen'), to(Barva_ZELENA_getInstance(), 'vihre\xE4'), to(Barva_ZLUTA_getInstance(), 'keltainen'), to(Barva_BILA_getInstance(), 'valkoinen'), to(Barva_CERNA_getInstance(), 'musta')]), ' ja ')), to(Jazyk_PL_getInstance(), new Hlasky('Koniec rundy. Dzielicie si\u0119 punktami.', 'Koniec rundy. Wygrywa %s.', 'Koniec meczu. Wygrywa %s.', 'Koniec czasu.', 'Wygrywa %s.', 'Gem zostanie doko\u0144czony.', 'Punkt decyduj\u0105cy.', 'Set %s.', 'Gem %s.', 'Punkt cofni\u0119ty.', 'Star point.', 'Przewaga %s.', 'As, %s.', 'Podw\xF3jny b\u0142\u0105d, %s.', 'R\xF3wnowaga.', 'Mecz zako\u0144czony.', 'Serwuje %1$s, %2$s %3$s.', 'Serwuje %s.', '%1$s %2$s, %3$s %4$s.', '%1$s prowadzi %2$s %3$s.', 'Gemy %1$s %2$s.', 'Sety %1$s %2$s.', 'Zosta\u0142o %s.', listOf_0(['zero', 'pi\u0119tna\u015Bcie', 'trzydzie\u015Bci', 'czterdzie\u015Bci']), 'przewaga', mapOf_0([to(Barva_MODRA_getInstance(), 'niebiescy'), to(Barva_CERVENA_getInstance(), 'czerwoni'), to(Barva_ZELENA_getInstance(), 'zieloni'), to(Barva_ZLUTA_getInstance(), '\u017C\xF3\u0142ci'), to(Barva_BILA_getInstance(), 'biali'), to(Barva_CERNA_getInstance(), 'czarni')]), ' i ')), to(Jazyk_SK_getInstance(), new Hlasky('Koniec kola. Del\xEDte sa o body.', 'Koniec kola. Vyhr\xE1va %s.', 'Koniec. Vyhr\xE1va %s.', 'Koniec \u010Dasu.', 'Vyhr\xE1va %s.', 'Gem sa dohr\xE1.', 'Rozhoduj\xFAca lopti\u010Dka.', 'Set %s.', 'Gem %s.', 'Bod vr\xE1ten\xFD.', 'Star point.', 'V\xFDhoda %s.', 'Eso, %s.', 'Dvojchyba, %s.', 'Zhoda.', 'Z\xE1pas skon\u010Dil.', 'Pod\xE1va %1$s, %2$s %3$s.', 'Pod\xE1va %s.', '%1$s %2$s, %3$s %4$s.', '%1$s vedie %2$s %3$s.', 'Gemy %1$s %2$s.', 'Sety %1$s %2$s.', 'Zost\xE1va %s.', listOf_0(['nula', 'p\xE4tn\xE1s\u0165', 'tridsa\u0165', '\u0161tyridsa\u0165']), 'v\xFDhoda', mapOf_0([to(Barva_MODRA_getInstance(), 'modr\xE1'), to(Barva_CERVENA_getInstance(), '\u010Derven\xE1'), to(Barva_ZELENA_getInstance(), 'zelen\xE1'), to(Barva_ZLUTA_getInstance(), '\u017Elt\xE1'), to(Barva_BILA_getInstance(), 'biela'), to(Barva_CERNA_getInstance(), '\u010Dierna')]), ' a ')), to(Jazyk_HU_getInstance(), new Hlasky('V\xE9ge a k\xF6rnek. Megosztoztok a pontokon.', 'V\xE9ge a k\xF6rnek. %s nyer.', 'V\xE9ge a meccsnek. %s nyer.', 'Lej\xE1rt az id\u0151.', '%s nyer.', 'A j\xE1t\xE9kot v\xE9gigj\xE1tssz\xE1k.', 'D\xF6nt\u0151 labda.', 'Szett, %s.', 'J\xE1t\xE9k, %s.', 'Pont visszavonva.', 'Star point.', 'El\u0151ny, %s.', '\xC1sz, %s.', 'Kett\u0151s hiba, %s.', 'Egyenl\u0151.', 'A meccs v\xE9get \xE9rt.', '%1$s adogat, %2$s %3$s.', '%s adogat.', '%1$s %2$s, %3$s %4$s.', '%1$s vezet, %2$s %3$s.', 'J\xE1t\xE9kok %1$s %2$s.', 'Szettek %1$s %2$s.', 'M\xE9g %s.', listOf_0(['nulla', 'tizen\xF6t', 'harminc', 'negyven']), 'el\u0151ny', mapOf_0([to(Barva_MODRA_getInstance(), 'k\xE9k'), to(Barva_CERVENA_getInstance(), 'piros'), to(Barva_ZELENA_getInstance(), 'z\xF6ld'), to(Barva_ZLUTA_getInstance(), 's\xE1rga'), to(Barva_BILA_getInstance(), 'feh\xE9r'), to(Barva_CERNA_getInstance(), 'fekete')]), ' \xE9s ')), to(Jazyk_RO_getInstance(), new Hlasky('Sf\xE2r\u0219itul rundei. \xCEmp\u0103r\u021Bi\u021Bi punctele.', 'Sf\xE2r\u0219itul rundei. C\xE2\u0219tig\u0103 %s.', 'Sf\xE2r\u0219itul meciului. C\xE2\u0219tig\u0103 %s.', 'Timpul a expirat.', 'C\xE2\u0219tig\u0103 %s.', 'Ghemul se joac\u0103 p\xE2n\u0103 la cap\u0103t.', 'Punct decisiv.', 'Set %s.', 'Ghem %s.', 'Punct anulat.', 'Star point.', 'Avantaj %s.', 'As, %s.', 'Dubl\u0103 gre\u0219eal\u0103, %s.', 'Egalitate.', 'Meciul s-a terminat.', 'Serve\u0219te %1$s, %2$s %3$s.', 'Serve\u0219te %s.', '%1$s %2$s, %3$s %4$s.', '%1$s conduce %2$s %3$s.', 'Gheme %1$s %2$s.', 'Seturi %1$s %2$s.', 'Mai sunt %s.', listOf_0(['zero', 'cincisprezece', 'treizeci', 'patruzeci']), 'avantaj', mapOf_0([to(Barva_MODRA_getInstance(), 'alba\u0219trii'), to(Barva_CERVENA_getInstance(), 'ro\u0219ii'), to(Barva_ZELENA_getInstance(), 'verzii'), to(Barva_ZLUTA_getInstance(), 'galbenii'), to(Barva_BILA_getInstance(), 'albii'), to(Barva_CERNA_getInstance(), 'negrii')]), ' \u0219i ')), to(Jazyk_HR_getInstance(), new Hlasky('Kraj kola. Dijelite bodove.', 'Kraj kola. Pobje\u0111uje %s.', 'Kraj me\u010Da. Pobje\u0111uje %s.', 'Vrijeme je isteklo.', 'Pobje\u0111uje %s.', 'Gem se igra do kraja.', 'Odlu\u010Duju\u0107i poen.', 'Set %s.', 'Gem %s.', 'Poen poni\u0161ten.', 'Star point.', 'Prednost %s.', 'As, %s.', 'Dvostruka pogre\u0161ka, %s.', 'Izjedna\u010Deno.', 'Me\u010D je zavr\u0161io.', 'Servira %1$s, %2$s %3$s.', 'Servira %s.', '%1$s %2$s, %3$s %4$s.', '%1$s vodi %2$s %3$s.', 'Gemovi %1$s %2$s.', 'Setovi %1$s %2$s.', 'Preostalo %s.', listOf_0(['nula', 'petnaest', 'trideset', '\u010Detrdeset']), 'prednost', mapOf_0([to(Barva_MODRA_getInstance(), 'plavi'), to(Barva_CERVENA_getInstance(), 'crveni'), to(Barva_ZELENA_getInstance(), 'zeleni'), to(Barva_ZLUTA_getInstance(), '\u017Euti'), to(Barva_BILA_getInstance(), 'bijeli'), to(Barva_CERNA_getInstance(), 'crni')]), ' i ')), to(Jazyk_SL_getInstance(), new Hlasky('Konec kroga. To\u010Dke si delite.', 'Konec kroga. Zmaga %s.', 'Konec tekme. Zmaga %s.', '\u010Cas je potekel.', 'Zmaga %s.', 'Igra se odigra do konca.', 'Odlo\u010Dilna to\u010Dka.', 'Niz %s.', 'Igra %s.', 'To\u010Dka preklicana.', 'Star point.', 'Prednost %s.', 'As, %s.', 'Dvojna napaka, %s.', 'Izena\u010Deno.', 'Tekma je kon\u010Dana.', 'Servira %1$s, %2$s %3$s.', 'Servira %s.', '%1$s %2$s, %3$s %4$s.', '%1$s vodi %2$s %3$s.', 'Igre %1$s %2$s.', 'Nizi %1$s %2$s.', '\u0160e %s.', listOf_0(['ni\u010D', 'petnajst', 'trideset', '\u0161tirideset']), 'prednost', mapOf_0([to(Barva_MODRA_getInstance(), 'modri'), to(Barva_CERVENA_getInstance(), 'rde\u010Di'), to(Barva_ZELENA_getInstance(), 'zeleni'), to(Barva_ZLUTA_getInstance(), 'rumeni'), to(Barva_BILA_getInstance(), 'beli'), to(Barva_CERNA_getInstance(), '\u010Drni')]), ' in ')), to(Jazyk_EL_getInstance(), new Hlasky('\u03A4\u03AD\u03BB\u03BF\u03C2 \u03B3\u03CD\u03C1\u03BF\u03C5. \u039C\u03BF\u03B9\u03C1\u03AC\u03B6\u03B5\u03C3\u03C4\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03C0\u03CC\u03BD\u03C4\u03BF\u03C5\u03C2.', '\u03A4\u03AD\u03BB\u03BF\u03C2 \u03B3\u03CD\u03C1\u03BF\u03C5. \u039A\u03B5\u03C1\u03B4\u03AF\u03B6\u03B5\u03B9 %s.', '\u03A4\u03AD\u03BB\u03BF\u03C2 \u03B1\u03B3\u03CE\u03BD\u03B1. \u039A\u03B5\u03C1\u03B4\u03AF\u03B6\u03B5\u03B9 %s.', '\u03A4\u03AD\u03BB\u03BF\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C5.', '\u039A\u03B5\u03C1\u03B4\u03AF\u03B6\u03B5\u03B9 %s.', '\u03A4\u03BF \u03B3\u03BA\u03AD\u03B9\u03BC \u03C0\u03B1\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03BC\u03AD\u03C7\u03C1\u03B9 \u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2.', '\u0391\u03C0\u03BF\u03C6\u03B1\u03C3\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC\u03C2 \u03C0\u03CC\u03BD\u03C4\u03BF\u03C2.', '\u03A3\u03B5\u03C4, %s.', '\u0393\u03BA\u03AD\u03B9\u03BC, %s.', '\u039F \u03C0\u03CC\u03BD\u03C4\u03BF\u03C2 \u03B1\u03BA\u03C5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5.', 'Star point.', '\u03A0\u03BB\u03B5\u03BF\u03BD\u03AD\u03BA\u03C4\u03B7\u03BC\u03B1, %s.', '\u0386\u03C3\u03BF\u03C2, %s.', '\u0394\u03B9\u03C0\u03BB\u03CC \u03BB\u03AC\u03B8\u03BF\u03C2, %s.', '\u0399\u03C3\u03BF\u03C0\u03B1\u03BB\u03AF\u03B1.', '\u039F \u03B1\u03B3\u03CE\u03BD\u03B1\u03C2 \u03C4\u03B5\u03BB\u03B5\u03AF\u03C9\u03C3\u03B5.', '\u03A3\u03B5\u03C1\u03B2\u03AF\u03C1\u03B5\u03B9 %1$s, %2$s %3$s.', '\u03A3\u03B5\u03C1\u03B2\u03AF\u03C1\u03B5\u03B9 %s.', '%1$s %2$s, %3$s %4$s.', '\u03A0\u03C1\u03BF\u03B7\u03B3\u03B5\u03AF\u03C4\u03B1\u03B9 %1$s, %2$s %3$s.', '\u0393\u03BA\u03AD\u03B9\u03BC %1$s %2$s.', '\u03A3\u03B5\u03C4 %1$s %2$s.', '\u0391\u03C0\u03BF\u03BC\u03AD\u03BD\u03BF\u03C5\u03BD %s.', listOf_0(['\u03BC\u03B7\u03B4\u03AD\u03BD', '\u03B4\u03B5\u03BA\u03B1\u03C0\u03AD\u03BD\u03C4\u03B5', '\u03C4\u03C1\u03B9\u03AC\u03BD\u03C4\u03B1', '\u03C3\u03B1\u03C1\u03AC\u03BD\u03C4\u03B1']), '\u03C0\u03BB\u03B5\u03BF\u03BD\u03AD\u03BA\u03C4\u03B7\u03BC\u03B1', mapOf_0([to(Barva_MODRA_getInstance(), '\u03BC\u03C0\u03BB\u03B5'), to(Barva_CERVENA_getInstance(), '\u03BA\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF\u03B9'), to(Barva_ZELENA_getInstance(), '\u03C0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF\u03B9'), to(Barva_ZLUTA_getInstance(), '\u03BA\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF\u03B9'), to(Barva_BILA_getInstance(), '\u03BB\u03B5\u03C5\u03BA\u03BF\u03AF'), to(Barva_CERNA_getInstance(), '\u03BC\u03B1\u03CD\u03C1\u03BF\u03B9')]), ' \u03BA\u03B1\u03B9 ')), to(Jazyk_TR_getInstance(), new Hlasky('Tur bitti. Puanlar\u0131 payla\u015F\u0131yorsunuz.', 'Tur bitti. Kazanan %s.', 'Ma\xE7 bitti. Kazanan %s.', 'S\xFCre doldu.', 'Kazanan %s.', 'Oyun sonuna kadar oynan\u0131r.', 'Belirleyici say\u0131.', 'Set, %s.', 'Oyun, %s.', 'Say\u0131 geri al\u0131nd\u0131.', 'Star point.', 'Avantaj, %s.', 'As, %s.', '\xC7ift hata, %s.', 'E\u015Fitlik.', 'Ma\xE7 bitti.', 'Servis %1$s, %2$s %3$s.', 'Servis %s.', '%1$s %2$s, %3$s %4$s.', '\xD6nde %1$s, %2$s %3$s.', 'Oyunlar %1$s %2$s.', 'Setler %1$s %2$s.', 'Kalan %s.', listOf_0(['s\u0131f\u0131r', 'on be\u015F', 'otuz', 'k\u0131rk']), 'avantaj', mapOf_0([to(Barva_MODRA_getInstance(), 'mavi'), to(Barva_CERVENA_getInstance(), 'k\u0131rm\u0131z\u0131'), to(Barva_ZELENA_getInstance(), 'ye\u015Fil'), to(Barva_ZLUTA_getInstance(), 'sar\u0131'), to(Barva_BILA_getInstance(), 'beyaz'), to(Barva_CERNA_getInstance(), 'siyah')]), ' ve ')), to(Jazyk_UK_getInstance(), new Hlasky('\u041A\u0456\u043D\u0435\u0446\u044C \u0440\u0430\u0443\u043D\u0434\u0443. \u041E\u0447\u043A\u0438 \u043F\u043E\u0440\u0456\u0432\u043D\u0443.', '\u041A\u0456\u043D\u0435\u0446\u044C \u0440\u0430\u0443\u043D\u0434\u0443. \u041F\u0435\u0440\u0435\u043C\u0430\u0433\u0430\u0454 %s.', '\u041A\u0456\u043D\u0435\u0446\u044C \u043C\u0430\u0442\u0447\u0443. \u041F\u0435\u0440\u0435\u043C\u0430\u0433\u0430\u0454 %s.', '\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043E\u0432.', '\u041F\u0435\u0440\u0435\u043C\u0430\u0433\u0430\u0454 %s.', '\u0413\u0435\u0439\u043C \u0434\u043E\u0433\u0440\u0430\u0432\u0430\u0454\u0442\u044C\u0441\u044F.', '\u0412\u0438\u0440\u0456\u0448\u0430\u043B\u044C\u043D\u0435 \u043E\u0447\u043A\u043E.', '\u0421\u0435\u0442, %s.', '\u0413\u0435\u0439\u043C, %s.', '\u041E\u0447\u043A\u043E \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E.', '\u0421\u0442\u0430\u0440-\u043F\u043E\u0439\u043D\u0442.', '\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0430, %s.', '\u0415\u0439\u0441, %s.', '\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430, %s.', '\u0420\u0456\u0432\u043D\u043E.', '\u041C\u0430\u0442\u0447 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043E.', '\u041F\u043E\u0434\u0430\u0454 %1$s, %2$s %3$s.', '\u041F\u043E\u0434\u0430\u0454 %s.', '%1$s %2$s, %3$s %4$s.', '%1$s \u0432\u0435\u0434\u0435, %2$s %3$s.', '\u0413\u0435\u0439\u043C\u0438 %1$s %2$s.', '\u0421\u0435\u0442\u0438 %1$s %2$s.', '\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C %s.', listOf_0(['\u043D\u0443\u043B\u044C', "\u043F'\u044F\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u044C", '\u0442\u0440\u0438\u0434\u0446\u044F\u0442\u044C', '\u0441\u043E\u0440\u043E\u043A']), '\u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0430', mapOf_0([to(Barva_MODRA_getInstance(), '\u0441\u0438\u043D\u0456'), to(Barva_CERVENA_getInstance(), '\u0447\u0435\u0440\u0432\u043E\u043D\u0456'), to(Barva_ZELENA_getInstance(), '\u0437\u0435\u043B\u0435\u043D\u0456'), to(Barva_ZLUTA_getInstance(), '\u0436\u043E\u0432\u0442\u0456'), to(Barva_BILA_getInstance(), '\u0431\u0456\u043B\u0456'), to(Barva_CERNA_getInstance(), '\u0447\u043E\u0440\u043D\u0456')]), ' \u0456 ')), to(Jazyk_AR_getInstance(), new Hlasky('\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u062C\u0648\u0644\u0629. \u062A\u062A\u0642\u0627\u0633\u0645\u0648\u0646 \u0627\u0644\u0646\u0642\u0627\u0637.', '\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u062C\u0648\u0644\u0629. \u0627\u0644\u0641\u0627\u0626\u0632 %s.', '\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629. \u0627\u0644\u0641\u0627\u0626\u0632 %s.', '\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0648\u0642\u062A.', '\u0627\u0644\u0641\u0627\u0626\u0632 %s.', '\u064A\u064F\u0633\u062A\u0643\u0645\u0644 \u0627\u0644\u0634\u0648\u0637 \u062D\u062A\u0649 \u0646\u0647\u0627\u064A\u062A\u0647.', '\u0646\u0642\u0637\u0629 \u062D\u0627\u0633\u0645\u0629.', '\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629\u060C %s.', '\u0627\u0644\u0634\u0648\u0637\u060C %s.', '\u0623\u064F\u0644\u063A\u064A\u062A \u0627\u0644\u0646\u0642\u0637\u0629.', '\u0633\u062A\u0627\u0631 \u0628\u0648\u064A\u0646\u062A.', '\u0623\u0641\u0636\u0644\u064A\u0629\u060C %s.', '\u0625\u0631\u0633\u0627\u0644 \u0633\u0627\u062D\u0642\u060C %s.', '\u062E\u0637\u0623 \u0645\u0632\u062F\u0648\u062C\u060C %s.', '\u062A\u0639\u0627\u062F\u0644.', '\u0627\u0646\u062A\u0647\u062A \u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629.', '\u064A\u0631\u0633\u0644 %1$s\u060C %2$s %3$s.', '\u064A\u0631\u0633\u0644 %s.', '%1$s %2$s\u060C %3$s %4$s.', '\u064A\u062A\u0642\u062F\u0645 %1$s\u060C %2$s %3$s.', '\u0627\u0644\u0623\u0634\u0648\u0627\u0637 %1$s %2$s.', '\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A %1$s %2$s.', '\u0645\u062A\u0628\u0642\u064D %s.', listOf_0(['\u0635\u0641\u0631', '\u062E\u0645\u0633\u0629 \u0639\u0634\u0631', '\u062B\u0644\u0627\u062B\u0648\u0646', '\u0623\u0631\u0628\u0639\u0648\u0646']), '\u0623\u0641\u0636\u0644\u064A\u0629', mapOf_0([to(Barva_MODRA_getInstance(), '\u0627\u0644\u0623\u0632\u0631\u0642'), to(Barva_CERVENA_getInstance(), '\u0627\u0644\u0623\u062D\u0645\u0631'), to(Barva_ZELENA_getInstance(), '\u0627\u0644\u0623\u062E\u0636\u0631'), to(Barva_ZLUTA_getInstance(), '\u0627\u0644\u0623\u0635\u0641\u0631'), to(Barva_BILA_getInstance(), '\u0627\u0644\u0623\u0628\u064A\u0636'), to(Barva_CERNA_getInstance(), '\u0627\u0644\u0623\u0633\u0648\u062F')]), ' \u0648')), to(Jazyk_JA_getInstance(), new Hlasky('\u30E9\u30A6\u30F3\u30C9\u7D42\u4E86\u3002\u30DD\u30A4\u30F3\u30C8\u306F\u5F15\u304D\u5206\u3051\u3067\u3059\u3002', '\u30E9\u30A6\u30F3\u30C9\u7D42\u4E86\u3002%s\u306E\u52DD\u3061\u3002', '\u8A66\u5408\u7D42\u4E86\u3002%s\u306E\u52DD\u3061\u3002', '\u6642\u9593\u5207\u308C\u3067\u3059\u3002', '%s\u306E\u52DD\u3061\u3002', '\u3053\u306E\u30B2\u30FC\u30E0\u306F\u6700\u5F8C\u307E\u3067\u30D7\u30EC\u30FC\u3057\u307E\u3059\u3002', '\u6C7A\u5B9A\u30DD\u30A4\u30F3\u30C8\u3002', '\u30BB\u30C3\u30C8\u3001%s\u3002', '\u30B2\u30FC\u30E0\u3001%s\u3002', '\u30DD\u30A4\u30F3\u30C8\u3092\u53D6\u308A\u6D88\u3057\u307E\u3057\u305F\u3002', '\u30B9\u30BF\u30FC\u30DD\u30A4\u30F3\u30C8\u3002', '\u30A2\u30C9\u30D0\u30F3\u30C6\u30FC\u30B8\u3001%s\u3002', '\u30A8\u30FC\u30B9\u3001%s\u3002', '\u30C0\u30D6\u30EB\u30D5\u30A9\u30EB\u30C8\u3001%s\u3002', '\u30C7\u30E5\u30FC\u30B9\u3002', '\u8A66\u5408\u304C\u7D42\u308F\u308A\u307E\u3057\u305F\u3002', '%1$s\u306E\u30B5\u30FC\u30D6\u3001%2$s %3$s\u3002', '%s\u306E\u30B5\u30FC\u30D6\u3002', '%1$s %2$s\u3001%3$s %4$s\u3002', '%1$s\u304C\u30EA\u30FC\u30C9\u3001%2$s %3$s\u3002', '\u30B2\u30FC\u30E0 %1$s %2$s\u3002', '\u30BB\u30C3\u30C8 %1$s %2$s\u3002', '\u6B8B\u308A%s\u3002', listOf_0(['\u30E9\u30D6', '\u30D5\u30A3\u30D5\u30C6\u30A3\u30FC\u30F3', '\u30B5\u30FC\u30C6\u30A3', '\u30D5\u30A9\u30FC\u30C6\u30A3']), '\u30A2\u30C9\u30D0\u30F3\u30C6\u30FC\u30B8', mapOf_0([to(Barva_MODRA_getInstance(), '\u9752'), to(Barva_CERVENA_getInstance(), '\u8D64'), to(Barva_ZELENA_getInstance(), '\u7DD1'), to(Barva_ZLUTA_getInstance(), '\u9EC4\u8272'), to(Barva_BILA_getInstance(), '\u767D'), to(Barva_CERNA_getInstance(), '\u9ED2')]), '\u3068')), to(Jazyk_ZH_getInstance(), new Hlasky('\u672C\u8F6E\u7ED3\u675F\u3002\u53CC\u65B9\u5E73\u5206\u79EF\u5206\u3002', '\u672C\u8F6E\u7ED3\u675F\u3002%s\u83B7\u80DC\u3002', '\u6BD4\u8D5B\u7ED3\u675F\u3002%s\u83B7\u80DC\u3002', '\u65F6\u95F4\u5230\u3002', '%s\u83B7\u80DC\u3002', '\u672C\u5C40\u6253\u5B8C\u3002', '\u51B3\u80DC\u5206\u3002', '\u672C\u76D8\uFF0C%s\u3002', '\u672C\u5C40\uFF0C%s\u3002', '\u5F97\u5206\u5DF2\u64A4\u9500\u3002', 'Star point\u3002', '\u5360\u5148\uFF0C%s\u3002', 'Ace\uFF0C%s\u3002', '\u53CC\u8BEF\uFF0C%s\u3002', '\u5E73\u5206\u3002', '\u6BD4\u8D5B\u7ED3\u675F\u4E86\u3002', '%1$s\u53D1\u7403\uFF0C%2$s %3$s\u3002', '%s\u53D1\u7403\u3002', '%1$s %2$s\uFF0C%3$s %4$s\u3002', '%1$s\u9886\u5148\uFF0C%2$s %3$s\u3002', '\u5C40\u6570 %1$s\u6BD4%2$s\u3002', '\u76D8\u6570 %1$s\u6BD4%2$s\u3002', '\u8FD8\u5269%s\u3002', listOf_0(['\u96F6', '\u5341\u4E94', '\u4E09\u5341', '\u56DB\u5341']), '\u5360\u5148', mapOf_0([to(Barva_MODRA_getInstance(), '\u84DD\u961F'), to(Barva_CERVENA_getInstance(), '\u7EA2\u961F'), to(Barva_ZELENA_getInstance(), '\u7EFF\u961F'), to(Barva_ZLUTA_getInstance(), '\u9EC4\u961F'), to(Barva_BILA_getInstance(), '\u767D\u961F'), to(Barva_CERNA_getInstance(), '\u9ED1\u961F')]), '\u548C')), to(Jazyk_ID_getInstance(), new Hlasky('Ronde selesai. Poin dibagi rata.', 'Ronde selesai. %s menang.', 'Pertandingan selesai. %s menang.', 'Waktu habis.', '%s menang.', 'Gim dimainkan sampai selesai.', 'Poin penentu.', 'Set, %s.', 'Gim, %s.', 'Poin dibatalkan.', 'Star point.', 'Keunggulan, %s.', 'Ace, %s.', 'Kesalahan ganda, %s.', 'Deuce.', 'Pertandingan sudah selesai.', '%1$s servis, %2$s %3$s.', '%s servis.', '%1$s %2$s, %3$s %4$s.', '%1$s unggul, %2$s %3$s.', 'Gim %1$s %2$s.', 'Set %1$s %2$s.', 'Sisa %s.', listOf_0(['nol', 'lima belas', 'tiga puluh', 'empat puluh']), 'keunggulan', mapOf_0([to(Barva_MODRA_getInstance(), 'biru'), to(Barva_CERVENA_getInstance(), 'merah'), to(Barva_ZELENA_getInstance(), 'hijau'), to(Barva_ZLUTA_getInstance(), 'kuning'), to(Barva_BILA_getInstance(), 'putih'), to(Barva_CERNA_getInstance(), 'hitam')]), ' dan ')), to(Jazyk_RU_getInstance(), new Hlasky('\u041A\u043E\u043D\u0435\u0446 \u0440\u0430\u0443\u043D\u0434\u0430. \u041E\u0447\u043A\u0438 \u043F\u043E\u0440\u043E\u0432\u043D\u0443.', '\u041A\u043E\u043D\u0435\u0446 \u0440\u0430\u0443\u043D\u0434\u0430. \u041F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 %s.', '\u041A\u043E\u043D\u0435\u0446 \u043C\u0430\u0442\u0447\u0430. \u041F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 %s.', '\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E.', '\u041F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 %s.', '\u0413\u0435\u0439\u043C \u0434\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F.', '\u0420\u0435\u0448\u0430\u044E\u0449\u0435\u0435 \u043E\u0447\u043A\u043E.', '\u0421\u0435\u0442, %s.', '\u0413\u0435\u0439\u043C, %s.', '\u041E\u0447\u043A\u043E \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.', '\u0421\u0442\u0430\u0440-\u043F\u043E\u0439\u043D\u0442.', '\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E, %s.', '\u042D\u0439\u0441, %s.', '\u0414\u0432\u043E\u0439\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430, %s.', '\u0420\u043E\u0432\u043D\u043E.', '\u041C\u0430\u0442\u0447 \u043E\u043A\u043E\u043D\u0447\u0435\u043D.', '\u041F\u043E\u0434\u0430\u0451\u0442 %1$s, %2$s %3$s.', '\u041F\u043E\u0434\u0430\u0451\u0442 %s.', '%1$s %2$s, %3$s %4$s.', '%1$s \u0432\u0435\u0434\u0451\u0442, %2$s %3$s.', '\u0413\u0435\u0439\u043C\u044B %1$s %2$s.', '\u0421\u0435\u0442\u044B %1$s %2$s.', '\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C %s.', listOf_0(['\u043D\u043E\u043B\u044C', '\u043F\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C', '\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C', '\u0441\u043E\u0440\u043E\u043A']), '\u0431\u043E\u043B\u044C\u0448\u0435', mapOf_0([to(Barva_MODRA_getInstance(), '\u0441\u0438\u043D\u0438\u0435'), to(Barva_CERVENA_getInstance(), '\u043A\u0440\u0430\u0441\u043D\u044B\u0435'), to(Barva_ZELENA_getInstance(), '\u0437\u0435\u043B\u0451\u043D\u044B\u0435'), to(Barva_ZLUTA_getInstance(), '\u0436\u0451\u043B\u0442\u044B\u0435'), to(Barva_BILA_getInstance(), '\u0431\u0435\u043B\u044B\u0435'), to(Barva_CERNA_getInstance(), '\u0447\u0451\u0440\u043D\u044B\u0435')]), ' \u0438 '))]);
  }
}
var Jazyk_CS_instance;
var Jazyk_EN_instance;
var Jazyk_DE_instance;
var Jazyk_ES_instance;
var Jazyk_FR_instance;
var Jazyk_IT_instance;
var Jazyk_PT_instance;
var Jazyk_NL_instance;
var Jazyk_SV_instance;
var Jazyk_DA_instance;
var Jazyk_NB_instance;
var Jazyk_FI_instance;
var Jazyk_PL_instance;
var Jazyk_SK_instance;
var Jazyk_HU_instance;
var Jazyk_RO_instance;
var Jazyk_HR_instance;
var Jazyk_SL_instance;
var Jazyk_EL_instance;
var Jazyk_TR_instance;
var Jazyk_UK_instance;
var Jazyk_AR_instance;
var Jazyk_JA_instance;
var Jazyk_ZH_instance;
var Jazyk_ID_instance;
var Jazyk_RU_instance;
function Companion_10() {
}
protoOf(Companion_10).sb = function (kod) {
  var tmp0 = get_entries_0();
  var tmp$ret$3;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.command.Companion.podleKodu.<anonymous>' call
      var tmp;
      if (kod == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = kod.toLowerCase();
      }
      if (element.vb_1 === tmp) {
        tmp$ret$3 = element;
        break $l$block;
      }
    }
    tmp$ret$3 = null;
  }
  var tmp0_elvis_lhs = tmp$ret$3;
  return tmp0_elvis_lhs == null ? Jazyk_CS_getInstance() : tmp0_elvis_lhs;
};
var Companion_instance_10;
function Companion_getInstance_10() {
  return Companion_instance_10;
}
function values_0() {
  return [Jazyk_CS_getInstance(), Jazyk_EN_getInstance(), Jazyk_DE_getInstance(), Jazyk_ES_getInstance(), Jazyk_FR_getInstance(), Jazyk_IT_getInstance(), Jazyk_PT_getInstance(), Jazyk_NL_getInstance(), Jazyk_SV_getInstance(), Jazyk_DA_getInstance(), Jazyk_NB_getInstance(), Jazyk_FI_getInstance(), Jazyk_PL_getInstance(), Jazyk_SK_getInstance(), Jazyk_HU_getInstance(), Jazyk_RO_getInstance(), Jazyk_HR_getInstance(), Jazyk_SL_getInstance(), Jazyk_EL_getInstance(), Jazyk_TR_getInstance(), Jazyk_UK_getInstance(), Jazyk_AR_getInstance(), Jazyk_JA_getInstance(), Jazyk_ZH_getInstance(), Jazyk_ID_getInstance(), Jazyk_RU_getInstance()];
}
function get_entries_0() {
  if ($ENTRIES_0 == null)
    $ENTRIES_0 = enumEntries(values_0());
  return $ENTRIES_0;
}
var Jazyk_entriesInitialized;
function Jazyk_initEntries() {
  if (Jazyk_entriesInitialized)
    return Unit_instance;
  Jazyk_entriesInitialized = true;
  Jazyk_CS_instance = new Jazyk('CS', 0, 'cs');
  Jazyk_EN_instance = new Jazyk('EN', 1, 'en');
  Jazyk_DE_instance = new Jazyk('DE', 2, 'de');
  Jazyk_ES_instance = new Jazyk('ES', 3, 'es');
  Jazyk_FR_instance = new Jazyk('FR', 4, 'fr');
  Jazyk_IT_instance = new Jazyk('IT', 5, 'it');
  Jazyk_PT_instance = new Jazyk('PT', 6, 'pt');
  Jazyk_NL_instance = new Jazyk('NL', 7, 'nl');
  Jazyk_SV_instance = new Jazyk('SV', 8, 'sv');
  Jazyk_DA_instance = new Jazyk('DA', 9, 'da');
  Jazyk_NB_instance = new Jazyk('NB', 10, 'nb');
  Jazyk_FI_instance = new Jazyk('FI', 11, 'fi');
  Jazyk_PL_instance = new Jazyk('PL', 12, 'pl');
  Jazyk_SK_instance = new Jazyk('SK', 13, 'sk');
  Jazyk_HU_instance = new Jazyk('HU', 14, 'hu');
  Jazyk_RO_instance = new Jazyk('RO', 15, 'ro');
  Jazyk_HR_instance = new Jazyk('HR', 16, 'hr');
  Jazyk_SL_instance = new Jazyk('SL', 17, 'sl');
  Jazyk_EL_instance = new Jazyk('EL', 18, 'el');
  Jazyk_TR_instance = new Jazyk('TR', 19, 'tr');
  Jazyk_UK_instance = new Jazyk('UK', 20, 'uk');
  Jazyk_AR_instance = new Jazyk('AR', 21, 'ar');
  Jazyk_JA_instance = new Jazyk('JA', 22, 'ja');
  Jazyk_ZH_instance = new Jazyk('ZH', 23, 'zh');
  Jazyk_ID_instance = new Jazyk('ID', 24, 'id');
  Jazyk_RU_instance = new Jazyk('RU', 25, 'ru');
}
var $ENTRIES_0;
function Jazyk(name, ordinal, kod) {
  Enum.call(this, name, ordinal);
  this.vb_1 = kod;
}
function Jazyk_CS_getInstance() {
  Jazyk_initEntries();
  return Jazyk_CS_instance;
}
function Jazyk_EN_getInstance() {
  Jazyk_initEntries();
  return Jazyk_EN_instance;
}
function Jazyk_DE_getInstance() {
  Jazyk_initEntries();
  return Jazyk_DE_instance;
}
function Jazyk_ES_getInstance() {
  Jazyk_initEntries();
  return Jazyk_ES_instance;
}
function Jazyk_FR_getInstance() {
  Jazyk_initEntries();
  return Jazyk_FR_instance;
}
function Jazyk_IT_getInstance() {
  Jazyk_initEntries();
  return Jazyk_IT_instance;
}
function Jazyk_PT_getInstance() {
  Jazyk_initEntries();
  return Jazyk_PT_instance;
}
function Jazyk_NL_getInstance() {
  Jazyk_initEntries();
  return Jazyk_NL_instance;
}
function Jazyk_SV_getInstance() {
  Jazyk_initEntries();
  return Jazyk_SV_instance;
}
function Jazyk_DA_getInstance() {
  Jazyk_initEntries();
  return Jazyk_DA_instance;
}
function Jazyk_NB_getInstance() {
  Jazyk_initEntries();
  return Jazyk_NB_instance;
}
function Jazyk_FI_getInstance() {
  Jazyk_initEntries();
  return Jazyk_FI_instance;
}
function Jazyk_PL_getInstance() {
  Jazyk_initEntries();
  return Jazyk_PL_instance;
}
function Jazyk_SK_getInstance() {
  Jazyk_initEntries();
  return Jazyk_SK_instance;
}
function Jazyk_HU_getInstance() {
  Jazyk_initEntries();
  return Jazyk_HU_instance;
}
function Jazyk_RO_getInstance() {
  Jazyk_initEntries();
  return Jazyk_RO_instance;
}
function Jazyk_HR_getInstance() {
  Jazyk_initEntries();
  return Jazyk_HR_instance;
}
function Jazyk_SL_getInstance() {
  Jazyk_initEntries();
  return Jazyk_SL_instance;
}
function Jazyk_EL_getInstance() {
  Jazyk_initEntries();
  return Jazyk_EL_instance;
}
function Jazyk_TR_getInstance() {
  Jazyk_initEntries();
  return Jazyk_TR_instance;
}
function Jazyk_UK_getInstance() {
  Jazyk_initEntries();
  return Jazyk_UK_instance;
}
function Jazyk_AR_getInstance() {
  Jazyk_initEntries();
  return Jazyk_AR_instance;
}
function Jazyk_JA_getInstance() {
  Jazyk_initEntries();
  return Jazyk_JA_instance;
}
function Jazyk_ZH_getInstance() {
  Jazyk_initEntries();
  return Jazyk_ZH_instance;
}
function Jazyk_ID_getInstance() {
  Jazyk_initEntries();
  return Jazyk_ID_instance;
}
function Jazyk_RU_getInstance() {
  Jazyk_initEntries();
  return Jazyk_RU_instance;
}
function Krok(tah, cas, novaSeance, poradi) {
  poradi = poradi === VOID ? -1 : poradi;
  this.wb_1 = tah;
  this.xb_1 = cas;
  this.yb_1 = novaSeance;
  this.zb_1 = poradi;
}
protoOf(Krok).toString = function () {
  return 'Krok(tah=' + toString_1(this.wb_1) + ', cas=' + toString_0(this.xb_1) + ', novaSeance=' + this.yb_1 + ', poradi=' + this.zb_1 + ')';
};
protoOf(Krok).hashCode = function () {
  var result = hashCode(this.wb_1);
  result = imul_0(result, 31) + (this.xb_1 == null ? 0 : this.xb_1.hashCode()) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.yb_1) | 0;
  result = imul_0(result, 31) + this.zb_1 | 0;
  return result;
};
protoOf(Krok).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Krok))
    return false;
  var tmp0_other_with_cast = other instanceof Krok ? other : THROW_CCE();
  if (!equals(this.wb_1, tmp0_other_with_cast.wb_1))
    return false;
  if (!equals(this.xb_1, tmp0_other_with_cast.xb_1))
    return false;
  if (!(this.yb_1 === tmp0_other_with_cast.yb_1))
    return false;
  if (!(this.zb_1 === tmp0_other_with_cast.zb_1))
    return false;
  return true;
};
function Delky(sety, celkem) {
  this.ac_1 = sety;
  this.bc_1 = celkem;
}
protoOf(Delky).cc = function () {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.ac_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.core.Delky.<get-setySekund>.<anonymous>' call
    // Inline function 'kotlin.Long.div' call
    var tmp$ret$1 = item.q1(toLong(1000));
    destination.e(tmp$ret$1);
  }
  return destination;
};
protoOf(Delky).dc = function () {
  // Inline function 'kotlin.Long.div' call
  return this.bc_1.q1(toLong(1000));
};
protoOf(Delky).ec = function () {
  return Casy_getInstance().gc(this.bc_1);
};
protoOf(Delky).toString = function () {
  return 'Delky(sety=' + toString_1(this.ac_1) + ', celkem=' + this.bc_1.toString() + ')';
};
protoOf(Delky).hashCode = function () {
  var result = hashCode(this.ac_1);
  result = imul_0(result, 31) + this.bc_1.hashCode() | 0;
  return result;
};
protoOf(Delky).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Delky))
    return false;
  var tmp0_other_with_cast = other instanceof Delky ? other : THROW_CCE();
  if (!equals(this.ac_1, tmp0_other_with_cast.ac_1))
    return false;
  if (!this.bc_1.equals(tmp0_other_with_cast.bc_1))
    return false;
  return true;
};
function Casy() {
  Casy_instance = this;
  this.fc_1 = new Long(21600000, 0);
}
protoOf(Casy).hc = function (zaznam, casy, noveSeance) {
  var maCasy = casy.l() === zaznam.l();
  // Inline function 'kotlin.collections.mutableListOf' call
  var ven = ArrayList_init_$Create$();
  var iterator = zaznam.g();
  var index = 0;
  $l$loop: while (iterator.h()) {
    var i = index;
    index = index + 1 | 0;
    var tah = iterator.i();
    if (tah instanceof Zpet) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!ven.k()) {
        ven.p2(ven.l() - 1 | 0);
      }
      continue $l$loop;
    }
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new Krok(tah, maCasy ? casy.j(i) : null, noveSeance.z(i), i);
    ven.e(element);
  }
  return ven;
};
protoOf(Casy).ic = function (zaznam, casy, noveSeance, $super) {
  casy = casy === VOID ? emptyList() : casy;
  noveSeance = noveSeance === VOID ? emptySet() : noveSeance;
  return $super === VOID ? this.hc(zaznam, casy, noveSeance) : $super.hc.call(this, zaznam, casy, noveSeance);
};
protoOf(Casy).jc = function (krok, predchozi) {
  var tmp0_elvis_lhs = krok.xb_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return new Long(0, 0);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var c = tmp;
  if (predchozi == null || krok.yb_1)
    return new Long(0, 0);
  var rozdil = c.o1(predchozi);
  return rozdil.n1(new Long(0, 0)) > 0 && rozdil.n1(new Long(21600000, 0)) <= 0 ? rozdil : new Long(0, 0);
};
protoOf(Casy).gc = function (ms) {
  var tmp;
  if (ms.n1(new Long(0, 0)) <= 0) {
    tmp = new Long(0, 0);
  } else {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.div' call
    tmp = ms.s(toLong(30000)).q1(toLong(60000));
  }
  return tmp;
};
protoOf(Casy).kc = function (vychozi, zaznam, casy, noveSeance) {
  if (!(casy.l() === zaznam.l()) || zaznam.k()) {
    return new Delky(emptyList(), new Long(0, 0));
  }
  var zapas = Engine_instance.xc(vychozi.lc_1, vychozi.mc_1, vychozi.nc_1, vychozi.oc_1);
  // Inline function 'kotlin.collections.mutableListOf' call
  var hotoveSety = ArrayList_init_$Create$();
  var tentoSet = new Long(0, 0);
  var predchozi = null;
  var _iterator__ex2g4s = this.hc(zaznam, casy, noveSeance).g();
  $l$loop: while (_iterator__ex2g4s.h()) {
    var krok = _iterator__ex2g4s.i();
    var v = Engine_instance.yc(zapas, krok.wb_1);
    if (!(v instanceof Prijato))
      continue $l$loop;
    zapas = v.zc_1;
    var tmp = krok.wb_1;
    if (tmp instanceof Bod) {
      tentoSet = tentoSet.s(this.jc(krok, predchozi));
      predchozi = krok.xb_1;
    }
    var tmp0 = v.ad_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.k();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.g();
      while (_iterator__ex2g4s_0.h()) {
        var element = _iterator__ex2g4s_0.i();
        // Inline function 'cz.padelcesko.score.core.Casy.spocti.<anonymous>' call
        var tmp_1;
        if (element instanceof SetZiskan) {
          tmp_1 = true;
        } else {
          tmp_1 = element instanceof KoloSkoncilo;
        }
        if (tmp_1) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
      tmp$ret$1 = false;
    }
    var konec = tmp$ret$1;
    if (konec) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = tentoSet;
      hotoveSety.e(element_0);
      tentoSet = new Long(0, 0);
    }
  }
  var sety = tentoSet.n1(new Long(0, 0)) > 0 ? plus(hotoveSety, tentoSet) : toList(hotoveSety);
  return new Delky(sety, sum(sety));
};
var Casy_instance;
function Casy_getInstance() {
  if (Casy_instance == null)
    new Casy();
  return Casy_instance;
}
function prohodStranyHracu($this, zapas, tah) {
  var s = zapas.bd_1;
  if (s.sa_1.equals(Faze_KONEC_getInstance()))
    return new Odmitnuto('z\xE1pas u\u017E skon\u010Dil');
  if (s.la_1.db(tah.ed_1).mb_1.l() < 2)
    return new Odmitnuto('t\xFDm m\xE1 jen jednoho hr\xE1\u010De');
  return new Prijato(new Zapas(s, plus(zapas.cd_1, s), plus(zapas.dd_1, tah)), emptyList());
}
function konecCasu($this, zapas) {
  var s = zapas.bd_1;
  if (s.sa_1.equals(Faze_KONEC_getInstance()))
    return new Odmitnuto('z\xE1pas u\u017E skon\u010Dil');
  if (!s.ka_1.sd())
    return new Odmitnuto('z\xE1pas se nehraje na \u010Das');
  if (s.td())
    return new Odmitnuto('\u010Das u\u017E vypr\u0161el');
  var udalosti = mutableListOf([CasVyprsel_instance]);
  var tmp;
  if (s.ka_1.ld_1.equals(Format_AMERICANO_getInstance())) {
    tmp = rozhodniPoCase($this, s, s.qa_1, udalosti);
  } else {
    var rozehrany = s.qa_1.ud() > 0;
    var muzeRozhodnout = abs(s.pa_1.bb_1 - s.pa_1.cb_1 | 0) <= 1;
    var tmp_0;
    if (rozehrany && muzeRozhodnout) {
      tmp_0 = s.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true);
    } else {
      tmp_0 = rozhodniPoCase($this, s.vd(VOID, VOID, VOID, VOID, VOID, VOID, new SetSkore(0, 0), 0), s.pa_1, udalosti);
    }
    tmp = tmp_0;
  }
  var novy = tmp;
  return new Prijato(new Zapas(novy, plus(zapas.cd_1, s), plus(zapas.dd_1, KonecCasu_instance)), udalosti);
}
function rozhodniPoCase($this, stav, skore, udalosti) {
  var vitez = skore.bb_1 > skore.cb_1 ? TymId_A_getInstance() : skore.cb_1 > skore.bb_1 ? TymId_B_getInstance() : null;
  if (vitez == null) {
    // Inline function 'kotlin.collections.plusAssign' call
    udalosti.e(RozhodujiciBod_instance);
    return stav.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false, true);
  }
  return skonciPoCase($this, stav, vitez, udalosti);
}
function poRozhodujicimBodu($this, stav, tym, udalosti) {
  var tmp;
  if (stav.ka_1.ld_1.equals(Format_AMERICANO_getInstance())) {
    tmp = stav;
  } else {
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new GemZiskan(tym);
    udalosti.e(element);
    tmp = stav.vd(VOID, VOID, VOID, VOID, VOID, stav.pa_1.wd(tym, stav.pa_1.db(tym) + 1 | 0), new SetSkore(0, 0));
  }
  var sGemem = tmp;
  return skonciPoCase($this, sGemem, tym, udalosti);
}
function skonciPoCase($this, stav, vitez, udalosti) {
  if (stav.ka_1.ld_1.equals(Format_AMERICANO_getInstance())) {
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new KoloSkoncilo(vitez);
    udalosti.e(element);
  }
  // Inline function 'kotlin.collections.plusAssign' call
  var element_0 = new ZapasSkoncil(vitez);
  udalosti.e(element_0);
  var tmp0_faze = Faze_KONEC_getInstance();
  return stav.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp0_faze, VOID, vitez, null, VOID, VOID, VOID, false, false);
}
function ukonci($this, zapas) {
  var s = zapas.bd_1;
  if (s.sa_1.equals(Faze_KONEC_getInstance()))
    return new Odmitnuto('z\xE1pas u\u017E skon\u010Dil');
  var skore = s.ka_1.yd() ? !(s.kb().bb_1 === s.kb().cb_1) ? s.kb() : s.pa_1 : s.ka_1.xd() ? s.pa_1 : null;
  var tmp;
  if (skore == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Engine.ukonci.<anonymous>' call
    tmp = skore.bb_1 > skore.cb_1 ? TymId_A_getInstance() : skore.cb_1 > skore.bb_1 ? TymId_B_getInstance() : null;
  }
  var vitez = tmp;
  var udalosti = !(vitez == null) ? listOf(new ZapasSkoncil(vitez)) : emptyList();
  return new Prijato(zapas.zd(s.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Faze_KONEC_getInstance(), VOID, vitez, null), plus(zapas.cd_1, s), plus(zapas.dd_1, UkoncitZapas_instance)), udalosti);
}
function zvol($this, zapas, tah) {
  var s = zapas.bd_1;
  var tmp0_elvis_lhs = s.va_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return new Odmitnuto('na volbu pod\xE1vaj\xEDc\xEDho se ne\u010Dek\xE1');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var ceka = tmp;
  if (s.sa_1.equals(Faze_KONEC_getInstance()))
    return new Odmitnuto('z\xE1pas u\u017E skon\u010Dil');
  var tmp_0;
  if (ceka instanceof ZTymu) {
    tmp_0 = !ceka.ae_1.equals(tah.be_1);
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    return new Odmitnuto('te\u010F vol\xED druh\xFD t\xFDm');
  }
  var tym = s.la_1.db(tah.be_1);
  var containsUpper = tym.mb_1.l() - 1 | 0;
  var containsArg = tah.ce_1;
  if (!(0 <= containsArg ? containsArg <= containsUpper : false))
    return new Odmitnuto('takov\xFD hr\xE1\u010D v t\xFDmu nen\xED');
  var podani = new Podani(tah.be_1, tah.ce_1);
  var tmp1_pristiHrac = plus_2(s.na_1, to(tah.be_1, dalsi($this, tym, tah.ce_1)));
  var tmp2_zvolenoVSetu = plus_1(s.wa_1, tah.be_1);
  var novy = s.vd(VOID, VOID, podani, tmp1_pristiHrac, VOID, VOID, VOID, VOID, VOID, VOID, VOID, null, tmp2_zvolenoVSetu);
  return new Prijato(new Zapas(novy, plus(zapas.cd_1, s), plus(zapas.dd_1, tah)), listOf(new PodaniZmeneno(podani)));
}
function zpet($this, zapas) {
  var tmp0_elvis_lhs = lastOrNull(zapas.cd_1);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return new Odmitnuto('nen\xED co vracet');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var predchozi = tmp;
  return new Prijato(new Zapas(predchozi, dropLast(zapas.cd_1, 1), plus(zapas.dd_1, Zpet_instance)), listOf(BodVracen_instance));
}
function bod($this, zapas, tym) {
  var puvodni = zapas.bd_1;
  if (puvodni.sa_1.equals(Faze_KONEC_getInstance()))
    return new Odmitnuto('z\xE1pas u\u017E skon\u010Dil');
  var udalosti = mutableListOf([new BodPripsan(tym)]);
  var tmp;
  if (puvodni.xa_1) {
    // Inline function 'kotlin.collections.plusAssign' call
    udalosti.e(TieBreak_instance);
    tmp = puvodni.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Faze_TIE_BREAK_getInstance(), VOID, VOID, VOID, VOID, false);
  } else {
    tmp = puvodni;
  }
  var s = tmp;
  var novy = s.vd(VOID, VOID, VOID, VOID, VOID, VOID, s.qa_1.wd(tym, s.qa_1.db(tym) + 1 | 0));
  if (!(s.va_1 == null)) {
    novy = novy.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, null, plus_1(novy.wa_1, s.ma_1.eb_1));
  }
  var tmp_0;
  if (s.ab_1) {
    tmp_0 = poRozhodujicimBodu($this, novy, tym, udalosti);
  } else {
    var tmp_1;
    switch (s.sa_1.h1_1) {
      case 0:
        tmp_1 = poBoduVGemu($this, s, novy, tym, udalosti);
        break;
      case 1:
      case 2:
        tmp_1 = poBoduVTieBreaku($this, s, novy, tym, udalosti);
        break;
      case 3:
        tmp_1 = poBoduVAmericanu($this, novy, udalosti);
        break;
      case 4:
        tmp_1 = novy;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp_0 = tmp_1;
  }
  novy = tmp_0;
  return new Prijato(new Zapas(novy, plus(zapas.cd_1, puvodni), plus(zapas.dd_1, new Bod(tym))), udalosti);
}
function zvolTieBreak($this, zapas, tah) {
  var s = zapas.bd_1;
  if (!s.xa_1)
    return new Odmitnuto('na volbu tie-breaku se ne\u010Dek\xE1');
  // Inline function 'kotlin.collections.mutableListOf' call
  var udalosti = ArrayList_init_$Create$();
  var tmp;
  if (tah.de_1) {
    // Inline function 'kotlin.collections.plusAssign' call
    udalosti.e(TieBreak_instance);
    tmp = s.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Faze_TIE_BREAK_getInstance(), VOID, VOID, VOID, VOID, false);
  } else {
    tmp = s.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, false, true);
  }
  var novy = tmp;
  return new Prijato(new Zapas(novy, plus(zapas.cd_1, s), plus(zapas.dd_1, tah)), udalosti);
}
function poBoduVGemu($this, puvodni, stav, tym, udalosti) {
  var a = stav.qa_1.bb_1;
  var b = stav.qa_1.cb_1;
  var muj = stav.qa_1.db(tym);
  var soupere = stav.qa_1.db(tym.ib());
  var promarnene = stav.ra_1;
  var byloVyhoda = puvodni.qa_1.bb_1 >= 3 && puvodni.qa_1.cb_1 >= 3 && abs(puvodni.qa_1.bb_1 - puvodni.qa_1.cb_1 | 0) === 1;
  if (byloVyhoda && muj === soupere) {
    promarnene = promarnene + 1 | 0;
  }
  var sPromarnenymi = stav.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, promarnene);
  var vitezGemu = $this.ee(a, b, stav.ka_1.fd_1, promarnene);
  if (!(vitezGemu == null)) {
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new GemZiskan(vitezGemu);
    udalosti.e(element);
    return poGemu($this, sPromarnenymi, vitezGemu, udalosti);
  }
  if (muj >= 3 && soupere >= 3) {
    if (muj === soupere) {
      // Inline function 'kotlin.collections.plusAssign' call
      udalosti.e(Shoda_instance);
      if (stav.ka_1.fd_1.equals(Shoda_STAR_POINT_getInstance()) && promarnene >= 2) {
        // Inline function 'kotlin.collections.plusAssign' call
        udalosti.e(StarPoint_instance);
      }
    } else if (muj > soupere) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = new Vyhoda(tym);
      udalosti.e(element_0);
    }
  }
  return sPromarnenymi;
}
function poGemu($this, stav, vitez, udalosti) {
  var novy = stav.vd(VOID, VOID, VOID, VOID, VOID, stav.pa_1.wd(vitez, stav.pa_1.db(vitez) + 1 | 0), new SetSkore(0, 0), 0);
  if (novy.za_1) {
    novy = rozhodniPoCase($this, novy, novy.pa_1, udalosti);
    if (novy.sa_1.equals(Faze_KONEC_getInstance()))
      return novy;
    novy = predejPodani($this, novy, udalosti);
    return prohodStranyPoGemu($this, novy, udalosti);
  }
  var vitezSetu_0 = vitezSetu($this, novy.pa_1, novy.ka_1, novy.ya_1);
  if (!(vitezSetu_0 == null)) {
    return poSetu($this, novy, vitezSetu_0, udalosti);
  }
  if (novy.pa_1.bb_1 === 6 && novy.pa_1.cb_1 === 6 && !novy.ka_1.xd() && !novy.ya_1) {
    if (novy.ka_1.pd_1) {
      novy = novy.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true);
    } else {
      novy = novy.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Faze_TIE_BREAK_getInstance());
      // Inline function 'kotlin.collections.plusAssign' call
      udalosti.e(TieBreak_instance);
    }
  }
  novy = predejPodani($this, novy, udalosti);
  return prohodStranyPoGemu($this, novy, udalosti);
}
function vitezSetu($this, gemy, pravidla, bezTieBreaku) {
  if (pravidla.xd())
    return null;
  var vedouci = gemy.bb_1 > gemy.cb_1 ? TymId_A_getInstance() : TymId_B_getInstance();
  var tmp0 = gemy.bb_1;
  // Inline function 'kotlin.comparisons.maxOf' call
  var b = gemy.cb_1;
  var vyssi = Math.max(tmp0, b);
  var tmp2 = gemy.bb_1;
  // Inline function 'kotlin.comparisons.minOf' call
  var b_0 = gemy.cb_1;
  var nizsi = Math.min(tmp2, b_0);
  if (gemy.bb_1 === gemy.cb_1)
    return null;
  if (bezTieBreaku)
    return vyssi >= 6 && (vyssi - nizsi | 0) >= 2 ? vedouci : null;
  if (vyssi === 6 && nizsi <= 4)
    return vedouci;
  if (vyssi === 7 && (nizsi === 5 || nizsi === 6))
    return vedouci;
  return null;
}
function poBoduVTieBreaku($this, puvodni, stav, tym, udalosti) {
  var tmp;
  if (stav.sa_1.equals(Faze_SUPER_TIE_BREAK_getInstance())) {
    tmp = stav.ka_1.jd_1;
  } else {
    tmp = stav.ka_1.id_1;
  }
  var cil = tmp;
  var muj = stav.qa_1.db(tym);
  var soupere = stav.qa_1.db(tym.ib());
  if (muj >= cil && (muj - soupere | 0) >= 2) {
    var tmp_0;
    if (stav.sa_1.equals(Faze_SUPER_TIE_BREAK_getInstance())) {
      tmp_0 = (new SetSkore(0, 0)).wd(tym, 1);
    } else {
      tmp_0 = stav.pa_1.wd(tym, stav.pa_1.db(tym) + 1 | 0);
    }
    var gemy = tmp_0;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new GemZiskan(tym);
    udalosti.e(element);
    var poGemu = stav.vd(VOID, VOID, VOID, VOID, VOID, gemy, new SetSkore(0, 0), 0);
    return poSetu($this, poGemu, tym, udalosti);
  }
  var celkem = stav.qa_1.ud();
  return (celkem % 2 | 0) === 1 ? predejPodani($this, stav, udalosti) : stav;
}
function poBoduVAmericanu($this, stav, udalosti) {
  var soucet = stav.qa_1.ud();
  var cil = stav.ka_1.md_1;
  if (!stav.ka_1.sd() && soucet >= cil) {
    var vitez = stav.qa_1.bb_1 > stav.qa_1.cb_1 ? TymId_A_getInstance() : stav.qa_1.cb_1 > stav.qa_1.bb_1 ? TymId_B_getInstance() : null;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new KoloSkoncilo(vitez);
    udalosti.e(element);
    if (!(vitez == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = new ZapasSkoncil(vitez);
      udalosti.e(element_0);
    }
    return stav.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Faze_KONEC_getInstance(), VOID, vitez);
  }
  var po = coerceAtLeast(stav.ka_1.nd_1, 1);
  return (soucet % po | 0) === 0 ? predejPodani($this, stav, udalosti) : stav;
}
function poSetu($this, stav, vitez, udalosti) {
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new SetZiskan(vitez);
  udalosti.e(element);
  var dohrane = plus(stav.oa_1, stav.pa_1);
  var tmp0_gemy = new SetSkore(0, 0);
  var tmp1_body = new SetSkore(0, 0);
  var tmp2_faze = Faze_GEM_getInstance();
  var novy = stav.vd(VOID, VOID, VOID, VOID, dohrane, tmp0_gemy, tmp1_body, 0, tmp2_faze, VOID, VOID, VOID, VOID, false, false);
  var sety = novy.kb();
  if (!novy.ka_1.yd() && sety.db(vitez) >= novy.ka_1.gd_1) {
    // Inline function 'kotlin.collections.plusAssign' call
    var element_0 = new ZapasSkoncil(vitez);
    udalosti.e(element_0);
    return novy.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Faze_KONEC_getInstance(), VOID, vitez);
  }
  if (jeSuperTieBreakSet($this, novy.ka_1, sety)) {
    novy = novy.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Faze_SUPER_TIE_BREAK_getInstance());
    // Inline function 'kotlin.collections.plusAssign' call
    udalosti.e(SuperTieBreak_instance);
  }
  if (novy.ka_1.od_1)
    novy = novy.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, emptySet());
  novy = predejPodani($this, novy, udalosti);
  if (!novy.ka_1.kd_1.equals(ProhazovaniStran_NIKDY_getInstance())) {
    novy = prohod($this, novy, udalosti);
  }
  return novy;
}
function jeSuperTieBreakSet($this, pravidla, sety) {
  return !pravidla.ld_1.equals(Format_VOLNE_getInstance()) && pravidla.hd_1 && sety.bb_1 === (pravidla.gd_1 - 1 | 0) && sety.cb_1 === (pravidla.gd_1 - 1 | 0);
}
function dalsi($this, tym, hrac) {
  return (hrac + 1 | 0) % tym.mb_1.l() | 0;
}
function predejPodani($this, stav, udalosti) {
  var novyTym = stav.ma_1.eb_1.ib();
  var hrac = coerceAtMost(getValue(stav.na_1, novyTym), stav.la_1.db(novyTym).mb_1.l() - 1 | 0);
  var podani = new Podani(novyTym, hrac);
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new PodaniZmeneno(podani);
  udalosti.e(element);
  var novy = stav.vd(VOID, VOID, podani, plus_2(stav.na_1, to(novyTym, dalsi($this, stav.la_1.db(novyTym), hrac))));
  if (stav.ka_1.od_1 && !stav.wa_1.z(novyTym)) {
    return novy.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, new ZTymu(novyTym));
  }
  return novy;
}
function prohodStranyPoGemu($this, stav, udalosti) {
  if (!stav.sa_1.equals(Faze_GEM_getInstance()))
    return stav;
  if (!stav.ka_1.kd_1.equals(ProhazovaniStran_PO_LICHYCH_GEMECH_getInstance()))
    return stav;
  if ((stav.pa_1.ud() % 2 | 0) === 0)
    return stav;
  return prohod($this, stav, udalosti);
}
function prohod($this, stav, udalosti) {
  // Inline function 'kotlin.collections.plusAssign' call
  udalosti.e(StranyProhozeny_instance);
  return stav.vd(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, stav.ta_1.ib());
}
function Engine() {
}
protoOf(Engine).xc = function (pravidla, tymy, zacinaPodavat, prvniHraci) {
  var faze = pravidla.ld_1.equals(Format_AMERICANO_getInstance()) ? Faze_AMERICANO_getInstance() : jeSuperTieBreakSet(this, pravidla, new SetSkore(0, 0)) ? Faze_SUPER_TIE_BREAK_getInstance() : Faze_GEM_getInstance();
  var tmp = TymId_A_getInstance();
  var tmp_0;
  if (zacinaPodavat.eb_1.equals(TymId_A_getInstance())) {
    tmp_0 = dalsi(this, tymy.nb_1, zacinaPodavat.fb_1);
  } else {
    var tmp0_elvis_lhs = prvniHraci.e1(TymId_A_getInstance());
    tmp_0 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  }
  var tmp_1 = to(tmp, tmp_0);
  var tmp_2 = TymId_B_getInstance();
  var tmp_3;
  if (zacinaPodavat.eb_1.equals(TymId_B_getInstance())) {
    tmp_3 = dalsi(this, tymy.ob_1, zacinaPodavat.fb_1);
  } else {
    var tmp1_elvis_lhs = prvniHraci.e1(TymId_B_getInstance());
    tmp_3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  return new Zapas(new StavZapasu(pravidla, tymy, zacinaPodavat, mapOf_0([tmp_1, to(tmp_2, tmp_3)]), emptyList(), new SetSkore(0, 0), new SetSkore(0, 0), 0, faze, TymId_A_getInstance(), VOID, pravidla.od_1 ? Kdokoli_instance : null, pravidla.od_1 ? emptySet() : setOf_0([TymId_A_getInstance(), TymId_B_getInstance()])));
};
protoOf(Engine).fe = function (pravidla, tymy, zacinaPodavat, prvniHraci, $super) {
  prvniHraci = prvniHraci === VOID ? emptyMap() : prvniHraci;
  return $super === VOID ? this.xc(pravidla, tymy, zacinaPodavat, prvniHraci) : $super.xc.call(this, pravidla, tymy, zacinaPodavat, prvniHraci);
};
protoOf(Engine).yc = function (zapas, tah) {
  var tmp;
  if (tah instanceof Bod) {
    tmp = bod(this, zapas, tah.ge_1);
  } else {
    if (tah instanceof ZvolPodavajiciho) {
      tmp = zvol(this, zapas, tah);
    } else {
      if (tah instanceof ZvolTieBreak) {
        tmp = zvolTieBreak(this, zapas, tah);
      } else {
        if (equals(tah, Zpet_instance)) {
          tmp = zpet(this, zapas);
        } else {
          if (equals(tah, UkoncitZapas_instance)) {
            tmp = ukonci(this, zapas);
          } else {
            if (equals(tah, KonecCasu_instance)) {
              tmp = konecCasu(this, zapas);
            } else {
              if (tah instanceof ProhodStranyHracu) {
                tmp = prohodStranyHracu(this, zapas, tah);
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
  }
  return tmp;
};
protoOf(Engine).ee = function (a, b, shoda, promarneneVyhody) {
  var vedouci = a > b ? TymId_A_getInstance() : TymId_B_getInstance();
  // Inline function 'kotlin.comparisons.maxOf' call
  var vyssi = Math.max(a, b);
  // Inline function 'kotlin.comparisons.minOf' call
  var nizsi = Math.min(a, b);
  if (vyssi < 4)
    return null;
  if (a === b)
    return null;
  var tmp;
  switch (shoda.h1_1) {
    case 0:
      tmp = false;
      break;
    case 1:
      tmp = nizsi >= 3;
      break;
    case 2:
      tmp = (nizsi >= 3 && promarneneVyhody >= 2);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  var rozhodujiciBod = tmp;
  return rozhodujiciBod || (vyssi - nizsi | 0) >= 2 ? vedouci : null;
};
var Engine_instance;
function Engine_getInstance() {
  return Engine_instance;
}
function Okno(zacatek, konec) {
  this.he_1 = zacatek;
  this.ie_1 = konec;
}
protoOf(Okno).toString = function () {
  return 'Okno(zacatek=' + this.he_1.toString() + ', konec=' + this.ie_1.toString() + ')';
};
protoOf(Okno).hashCode = function () {
  var result = this.he_1.hashCode();
  result = imul_0(result, 31) + this.ie_1.hashCode() | 0;
  return result;
};
protoOf(Okno).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Okno))
    return false;
  var tmp0_other_with_cast = other instanceof Okno ? other : THROW_CCE();
  if (!this.he_1.equals(tmp0_other_with_cast.he_1))
    return false;
  if (!this.ie_1.equals(tmp0_other_with_cast.ie_1))
    return false;
  return true;
};
function Rozpis(prvniKolo, prestavkaMin) {
  this.je_1 = prvniKolo;
  this.ke_1 = prestavkaMin;
}
protoOf(Rozpis).toString = function () {
  return 'Rozpis(prvniKolo=' + this.je_1.toString() + ', prestavkaMin=' + this.ke_1 + ')';
};
protoOf(Rozpis).hashCode = function () {
  var result = this.je_1.hashCode();
  result = imul_0(result, 31) + this.ke_1 | 0;
  return result;
};
protoOf(Rozpis).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Rozpis))
    return false;
  var tmp0_other_with_cast = other instanceof Rozpis ? other : THROW_CCE();
  if (!this.je_1.equals(tmp0_other_with_cast.je_1))
    return false;
  if (!(this.ke_1 === tmp0_other_with_cast.ke_1))
    return false;
  return true;
};
function Harmonogram() {
  this.le_1 = 2;
}
protoOf(Harmonogram).me = function (zacatekPrvniho, delkaMin, prestavkaMin, ted) {
  // Inline function 'kotlin.require' call
  if (!(delkaMin > 0)) {
    // Inline function 'cz.padelcesko.score.core.Harmonogram.kolo.<anonymous>' call
    var message = 'kolo mus\xED m\xEDt d\xE9lku';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
  // Inline function 'kotlin.require' call
  if (!(prestavkaMin >= 0)) {
    // Inline function 'cz.padelcesko.score.core.Harmonogram.kolo.<anonymous>' call
    var message_0 = 'p\u0159est\xE1vka nem\u016F\u017Ee b\xFDt z\xE1porn\xE1';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message_0));
  }
  var delka = numberToLong(delkaMin).p1(new Long(60000, 0));
  var krok = delka.s(numberToLong(prestavkaMin).p1(new Long(60000, 0)));
  var k = ted.n1(zacatekPrvniho) < 0 ? new Long(0, 0) : ted.o1(zacatekPrvniho).q1(krok);
  if (zacatekPrvniho.s(k.p1(krok)).s(delka).n1(ted) <= 0) {
    k = k.r1();
  }
  var zacatek = zacatekPrvniho.s(k.p1(krok));
  return new Okno(zacatek, zacatek.s(delka));
};
var Harmonogram_instance;
function Harmonogram_getInstance() {
  return Harmonogram_instance;
}
function Companion_11() {
}
protoOf(Companion_11).ne = function (text) {
  // Inline function 'kotlin.runCatching' call
  var tmp;
  try {
    // Inline function 'cz.padelcesko.score.core.Companion.cti.<anonymous>' call
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_1(trim(isCharSequence(text) ? text : THROW_CCE()));
    // Inline function 'kotlin.collections.associate' call
    var this_0 = split(tmp$ret$0, charArrayOf([_Char___init__impl__6a9atx(32)]));
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.core.Companion.cti.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(substringBefore(element, _Char___init__impl__6a9atx(61)), substringAfter(element, _Char___init__impl__6a9atx(61), ''));
      destination.x2(pair.j7_1, pair.k7_1);
    }
    var p = destination;
    var tmp_0 = toLong_0(getValue(p, 'ts'));
    var tmp_1 = toInt(getValue(p, 'tp'));
    var tmp0_safe_receiver = p.e1('tm');
    var tmp_2 = tmp0_safe_receiver == null ? null : toIntOrNull(tmp0_safe_receiver);
    var tmp_3 = toInt(getValue(p, 'kh'));
    var tmp1_safe_receiver = p.e1('ku');
    var tmp_4 = tmp1_safe_receiver == null ? null : toIntOrNull(tmp1_safe_receiver);
    var tmp_5 = toDouble(getValue(p, 'ch'));
    var tmp2_safe_receiver = p.e1('cu');
    var tmp_6 = tmp2_safe_receiver == null ? null : toDoubleOrNull(tmp2_safe_receiver);
    var tmp3_safe_receiver = p.e1('pv');
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : toIntOrNull(tmp3_safe_receiver);
    // Inline function 'kotlin.Companion.success' call
    var value = new Hodnoty(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs);
    tmp = _Result___init__impl__xyqfz8(value);
  } catch ($p) {
    var tmp_7;
    if ($p instanceof Error) {
      var e = $p;
      // Inline function 'kotlin.Companion.failure' call
      tmp_7 = _Result___init__impl__xyqfz8(createFailure(e));
    } else {
      throw $p;
    }
    tmp = tmp_7;
  }
  // Inline function 'kotlin.Result.getOrNull' call
  var this_1 = tmp;
  var tmp_8;
  if (_Result___get_isFailure__impl__jpiriv(this_1)) {
    tmp_8 = null;
  } else {
    var tmp_9 = _Result___get_value__impl__bjfvqg(this_1);
    tmp_8 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
  }
  return tmp_8;
};
var Companion_instance_11;
function Companion_getInstance_11() {
  return Companion_instance_11;
}
function Hodnoty(tepSoucet, tepPocet, tepMax, krokyHotove, krokyUseku, kalorieHotove, kalorieUseku, prevzato) {
  tepSoucet = tepSoucet === VOID ? new Long(0, 0) : tepSoucet;
  tepPocet = tepPocet === VOID ? 0 : tepPocet;
  tepMax = tepMax === VOID ? null : tepMax;
  krokyHotove = krokyHotove === VOID ? 0 : krokyHotove;
  krokyUseku = krokyUseku === VOID ? null : krokyUseku;
  kalorieHotove = kalorieHotove === VOID ? 0.0 : kalorieHotove;
  kalorieUseku = kalorieUseku === VOID ? null : kalorieUseku;
  prevzato = prevzato === VOID ? 0 : prevzato;
  this.oe_1 = tepSoucet;
  this.pe_1 = tepPocet;
  this.qe_1 = tepMax;
  this.re_1 = krokyHotove;
  this.se_1 = krokyUseku;
  this.te_1 = kalorieHotove;
  this.ue_1 = kalorieUseku;
  this.ve_1 = prevzato;
}
protoOf(Hodnoty).we = function () {
  return this.pe_1 === 0 ? null : roundToInt(this.oe_1.v1() / this.pe_1);
};
protoOf(Hodnoty).xe = function () {
  var tmp;
  if (this.se_1 == null && this.re_1 === 0) {
    tmp = null;
  } else {
    var tmp0_elvis_lhs = this.se_1;
    tmp = this.re_1 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  }
  return tmp;
};
protoOf(Hodnoty).ye = function () {
  var tmp;
  if (this.ue_1 == null && this.te_1 === 0.0) {
    tmp = null;
  } else {
    var tmp0_elvis_lhs = this.ue_1;
    tmp = roundToInt(this.te_1 + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs));
  }
  return tmp;
};
protoOf(Hodnoty).ze = function () {
  var tmp = 'ts=' + this.oe_1.toString();
  var tmp_0 = 'tp=' + this.pe_1;
  var tmp0_safe_receiver = this.qe_1;
  var tmp_1;
  if (tmp0_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Hodnoty.zapis.<anonymous>' call
    tmp_1 = 'tm=' + tmp0_safe_receiver;
  }
  var tmp_2 = tmp_1;
  var tmp_3 = 'kh=' + this.re_1;
  var tmp1_safe_receiver = this.se_1;
  var tmp_4;
  if (tmp1_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Hodnoty.zapis.<anonymous>' call
    tmp_4 = 'ku=' + tmp1_safe_receiver;
  }
  var tmp_5 = tmp_4;
  var tmp_6 = 'ch=' + this.te_1;
  var tmp2_safe_receiver = this.ue_1;
  var tmp_7;
  if (tmp2_safe_receiver == null) {
    tmp_7 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Hodnoty.zapis.<anonymous>' call
    tmp_7 = 'cu=' + tmp2_safe_receiver;
  }
  var tmp_8 = tmp_7;
  // Inline function 'kotlin.takeIf' call
  var this_0 = this.ve_1;
  var tmp_9;
  // Inline function 'cz.padelcesko.score.core.Hodnoty.zapis.<anonymous>' call
  if (this_0 > 0) {
    tmp_9 = this_0;
  } else {
    tmp_9 = null;
  }
  var tmp3_safe_receiver = tmp_9;
  var tmp_10;
  if (tmp3_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Hodnoty.zapis.<anonymous>' call
    tmp_10 = 'pv=' + tmp3_safe_receiver;
  }
  return joinToString_0(listOfNotNull([tmp, tmp_0, tmp_2, tmp_3, tmp_5, tmp_6, tmp_8, tmp_10]), ' ');
};
protoOf(Hodnoty).toString = function () {
  return 'Hodnoty(tepSoucet=' + this.oe_1.toString() + ', tepPocet=' + this.pe_1 + ', tepMax=' + this.qe_1 + ', krokyHotove=' + this.re_1 + ', krokyUseku=' + this.se_1 + ', kalorieHotove=' + this.te_1 + ', kalorieUseku=' + this.ue_1 + ', prevzato=' + this.ve_1 + ')';
};
protoOf(Hodnoty).hashCode = function () {
  var result = this.oe_1.hashCode();
  result = imul_0(result, 31) + this.pe_1 | 0;
  result = imul_0(result, 31) + (this.qe_1 == null ? 0 : this.qe_1) | 0;
  result = imul_0(result, 31) + this.re_1 | 0;
  result = imul_0(result, 31) + (this.se_1 == null ? 0 : this.se_1) | 0;
  result = imul_0(result, 31) + getNumberHashCode(this.te_1) | 0;
  result = imul_0(result, 31) + (this.ue_1 == null ? 0 : getNumberHashCode(this.ue_1)) | 0;
  result = imul_0(result, 31) + this.ve_1 | 0;
  return result;
};
protoOf(Hodnoty).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Hodnoty))
    return false;
  var tmp0_other_with_cast = other instanceof Hodnoty ? other : THROW_CCE();
  if (!this.oe_1.equals(tmp0_other_with_cast.oe_1))
    return false;
  if (!(this.pe_1 === tmp0_other_with_cast.pe_1))
    return false;
  if (!(this.qe_1 == tmp0_other_with_cast.qe_1))
    return false;
  if (!(this.re_1 === tmp0_other_with_cast.re_1))
    return false;
  if (!(this.se_1 == tmp0_other_with_cast.se_1))
    return false;
  if (!equals(this.te_1, tmp0_other_with_cast.te_1))
    return false;
  if (!equals(this.ue_1, tmp0_other_with_cast.ue_1))
    return false;
  if (!(this.ve_1 === tmp0_other_with_cast.ve_1))
    return false;
  return true;
};
function Ucastnik(jmeno, hodnoty, vzorky, hrac) {
  vzorky = vzorky === VOID ? emptyList() : vzorky;
  hrac = hrac === VOID ? null : hrac;
  this.af_1 = jmeno;
  this.bf_1 = hodnoty;
  this.cf_1 = vzorky;
  this.df_1 = hrac;
}
protoOf(Ucastnik).toString = function () {
  return 'Ucastnik(jmeno=' + this.af_1 + ', hodnoty=' + this.bf_1.toString() + ', vzorky=' + toString_1(this.cf_1) + ', hrac=' + toString_0(this.df_1) + ')';
};
protoOf(Ucastnik).hashCode = function () {
  var result = getStringHashCode(this.af_1);
  result = imul_0(result, 31) + this.bf_1.hashCode() | 0;
  result = imul_0(result, 31) + hashCode(this.cf_1) | 0;
  result = imul_0(result, 31) + (this.df_1 == null ? 0 : this.df_1.hashCode()) | 0;
  return result;
};
protoOf(Ucastnik).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Ucastnik))
    return false;
  var tmp0_other_with_cast = other instanceof Ucastnik ? other : THROW_CCE();
  if (!(this.af_1 === tmp0_other_with_cast.af_1))
    return false;
  if (!this.bf_1.equals(tmp0_other_with_cast.bf_1))
    return false;
  if (!equals(this.cf_1, tmp0_other_with_cast.cf_1))
    return false;
  if (!equals(this.df_1, tmp0_other_with_cast.df_1))
    return false;
  return true;
};
function JmenaVen() {
}
protoOf(JmenaVen).ef = function (tymy, ja, zastupce) {
  var tmp;
  if (ja == null) {
    return null;
  } else {
    tmp = ja;
  }
  var _destruct__k2r9zo = tmp;
  var tymJa = _destruct__k2r9zo.o7();
  var hrac = _destruct__k2r9zo.p7();
  var tmp1_elvis_lhs = getOrNull_0(tymy.db(tymJa).mb_1, hrac);
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return null;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var jmeno = tmp_0;
  // Inline function 'kotlin.collections.map' call
  var this_0 = get_indices(tymy.db(tymJa).mb_1);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var inductionVariable = this_0.c8_1;
  var last = this_0.d8_1;
  if (inductionVariable <= last)
    do {
      var item = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'cz.padelcesko.score.core.JmenaVen.jen.<anonymous>' call
      var i = item;
      var tmp$ret$0 = i === hrac ? jmeno : zastupce((i + 1 | 0) + (tymJa.equals(TymId_A_getInstance()) ? 0 : 2) | 0);
      destination.e(tmp$ret$0);
    }
     while (!(item === last));
  var moji = destination;
  return tymJa.equals(TymId_A_getInstance()) ? to(moji, null) : to(null, moji);
};
var JmenaVen_instance;
function JmenaVen_getInstance() {
  return JmenaVen_instance;
}
function procenta($this, cast, celek) {
  return celek === 0 ? null : (imul_0(cast, 100) + (celek / 2 | 0) | 0) / celek | 0;
}
function Souhrn(zapasu, vyhry, prohry, bezViteze, bodyNaPodaniVyhrane, bodyNaPodani, gemuUhajeno, gemuPodano, returnVyhrane, returnCelkem, minut, kalorie, kroky, tepPrumer) {
  zapasu = zapasu === VOID ? 0 : zapasu;
  vyhry = vyhry === VOID ? 0 : vyhry;
  prohry = prohry === VOID ? 0 : prohry;
  bezViteze = bezViteze === VOID ? 0 : bezViteze;
  bodyNaPodaniVyhrane = bodyNaPodaniVyhrane === VOID ? 0 : bodyNaPodaniVyhrane;
  bodyNaPodani = bodyNaPodani === VOID ? 0 : bodyNaPodani;
  gemuUhajeno = gemuUhajeno === VOID ? 0 : gemuUhajeno;
  gemuPodano = gemuPodano === VOID ? 0 : gemuPodano;
  returnVyhrane = returnVyhrane === VOID ? 0 : returnVyhrane;
  returnCelkem = returnCelkem === VOID ? 0 : returnCelkem;
  minut = minut === VOID ? new Long(0, 0) : minut;
  kalorie = kalorie === VOID ? null : kalorie;
  kroky = kroky === VOID ? null : kroky;
  tepPrumer = tepPrumer === VOID ? null : tepPrumer;
  this.ff_1 = zapasu;
  this.gf_1 = vyhry;
  this.hf_1 = prohry;
  this.if_1 = bezViteze;
  this.jf_1 = bodyNaPodaniVyhrane;
  this.kf_1 = bodyNaPodani;
  this.lf_1 = gemuUhajeno;
  this.mf_1 = gemuPodano;
  this.nf_1 = returnVyhrane;
  this.of_1 = returnCelkem;
  this.pf_1 = minut;
  this.qf_1 = kalorie;
  this.rf_1 = kroky;
  this.sf_1 = tepPrumer;
}
protoOf(Souhrn).tf = function () {
  return procenta(this, this.gf_1, this.gf_1 + this.hf_1 | 0);
};
protoOf(Souhrn).uf = function () {
  return procenta(this, this.jf_1, this.kf_1);
};
protoOf(Souhrn).vf = function () {
  return procenta(this, this.nf_1, this.of_1);
};
protoOf(Souhrn).wf = function (zapasu, vyhry, prohry, bezViteze, bodyNaPodaniVyhrane, bodyNaPodani, gemuUhajeno, gemuPodano, returnVyhrane, returnCelkem, minut, kalorie, kroky, tepPrumer) {
  return new Souhrn(zapasu, vyhry, prohry, bezViteze, bodyNaPodaniVyhrane, bodyNaPodani, gemuUhajeno, gemuPodano, returnVyhrane, returnCelkem, minut, kalorie, kroky, tepPrumer);
};
protoOf(Souhrn).xf = function (zapasu, vyhry, prohry, bezViteze, bodyNaPodaniVyhrane, bodyNaPodani, gemuUhajeno, gemuPodano, returnVyhrane, returnCelkem, minut, kalorie, kroky, tepPrumer, $super) {
  zapasu = zapasu === VOID ? this.ff_1 : zapasu;
  vyhry = vyhry === VOID ? this.gf_1 : vyhry;
  prohry = prohry === VOID ? this.hf_1 : prohry;
  bezViteze = bezViteze === VOID ? this.if_1 : bezViteze;
  bodyNaPodaniVyhrane = bodyNaPodaniVyhrane === VOID ? this.jf_1 : bodyNaPodaniVyhrane;
  bodyNaPodani = bodyNaPodani === VOID ? this.kf_1 : bodyNaPodani;
  gemuUhajeno = gemuUhajeno === VOID ? this.lf_1 : gemuUhajeno;
  gemuPodano = gemuPodano === VOID ? this.mf_1 : gemuPodano;
  returnVyhrane = returnVyhrane === VOID ? this.nf_1 : returnVyhrane;
  returnCelkem = returnCelkem === VOID ? this.of_1 : returnCelkem;
  minut = minut === VOID ? this.pf_1 : minut;
  kalorie = kalorie === VOID ? this.qf_1 : kalorie;
  kroky = kroky === VOID ? this.rf_1 : kroky;
  tepPrumer = tepPrumer === VOID ? this.sf_1 : tepPrumer;
  return $super === VOID ? this.wf(zapasu, vyhry, prohry, bezViteze, bodyNaPodaniVyhrane, bodyNaPodani, gemuUhajeno, gemuPodano, returnVyhrane, returnCelkem, minut, kalorie, kroky, tepPrumer) : $super.wf.call(this, zapasu, vyhry, prohry, bezViteze, bodyNaPodaniVyhrane, bodyNaPodani, gemuUhajeno, gemuPodano, returnVyhrane, returnCelkem, minut, kalorie, kroky, tepPrumer);
};
protoOf(Souhrn).toString = function () {
  return 'Souhrn(zapasu=' + this.ff_1 + ', vyhry=' + this.gf_1 + ', prohry=' + this.hf_1 + ', bezViteze=' + this.if_1 + ', bodyNaPodaniVyhrane=' + this.jf_1 + ', bodyNaPodani=' + this.kf_1 + ', gemuUhajeno=' + this.lf_1 + ', gemuPodano=' + this.mf_1 + ', returnVyhrane=' + this.nf_1 + ', returnCelkem=' + this.of_1 + ', minut=' + this.pf_1.toString() + ', kalorie=' + this.qf_1 + ', kroky=' + this.rf_1 + ', tepPrumer=' + this.sf_1 + ')';
};
protoOf(Souhrn).hashCode = function () {
  var result = this.ff_1;
  result = imul_0(result, 31) + this.gf_1 | 0;
  result = imul_0(result, 31) + this.hf_1 | 0;
  result = imul_0(result, 31) + this.if_1 | 0;
  result = imul_0(result, 31) + this.jf_1 | 0;
  result = imul_0(result, 31) + this.kf_1 | 0;
  result = imul_0(result, 31) + this.lf_1 | 0;
  result = imul_0(result, 31) + this.mf_1 | 0;
  result = imul_0(result, 31) + this.nf_1 | 0;
  result = imul_0(result, 31) + this.of_1 | 0;
  result = imul_0(result, 31) + this.pf_1.hashCode() | 0;
  result = imul_0(result, 31) + (this.qf_1 == null ? 0 : this.qf_1) | 0;
  result = imul_0(result, 31) + (this.rf_1 == null ? 0 : this.rf_1) | 0;
  result = imul_0(result, 31) + (this.sf_1 == null ? 0 : this.sf_1) | 0;
  return result;
};
protoOf(Souhrn).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Souhrn))
    return false;
  var tmp0_other_with_cast = other instanceof Souhrn ? other : THROW_CCE();
  if (!(this.ff_1 === tmp0_other_with_cast.ff_1))
    return false;
  if (!(this.gf_1 === tmp0_other_with_cast.gf_1))
    return false;
  if (!(this.hf_1 === tmp0_other_with_cast.hf_1))
    return false;
  if (!(this.if_1 === tmp0_other_with_cast.if_1))
    return false;
  if (!(this.jf_1 === tmp0_other_with_cast.jf_1))
    return false;
  if (!(this.kf_1 === tmp0_other_with_cast.kf_1))
    return false;
  if (!(this.lf_1 === tmp0_other_with_cast.lf_1))
    return false;
  if (!(this.mf_1 === tmp0_other_with_cast.mf_1))
    return false;
  if (!(this.nf_1 === tmp0_other_with_cast.nf_1))
    return false;
  if (!(this.of_1 === tmp0_other_with_cast.of_1))
    return false;
  if (!this.pf_1.equals(tmp0_other_with_cast.pf_1))
    return false;
  if (!(this.qf_1 == tmp0_other_with_cast.qf_1))
    return false;
  if (!(this.rf_1 == tmp0_other_with_cast.rf_1))
    return false;
  if (!(this.sf_1 == tmp0_other_with_cast.sf_1))
    return false;
  return true;
};
function soucet($this, a, b) {
  var tmp;
  if (a == null && b == null) {
    tmp = null;
  } else {
    var tmp_0 = a == null ? 0 : a;
    tmp = tmp_0 + (b == null ? 0 : b) | 0;
  }
  return tmp;
}
function Prehled() {
}
protoOf(Prehled).yf = function (zapasy) {
  var s = new Souhrn();
  var tepSoucet = new Long(0, 0);
  var tepPocet = 0;
  var _iterator__ex2g4s = zapasy.g();
  $l$loop_0: while (_iterator__ex2g4s.h()) {
    var o = _iterator__ex2g4s.i();
    var tmp0_elvis_lhs = o.ag_1.wc_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      continue $l$loop_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ja = tmp;
    var stav = o.zf_1.bd_1;
    if (!stav.sa_1.equals(Faze_KONEC_getInstance()))
      continue $l$loop_0;
    var vitez = stav.ua_1;
    var tmp1_safe_receiver = firstOrNull(Statistiky_instance.fg(o.ag_1, o.zf_1.dd_1, o.dg_1));
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.jg_1;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.f1();
    var tmp_0;
    if (tmp3_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = tmp3_safe_receiver.g();
        while (_iterator__ex2g4s_0.h()) {
          var element = _iterator__ex2g4s_0.i();
          // Inline function 'cz.padelcesko.score.core.Prehled.spocti.<anonymous>' call
          if (element.b1().kg_1.equals(ja.j7_1) && element.b1().lg_1 === ja.k7_1) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      tmp_0 = tmp$ret$1;
    }
    var tmp4_safe_receiver = tmp_0;
    var cisla = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.c1();
    var minut = Casy_getInstance().kc(o.ag_1, o.zf_1.dd_1, o.bg_1, o.cg_1).ec();
    var tmp2 = o.eg_1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_1 = tmp2.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_0 = _iterator__ex2g4s_1.i();
        // Inline function 'cz.padelcesko.score.core.Prehled.spocti.<anonymous>' call
        if (equals(element_0.df_1, ja)) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp5_safe_receiver = tmp$ret$3;
    var zdravi = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.bf_1;
    var tmp_1 = s;
    var tmp_2 = s.ff_1 + 1 | 0;
    var tmp_3 = s.gf_1 + (equals(vitez, ja.j7_1) ? 1 : 0) | 0;
    var tmp_4 = s.hf_1 + (equals(vitez, ja.j7_1.ib()) ? 1 : 0) | 0;
    var tmp_5 = s.if_1 + (vitez == null ? 1 : 0) | 0;
    var tmp_6 = s.jf_1;
    var tmp7_elvis_lhs = cisla == null ? null : cisla.zg();
    var tmp_7 = tmp_6 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = s.kf_1;
    var tmp9_elvis_lhs = cisla == null ? null : cisla.ah();
    var tmp_9 = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_10 = s.lf_1;
    var tmp11_elvis_lhs = cisla == null ? null : cisla.wg_1;
    var tmp_11 = tmp_10 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = s.mf_1;
    var tmp13_elvis_lhs = cisla == null ? null : cisla.vg_1;
    var tmp_13 = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_14 = s.nf_1;
    var tmp15_elvis_lhs = cisla == null ? null : cisla.yg_1;
    var tmp_15 = tmp_14 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    var tmp_16 = s.of_1;
    var tmp17_elvis_lhs = cisla == null ? null : cisla.xg_1;
    var tmp_17 = tmp_16 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_18 = s.pf_1.s(minut);
    var tmp_19 = s.qf_1;
    var tmp_20 = soucet(this, tmp_19, zdravi == null ? null : zdravi.ye());
    var tmp_21 = s.rf_1;
    s = tmp_1.xf(tmp_2, tmp_3, tmp_4, tmp_5, tmp_7, tmp_9, tmp_11, tmp_13, tmp_15, tmp_17, tmp_18, tmp_20, soucet(this, tmp_21, zdravi == null ? null : zdravi.xe()));
    if (!(zdravi == null)) {
      tepSoucet = tepSoucet.s(zdravi.oe_1);
      tepPocet = tepPocet + zdravi.pe_1 | 0;
    }
  }
  return s.xf(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tepPocet === 0 ? null : roundToInt(tepSoucet.v1() / tepPocet));
};
var Prehled_instance;
function Prehled_getInstance() {
  return Prehled_instance;
}
function Vzorek(cas, tep, kroky, kalorie) {
  this.bh_1 = cas;
  this.ch_1 = tep;
  this.dh_1 = kroky;
  this.eh_1 = kalorie;
}
protoOf(Vzorek).toString = function () {
  return 'Vzorek(cas=' + this.bh_1.toString() + ', tep=' + this.ch_1 + ', kroky=' + this.dh_1 + ', kalorie=' + this.eh_1 + ')';
};
protoOf(Vzorek).hashCode = function () {
  var result = this.bh_1.hashCode();
  result = imul_0(result, 31) + (this.ch_1 == null ? 0 : this.ch_1) | 0;
  result = imul_0(result, 31) + (this.dh_1 == null ? 0 : this.dh_1) | 0;
  result = imul_0(result, 31) + (this.eh_1 == null ? 0 : this.eh_1) | 0;
  return result;
};
protoOf(Vzorek).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Vzorek))
    return false;
  var tmp0_other_with_cast = other instanceof Vzorek ? other : THROW_CCE();
  if (!this.bh_1.equals(tmp0_other_with_cast.bh_1))
    return false;
  if (!(this.ch_1 == tmp0_other_with_cast.ch_1))
    return false;
  if (!(this.dh_1 == tmp0_other_with_cast.dh_1))
    return false;
  if (!(this.eh_1 == tmp0_other_with_cast.eh_1))
    return false;
  return true;
};
function Usek(set, od, doCasu, tepPrumer, tepMax, kalorie, kroky) {
  this.fh_1 = set;
  this.gh_1 = od;
  this.hh_1 = doCasu;
  this.ih_1 = tepPrumer;
  this.jh_1 = tepMax;
  this.kh_1 = kalorie;
  this.lh_1 = kroky;
}
protoOf(Usek).toString = function () {
  return 'Usek(set=' + this.fh_1 + ', od=' + this.gh_1.toString() + ', doCasu=' + this.hh_1.toString() + ', tepPrumer=' + this.ih_1 + ', tepMax=' + this.jh_1 + ', kalorie=' + this.kh_1 + ', kroky=' + this.lh_1 + ')';
};
protoOf(Usek).hashCode = function () {
  var result = this.fh_1 == null ? 0 : this.fh_1;
  result = imul_0(result, 31) + this.gh_1.hashCode() | 0;
  result = imul_0(result, 31) + this.hh_1.hashCode() | 0;
  result = imul_0(result, 31) + (this.ih_1 == null ? 0 : this.ih_1) | 0;
  result = imul_0(result, 31) + (this.jh_1 == null ? 0 : this.jh_1) | 0;
  result = imul_0(result, 31) + (this.kh_1 == null ? 0 : this.kh_1) | 0;
  result = imul_0(result, 31) + (this.lh_1 == null ? 0 : this.lh_1) | 0;
  return result;
};
protoOf(Usek).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Usek))
    return false;
  var tmp0_other_with_cast = other instanceof Usek ? other : THROW_CCE();
  if (!(this.fh_1 == tmp0_other_with_cast.fh_1))
    return false;
  if (!this.gh_1.equals(tmp0_other_with_cast.gh_1))
    return false;
  if (!this.hh_1.equals(tmp0_other_with_cast.hh_1))
    return false;
  if (!(this.ih_1 == tmp0_other_with_cast.ih_1))
    return false;
  if (!(this.jh_1 == tmp0_other_with_cast.jh_1))
    return false;
  if (!(this.kh_1 == tmp0_other_with_cast.kh_1))
    return false;
  if (!(this.lh_1 == tmp0_other_with_cast.lh_1))
    return false;
  return true;
};
function rozdil($this, vzorky, od, doCasu, hodnota) {
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.lastOrNull' call
    var iterator = vzorky.t(vzorky.l());
    while (iterator.l2()) {
      var element = iterator.m2();
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.rozdil.<anonymous>' call
      if (element.bh_1.n1(doCasu) <= 0 && !(hodnota(element) == null)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_safe_receiver = tmp$ret$1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = hodnota(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return null;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var naKonci = tmp_0;
  var tmp$ret$4;
  $l$block_0: {
    // Inline function 'kotlin.collections.lastOrNull' call
    var iterator_0 = vzorky.t(vzorky.l());
    while (iterator_0.l2()) {
      var element_0 = iterator_0.m2();
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.rozdil.<anonymous>' call
      if (element_0.bh_1.n1(od) <= 0 && !(hodnota(element_0) == null)) {
        tmp$ret$4 = element_0;
        break $l$block_0;
      }
    }
    tmp$ret$4 = null;
  }
  var tmp2_safe_receiver = tmp$ret$4;
  var tmp_1;
  if (tmp2_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_1 = hodnota(tmp2_safe_receiver);
  }
  var tmp3_elvis_lhs = tmp_1;
  var naZacatku = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
  return coerceAtLeast(naKonci - naZacatku | 0, 0);
}
function sam$kotlin_Comparator$0_0(function_0) {
  this.mh_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_0).z7 = function (a, b) {
  return this.mh_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
  return this.z7(a, b);
};
protoOf(sam$kotlin_Comparator$0_0).w1 = function () {
  return this.mh_1;
};
protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.w1(), other.w1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
  return hashCode(this.w1());
};
function PrubehTepu$poSetech$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  // Inline function 'cz.padelcesko.score.core.PrubehTepu.poSetech.<anonymous>' call
  var tmp = a.bh_1;
  // Inline function 'cz.padelcesko.score.core.PrubehTepu.poSetech.<anonymous>' call
  var tmp$ret$1 = b.bh_1;
  return compareValues(tmp, tmp$ret$1);
}
function PrubehTepu$poSetech$lambda_0(it) {
  return it.eh_1;
}
function PrubehTepu$poSetech$lambda_1(it) {
  return it.dh_1;
}
function PrubehTepu$zapis$lambda($minule) {
  return function (v) {
    var d = v.bh_1.o1($minule._v);
    $minule._v = v.bh_1;
    var tmp = d.toString();
    var tmp0_elvis_lhs = v.ch_1;
    var tmp_0 = toString_1(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = v.dh_1;
    var tmp_1 = toString_1(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = v.eh_1;
    return tmp + ':' + tmp_0 + ':' + tmp_1 + ':' + toString_1(tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs);
  };
}
function PrubehTepu() {
}
protoOf(PrubehTepu).nh = function (vychozi, zaznam, casy) {
  if (!(casy.l() === zaznam.l()))
    return emptyList();
  var zapas = Engine_instance.xc(vychozi.lc_1, vychozi.mc_1, vychozi.nc_1, vychozi.oc_1);
  // Inline function 'kotlin.collections.mutableListOf' call
  var ven = ArrayList_init_$Create$();
  var _iterator__ex2g4s = Casy_getInstance().ic(zaznam, casy).g();
  $l$loop: while (_iterator__ex2g4s.h()) {
    var krok = _iterator__ex2g4s.i();
    var tmp = Engine_instance.yc(zapas, krok.wb_1);
    var tmp0_elvis_lhs = tmp instanceof Prijato ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      continue $l$loop;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var v = tmp_0;
    zapas = v.zc_1;
    var tmp0 = v.ad_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(tmp0, Collection)) {
        tmp_1 = tmp0.k();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.g();
      while (_iterator__ex2g4s_0.h()) {
        var element = _iterator__ex2g4s_0.i();
        // Inline function 'cz.padelcesko.score.core.PrubehTepu.konceSetu.<anonymous>' call
        var tmp_2;
        if (element instanceof SetZiskan) {
          tmp_2 = true;
        } else {
          tmp_2 = element instanceof KoloSkoncilo;
        }
        if (tmp_2) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
      tmp$ret$1 = false;
    }
    var konec = tmp$ret$1;
    if (konec && !(krok.xb_1 == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = krok.xb_1;
      ven.e(element_0);
    }
  }
  return ven;
};
protoOf(PrubehTepu).oh = function (vzorky, konce, maSety) {
  if (vzorky.k())
    return emptyList();
  // Inline function 'kotlin.collections.sortedBy' call
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp = PrubehTepu$poSetech$lambda;
  var tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp);
  var serazene = sortedWith(vzorky, tmp$ret$0);
  var zacatek = first(serazene).bh_1;
  var posledni = last(serazene).bh_1;
  var tmp_0;
  if (maSety) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = konce.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.poSetech.<anonymous>' call
      var tmp_1;
      // Inline function 'kotlin.Long.plus' call
      if (zacatek.s(toLong(1)).n1(element) <= 0) {
        tmp_1 = element.n1(posledni) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        destination.e(element);
      }
    }
    tmp_0 = destination;
  } else {
    tmp_0 = emptyList();
  }
  var hranice = tmp_0;
  var body = plus_0(plus_0(listOf(zacatek), hranice), equals(lastOrNull(hranice), posledni) ? emptyList() : listOf(posledni));
  // Inline function 'kotlin.collections.mapIndexedNotNull' call
  var tmp0 = zipWithNext(body);
  // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
  var destination_0 = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEachIndexed' call
  var index = 0;
  var _iterator__ex2g4s_0 = tmp0.g();
  while (_iterator__ex2g4s_0.h()) {
    var item = _iterator__ex2g4s_0.i();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
    var tmp6 = checkIndexOverflow(_unary__edvuaz);
    var tmp$ret$9;
    $l$block: {
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.poSetech.<anonymous>' call
      var od = item.o7();
      var doCasu = item.p7();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = serazene.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_0 = _iterator__ex2g4s_1.i();
        // Inline function 'cz.padelcesko.score.core.PrubehTepu.poSetech.<anonymous>.<anonymous>' call
        if ((tmp6 === 0 ? element_0.bh_1.n1(od) >= 0 : element_0.bh_1.n1(od) > 0) && element_0.bh_1.n1(doCasu) <= 0) {
          destination_1.e(element_0);
        }
      }
      var uvnitr = destination_1;
      if (uvnitr.k()) {
        tmp$ret$9 = null;
        break $l$block;
      }
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination_2 = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = uvnitr.g();
      while (_iterator__ex2g4s_2.h()) {
        var element_1 = _iterator__ex2g4s_2.i();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'cz.padelcesko.score.core.PrubehTepu.poSetech.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = element_1.ch_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
          destination_2.e(tmp0_safe_receiver);
        }
      }
      var tepy = destination_2;
      var tmp_2 = maSety ? tmp6 + 1 | 0 : null;
      var tmp_3 = tepy.k() ? null : roundToInt(average(tepy));
      var tmp_4 = maxOrNull(tepy);
      var tmp_5 = PrubehTepu_instance;
      var tmp_6 = rozdil(tmp_5, serazene, od, doCasu, PrubehTepu$poSetech$lambda_0);
      var tmp_7 = PrubehTepu_instance;
      tmp$ret$9 = new Usek(tmp_2, od, doCasu, tmp_3, tmp_4, tmp_6, rozdil(tmp_7, serazene, od, doCasu, PrubehTepu$poSetech$lambda_1));
    }
    var tmp0_safe_receiver_0 = tmp$ret$9;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>.<anonymous>' call
      destination_0.e(tmp0_safe_receiver_0);
    }
  }
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_8;
  if (destination_0.k()) {
    // Inline function 'cz.padelcesko.score.core.PrubehTepu.poSetech.<anonymous>' call
    var v = single_0(serazene);
    tmp_8 = listOf(new Usek(maSety ? 1 : null, v.bh_1, v.bh_1, v.ch_1, v.ch_1, null, null));
  } else {
    tmp_8 = destination_0;
  }
  return tmp_8;
};
protoOf(PrubehTepu).ph = function (useky) {
  if (useky.l() < 2)
    return null;
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = useky.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.core.PrubehTepu.nejnarocnejsi.<anonymous>' call
    if (!(element.kh_1 == null)) {
      destination.e(element);
    }
  }
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'kotlin.collections.maxByOrNull' call
    var iterator = destination.g();
    if (!iterator.h()) {
      tmp$ret$3 = null;
      break $l$block_0;
    }
    var maxElem = iterator.i();
    if (!iterator.h()) {
      tmp$ret$3 = maxElem;
      break $l$block_0;
    }
    // Inline function 'cz.padelcesko.score.core.PrubehTepu.nejnarocnejsi.<anonymous>' call
    var it = maxElem;
    var maxValue = ensureNotNull(it.kh_1);
    do {
      var e = iterator.i();
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.nejnarocnejsi.<anonymous>' call
      var v = ensureNotNull(e.kh_1);
      if (compareTo(maxValue, v) < 0) {
        maxElem = e;
        maxValue = v;
      }
    }
     while (iterator.h());
    tmp$ret$3 = maxElem;
  }
  var tmp0_elvis_lhs = tmp$ret$3;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = useky.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.nejnarocnejsi.<anonymous>' call
      if (!(element_0.ih_1 == null)) {
        destination_0.e(element_0);
      }
    }
    var tmp$ret$9;
    $l$block_2: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator_0 = destination_0.g();
      if (!iterator_0.h()) {
        tmp$ret$9 = null;
        break $l$block_2;
      }
      var maxElem_0 = iterator_0.i();
      if (!iterator_0.h()) {
        tmp$ret$9 = maxElem_0;
        break $l$block_2;
      }
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.nejnarocnejsi.<anonymous>' call
      var it_0 = maxElem_0;
      var maxValue_0 = ensureNotNull(it_0.ih_1);
      do {
        var e_0 = iterator_0.i();
        // Inline function 'cz.padelcesko.score.core.PrubehTepu.nejnarocnejsi.<anonymous>' call
        var v_0 = ensureNotNull(e_0.ih_1);
        if (compareTo(maxValue_0, v_0) < 0) {
          maxElem_0 = e_0;
          maxValue_0 = v_0;
        }
      }
       while (iterator_0.h());
      tmp$ret$9 = maxElem_0;
    }
    tmp = tmp$ret$9;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(PrubehTepu).qh = function (vzorky) {
  if (vzorky.k())
    return '';
  var t0 = first(vzorky).bh_1;
  var minule = {_v: t0};
  var tmp = t0.toString() + ' ';
  return tmp + joinToString_0(vzorky, ' ', VOID, VOID, VOID, VOID, PrubehTepu$zapis$lambda(minule));
};
protoOf(PrubehTepu).ne = function (text) {
  // Inline function 'kotlin.runCatching' call
  var tmp;
  try {
    // Inline function 'cz.padelcesko.score.core.PrubehTepu.cti.<anonymous>' call
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_1(trim(isCharSequence(text) ? text : THROW_CCE()));
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = split(tmp$ret$0, charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.cti.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(element) > 0) {
        destination.e(element);
      }
    }
    var casti = destination;
    if (casti.l() < 2)
      return emptyList();
    var cas = toLong_0(first(casti));
    // Inline function 'kotlin.collections.map' call
    var this_0 = drop(casti, 1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'cz.padelcesko.score.core.PrubehTepu.cti.<anonymous>.<anonymous>' call
      var p = split(item, charArrayOf([_Char___init__impl__6a9atx(58)]));
      cas = cas.s(toLong_0(p.j(0)));
      var tmp_0 = cas;
      var tmp0_safe_receiver = getOrNull_0(p, 1);
      var tmp_1 = tmp0_safe_receiver == null ? null : toIntOrNull(tmp0_safe_receiver);
      var tmp1_safe_receiver = getOrNull_0(p, 2);
      var tmp_2 = tmp1_safe_receiver == null ? null : toIntOrNull(tmp1_safe_receiver);
      var tmp2_safe_receiver = getOrNull_0(p, 3);
      var tmp$ret$5 = new Vzorek(tmp_0, tmp_1, tmp_2, tmp2_safe_receiver == null ? null : toIntOrNull(tmp2_safe_receiver));
      destination_0.e(tmp$ret$5);
    }
    // Inline function 'kotlin.Companion.success' call
    tmp = _Result___init__impl__xyqfz8(destination_0);
  } catch ($p) {
    var tmp_3;
    if ($p instanceof Error) {
      var e = $p;
      // Inline function 'kotlin.Companion.failure' call
      tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
    } else {
      throw $p;
    }
    tmp = tmp_3;
  }
  var tmp2 = tmp;
  var tmp3 = emptyList();
  var tmp$ret$12;
  $l$block: {
    // Inline function 'kotlin.getOrDefault' call
    if (_Result___get_isFailure__impl__jpiriv(tmp2)) {
      tmp$ret$12 = tmp3;
      break $l$block;
    }
    var tmp_4 = _Result___get_value__impl__bjfvqg(tmp2);
    tmp$ret$12 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
  }
  return tmp$ret$12;
};
var PrubehTepu_instance;
function PrubehTepu_getInstance() {
  return PrubehTepu_instance;
}
function Radek(kdo, esa, dvojchyby, prvniCelkem, prvniVyhrane, druheCelkem, druheVyhrane) {
  esa = esa === VOID ? 0 : esa;
  dvojchyby = dvojchyby === VOID ? 0 : dvojchyby;
  prvniCelkem = prvniCelkem === VOID ? 0 : prvniCelkem;
  prvniVyhrane = prvniVyhrane === VOID ? 0 : prvniVyhrane;
  druheCelkem = druheCelkem === VOID ? 0 : druheCelkem;
  druheVyhrane = druheVyhrane === VOID ? 0 : druheVyhrane;
  this.rh_1 = kdo;
  this.sh_1 = esa;
  this.th_1 = dvojchyby;
  this.uh_1 = prvniCelkem;
  this.vh_1 = prvniVyhrane;
  this.wh_1 = druheCelkem;
  this.xh_1 = druheVyhrane;
}
protoOf(Radek).yh = function () {
  return (this.uh_1 + this.wh_1 | 0) > 0;
};
protoOf(Radek).toString = function () {
  return 'Radek(kdo=' + this.rh_1 + ', esa=' + this.sh_1 + ', dvojchyby=' + this.th_1 + ', prvniCelkem=' + this.uh_1 + ', prvniVyhrane=' + this.vh_1 + ', druheCelkem=' + this.wh_1 + ', druheVyhrane=' + this.xh_1 + ')';
};
protoOf(Radek).hashCode = function () {
  var result = getStringHashCode(this.rh_1);
  result = imul_0(result, 31) + this.sh_1 | 0;
  result = imul_0(result, 31) + this.th_1 | 0;
  result = imul_0(result, 31) + this.uh_1 | 0;
  result = imul_0(result, 31) + this.vh_1 | 0;
  result = imul_0(result, 31) + this.wh_1 | 0;
  result = imul_0(result, 31) + this.xh_1 | 0;
  return result;
};
protoOf(Radek).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Radek))
    return false;
  var tmp0_other_with_cast = other instanceof Radek ? other : THROW_CCE();
  if (!(this.rh_1 === tmp0_other_with_cast.rh_1))
    return false;
  if (!(this.sh_1 === tmp0_other_with_cast.sh_1))
    return false;
  if (!(this.th_1 === tmp0_other_with_cast.th_1))
    return false;
  if (!(this.uh_1 === tmp0_other_with_cast.uh_1))
    return false;
  if (!(this.vh_1 === tmp0_other_with_cast.vh_1))
    return false;
  if (!(this.wh_1 === tmp0_other_with_cast.wh_1))
    return false;
  if (!(this.xh_1 === tmp0_other_with_cast.xh_1))
    return false;
  return true;
};
function jmenoPodavajiciho($this, stav, vychozi) {
  var tym = stav.la_1.db(stav.ma_1.eb_1);
  var tmp0_elvis_lhs = getOrNull_0(tym.mb_1, stav.ma_1.fb_1);
  var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(tym.mb_1) : tmp0_elvis_lhs;
  return tmp1_elvis_lhs == null ? vychozi.mc_1.db(stav.ma_1.eb_1).lb_1.g1_1 : tmp1_elvis_lhs;
}
function Rozhodci() {
  this.zh_1 = 'eso';
  this.ai_1 = 'dvojchyba';
  this.bi_1 = '2p';
}
protoOf(Rozhodci).ci = function (znacky) {
  return joinToString_0(distinct(znacky), '+');
};
protoOf(Rozhodci).di = function (znacka) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = split(znacka, charArrayOf([_Char___init__impl__6a9atx(43)]));
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.core.Rozhodci.rozebrat.<anonymous>' call
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_1(trim(isCharSequence(item) ? item : THROW_CCE()));
    destination.e(tmp$ret$1);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = destination.g();
  while (_iterator__ex2g4s_0.h()) {
    var element = _iterator__ex2g4s_0.i();
    // Inline function 'cz.padelcesko.score.core.Rozhodci.rozebrat.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(element) > 0) {
      destination_0.e(element);
    }
  }
  return destination_0;
};
protoOf(Rozhodci).fg = function (vychozi, zaznam, znacky) {
  if (znacky.k())
    return emptyList();
  var zapas = Engine_instance.xc(vychozi.lc_1, vychozi.mc_1, vychozi.nc_1, vychozi.oc_1);
  // Inline function 'kotlin.collections.mutableMapOf' call
  var esa = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var dvojchyby = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var prvniCelkem = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var prvniVyhrane = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var druheCelkem = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var druheVyhrane = LinkedHashMap_init_$Create$();
  var _iterator__ex2g4s = Casy_getInstance().ic(zaznam).g();
  $l$loop_0: while (_iterator__ex2g4s.h()) {
    var krok = _iterator__ex2g4s.i();
    var podavajici = jmenoPodavajiciho(this, zapas.bd_1, vychozi);
    var podavajiciTym = zapas.bd_1.ma_1.eb_1;
    var v = Engine_instance.yc(zapas, krok.wb_1);
    if (!(v instanceof Prijato))
      continue $l$loop_0;
    zapas = v.zc_1;
    var tah = krok.wb_1;
    if (!(tah instanceof Bod))
      continue $l$loop_0;
    var tmp0_elvis_lhs = znacky.e1(krok.zb_1);
    var kody = this.di(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    if (kody.z('eso')) {
      var tmp1_elvis_lhs = esa.e1(podavajici);
      // Inline function 'kotlin.collections.set' call
      var value = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + 1 | 0;
      esa.x2(podavajici, value);
    }
    if (kody.z('dvojchyba')) {
      var tmp2_elvis_lhs = dvojchyby.e1(podavajici);
      // Inline function 'kotlin.collections.set' call
      var value_0 = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) + 1 | 0;
      dvojchyby.x2(podavajici, value_0);
    }
    var druhe = kody.z('2p') || kody.z('dvojchyba');
    var vyhral = tah.ge_1.equals(podavajiciTym);
    if (druhe) {
      var tmp3_elvis_lhs = druheCelkem.e1(podavajici);
      // Inline function 'kotlin.collections.set' call
      var value_1 = (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) + 1 | 0;
      druheCelkem.x2(podavajici, value_1);
      if (vyhral) {
        var tmp4_elvis_lhs = druheVyhrane.e1(podavajici);
        // Inline function 'kotlin.collections.set' call
        var value_2 = (tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs) + 1 | 0;
        druheVyhrane.x2(podavajici, value_2);
      }
    } else {
      var tmp5_elvis_lhs = prvniCelkem.e1(podavajici);
      // Inline function 'kotlin.collections.set' call
      var value_3 = (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) + 1 | 0;
      prvniCelkem.x2(podavajici, value_3);
      if (vyhral) {
        var tmp6_elvis_lhs = prvniVyhrane.e1(podavajici);
        // Inline function 'kotlin.collections.set' call
        var value_4 = (tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs) + 1 | 0;
        prvniVyhrane.x2(podavajici, value_4);
      }
    }
  }
  var jmena = plus_0(vychozi.mc_1.nb_1.mb_1, vychozi.mc_1.ob_1.mb_1);
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(jmena, 10));
  var _iterator__ex2g4s_0 = jmena.g();
  while (_iterator__ex2g4s_0.h()) {
    var item = _iterator__ex2g4s_0.i();
    // Inline function 'cz.padelcesko.score.core.Rozhodci.spocti.<anonymous>' call
    var tmp0_elvis_lhs_0 = esa.e1(item);
    var tmp = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    var tmp1_elvis_lhs_0 = dvojchyby.e1(item);
    var tmp_0 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp2_elvis_lhs_0 = prvniCelkem.e1(item);
    var tmp_1 = tmp2_elvis_lhs_0 == null ? 0 : tmp2_elvis_lhs_0;
    var tmp3_elvis_lhs_0 = prvniVyhrane.e1(item);
    var tmp_2 = tmp3_elvis_lhs_0 == null ? 0 : tmp3_elvis_lhs_0;
    var tmp4_elvis_lhs_0 = druheCelkem.e1(item);
    var tmp_3 = tmp4_elvis_lhs_0 == null ? 0 : tmp4_elvis_lhs_0;
    var tmp5_elvis_lhs_0 = druheVyhrane.e1(item);
    var tmp$ret$6 = new Radek(item, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp5_elvis_lhs_0 == null ? 0 : tmp5_elvis_lhs_0);
    destination.e(tmp$ret$6);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_1 = destination.g();
  while (_iterator__ex2g4s_1.h()) {
    var element = _iterator__ex2g4s_1.i();
    // Inline function 'cz.padelcesko.score.core.Rozhodci.spocti.<anonymous>' call
    if (element.yh()) {
      destination_0.e(element);
    }
  }
  return destination_0;
};
var Rozhodci_instance;
function Rozhodci_getInstance() {
  return Rozhodci_instance;
}
function Gem(set, gem, podava, podavaHrac, body, znacky, vitez, skore, trvani, tieBreak, podavaBody) {
  podavaHrac = podavaHrac === VOID ? 0 : podavaHrac;
  znacky = znacky === VOID ? emptyList() : znacky;
  trvani = trvani === VOID ? new Long(0, 0) : trvani;
  tieBreak = tieBreak === VOID ? false : tieBreak;
  podavaBody = podavaBody === VOID ? emptyList() : podavaBody;
  this.ei_1 = set;
  this.fi_1 = gem;
  this.gi_1 = podava;
  this.hi_1 = podavaHrac;
  this.ii_1 = body;
  this.ji_1 = znacky;
  this.ki_1 = vitez;
  this.li_1 = skore;
  this.mi_1 = trvani;
  this.ni_1 = tieBreak;
  this.oi_1 = podavaBody;
}
protoOf(Gem).pi = function () {
  // Inline function 'kotlin.Long.div' call
  return this.mi_1.q1(toLong(1000));
};
protoOf(Gem).toString = function () {
  return 'Gem(set=' + this.ei_1 + ', gem=' + this.fi_1 + ', podava=' + this.gi_1 + ', podavaHrac=' + this.hi_1 + ', body=' + toString_1(this.ii_1) + ', znacky=' + toString_1(this.ji_1) + ', vitez=' + this.ki_1 + ', skore=' + this.li_1 + ', trvani=' + this.mi_1.toString() + ', tieBreak=' + this.ni_1 + ', podavaBody=' + toString_1(this.oi_1) + ')';
};
protoOf(Gem).hashCode = function () {
  var result = this.ei_1;
  result = imul_0(result, 31) + this.fi_1 | 0;
  result = imul_0(result, 31) + this.gi_1 | 0;
  result = imul_0(result, 31) + this.hi_1 | 0;
  result = imul_0(result, 31) + hashCode(this.ii_1) | 0;
  result = imul_0(result, 31) + hashCode(this.ji_1) | 0;
  result = imul_0(result, 31) + (this.ki_1 == null ? 0 : this.ki_1) | 0;
  result = imul_0(result, 31) + (this.li_1 == null ? 0 : getStringHashCode(this.li_1)) | 0;
  result = imul_0(result, 31) + this.mi_1.hashCode() | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.ni_1) | 0;
  result = imul_0(result, 31) + hashCode(this.oi_1) | 0;
  return result;
};
protoOf(Gem).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Gem))
    return false;
  var tmp0_other_with_cast = other instanceof Gem ? other : THROW_CCE();
  if (!(this.ei_1 === tmp0_other_with_cast.ei_1))
    return false;
  if (!(this.fi_1 === tmp0_other_with_cast.fi_1))
    return false;
  if (!(this.gi_1 === tmp0_other_with_cast.gi_1))
    return false;
  if (!(this.hi_1 === tmp0_other_with_cast.hi_1))
    return false;
  if (!equals(this.ii_1, tmp0_other_with_cast.ii_1))
    return false;
  if (!equals(this.ji_1, tmp0_other_with_cast.ji_1))
    return false;
  if (!(this.ki_1 == tmp0_other_with_cast.ki_1))
    return false;
  if (!(this.li_1 == tmp0_other_with_cast.li_1))
    return false;
  if (!this.mi_1.equals(tmp0_other_with_cast.mi_1))
    return false;
  if (!(this.ni_1 === tmp0_other_with_cast.ni_1))
    return false;
  if (!equals(this.oi_1, tmp0_other_with_cast.oi_1))
    return false;
  return true;
};
function index($this, tym) {
  return tym.equals(TymId_A_getInstance()) ? 0 : 1;
}
function znacka($this, zapas, podava) {
  var brejkbol = false;
  var setbol = false;
  var mecbol = false;
  var _iterator__ex2g4s = listOf_0([TymId_A_getInstance(), TymId_B_getInstance()]).g();
  $l$loop: while (_iterator__ex2g4s.h()) {
    var tym = _iterator__ex2g4s.i();
    var tmp = Engine_instance.yc(zapas, new Bod(tym));
    var tmp0_elvis_lhs = tmp instanceof Prijato ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      continue $l$loop;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var v = tmp_0;
    var tmp0 = v.ad_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(tmp0, Collection)) {
        tmp_1 = tmp0.k();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.g();
      while (_iterator__ex2g4s_0.h()) {
        var element = _iterator__ex2g4s_0.i();
        // Inline function 'cz.padelcesko.score.core.Rozpis.znacka.<anonymous>' call
        if (element instanceof GemZiskan) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    var gem = tmp$ret$0;
    var tmp2 = v.ad_1;
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp2, Collection)) {
        tmp_2 = tmp2.k();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_2;
      }
      var _iterator__ex2g4s_1 = tmp2.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_0 = _iterator__ex2g4s_1.i();
        // Inline function 'cz.padelcesko.score.core.Rozpis.znacka.<anonymous>' call
        if (element_0 instanceof ZapasSkoncil) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2) {
      mecbol = true;
    } else {
      var tmp4 = v.ad_1;
      var tmp$ret$4;
      $l$block_4: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(tmp4, Collection)) {
          tmp_3 = tmp4.k();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$4 = false;
          break $l$block_4;
        }
        var _iterator__ex2g4s_2 = tmp4.g();
        while (_iterator__ex2g4s_2.h()) {
          var element_1 = _iterator__ex2g4s_2.i();
          // Inline function 'cz.padelcesko.score.core.Rozpis.znacka.<anonymous>' call
          if (element_1 instanceof SetZiskan) {
            tmp$ret$4 = true;
            break $l$block_4;
          }
        }
        tmp$ret$4 = false;
      }
      if (tmp$ret$4) {
        setbol = true;
      }
    }
    if (gem && !(index($this, tym) === podava))
      brejkbol = true;
  }
  // Inline function 'kotlin.collections.mutableListOf' call
  var kody = ArrayList_init_$Create$();
  if (brejkbol) {
    // Inline function 'kotlin.collections.plusAssign' call
    kody.e('BB');
  }
  if (setbol) {
    // Inline function 'kotlin.collections.plusAssign' call
    kody.e('SB');
  }
  if (mecbol) {
    // Inline function 'kotlin.collections.plusAssign' call
    kody.e('MB');
  }
  return joinToString_0(kody, ' ');
}
function jeVyhoda($this, stav) {
  if (!stav.sa_1.equals(Faze_GEM_getInstance()))
    return false;
  var a = stav.qa_1.db(TymId_A_getInstance());
  var b = stav.qa_1.db(TymId_B_getInstance());
  return a >= 3 && b >= 3 && !(a === b);
}
function nazev($this, stav, poradiVyhody) {
  return cislo_0($this, stav, TymId_A_getInstance(), poradiVyhody) + ':' + cislo_0($this, stav, TymId_B_getInstance(), poradiVyhody);
}
function cislo_0($this, stav, tym, poradiVyhody) {
  if (!stav.sa_1.equals(Faze_GEM_getInstance()))
    return stav.qa_1.db(tym).toString();
  var muj = stav.qa_1.db(tym);
  var soupere = stav.qa_1.db(tym.ib());
  if (muj >= 3 && soupere >= 3) {
    return muj > soupere ? 'AD' + poradiVyhody : '40';
  }
  switch (muj) {
    case 0:
      return '0';
    case 1:
      return '15';
    case 2:
      return '30';
    default:
      return '40';
  }
}
function Rozpis_0() {
}
protoOf(Rozpis_0).qi = function (vychozi, zaznam, casy, noveSeance) {
  if (vychozi.lc_1.ld_1.equals(Format_AMERICANO_getInstance()))
    return emptyList();
  var zapas = Engine_instance.xc(vychozi.lc_1, vychozi.mc_1, vychozi.nc_1, vychozi.oc_1);
  // Inline function 'kotlin.collections.mutableListOf' call
  var hotove = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.mutableListOf' call
  var body = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.mutableListOf' call
  var znacky = ArrayList_init_$Create$();
  var podava = index(this, zapas.bd_1.ma_1.eb_1);
  var podavaHrac = zapas.bd_1.ma_1.fb_1;
  var cisloSetu = 1;
  var cisloGemu = 1;
  var trvaniGemu = new Long(0, 0);
  var pocetVyhod = 0;
  var predchoziCas = null;
  var tieBreak = !zapas.bd_1.sa_1.equals(Faze_GEM_getInstance());
  // Inline function 'kotlin.collections.mutableListOf' call
  var podavaBody = ArrayList_init_$Create$();
  var _iterator__ex2g4s = Casy_getInstance().hc(zaznam, casy, noveSeance).g();
  $l$loop_1: while (_iterator__ex2g4s.h()) {
    var krok = _iterator__ex2g4s.i();
    var podavaTed = listOf_0([index(this, zapas.bd_1.ma_1.eb_1), zapas.bd_1.ma_1.fb_1]);
    var v = Engine_instance.yc(zapas, krok.wb_1);
    if (!(v instanceof Prijato))
      continue $l$loop_1;
    var predtim = zapas;
    zapas = v.zc_1;
    if (body.k())
      tieBreak = !zapas.bd_1.sa_1.equals(Faze_GEM_getInstance());
    var tmp;
    var tmp_0 = krok.wb_1;
    if (tmp_0 instanceof Bod) {
      tmp = tieBreak;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.plusAssign' call
      podavaBody.e(podavaTed);
    }
    var tmp_1;
    var tmp_2 = krok.wb_1;
    if (tmp_2 instanceof ZvolPodavajiciho) {
      tmp_1 = body.k();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      podava = index(this, zapas.bd_1.ma_1.eb_1);
      podavaHrac = zapas.bd_1.ma_1.fb_1;
    }
    var tmp_3 = krok.wb_1;
    if (!(tmp_3 instanceof Bod))
      continue $l$loop_1;
    trvaniGemu = trvaniGemu.s(Casy_getInstance().jc(krok, predchoziCas));
    predchoziCas = krok.xb_1;
    var tmp2 = v.ad_1;
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_4;
      if (isInterface(tmp2, Collection)) {
        tmp_4 = tmp2.k();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$4 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp2.g();
      while (_iterator__ex2g4s_0.h()) {
        var element = _iterator__ex2g4s_0.i();
        // Inline function 'cz.padelcesko.score.core.Rozpis.sestav.<anonymous>' call
        if (element instanceof GemZiskan) {
          tmp$ret$4 = true;
          break $l$block_0;
        }
      }
      tmp$ret$4 = false;
    }
    var gemDohran = tmp$ret$4;
    if (!gemDohran) {
      if (jeVyhoda(this, zapas.bd_1)) {
        pocetVyhod = pocetVyhod + 1 | 0;
      }
      var tmp4 = body;
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = nazev(this, zapas.bd_1, pocetVyhod);
      tmp4.e(element_0);
      var tmp6 = znacky;
      // Inline function 'kotlin.collections.plusAssign' call
      var element_1 = znacka(this, zapas, podava);
      tmp6.e(element_1);
      continue $l$loop_1;
    }
    var tmp8 = v.ad_1;
    var tmp$ret$7;
    $l$block_1: {
      // Inline function 'kotlin.collections.first' call
      var _iterator__ex2g4s_1 = tmp8.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_2 = _iterator__ex2g4s_1.i();
        // Inline function 'cz.padelcesko.score.core.Rozpis.sestav.<anonymous>' call
        if (element_2 instanceof GemZiskan) {
          tmp$ret$7 = element_2;
          break $l$block_1;
        }
      }
      throw NoSuchElementException_init_$Create$_0('Collection contains no element matching the predicate.');
    }
    var tmp_5 = tmp$ret$7;
    var vitezGemu = (tmp_5 instanceof GemZiskan ? tmp_5 : THROW_CCE()).ia_1;
    var tmp10 = v.ad_1;
    var tmp$ret$8;
    $l$block_3: {
      // Inline function 'kotlin.collections.any' call
      var tmp_6;
      if (isInterface(tmp10, Collection)) {
        tmp_6 = tmp10.k();
      } else {
        tmp_6 = false;
      }
      if (tmp_6) {
        tmp$ret$8 = false;
        break $l$block_3;
      }
      var _iterator__ex2g4s_2 = tmp10.g();
      while (_iterator__ex2g4s_2.h()) {
        var element_3 = _iterator__ex2g4s_2.i();
        // Inline function 'cz.padelcesko.score.core.Rozpis.sestav.<anonymous>' call
        if (element_3 instanceof SetZiskan) {
          tmp$ret$8 = true;
          break $l$block_3;
        }
      }
      tmp$ret$8 = false;
    }
    var setDohran = tmp$ret$8;
    var tmp_7;
    if (setDohran) {
      var g = predtim.bd_1.pa_1;
      tmp_7 = vitezGemu.equals(TymId_A_getInstance()) ? '' + (g.bb_1 + 1 | 0) + '-' + g.cb_1 : '' + g.bb_1 + '-' + (g.cb_1 + 1 | 0);
    } else {
      tmp_7 = '' + zapas.bd_1.pa_1.bb_1 + '-' + zapas.bd_1.pa_1.cb_1;
    }
    var gemy = tmp_7;
    // Inline function 'kotlin.collections.plusAssign' call
    var element_4 = new Gem(cisloSetu, cisloGemu, podava, podavaHrac, toList(body), toList(znacky), index(this, vitezGemu), gemy, trvaniGemu, tieBreak, toList(podavaBody));
    hotove.e(element_4);
    // Inline function 'kotlin.collections.mutableListOf' call
    body = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    znacky = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    podavaBody = ArrayList_init_$Create$();
    trvaniGemu = new Long(0, 0);
    pocetVyhod = 0;
    podava = index(this, zapas.bd_1.ma_1.eb_1);
    podavaHrac = zapas.bd_1.ma_1.fb_1;
    tieBreak = !zapas.bd_1.sa_1.equals(Faze_GEM_getInstance());
    if (setDohran) {
      cisloSetu = cisloSetu + 1 | 0;
      cisloGemu = 1;
    } else {
      cisloGemu = cisloGemu + 1 | 0;
    }
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!body.k()) {
    // Inline function 'kotlin.collections.plusAssign' call
    var element_5 = new Gem(cisloSetu, cisloGemu, podava, podavaHrac, toList(body), toList(znacky), null, null, trvaniGemu, tieBreak, toList(podavaBody));
    hotove.e(element_5);
  }
  return hotove;
};
var Rozpis_instance;
function Rozpis_getInstance() {
  return Rozpis_instance;
}
var Udaj_SKORE_instance;
var Udaj_JMENA_instance;
var Udaj_STATISTIKY_instance;
var Udaj_TEP_instance;
var Udaj_KROKY_instance;
var Udaj_KALORIE_instance;
function Companion_12() {
}
var Companion_instance_12;
function Companion_getInstance_12() {
  return Companion_instance_12;
}
var Udaj_entriesInitialized;
function Udaj_initEntries() {
  if (Udaj_entriesInitialized)
    return Unit_instance;
  Udaj_entriesInitialized = true;
  Udaj_SKORE_instance = new Udaj('SKORE', 0, 'skore');
  Udaj_JMENA_instance = new Udaj('JMENA', 1, 'jmena');
  Udaj_STATISTIKY_instance = new Udaj('STATISTIKY', 2, 'statistiky');
  Udaj_TEP_instance = new Udaj('TEP', 3, 'tep');
  Udaj_KROKY_instance = new Udaj('KROKY', 4, 'kroky');
  Udaj_KALORIE_instance = new Udaj('KALORIE', 5, 'kalorie');
}
function Udaj(name, ordinal, hodnota) {
  Enum.call(this, name, ordinal);
  this.ti_1 = hodnota;
}
function Companion_13() {
  Companion_instance_13 = this;
  this.ui_1 = setOf_0([Udaj_SKORE_getInstance(), Udaj_JMENA_getInstance(), Udaj_STATISTIKY_getInstance()]);
  this.vi_1 = Regex_init_$Create$('^[a-z0-9_]{2,40}$');
}
protoOf(Companion_13).wi = function (id) {
  return this.vi_1.a6(id);
};
var Companion_instance_13;
function Companion_getInstance_13() {
  if (Companion_instance_13 == null)
    new Companion_13();
  return Companion_instance_13;
}
function Udaj_SKORE_getInstance() {
  Udaj_initEntries();
  return Udaj_SKORE_instance;
}
function Udaj_JMENA_getInstance() {
  Udaj_initEntries();
  return Udaj_JMENA_instance;
}
function Udaj_STATISTIKY_getInstance() {
  Udaj_initEntries();
  return Udaj_STATISTIKY_instance;
}
function procenta_0($this, cast, celek) {
  return celek === 0 ? null : (imul_0(cast, 100) + (celek / 2 | 0) | 0) / celek | 0;
}
function Hrac(tym, poradi, jmeno) {
  this.kg_1 = tym;
  this.lg_1 = poradi;
  this.mg_1 = jmeno;
}
protoOf(Hrac).toString = function () {
  return 'Hrac(tym=' + this.kg_1.toString() + ', poradi=' + this.lg_1 + ', jmeno=' + this.mg_1 + ')';
};
protoOf(Hrac).hashCode = function () {
  var result = this.kg_1.hashCode();
  result = imul_0(result, 31) + this.lg_1 | 0;
  result = imul_0(result, 31) + getStringHashCode(this.mg_1) | 0;
  return result;
};
protoOf(Hrac).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Hrac))
    return false;
  var tmp0_other_with_cast = other instanceof Hrac ? other : THROW_CCE();
  if (!this.kg_1.equals(tmp0_other_with_cast.kg_1))
    return false;
  if (!(this.lg_1 === tmp0_other_with_cast.lg_1))
    return false;
  if (!(this.mg_1 === tmp0_other_with_cast.mg_1))
    return false;
  return true;
};
function Cisla(esa, dvojchyby, poPrvnimVyhrane, poPrvnimCelkem, poDruhemVyhrane, poDruhemCelkem, brejkboluOdvraceno, brejkboluCelkem, gemuPodano, gemuUhajeno, returnCelkem, returnVyhrane) {
  esa = esa === VOID ? 0 : esa;
  dvojchyby = dvojchyby === VOID ? 0 : dvojchyby;
  poPrvnimVyhrane = poPrvnimVyhrane === VOID ? 0 : poPrvnimVyhrane;
  poPrvnimCelkem = poPrvnimCelkem === VOID ? 0 : poPrvnimCelkem;
  poDruhemVyhrane = poDruhemVyhrane === VOID ? 0 : poDruhemVyhrane;
  poDruhemCelkem = poDruhemCelkem === VOID ? 0 : poDruhemCelkem;
  brejkboluOdvraceno = brejkboluOdvraceno === VOID ? 0 : brejkboluOdvraceno;
  brejkboluCelkem = brejkboluCelkem === VOID ? 0 : brejkboluCelkem;
  gemuPodano = gemuPodano === VOID ? 0 : gemuPodano;
  gemuUhajeno = gemuUhajeno === VOID ? 0 : gemuUhajeno;
  returnCelkem = returnCelkem === VOID ? 0 : returnCelkem;
  returnVyhrane = returnVyhrane === VOID ? 0 : returnVyhrane;
  this.ng_1 = esa;
  this.og_1 = dvojchyby;
  this.pg_1 = poPrvnimVyhrane;
  this.qg_1 = poPrvnimCelkem;
  this.rg_1 = poDruhemVyhrane;
  this.sg_1 = poDruhemCelkem;
  this.tg_1 = brejkboluOdvraceno;
  this.ug_1 = brejkboluCelkem;
  this.vg_1 = gemuPodano;
  this.wg_1 = gemuUhajeno;
  this.xg_1 = returnCelkem;
  this.yg_1 = returnVyhrane;
}
protoOf(Cisla).vf = function () {
  return procenta_0(this, this.yg_1, this.xg_1);
};
protoOf(Cisla).zg = function () {
  return this.pg_1 + this.rg_1 | 0;
};
protoOf(Cisla).ah = function () {
  return this.qg_1 + this.sg_1 | 0;
};
protoOf(Cisla).xi = function () {
  return procenta_0(this, this.qg_1, this.ah());
};
protoOf(Cisla).yi = function () {
  return procenta_0(this, this.pg_1, this.qg_1);
};
protoOf(Cisla).zi = function () {
  return procenta_0(this, this.rg_1, this.sg_1);
};
protoOf(Cisla).aj = function () {
  return procenta_0(this, this.wg_1, this.vg_1);
};
protoOf(Cisla).bj = function () {
  return procenta_0(this, this.pg_1 + this.rg_1 | 0, this.ah());
};
protoOf(Cisla).yh = function () {
  return this.ah() > 0 || this.xg_1 > 0;
};
protoOf(Cisla).cj = function () {
  return this.ng_1 > 0 || this.og_1 > 0 || this.sg_1 > 0;
};
protoOf(Cisla).dj = function (d) {
  return new Cisla(this.ng_1 + d.ng_1 | 0, this.og_1 + d.og_1 | 0, this.pg_1 + d.pg_1 | 0, this.qg_1 + d.qg_1 | 0, this.rg_1 + d.rg_1 | 0, this.sg_1 + d.sg_1 | 0, this.tg_1 + d.tg_1 | 0, this.ug_1 + d.ug_1 | 0, this.vg_1 + d.vg_1 | 0, this.wg_1 + d.wg_1 | 0, this.xg_1 + d.xg_1 | 0, this.yg_1 + d.yg_1 | 0);
};
protoOf(Cisla).toString = function () {
  return 'Cisla(esa=' + this.ng_1 + ', dvojchyby=' + this.og_1 + ', poPrvnimVyhrane=' + this.pg_1 + ', poPrvnimCelkem=' + this.qg_1 + ', poDruhemVyhrane=' + this.rg_1 + ', poDruhemCelkem=' + this.sg_1 + ', brejkboluOdvraceno=' + this.tg_1 + ', brejkboluCelkem=' + this.ug_1 + ', gemuPodano=' + this.vg_1 + ', gemuUhajeno=' + this.wg_1 + ', returnCelkem=' + this.xg_1 + ', returnVyhrane=' + this.yg_1 + ')';
};
protoOf(Cisla).hashCode = function () {
  var result = this.ng_1;
  result = imul_0(result, 31) + this.og_1 | 0;
  result = imul_0(result, 31) + this.pg_1 | 0;
  result = imul_0(result, 31) + this.qg_1 | 0;
  result = imul_0(result, 31) + this.rg_1 | 0;
  result = imul_0(result, 31) + this.sg_1 | 0;
  result = imul_0(result, 31) + this.tg_1 | 0;
  result = imul_0(result, 31) + this.ug_1 | 0;
  result = imul_0(result, 31) + this.vg_1 | 0;
  result = imul_0(result, 31) + this.wg_1 | 0;
  result = imul_0(result, 31) + this.xg_1 | 0;
  result = imul_0(result, 31) + this.yg_1 | 0;
  return result;
};
protoOf(Cisla).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Cisla))
    return false;
  var tmp0_other_with_cast = other instanceof Cisla ? other : THROW_CCE();
  if (!(this.ng_1 === tmp0_other_with_cast.ng_1))
    return false;
  if (!(this.og_1 === tmp0_other_with_cast.og_1))
    return false;
  if (!(this.pg_1 === tmp0_other_with_cast.pg_1))
    return false;
  if (!(this.qg_1 === tmp0_other_with_cast.qg_1))
    return false;
  if (!(this.rg_1 === tmp0_other_with_cast.rg_1))
    return false;
  if (!(this.sg_1 === tmp0_other_with_cast.sg_1))
    return false;
  if (!(this.tg_1 === tmp0_other_with_cast.tg_1))
    return false;
  if (!(this.ug_1 === tmp0_other_with_cast.ug_1))
    return false;
  if (!(this.vg_1 === tmp0_other_with_cast.vg_1))
    return false;
  if (!(this.wg_1 === tmp0_other_with_cast.wg_1))
    return false;
  if (!(this.xg_1 === tmp0_other_with_cast.xg_1))
    return false;
  if (!(this.yg_1 === tmp0_other_with_cast.yg_1))
    return false;
  return true;
};
function Sada(set, a, b, hraci) {
  hraci = hraci === VOID ? emptyMap() : hraci;
  this.gg_1 = set;
  this.hg_1 = a;
  this.ig_1 = b;
  this.jg_1 = hraci;
}
protoOf(Sada).yh = function () {
  return this.hg_1.yh() || this.ig_1.yh();
};
protoOf(Sada).cj = function () {
  return this.hg_1.cj() || this.ig_1.cj();
};
protoOf(Sada).toString = function () {
  return 'Sada(set=' + this.gg_1 + ', a=' + this.hg_1.toString() + ', b=' + this.ig_1.toString() + ', hraci=' + toString_1(this.jg_1) + ')';
};
protoOf(Sada).hashCode = function () {
  var result = this.gg_1 == null ? 0 : this.gg_1;
  result = imul_0(result, 31) + this.hg_1.hashCode() | 0;
  result = imul_0(result, 31) + this.ig_1.hashCode() | 0;
  result = imul_0(result, 31) + hashCode(this.jg_1) | 0;
  return result;
};
protoOf(Sada).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Sada))
    return false;
  var tmp0_other_with_cast = other instanceof Sada ? other : THROW_CCE();
  if (!(this.gg_1 == tmp0_other_with_cast.gg_1))
    return false;
  if (!this.hg_1.equals(tmp0_other_with_cast.hg_1))
    return false;
  if (!this.ig_1.equals(tmp0_other_with_cast.ig_1))
    return false;
  if (!equals(this.jg_1, tmp0_other_with_cast.jg_1))
    return false;
  return true;
};
function jeBrejkbol($this, zapas, podavajici) {
  var returnujici = podavajici.ib();
  var tmp = Engine_instance.yc(zapas, new Bod(returnujici));
  var tmp0_elvis_lhs = tmp instanceof Prijato ? tmp : null;
  var tmp_0;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp_0 = tmp0_elvis_lhs;
  }
  var v = tmp_0;
  var tmp0 = v.ad_1;
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp_1;
    if (isInterface(tmp0, Collection)) {
      tmp_1 = tmp0.k();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.core.Statistiky.jeBrejkbol.<anonymous>' call
      if (element instanceof GemZiskan) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function rozhoduje($this, stav) {
  if (stav.ab_1)
    return true;
  if (!stav.sa_1.equals(Faze_GEM_getInstance()))
    return false;
  var b = stav.qa_1;
  if (b.bb_1 < 3 || !(b.bb_1 === b.cb_1))
    return false;
  var tmp;
  switch (stav.ka_1.fd_1.h1_1) {
    case 1:
      tmp = true;
      break;
    case 2:
      tmp = stav.ra_1 >= 2;
      break;
    case 0:
      tmp = false;
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function podavajici($this, stav) {
  var tym = stav.la_1.db(stav.ma_1.eb_1);
  var poradi = stav.ma_1.fb_1;
  var tmp0_elvis_lhs = getOrNull_0(tym.mb_1, poradi);
  var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(tym.mb_1) : tmp0_elvis_lhs;
  var jmeno = tmp1_elvis_lhs == null ? tym.lb_1.g1_1 : tmp1_elvis_lhs;
  return new Hrac(stav.ma_1.eb_1, poradi, jmeno);
}
function sam$kotlin_Comparator$0_1(function_0) {
  this.ej_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_1).z7 = function (a, b) {
  return this.ej_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
  return this.z7(a, b);
};
protoOf(sam$kotlin_Comparator$0_1).w1 = function () {
  return this.ej_1;
};
protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.w1(), other.w1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
  return hashCode(this.w1());
};
function Statistiky$spocti$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
  var tmp = a.b1();
  // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
  var tmp$ret$1 = b.b1();
  return compareValues(tmp, tmp$ret$1);
}
function Statistiky() {
}
protoOf(Statistiky).fg = function (vychozi, zaznam, znacky) {
  var zapas = Engine_instance.xc(vychozi.lc_1, vychozi.mc_1, vychozi.nc_1, vychozi.oc_1);
  // Inline function 'kotlin.collections.mutableMapOf' call
  var poSetech = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var poHracich = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var poHracichVSetu = LinkedHashMap_init_$Create$();
  var cisloSetu = 1;
  var vpravo = toMutableMap(vychozi.vc_1);
  var _iterator__ex2g4s = Casy_getInstance().ic(zaznam).g();
  $l$loop_0: while (_iterator__ex2g4s.h()) {
    var krok = _iterator__ex2g4s.i();
    var tahTed = krok.wb_1;
    if (tahTed instanceof ProhodStranyHracu) {
      var tmp0_safe_receiver = vpravo.e1(tahTed.ed_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
        var tmp1 = tahTed.ed_1;
        // Inline function 'kotlin.collections.set' call
        var value = 1 - tmp0_safe_receiver | 0;
        vpravo.x2(tmp1, value);
      }
    }
    var stavPred = zapas.bd_1;
    var podavajici_0 = stavPred.ma_1.eb_1;
    var kdo = podavajici(this, stavPred);
    var prijima = this.fj(stavPred, vpravo);
    var vGemu = stavPred.sa_1.equals(Faze_GEM_getInstance());
    var brejkbol = jeBrejkbol(this, zapas, podavajici_0);
    var v = Engine_instance.yc(zapas, krok.wb_1);
    if (!(v instanceof Prijato))
      continue $l$loop_0;
    zapas = v.zc_1;
    var tah = krok.wb_1;
    if (!(tah instanceof Bod))
      continue $l$loop_0;
    var tmp = Rozhodci_instance;
    var tmp1_elvis_lhs = znacky.e1(krok.zb_1);
    var kody = tmp.di(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    var druhe = kody.z('2p') || kody.z('dvojchyba');
    var podavajiciVyhral = tah.ge_1.equals(podavajici_0);
    var tmp_0;
    if (vGemu) {
      var tmp2 = v.ad_1;
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(tmp2, Collection)) {
          tmp_1 = tmp2.k();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$4 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp2.g();
        while (_iterator__ex2g4s_0.h()) {
          var element = _iterator__ex2g4s_0.i();
          // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
          if (element instanceof GemZiskan) {
            tmp$ret$4 = true;
            break $l$block_0;
          }
        }
        tmp$ret$4 = false;
      }
      tmp_0 = tmp$ret$4;
    } else {
      tmp_0 = false;
    }
    var gemDohran = tmp_0;
    var tmp2_esa = kody.z('eso') ? 1 : 0;
    var tmp3_dvojchyby = kody.z('dvojchyba') ? 1 : 0;
    var tmp4_poPrvnimCelkem = druhe ? 0 : 1;
    var tmp5_poPrvnimVyhrane = !druhe && podavajiciVyhral ? 1 : 0;
    var tmp6_poDruhemCelkem = druhe ? 1 : 0;
    var tmp7_poDruhemVyhrane = druhe && podavajiciVyhral ? 1 : 0;
    var tmp8_brejkboluCelkem = brejkbol ? 1 : 0;
    var tmp9_brejkboluOdvraceno = brejkbol && podavajiciVyhral ? 1 : 0;
    var tmp10_gemuPodano = gemDohran ? 1 : 0;
    var tmp11_gemuUhajeno = gemDohran && podavajiciVyhral ? 1 : 0;
    var d = new Cisla(tmp2_esa, tmp3_dvojchyby, tmp5_poPrvnimVyhrane, tmp4_poPrvnimCelkem, tmp7_poDruhemVyhrane, tmp6_poDruhemCelkem, tmp9_brejkboluOdvraceno, tmp8_brejkboluCelkem, tmp10_gemuPodano, tmp11_gemuUhajeno);
    var r = new Cisla(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, 1, podavajiciVyhral ? 0 : 1);
    var tmp12_elvis_lhs = poSetech.e1(cisloSetu);
    var stare = tmp12_elvis_lhs == null ? to(new Cisla(), new Cisla()) : tmp12_elvis_lhs;
    var tmp5 = cisloSetu;
    var tmp_2;
    if (podavajici_0.equals(TymId_A_getInstance())) {
      tmp_2 = to(stare.j7_1.dj(d), stare.k7_1.dj(r));
    } else {
      tmp_2 = to(stare.j7_1.dj(r), stare.k7_1.dj(d));
    }
    // Inline function 'kotlin.collections.set' call
    var value_0 = tmp_2;
    poSetech.x2(tmp5, value_0);
    var tmp13_elvis_lhs = poHracich.e1(kdo);
    // Inline function 'kotlin.collections.set' call
    var value_1 = (tmp13_elvis_lhs == null ? new Cisla() : tmp13_elvis_lhs).dj(d);
    poHracich.x2(kdo, value_1);
    // Inline function 'kotlin.collections.getOrPut' call
    var key = cisloSetu;
    var value_2 = poHracichVSetu.e1(key);
    var tmp_3;
    if (value_2 == null) {
      // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
      // Inline function 'kotlin.collections.mutableMapOf' call
      var answer = LinkedHashMap_init_$Create$();
      poHracichVSetu.x2(key, answer);
      tmp_3 = answer;
    } else {
      tmp_3 = value_2;
    }
    var vSetu = tmp_3;
    var tmp14_elvis_lhs = vSetu.e1(kdo);
    // Inline function 'kotlin.collections.set' call
    var value_3 = (tmp14_elvis_lhs == null ? new Cisla() : tmp14_elvis_lhs).dj(d);
    vSetu.x2(kdo, value_3);
    if (!(prijima == null)) {
      var tmp15_elvis_lhs = poHracich.e1(prijima);
      // Inline function 'kotlin.collections.set' call
      var value_4 = (tmp15_elvis_lhs == null ? new Cisla() : tmp15_elvis_lhs).dj(r);
      poHracich.x2(prijima, value_4);
      var tmp16_elvis_lhs = vSetu.e1(prijima);
      // Inline function 'kotlin.collections.set' call
      var value_5 = (tmp16_elvis_lhs == null ? new Cisla() : tmp16_elvis_lhs).dj(r);
      vSetu.x2(prijima, value_5);
    }
    var tmp21 = v.ad_1;
    var tmp$ret$9;
    $l$block_2: {
      // Inline function 'kotlin.collections.any' call
      var tmp_4;
      if (isInterface(tmp21, Collection)) {
        tmp_4 = tmp21.k();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$9 = false;
        break $l$block_2;
      }
      var _iterator__ex2g4s_1 = tmp21.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_0 = _iterator__ex2g4s_1.i();
        // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
        if (element_0 instanceof SetZiskan) {
          tmp$ret$9 = true;
          break $l$block_2;
        }
      }
      tmp$ret$9 = false;
    }
    if (tmp$ret$9) {
      cisloSetu = cisloSetu + 1 | 0;
    }
  }
  // Inline function 'kotlin.collections.sortedBy' call
  var this_0 = poSetech.f1();
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp_5 = Statistiky$spocti$lambda;
  var tmp$ret$11 = new sam$kotlin_Comparator$0_1(tmp_5);
  // Inline function 'kotlin.collections.map' call
  var this_1 = sortedWith(this_0, tmp$ret$11);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
  var _iterator__ex2g4s_2 = this_1.g();
  while (_iterator__ex2g4s_2.h()) {
    var item = _iterator__ex2g4s_2.i();
    // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
    // Inline function 'kotlin.collections.component1' call
    var cislo = item.b1();
    // Inline function 'kotlin.collections.component2' call
    var dvojice = item.c1();
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = poHracichVSetu.e1(cislo);
    var tmp$ret$15 = tmp0_elvis_lhs == null ? emptyMap() : tmp0_elvis_lhs;
    var tmp$ret$16 = new Sada(cislo, dvojice.j7_1, dvojice.k7_1, tmp$ret$15);
    destination.e(tmp$ret$16);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_3 = destination.g();
  while (_iterator__ex2g4s_3.h()) {
    var element_1 = _iterator__ex2g4s_3.i();
    // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
    if (element_1.yh()) {
      destination_0.e(element_1);
    }
  }
  var sety = destination_0;
  if (sety.k())
    return emptyList();
  // Inline function 'kotlin.collections.fold' call
  var accumulator = new Cisla();
  var _iterator__ex2g4s_4 = sety.g();
  while (_iterator__ex2g4s_4.h()) {
    var element_2 = _iterator__ex2g4s_4.i();
    // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
    accumulator = accumulator.dj(element_2.hg_1);
  }
  var tmp_6 = accumulator;
  // Inline function 'kotlin.collections.fold' call
  var accumulator_0 = new Cisla();
  var _iterator__ex2g4s_5 = sety.g();
  while (_iterator__ex2g4s_5.h()) {
    var element_3 = _iterator__ex2g4s_5.i();
    // Inline function 'cz.padelcesko.score.core.Statistiky.spocti.<anonymous>' call
    accumulator_0 = accumulator_0.dj(element_3.ig_1);
  }
  var tmp$ret$25 = accumulator_0;
  var celek = new Sada(null, tmp_6, tmp$ret$25, poHracich);
  return sety.l() < 2 ? listOf(celek) : plus_0(listOf(celek), sety);
};
protoOf(Statistiky).fj = function (stav, vpravo) {
  if (stav.sa_1.equals(Faze_KONEC_getInstance()))
    return null;
  var tym = stav.ma_1.eb_1.ib();
  var t = stav.la_1.db(tym);
  var tmp;
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if (!(isInterface(vpravo, KtMap) ? vpravo : THROW_CCE()).d1(tym)) {
    tmp = true;
  } else {
    tmp = rozhoduje(this, stav);
  }
  if (tmp)
    return null;
  if (t.mb_1.l() < 2)
    return new Hrac(tym, 0, t.mb_1.j(0));
  // Inline function 'kotlin.takeIf' call
  var this_0 = getValue(vpravo, tym);
  var tmp_0;
  // Inline function 'cz.padelcesko.score.core.Statistiky.prijemce.<anonymous>' call
  if (0 <= this_0 ? this_0 <= (t.mb_1.l() - 1 | 0) : false) {
    tmp_0 = this_0;
  } else {
    tmp_0 = null;
  }
  var tmp0_elvis_lhs = tmp_0;
  var tmp_1;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp_1 = tmp0_elvis_lhs;
  }
  var prave = tmp_1;
  var poradi = (stav.qa_1.ud() % 2 | 0) === 0 ? prave : 1 - prave | 0;
  return new Hrac(tym, poradi, t.mb_1.j(poradi));
};
var Statistiky_instance;
function Statistiky_getInstance() {
  return Statistiky_instance;
}
var TymId_A_instance;
var TymId_B_instance;
function values_1() {
  return [TymId_A_getInstance(), TymId_B_getInstance()];
}
function valueOf(value) {
  switch (value) {
    case 'A':
      return TymId_A_getInstance();
    case 'B':
      return TymId_B_getInstance();
    default:
      TymId_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
function get_entries_1() {
  if ($ENTRIES_1 == null)
    $ENTRIES_1 = enumEntries(values_1());
  return $ENTRIES_1;
}
var TymId_entriesInitialized;
function TymId_initEntries() {
  if (TymId_entriesInitialized)
    return Unit_instance;
  TymId_entriesInitialized = true;
  TymId_A_instance = new TymId('A', 0);
  TymId_B_instance = new TymId('B', 1);
}
var $ENTRIES_1;
function TymId(name, ordinal) {
  Enum.call(this, name, ordinal);
}
protoOf(TymId).ib = function () {
  return this.equals(TymId_A_getInstance()) ? TymId_B_getInstance() : TymId_A_getInstance();
};
var Barva_MODRA_instance;
var Barva_CERVENA_instance;
var Barva_ZELENA_instance;
var Barva_ZLUTA_instance;
var Barva_BILA_instance;
var Barva_CERNA_instance;
function values_2() {
  return [Barva_MODRA_getInstance(), Barva_CERVENA_getInstance(), Barva_ZELENA_getInstance(), Barva_ZLUTA_getInstance(), Barva_BILA_getInstance(), Barva_CERNA_getInstance()];
}
function valueOf_0(value) {
  switch (value) {
    case 'MODRA':
      return Barva_MODRA_getInstance();
    case 'CERVENA':
      return Barva_CERVENA_getInstance();
    case 'ZELENA':
      return Barva_ZELENA_getInstance();
    case 'ZLUTA':
      return Barva_ZLUTA_getInstance();
    case 'BILA':
      return Barva_BILA_getInstance();
    case 'CERNA':
      return Barva_CERNA_getInstance();
    default:
      Barva_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
function get_entries_2() {
  if ($ENTRIES_2 == null)
    $ENTRIES_2 = enumEntries(values_2());
  return $ENTRIES_2;
}
var Barva_entriesInitialized;
function Barva_initEntries() {
  if (Barva_entriesInitialized)
    return Unit_instance;
  Barva_entriesInitialized = true;
  Barva_MODRA_instance = new Barva('MODRA', 0);
  Barva_CERVENA_instance = new Barva('CERVENA', 1);
  Barva_ZELENA_instance = new Barva('ZELENA', 2);
  Barva_ZLUTA_instance = new Barva('ZLUTA', 3);
  Barva_BILA_instance = new Barva('BILA', 4);
  Barva_CERNA_instance = new Barva('CERNA', 5);
}
var $ENTRIES_2;
function Barva(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Tym(barva, hraci) {
  this.lb_1 = barva;
  this.mb_1 = hraci;
  var containsArg = this.mb_1.l();
  // Inline function 'kotlin.require' call
  if (!(1 <= containsArg ? containsArg <= 2 : false)) {
    // Inline function 'cz.padelcesko.score.core.Tym.<anonymous>' call
    var message = 't\xFDm m\xE1 1 nebo 2 hr\xE1\u010De';
    throw IllegalArgumentException_init_$Create$_0(toString_1(message));
  }
}
protoOf(Tym).toString = function () {
  return 'Tym(barva=' + this.lb_1.toString() + ', hraci=' + toString_1(this.mb_1) + ')';
};
protoOf(Tym).hashCode = function () {
  var result = this.lb_1.hashCode();
  result = imul_0(result, 31) + hashCode(this.mb_1) | 0;
  return result;
};
protoOf(Tym).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Tym))
    return false;
  var tmp0_other_with_cast = other instanceof Tym ? other : THROW_CCE();
  if (!this.lb_1.equals(tmp0_other_with_cast.lb_1))
    return false;
  if (!equals(this.mb_1, tmp0_other_with_cast.mb_1))
    return false;
  return true;
};
function Tymy(a, b) {
  this.nb_1 = a;
  this.ob_1 = b;
}
protoOf(Tymy).db = function (id) {
  return id.equals(TymId_A_getInstance()) ? this.nb_1 : this.ob_1;
};
protoOf(Tymy).toString = function () {
  return 'Tymy(a=' + this.nb_1.toString() + ', b=' + this.ob_1.toString() + ')';
};
protoOf(Tymy).hashCode = function () {
  var result = this.nb_1.hashCode();
  result = imul_0(result, 31) + this.ob_1.hashCode() | 0;
  return result;
};
protoOf(Tymy).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Tymy))
    return false;
  var tmp0_other_with_cast = other instanceof Tymy ? other : THROW_CCE();
  if (!this.nb_1.equals(tmp0_other_with_cast.nb_1))
    return false;
  if (!this.ob_1.equals(tmp0_other_with_cast.ob_1))
    return false;
  return true;
};
function Podani(tym, hrac) {
  this.eb_1 = tym;
  this.fb_1 = hrac;
}
protoOf(Podani).toString = function () {
  return 'Podani(tym=' + this.eb_1.toString() + ', hrac=' + this.fb_1 + ')';
};
protoOf(Podani).hashCode = function () {
  var result = this.eb_1.hashCode();
  result = imul_0(result, 31) + this.fb_1 | 0;
  return result;
};
protoOf(Podani).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Podani))
    return false;
  var tmp0_other_with_cast = other instanceof Podani ? other : THROW_CCE();
  if (!this.eb_1.equals(tmp0_other_with_cast.eb_1))
    return false;
  if (!(this.fb_1 === tmp0_other_with_cast.fb_1))
    return false;
  return true;
};
var Shoda_VYHODA_instance;
var Shoda_GOLDEN_POINT_instance;
var Shoda_STAR_POINT_instance;
function valueOf_1(value) {
  switch (value) {
    case 'VYHODA':
      return Shoda_VYHODA_getInstance();
    case 'GOLDEN_POINT':
      return Shoda_GOLDEN_POINT_getInstance();
    case 'STAR_POINT':
      return Shoda_STAR_POINT_getInstance();
    default:
      Shoda_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
var Shoda_entriesInitialized;
function Shoda_initEntries() {
  if (Shoda_entriesInitialized)
    return Unit_instance;
  Shoda_entriesInitialized = true;
  Shoda_VYHODA_instance = new Shoda('VYHODA', 0);
  Shoda_GOLDEN_POINT_instance = new Shoda('GOLDEN_POINT', 1);
  Shoda_STAR_POINT_instance = new Shoda('STAR_POINT', 2);
}
function Shoda(name, ordinal) {
  Enum.call(this, name, ordinal);
}
var ProhazovaniStran_NIKDY_instance;
var ProhazovaniStran_PO_LICHYCH_GEMECH_instance;
var ProhazovaniStran_PO_SETU_instance;
function valueOf_2(value) {
  switch (value) {
    case 'NIKDY':
      return ProhazovaniStran_NIKDY_getInstance();
    case 'PO_LICHYCH_GEMECH':
      return ProhazovaniStran_PO_LICHYCH_GEMECH_getInstance();
    case 'PO_SETU':
      return ProhazovaniStran_PO_SETU_getInstance();
    default:
      ProhazovaniStran_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
var ProhazovaniStran_entriesInitialized;
function ProhazovaniStran_initEntries() {
  if (ProhazovaniStran_entriesInitialized)
    return Unit_instance;
  ProhazovaniStran_entriesInitialized = true;
  ProhazovaniStran_NIKDY_instance = new ProhazovaniStran('NIKDY', 0);
  ProhazovaniStran_PO_LICHYCH_GEMECH_instance = new ProhazovaniStran('PO_LICHYCH_GEMECH', 1);
  ProhazovaniStran_PO_SETU_instance = new ProhazovaniStran('PO_SETU', 2);
}
function ProhazovaniStran(name, ordinal) {
  Enum.call(this, name, ordinal);
}
var Format_KLASICKY_instance;
var Format_AMERICANO_instance;
var Format_VOLNE_instance;
function valueOf_3(value) {
  switch (value) {
    case 'KLASICKY':
      return Format_KLASICKY_getInstance();
    case 'AMERICANO':
      return Format_AMERICANO_getInstance();
    case 'VOLNE':
      return Format_VOLNE_getInstance();
    default:
      Format_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
var Format_entriesInitialized;
function Format_initEntries() {
  if (Format_entriesInitialized)
    return Unit_instance;
  Format_entriesInitialized = true;
  Format_KLASICKY_instance = new Format('KLASICKY', 0);
  Format_AMERICANO_instance = new Format('AMERICANO', 1);
  Format_VOLNE_instance = new Format('VOLNE', 2);
}
function Format(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Pravidla(shoda, viteznychSetu, superTieBreakMistoRozhodujiciho, tieBreakDo, superTieBreakDo, prohazovaniStran, format, americanoDo, americanoPodaniPo, podaniVolitZaBehu, ptatSeNaTieBreak, volnaHraSety, naCasMinut) {
  shoda = shoda === VOID ? Shoda_STAR_POINT_getInstance() : shoda;
  viteznychSetu = viteznychSetu === VOID ? 2 : viteznychSetu;
  superTieBreakMistoRozhodujiciho = superTieBreakMistoRozhodujiciho === VOID ? false : superTieBreakMistoRozhodujiciho;
  tieBreakDo = tieBreakDo === VOID ? 7 : tieBreakDo;
  superTieBreakDo = superTieBreakDo === VOID ? 10 : superTieBreakDo;
  prohazovaniStran = prohazovaniStran === VOID ? ProhazovaniStran_PO_LICHYCH_GEMECH_getInstance() : prohazovaniStran;
  format = format === VOID ? Format_KLASICKY_getInstance() : format;
  americanoDo = americanoDo === VOID ? 24 : americanoDo;
  americanoPodaniPo = americanoPodaniPo === VOID ? 4 : americanoPodaniPo;
  podaniVolitZaBehu = podaniVolitZaBehu === VOID ? false : podaniVolitZaBehu;
  ptatSeNaTieBreak = ptatSeNaTieBreak === VOID ? false : ptatSeNaTieBreak;
  volnaHraSety = volnaHraSety === VOID ? false : volnaHraSety;
  naCasMinut = naCasMinut === VOID ? 0 : naCasMinut;
  this.fd_1 = shoda;
  this.gd_1 = viteznychSetu;
  this.hd_1 = superTieBreakMistoRozhodujiciho;
  this.id_1 = tieBreakDo;
  this.jd_1 = superTieBreakDo;
  this.kd_1 = prohazovaniStran;
  this.ld_1 = format;
  this.md_1 = americanoDo;
  this.nd_1 = americanoPodaniPo;
  this.od_1 = podaniVolitZaBehu;
  this.pd_1 = ptatSeNaTieBreak;
  this.qd_1 = volnaHraSety;
  this.rd_1 = naCasMinut;
}
protoOf(Pravidla).sd = function () {
  return this.rd_1 > 0 && (this.ld_1.equals(Format_AMERICANO_getInstance()) || this.xd());
};
protoOf(Pravidla).xd = function () {
  return this.ld_1.equals(Format_VOLNE_getInstance()) && !this.qd_1;
};
protoOf(Pravidla).yd = function () {
  return this.ld_1.equals(Format_VOLNE_getInstance()) && this.qd_1;
};
protoOf(Pravidla).toString = function () {
  return 'Pravidla(shoda=' + this.fd_1.toString() + ', viteznychSetu=' + this.gd_1 + ', superTieBreakMistoRozhodujiciho=' + this.hd_1 + ', tieBreakDo=' + this.id_1 + ', superTieBreakDo=' + this.jd_1 + ', prohazovaniStran=' + this.kd_1.toString() + ', format=' + this.ld_1.toString() + ', americanoDo=' + this.md_1 + ', americanoPodaniPo=' + this.nd_1 + ', podaniVolitZaBehu=' + this.od_1 + ', ptatSeNaTieBreak=' + this.pd_1 + ', volnaHraSety=' + this.qd_1 + ', naCasMinut=' + this.rd_1 + ')';
};
protoOf(Pravidla).hashCode = function () {
  var result = this.fd_1.hashCode();
  result = imul_0(result, 31) + this.gd_1 | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.hd_1) | 0;
  result = imul_0(result, 31) + this.id_1 | 0;
  result = imul_0(result, 31) + this.jd_1 | 0;
  result = imul_0(result, 31) + this.kd_1.hashCode() | 0;
  result = imul_0(result, 31) + this.ld_1.hashCode() | 0;
  result = imul_0(result, 31) + this.md_1 | 0;
  result = imul_0(result, 31) + this.nd_1 | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.od_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.pd_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.qd_1) | 0;
  result = imul_0(result, 31) + this.rd_1 | 0;
  return result;
};
protoOf(Pravidla).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Pravidla))
    return false;
  var tmp0_other_with_cast = other instanceof Pravidla ? other : THROW_CCE();
  if (!this.fd_1.equals(tmp0_other_with_cast.fd_1))
    return false;
  if (!(this.gd_1 === tmp0_other_with_cast.gd_1))
    return false;
  if (!(this.hd_1 === tmp0_other_with_cast.hd_1))
    return false;
  if (!(this.id_1 === tmp0_other_with_cast.id_1))
    return false;
  if (!(this.jd_1 === tmp0_other_with_cast.jd_1))
    return false;
  if (!this.kd_1.equals(tmp0_other_with_cast.kd_1))
    return false;
  if (!this.ld_1.equals(tmp0_other_with_cast.ld_1))
    return false;
  if (!(this.md_1 === tmp0_other_with_cast.md_1))
    return false;
  if (!(this.nd_1 === tmp0_other_with_cast.nd_1))
    return false;
  if (!(this.od_1 === tmp0_other_with_cast.od_1))
    return false;
  if (!(this.pd_1 === tmp0_other_with_cast.pd_1))
    return false;
  if (!(this.qd_1 === tmp0_other_with_cast.qd_1))
    return false;
  if (!(this.rd_1 === tmp0_other_with_cast.rd_1))
    return false;
  return true;
};
var Faze_GEM_instance;
var Faze_TIE_BREAK_instance;
var Faze_SUPER_TIE_BREAK_instance;
var Faze_AMERICANO_instance;
var Faze_KONEC_instance;
var Faze_entriesInitialized;
function Faze_initEntries() {
  if (Faze_entriesInitialized)
    return Unit_instance;
  Faze_entriesInitialized = true;
  Faze_GEM_instance = new Faze('GEM', 0);
  Faze_TIE_BREAK_instance = new Faze('TIE_BREAK', 1);
  Faze_SUPER_TIE_BREAK_instance = new Faze('SUPER_TIE_BREAK', 2);
  Faze_AMERICANO_instance = new Faze('AMERICANO', 3);
  Faze_KONEC_instance = new Faze('KONEC', 4);
}
function Faze(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function SetSkore(a, b) {
  this.bb_1 = a;
  this.cb_1 = b;
}
protoOf(SetSkore).db = function (id) {
  return id.equals(TymId_A_getInstance()) ? this.bb_1 : this.cb_1;
};
protoOf(SetSkore).wd = function (id, hodnota) {
  return id.equals(TymId_A_getInstance()) ? this.gj(hodnota) : this.gj(VOID, hodnota);
};
protoOf(SetSkore).ud = function () {
  return this.bb_1 + this.cb_1 | 0;
};
protoOf(SetSkore).hj = function (a, b) {
  return new SetSkore(a, b);
};
protoOf(SetSkore).gj = function (a, b, $super) {
  a = a === VOID ? this.bb_1 : a;
  b = b === VOID ? this.cb_1 : b;
  return $super === VOID ? this.hj(a, b) : $super.hj.call(this, a, b);
};
protoOf(SetSkore).toString = function () {
  return 'SetSkore(a=' + this.bb_1 + ', b=' + this.cb_1 + ')';
};
protoOf(SetSkore).hashCode = function () {
  var result = this.bb_1;
  result = imul_0(result, 31) + this.cb_1 | 0;
  return result;
};
protoOf(SetSkore).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SetSkore))
    return false;
  var tmp0_other_with_cast = other instanceof SetSkore ? other : THROW_CCE();
  if (!(this.bb_1 === tmp0_other_with_cast.bb_1))
    return false;
  if (!(this.cb_1 === tmp0_other_with_cast.cb_1))
    return false;
  return true;
};
function StavZapasu(pravidla, tymy, podani, pristiHrac, dohraneSety, gemy, body, promarneneVyhody, faze, vlevoNaDispleji, vitez, cekaNaPodavajiciho, zvolenoVSetu, cekaNaVolbuTieBreaku, bezTieBreakuVSetu, dohravaSePoCase, rozhodujiciBod) {
  vitez = vitez === VOID ? null : vitez;
  cekaNaPodavajiciho = cekaNaPodavajiciho === VOID ? null : cekaNaPodavajiciho;
  zvolenoVSetu = zvolenoVSetu === VOID ? setOf_0([TymId_A_getInstance(), TymId_B_getInstance()]) : zvolenoVSetu;
  cekaNaVolbuTieBreaku = cekaNaVolbuTieBreaku === VOID ? false : cekaNaVolbuTieBreaku;
  bezTieBreakuVSetu = bezTieBreakuVSetu === VOID ? false : bezTieBreakuVSetu;
  dohravaSePoCase = dohravaSePoCase === VOID ? false : dohravaSePoCase;
  rozhodujiciBod = rozhodujiciBod === VOID ? false : rozhodujiciBod;
  this.ka_1 = pravidla;
  this.la_1 = tymy;
  this.ma_1 = podani;
  this.na_1 = pristiHrac;
  this.oa_1 = dohraneSety;
  this.pa_1 = gemy;
  this.qa_1 = body;
  this.ra_1 = promarneneVyhody;
  this.sa_1 = faze;
  this.ta_1 = vlevoNaDispleji;
  this.ua_1 = vitez;
  this.va_1 = cekaNaPodavajiciho;
  this.wa_1 = zvolenoVSetu;
  this.xa_1 = cekaNaVolbuTieBreaku;
  this.ya_1 = bezTieBreakuVSetu;
  this.za_1 = dohravaSePoCase;
  this.ab_1 = rozhodujiciBod;
}
protoOf(StavZapasu).td = function () {
  return this.za_1 || this.ab_1;
};
protoOf(StavZapasu).jb = function () {
  var tmp;
  if (this.ka_1.ld_1.equals(Format_AMERICANO_getInstance()) && !this.ka_1.sd()) {
    tmp = coerceAtLeast(this.ka_1.md_1 - this.qa_1.ud() | 0, 0);
  } else {
    tmp = null;
  }
  return tmp;
};
protoOf(StavZapasu).kb = function () {
  var tmp0 = this.oa_1;
  // Inline function 'kotlin.collections.fold' call
  var accumulator = new SetSkore(0, 0);
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.core.StavZapasu.<get-ziskaneSety>.<anonymous>' call
    var acc = accumulator;
    accumulator = element.bb_1 > element.cb_1 ? acc.gj(acc.bb_1 + 1 | 0) : element.cb_1 > element.bb_1 ? acc.gj(VOID, acc.cb_1 + 1 | 0) : acc;
  }
  return accumulator;
};
protoOf(StavZapasu).ij = function (pravidla, tymy, podani, pristiHrac, dohraneSety, gemy, body, promarneneVyhody, faze, vlevoNaDispleji, vitez, cekaNaPodavajiciho, zvolenoVSetu, cekaNaVolbuTieBreaku, bezTieBreakuVSetu, dohravaSePoCase, rozhodujiciBod) {
  return new StavZapasu(pravidla, tymy, podani, pristiHrac, dohraneSety, gemy, body, promarneneVyhody, faze, vlevoNaDispleji, vitez, cekaNaPodavajiciho, zvolenoVSetu, cekaNaVolbuTieBreaku, bezTieBreakuVSetu, dohravaSePoCase, rozhodujiciBod);
};
protoOf(StavZapasu).vd = function (pravidla, tymy, podani, pristiHrac, dohraneSety, gemy, body, promarneneVyhody, faze, vlevoNaDispleji, vitez, cekaNaPodavajiciho, zvolenoVSetu, cekaNaVolbuTieBreaku, bezTieBreakuVSetu, dohravaSePoCase, rozhodujiciBod, $super) {
  pravidla = pravidla === VOID ? this.ka_1 : pravidla;
  tymy = tymy === VOID ? this.la_1 : tymy;
  podani = podani === VOID ? this.ma_1 : podani;
  pristiHrac = pristiHrac === VOID ? this.na_1 : pristiHrac;
  dohraneSety = dohraneSety === VOID ? this.oa_1 : dohraneSety;
  gemy = gemy === VOID ? this.pa_1 : gemy;
  body = body === VOID ? this.qa_1 : body;
  promarneneVyhody = promarneneVyhody === VOID ? this.ra_1 : promarneneVyhody;
  faze = faze === VOID ? this.sa_1 : faze;
  vlevoNaDispleji = vlevoNaDispleji === VOID ? this.ta_1 : vlevoNaDispleji;
  vitez = vitez === VOID ? this.ua_1 : vitez;
  cekaNaPodavajiciho = cekaNaPodavajiciho === VOID ? this.va_1 : cekaNaPodavajiciho;
  zvolenoVSetu = zvolenoVSetu === VOID ? this.wa_1 : zvolenoVSetu;
  cekaNaVolbuTieBreaku = cekaNaVolbuTieBreaku === VOID ? this.xa_1 : cekaNaVolbuTieBreaku;
  bezTieBreakuVSetu = bezTieBreakuVSetu === VOID ? this.ya_1 : bezTieBreakuVSetu;
  dohravaSePoCase = dohravaSePoCase === VOID ? this.za_1 : dohravaSePoCase;
  rozhodujiciBod = rozhodujiciBod === VOID ? this.ab_1 : rozhodujiciBod;
  return $super === VOID ? this.ij(pravidla, tymy, podani, pristiHrac, dohraneSety, gemy, body, promarneneVyhody, faze, vlevoNaDispleji, vitez, cekaNaPodavajiciho, zvolenoVSetu, cekaNaVolbuTieBreaku, bezTieBreakuVSetu, dohravaSePoCase, rozhodujiciBod) : $super.ij.call(this, pravidla, tymy, podani, pristiHrac, dohraneSety, gemy, body, promarneneVyhody, faze, vlevoNaDispleji, vitez, cekaNaPodavajiciho, zvolenoVSetu, cekaNaVolbuTieBreaku, bezTieBreakuVSetu, dohravaSePoCase, rozhodujiciBod);
};
protoOf(StavZapasu).toString = function () {
  return 'StavZapasu(pravidla=' + this.ka_1.toString() + ', tymy=' + this.la_1.toString() + ', podani=' + this.ma_1.toString() + ', pristiHrac=' + toString_1(this.na_1) + ', dohraneSety=' + toString_1(this.oa_1) + ', gemy=' + this.pa_1.toString() + ', body=' + this.qa_1.toString() + ', promarneneVyhody=' + this.ra_1 + ', faze=' + this.sa_1.toString() + ', vlevoNaDispleji=' + this.ta_1.toString() + ', vitez=' + toString_0(this.ua_1) + ', cekaNaPodavajiciho=' + toString_0(this.va_1) + ', zvolenoVSetu=' + toString_1(this.wa_1) + ', cekaNaVolbuTieBreaku=' + this.xa_1 + ', bezTieBreakuVSetu=' + this.ya_1 + ', dohravaSePoCase=' + this.za_1 + ', rozhodujiciBod=' + this.ab_1 + ')';
};
protoOf(StavZapasu).hashCode = function () {
  var result = this.ka_1.hashCode();
  result = imul_0(result, 31) + this.la_1.hashCode() | 0;
  result = imul_0(result, 31) + this.ma_1.hashCode() | 0;
  result = imul_0(result, 31) + hashCode(this.na_1) | 0;
  result = imul_0(result, 31) + hashCode(this.oa_1) | 0;
  result = imul_0(result, 31) + this.pa_1.hashCode() | 0;
  result = imul_0(result, 31) + this.qa_1.hashCode() | 0;
  result = imul_0(result, 31) + this.ra_1 | 0;
  result = imul_0(result, 31) + this.sa_1.hashCode() | 0;
  result = imul_0(result, 31) + this.ta_1.hashCode() | 0;
  result = imul_0(result, 31) + (this.ua_1 == null ? 0 : this.ua_1.hashCode()) | 0;
  result = imul_0(result, 31) + (this.va_1 == null ? 0 : hashCode(this.va_1)) | 0;
  result = imul_0(result, 31) + hashCode(this.wa_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.xa_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.ya_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.za_1) | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.ab_1) | 0;
  return result;
};
protoOf(StavZapasu).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StavZapasu))
    return false;
  var tmp0_other_with_cast = other instanceof StavZapasu ? other : THROW_CCE();
  if (!this.ka_1.equals(tmp0_other_with_cast.ka_1))
    return false;
  if (!this.la_1.equals(tmp0_other_with_cast.la_1))
    return false;
  if (!this.ma_1.equals(tmp0_other_with_cast.ma_1))
    return false;
  if (!equals(this.na_1, tmp0_other_with_cast.na_1))
    return false;
  if (!equals(this.oa_1, tmp0_other_with_cast.oa_1))
    return false;
  if (!this.pa_1.equals(tmp0_other_with_cast.pa_1))
    return false;
  if (!this.qa_1.equals(tmp0_other_with_cast.qa_1))
    return false;
  if (!(this.ra_1 === tmp0_other_with_cast.ra_1))
    return false;
  if (!this.sa_1.equals(tmp0_other_with_cast.sa_1))
    return false;
  if (!this.ta_1.equals(tmp0_other_with_cast.ta_1))
    return false;
  if (!equals(this.ua_1, tmp0_other_with_cast.ua_1))
    return false;
  if (!equals(this.va_1, tmp0_other_with_cast.va_1))
    return false;
  if (!equals(this.wa_1, tmp0_other_with_cast.wa_1))
    return false;
  if (!(this.xa_1 === tmp0_other_with_cast.xa_1))
    return false;
  if (!(this.ya_1 === tmp0_other_with_cast.ya_1))
    return false;
  if (!(this.za_1 === tmp0_other_with_cast.za_1))
    return false;
  if (!(this.ab_1 === tmp0_other_with_cast.ab_1))
    return false;
  return true;
};
function Bod(tym) {
  this.ge_1 = tym;
}
protoOf(Bod).toString = function () {
  return 'Bod(tym=' + this.ge_1.toString() + ')';
};
protoOf(Bod).hashCode = function () {
  return this.ge_1.hashCode();
};
protoOf(Bod).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Bod))
    return false;
  var tmp0_other_with_cast = other instanceof Bod ? other : THROW_CCE();
  if (!this.ge_1.equals(tmp0_other_with_cast.ge_1))
    return false;
  return true;
};
function Zpet() {
}
protoOf(Zpet).toString = function () {
  return 'Zpet';
};
protoOf(Zpet).hashCode = function () {
  return -2074720433;
};
protoOf(Zpet).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Zpet))
    return false;
  other instanceof Zpet || THROW_CCE();
  return true;
};
var Zpet_instance;
function Zpet_getInstance() {
  return Zpet_instance;
}
function UkoncitZapas() {
}
protoOf(UkoncitZapas).toString = function () {
  return 'UkoncitZapas';
};
protoOf(UkoncitZapas).hashCode = function () {
  return 908623052;
};
protoOf(UkoncitZapas).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof UkoncitZapas))
    return false;
  other instanceof UkoncitZapas || THROW_CCE();
  return true;
};
var UkoncitZapas_instance;
function UkoncitZapas_getInstance() {
  return UkoncitZapas_instance;
}
function ZvolPodavajiciho(tym, hrac) {
  this.be_1 = tym;
  this.ce_1 = hrac;
}
protoOf(ZvolPodavajiciho).toString = function () {
  return 'ZvolPodavajiciho(tym=' + this.be_1.toString() + ', hrac=' + this.ce_1 + ')';
};
protoOf(ZvolPodavajiciho).hashCode = function () {
  var result = this.be_1.hashCode();
  result = imul_0(result, 31) + this.ce_1 | 0;
  return result;
};
protoOf(ZvolPodavajiciho).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ZvolPodavajiciho))
    return false;
  var tmp0_other_with_cast = other instanceof ZvolPodavajiciho ? other : THROW_CCE();
  if (!this.be_1.equals(tmp0_other_with_cast.be_1))
    return false;
  if (!(this.ce_1 === tmp0_other_with_cast.ce_1))
    return false;
  return true;
};
function ZvolTieBreak(tieBreak) {
  this.de_1 = tieBreak;
}
protoOf(ZvolTieBreak).toString = function () {
  return 'ZvolTieBreak(tieBreak=' + this.de_1 + ')';
};
protoOf(ZvolTieBreak).hashCode = function () {
  return getBooleanHashCode(this.de_1);
};
protoOf(ZvolTieBreak).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ZvolTieBreak))
    return false;
  var tmp0_other_with_cast = other instanceof ZvolTieBreak ? other : THROW_CCE();
  if (!(this.de_1 === tmp0_other_with_cast.de_1))
    return false;
  return true;
};
function KonecCasu() {
}
protoOf(KonecCasu).toString = function () {
  return 'KonecCasu';
};
protoOf(KonecCasu).hashCode = function () {
  return 544976478;
};
protoOf(KonecCasu).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof KonecCasu))
    return false;
  other instanceof KonecCasu || THROW_CCE();
  return true;
};
var KonecCasu_instance;
function KonecCasu_getInstance() {
  return KonecCasu_instance;
}
function ProhodStranyHracu(tym) {
  this.ed_1 = tym;
}
protoOf(ProhodStranyHracu).toString = function () {
  return 'ProhodStranyHracu(tym=' + this.ed_1.toString() + ')';
};
protoOf(ProhodStranyHracu).hashCode = function () {
  return this.ed_1.hashCode();
};
protoOf(ProhodStranyHracu).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ProhodStranyHracu))
    return false;
  var tmp0_other_with_cast = other instanceof ProhodStranyHracu ? other : THROW_CCE();
  if (!this.ed_1.equals(tmp0_other_with_cast.ed_1))
    return false;
  return true;
};
function Kdokoli() {
}
protoOf(Kdokoli).toString = function () {
  return 'Kdokoli';
};
protoOf(Kdokoli).hashCode = function () {
  return -1163913797;
};
protoOf(Kdokoli).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Kdokoli))
    return false;
  other instanceof Kdokoli || THROW_CCE();
  return true;
};
var Kdokoli_instance;
function Kdokoli_getInstance() {
  return Kdokoli_instance;
}
function ZTymu(tym) {
  this.ae_1 = tym;
}
protoOf(ZTymu).toString = function () {
  return 'ZTymu(tym=' + this.ae_1.toString() + ')';
};
protoOf(ZTymu).hashCode = function () {
  return this.ae_1.hashCode();
};
protoOf(ZTymu).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ZTymu))
    return false;
  var tmp0_other_with_cast = other instanceof ZTymu ? other : THROW_CCE();
  if (!this.ae_1.equals(tmp0_other_with_cast.ae_1))
    return false;
  return true;
};
function BodPripsan(tym) {
  this.jj_1 = tym;
}
protoOf(BodPripsan).toString = function () {
  return 'BodPripsan(tym=' + this.jj_1.toString() + ')';
};
protoOf(BodPripsan).hashCode = function () {
  return this.jj_1.hashCode();
};
protoOf(BodPripsan).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BodPripsan))
    return false;
  var tmp0_other_with_cast = other instanceof BodPripsan ? other : THROW_CCE();
  if (!this.jj_1.equals(tmp0_other_with_cast.jj_1))
    return false;
  return true;
};
function Shoda_0() {
}
protoOf(Shoda_0).toString = function () {
  return 'Shoda';
};
protoOf(Shoda_0).hashCode = function () {
  return -1787110264;
};
protoOf(Shoda_0).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Shoda_0))
    return false;
  other instanceof Shoda_0 || THROW_CCE();
  return true;
};
var Shoda_instance;
function Shoda_getInstance() {
  return Shoda_instance;
}
function Vyhoda(tym) {
  this.ja_1 = tym;
}
protoOf(Vyhoda).toString = function () {
  return 'Vyhoda(tym=' + this.ja_1.toString() + ')';
};
protoOf(Vyhoda).hashCode = function () {
  return this.ja_1.hashCode();
};
protoOf(Vyhoda).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Vyhoda))
    return false;
  var tmp0_other_with_cast = other instanceof Vyhoda ? other : THROW_CCE();
  if (!this.ja_1.equals(tmp0_other_with_cast.ja_1))
    return false;
  return true;
};
function StarPoint() {
}
protoOf(StarPoint).toString = function () {
  return 'StarPoint';
};
protoOf(StarPoint).hashCode = function () {
  return 2101906351;
};
protoOf(StarPoint).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StarPoint))
    return false;
  other instanceof StarPoint || THROW_CCE();
  return true;
};
var StarPoint_instance;
function StarPoint_getInstance() {
  return StarPoint_instance;
}
function GemZiskan(tym) {
  this.ia_1 = tym;
}
protoOf(GemZiskan).toString = function () {
  return 'GemZiskan(tym=' + this.ia_1.toString() + ')';
};
protoOf(GemZiskan).hashCode = function () {
  return this.ia_1.hashCode();
};
protoOf(GemZiskan).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof GemZiskan))
    return false;
  var tmp0_other_with_cast = other instanceof GemZiskan ? other : THROW_CCE();
  if (!this.ia_1.equals(tmp0_other_with_cast.ia_1))
    return false;
  return true;
};
function SetZiskan(tym) {
  this.ha_1 = tym;
}
protoOf(SetZiskan).toString = function () {
  return 'SetZiskan(tym=' + this.ha_1.toString() + ')';
};
protoOf(SetZiskan).hashCode = function () {
  return this.ha_1.hashCode();
};
protoOf(SetZiskan).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SetZiskan))
    return false;
  var tmp0_other_with_cast = other instanceof SetZiskan ? other : THROW_CCE();
  if (!this.ha_1.equals(tmp0_other_with_cast.ha_1))
    return false;
  return true;
};
function ZapasSkoncil(tym) {
  this.ga_1 = tym;
}
protoOf(ZapasSkoncil).toString = function () {
  return 'ZapasSkoncil(tym=' + this.ga_1.toString() + ')';
};
protoOf(ZapasSkoncil).hashCode = function () {
  return this.ga_1.hashCode();
};
protoOf(ZapasSkoncil).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ZapasSkoncil))
    return false;
  var tmp0_other_with_cast = other instanceof ZapasSkoncil ? other : THROW_CCE();
  if (!this.ga_1.equals(tmp0_other_with_cast.ga_1))
    return false;
  return true;
};
function StranyProhozeny() {
}
protoOf(StranyProhozeny).toString = function () {
  return 'StranyProhozeny';
};
protoOf(StranyProhozeny).hashCode = function () {
  return -1198685856;
};
protoOf(StranyProhozeny).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StranyProhozeny))
    return false;
  other instanceof StranyProhozeny || THROW_CCE();
  return true;
};
var StranyProhozeny_instance;
function StranyProhozeny_getInstance() {
  return StranyProhozeny_instance;
}
function PodaniZmeneno(podani) {
  this.kj_1 = podani;
}
protoOf(PodaniZmeneno).toString = function () {
  return 'PodaniZmeneno(podani=' + this.kj_1.toString() + ')';
};
protoOf(PodaniZmeneno).hashCode = function () {
  return this.kj_1.hashCode();
};
protoOf(PodaniZmeneno).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof PodaniZmeneno))
    return false;
  var tmp0_other_with_cast = other instanceof PodaniZmeneno ? other : THROW_CCE();
  if (!this.kj_1.equals(tmp0_other_with_cast.kj_1))
    return false;
  return true;
};
function BodVracen() {
}
protoOf(BodVracen).toString = function () {
  return 'BodVracen';
};
protoOf(BodVracen).hashCode = function () {
  return 236648175;
};
protoOf(BodVracen).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BodVracen))
    return false;
  other instanceof BodVracen || THROW_CCE();
  return true;
};
var BodVracen_instance;
function BodVracen_getInstance() {
  return BodVracen_instance;
}
function TieBreak() {
}
protoOf(TieBreak).toString = function () {
  return 'TieBreak';
};
protoOf(TieBreak).hashCode = function () {
  return -1369011490;
};
protoOf(TieBreak).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof TieBreak))
    return false;
  other instanceof TieBreak || THROW_CCE();
  return true;
};
var TieBreak_instance;
function TieBreak_getInstance() {
  return TieBreak_instance;
}
function SuperTieBreak() {
}
protoOf(SuperTieBreak).toString = function () {
  return 'SuperTieBreak';
};
protoOf(SuperTieBreak).hashCode = function () {
  return 1299882939;
};
protoOf(SuperTieBreak).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SuperTieBreak))
    return false;
  other instanceof SuperTieBreak || THROW_CCE();
  return true;
};
var SuperTieBreak_instance;
function SuperTieBreak_getInstance() {
  return SuperTieBreak_instance;
}
function KoloSkoncilo(tym) {
  this.e9_1 = tym;
}
protoOf(KoloSkoncilo).toString = function () {
  return 'KoloSkoncilo(tym=' + toString_0(this.e9_1) + ')';
};
protoOf(KoloSkoncilo).hashCode = function () {
  return this.e9_1 == null ? 0 : this.e9_1.hashCode();
};
protoOf(KoloSkoncilo).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof KoloSkoncilo))
    return false;
  var tmp0_other_with_cast = other instanceof KoloSkoncilo ? other : THROW_CCE();
  if (!equals(this.e9_1, tmp0_other_with_cast.e9_1))
    return false;
  return true;
};
function CasVyprsel() {
}
protoOf(CasVyprsel).toString = function () {
  return 'CasVyprsel';
};
protoOf(CasVyprsel).hashCode = function () {
  return -1328727697;
};
protoOf(CasVyprsel).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CasVyprsel))
    return false;
  other instanceof CasVyprsel || THROW_CCE();
  return true;
};
var CasVyprsel_instance;
function CasVyprsel_getInstance() {
  return CasVyprsel_instance;
}
function RozhodujiciBod() {
}
protoOf(RozhodujiciBod).toString = function () {
  return 'RozhodujiciBod';
};
protoOf(RozhodujiciBod).hashCode = function () {
  return -2068099572;
};
protoOf(RozhodujiciBod).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof RozhodujiciBod))
    return false;
  other instanceof RozhodujiciBod || THROW_CCE();
  return true;
};
var RozhodujiciBod_instance;
function RozhodujiciBod_getInstance() {
  return RozhodujiciBod_instance;
}
function Zapas(stav, minule, zaznam) {
  minule = minule === VOID ? emptyList() : minule;
  zaznam = zaznam === VOID ? emptyList() : zaznam;
  this.bd_1 = stav;
  this.cd_1 = minule;
  this.dd_1 = zaznam;
}
protoOf(Zapas).zd = function (stav, minule, zaznam) {
  return new Zapas(stav, minule, zaznam);
};
protoOf(Zapas).toString = function () {
  return 'Zapas(stav=' + this.bd_1.toString() + ', minule=' + toString_1(this.cd_1) + ', zaznam=' + toString_1(this.dd_1) + ')';
};
protoOf(Zapas).hashCode = function () {
  var result = this.bd_1.hashCode();
  result = imul_0(result, 31) + hashCode(this.cd_1) | 0;
  result = imul_0(result, 31) + hashCode(this.dd_1) | 0;
  return result;
};
protoOf(Zapas).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Zapas))
    return false;
  var tmp0_other_with_cast = other instanceof Zapas ? other : THROW_CCE();
  if (!this.bd_1.equals(tmp0_other_with_cast.bd_1))
    return false;
  if (!equals(this.cd_1, tmp0_other_with_cast.cd_1))
    return false;
  if (!equals(this.dd_1, tmp0_other_with_cast.dd_1))
    return false;
  return true;
};
function Prijato(zapas, udalosti) {
  this.zc_1 = zapas;
  this.ad_1 = udalosti;
}
protoOf(Prijato).toString = function () {
  return 'Prijato(zapas=' + this.zc_1.toString() + ', udalosti=' + toString_1(this.ad_1) + ')';
};
protoOf(Prijato).hashCode = function () {
  var result = this.zc_1.hashCode();
  result = imul_0(result, 31) + hashCode(this.ad_1) | 0;
  return result;
};
protoOf(Prijato).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Prijato))
    return false;
  var tmp0_other_with_cast = other instanceof Prijato ? other : THROW_CCE();
  if (!this.zc_1.equals(tmp0_other_with_cast.zc_1))
    return false;
  if (!equals(this.ad_1, tmp0_other_with_cast.ad_1))
    return false;
  return true;
};
function Odmitnuto(duvod) {
  this.lj_1 = duvod;
}
protoOf(Odmitnuto).toString = function () {
  return 'Odmitnuto(duvod=' + this.lj_1 + ')';
};
protoOf(Odmitnuto).hashCode = function () {
  return getStringHashCode(this.lj_1);
};
protoOf(Odmitnuto).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Odmitnuto))
    return false;
  var tmp0_other_with_cast = other instanceof Odmitnuto ? other : THROW_CCE();
  if (!(this.lj_1 === tmp0_other_with_cast.lj_1))
    return false;
  return true;
};
function TymId_A_getInstance() {
  TymId_initEntries();
  return TymId_A_instance;
}
function TymId_B_getInstance() {
  TymId_initEntries();
  return TymId_B_instance;
}
function Barva_MODRA_getInstance() {
  Barva_initEntries();
  return Barva_MODRA_instance;
}
function Barva_CERVENA_getInstance() {
  Barva_initEntries();
  return Barva_CERVENA_instance;
}
function Barva_ZELENA_getInstance() {
  Barva_initEntries();
  return Barva_ZELENA_instance;
}
function Barva_ZLUTA_getInstance() {
  Barva_initEntries();
  return Barva_ZLUTA_instance;
}
function Barva_BILA_getInstance() {
  Barva_initEntries();
  return Barva_BILA_instance;
}
function Barva_CERNA_getInstance() {
  Barva_initEntries();
  return Barva_CERNA_instance;
}
function Shoda_VYHODA_getInstance() {
  Shoda_initEntries();
  return Shoda_VYHODA_instance;
}
function Shoda_GOLDEN_POINT_getInstance() {
  Shoda_initEntries();
  return Shoda_GOLDEN_POINT_instance;
}
function Shoda_STAR_POINT_getInstance() {
  Shoda_initEntries();
  return Shoda_STAR_POINT_instance;
}
function ProhazovaniStran_NIKDY_getInstance() {
  ProhazovaniStran_initEntries();
  return ProhazovaniStran_NIKDY_instance;
}
function ProhazovaniStran_PO_LICHYCH_GEMECH_getInstance() {
  ProhazovaniStran_initEntries();
  return ProhazovaniStran_PO_LICHYCH_GEMECH_instance;
}
function ProhazovaniStran_PO_SETU_getInstance() {
  ProhazovaniStran_initEntries();
  return ProhazovaniStran_PO_SETU_instance;
}
function Format_KLASICKY_getInstance() {
  Format_initEntries();
  return Format_KLASICKY_instance;
}
function Format_AMERICANO_getInstance() {
  Format_initEntries();
  return Format_AMERICANO_instance;
}
function Format_VOLNE_getInstance() {
  Format_initEntries();
  return Format_VOLNE_instance;
}
function Faze_GEM_getInstance() {
  Faze_initEntries();
  return Faze_GEM_instance;
}
function Faze_TIE_BREAK_getInstance() {
  Faze_initEntries();
  return Faze_TIE_BREAK_instance;
}
function Faze_SUPER_TIE_BREAK_getInstance() {
  Faze_initEntries();
  return Faze_SUPER_TIE_BREAK_instance;
}
function Faze_AMERICANO_getInstance() {
  Faze_initEntries();
  return Faze_AMERICANO_instance;
}
function Faze_KONEC_getInstance() {
  Faze_initEntries();
  return Faze_KONEC_instance;
}
var Polozka_SKORE_instance;
var Polozka_DELKA_instance;
var Polozka_TEP_PRUMER_instance;
var Polozka_TEP_MAX_instance;
var Polozka_KALORIE_instance;
var Polozka_KROKY_instance;
var Polozka_PODANI_instance;
var Polozka_RETURN_instance;
var Polozka_NAROCNY_SET_instance;
var Polozka_DATUM_instance;
function values_3() {
  return [Polozka_SKORE_getInstance(), Polozka_DELKA_getInstance(), Polozka_TEP_PRUMER_getInstance(), Polozka_TEP_MAX_getInstance(), Polozka_KALORIE_getInstance(), Polozka_KROKY_getInstance(), Polozka_PODANI_getInstance(), Polozka_RETURN_getInstance(), Polozka_NAROCNY_SET_getInstance(), Polozka_DATUM_getInstance()];
}
function get_entries_3() {
  if ($ENTRIES_3 == null)
    $ENTRIES_3 = enumEntries(values_3());
  return $ENTRIES_3;
}
var Polozka_entriesInitialized;
function Polozka_initEntries() {
  if (Polozka_entriesInitialized)
    return Unit_instance;
  Polozka_entriesInitialized = true;
  Polozka_SKORE_instance = new Polozka('SKORE', 0, 'skore');
  Polozka_DELKA_instance = new Polozka('DELKA', 1, 'delka');
  Polozka_TEP_PRUMER_instance = new Polozka('TEP_PRUMER', 2, 'tep_prumer');
  Polozka_TEP_MAX_instance = new Polozka('TEP_MAX', 3, 'tep_max');
  Polozka_KALORIE_instance = new Polozka('KALORIE', 4, 'kalorie');
  Polozka_KROKY_instance = new Polozka('KROKY', 5, 'kroky');
  Polozka_PODANI_instance = new Polozka('PODANI', 6, 'podani');
  Polozka_RETURN_instance = new Polozka('RETURN', 7, 'return');
  Polozka_NAROCNY_SET_instance = new Polozka('NAROCNY_SET', 8, 'narocny_set');
  Polozka_DATUM_instance = new Polozka('DATUM', 9, 'datum');
}
var $ENTRIES_3;
function Polozka(name, ordinal, hodnota) {
  Enum.call(this, name, ordinal);
  this.oj_1 = hodnota;
}
function Data(hraciA, hraciB, barvaA, barvaB, sety, vitez, mujTym, delkaMinut, tepPrumer, tepMax, kalorie, kroky, podaniProcenta, returnProcenta, narocnySet, kdy, rozehranySet) {
  rozehranySet = rozehranySet === VOID ? false : rozehranySet;
  this.pj_1 = hraciA;
  this.qj_1 = hraciB;
  this.rj_1 = barvaA;
  this.sj_1 = barvaB;
  this.tj_1 = sety;
  this.uj_1 = vitez;
  this.vj_1 = mujTym;
  this.wj_1 = delkaMinut;
  this.xj_1 = tepPrumer;
  this.yj_1 = tepMax;
  this.zj_1 = kalorie;
  this.ak_1 = kroky;
  this.bk_1 = podaniProcenta;
  this.ck_1 = returnProcenta;
  this.dk_1 = narocnySet;
  this.ek_1 = kdy;
  this.fk_1 = rozehranySet;
}
protoOf(Data).gk = function () {
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = get_entries_3();
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.core.Data.<get-dostupne>.<anonymous>' call
    var tmp;
    switch (element.h1_1) {
      case 0:
      case 9:
        tmp = true;
        break;
      case 1:
        tmp = (!(this.wj_1 == null) && this.wj_1.n1(new Long(0, 0)) > 0);
        break;
      case 2:
        tmp = !(this.xj_1 == null);
        break;
      case 3:
        tmp = !(this.yj_1 == null);
        break;
      case 4:
        tmp = !(this.zj_1 == null);
        break;
      case 5:
        tmp = !(this.ak_1 == null);
        break;
      case 6:
        tmp = !(this.bk_1 == null);
        break;
      case 7:
        tmp = !(this.ck_1 == null);
        break;
      case 8:
        tmp = !(this.dk_1 == null);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    if (tmp) {
      destination.e(element);
    }
  }
  return destination;
};
protoOf(Data).toString = function () {
  return 'Data(hraciA=' + toString_1(this.pj_1) + ', hraciB=' + toString_1(this.qj_1) + ', barvaA=' + this.rj_1.toString() + ', barvaB=' + this.sj_1.toString() + ', sety=' + toString_1(this.tj_1) + ', vitez=' + toString_0(this.uj_1) + ', mujTym=' + toString_0(this.vj_1) + ', delkaMinut=' + toString_0(this.wj_1) + ', tepPrumer=' + this.xj_1 + ', tepMax=' + this.yj_1 + ', kalorie=' + this.zj_1 + ', kroky=' + this.ak_1 + ', podaniProcenta=' + this.bk_1 + ', returnProcenta=' + this.ck_1 + ', narocnySet=' + toString_0(this.dk_1) + ', kdy=' + this.ek_1.toString() + ', rozehranySet=' + this.fk_1 + ')';
};
protoOf(Data).hashCode = function () {
  var result = hashCode(this.pj_1);
  result = imul_0(result, 31) + hashCode(this.qj_1) | 0;
  result = imul_0(result, 31) + this.rj_1.hashCode() | 0;
  result = imul_0(result, 31) + this.sj_1.hashCode() | 0;
  result = imul_0(result, 31) + hashCode(this.tj_1) | 0;
  result = imul_0(result, 31) + (this.uj_1 == null ? 0 : this.uj_1.hashCode()) | 0;
  result = imul_0(result, 31) + (this.vj_1 == null ? 0 : this.vj_1.hashCode()) | 0;
  result = imul_0(result, 31) + (this.wj_1 == null ? 0 : this.wj_1.hashCode()) | 0;
  result = imul_0(result, 31) + (this.xj_1 == null ? 0 : this.xj_1) | 0;
  result = imul_0(result, 31) + (this.yj_1 == null ? 0 : this.yj_1) | 0;
  result = imul_0(result, 31) + (this.zj_1 == null ? 0 : this.zj_1) | 0;
  result = imul_0(result, 31) + (this.ak_1 == null ? 0 : this.ak_1) | 0;
  result = imul_0(result, 31) + (this.bk_1 == null ? 0 : this.bk_1) | 0;
  result = imul_0(result, 31) + (this.ck_1 == null ? 0 : this.ck_1) | 0;
  result = imul_0(result, 31) + (this.dk_1 == null ? 0 : this.dk_1.hashCode()) | 0;
  result = imul_0(result, 31) + this.ek_1.hashCode() | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.fk_1) | 0;
  return result;
};
protoOf(Data).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Data))
    return false;
  var tmp0_other_with_cast = other instanceof Data ? other : THROW_CCE();
  if (!equals(this.pj_1, tmp0_other_with_cast.pj_1))
    return false;
  if (!equals(this.qj_1, tmp0_other_with_cast.qj_1))
    return false;
  if (!this.rj_1.equals(tmp0_other_with_cast.rj_1))
    return false;
  if (!this.sj_1.equals(tmp0_other_with_cast.sj_1))
    return false;
  if (!equals(this.tj_1, tmp0_other_with_cast.tj_1))
    return false;
  if (!equals(this.uj_1, tmp0_other_with_cast.uj_1))
    return false;
  if (!equals(this.vj_1, tmp0_other_with_cast.vj_1))
    return false;
  if (!equals(this.wj_1, tmp0_other_with_cast.wj_1))
    return false;
  if (!(this.xj_1 == tmp0_other_with_cast.xj_1))
    return false;
  if (!(this.yj_1 == tmp0_other_with_cast.yj_1))
    return false;
  if (!(this.zj_1 == tmp0_other_with_cast.zj_1))
    return false;
  if (!(this.ak_1 == tmp0_other_with_cast.ak_1))
    return false;
  if (!(this.bk_1 == tmp0_other_with_cast.bk_1))
    return false;
  if (!(this.ck_1 == tmp0_other_with_cast.ck_1))
    return false;
  if (!equals(this.dk_1, tmp0_other_with_cast.dk_1))
    return false;
  if (!this.ek_1.equals(tmp0_other_with_cast.ek_1))
    return false;
  if (!(this.fk_1 === tmp0_other_with_cast.fk_1))
    return false;
  return true;
};
function Polozka_SKORE_getInstance() {
  Polozka_initEntries();
  return Polozka_SKORE_instance;
}
function Polozka_DELKA_getInstance() {
  Polozka_initEntries();
  return Polozka_DELKA_instance;
}
function Polozka_TEP_PRUMER_getInstance() {
  Polozka_initEntries();
  return Polozka_TEP_PRUMER_instance;
}
function Polozka_TEP_MAX_getInstance() {
  Polozka_initEntries();
  return Polozka_TEP_MAX_instance;
}
function Polozka_KALORIE_getInstance() {
  Polozka_initEntries();
  return Polozka_KALORIE_instance;
}
function Polozka_KROKY_getInstance() {
  Polozka_initEntries();
  return Polozka_KROKY_instance;
}
function Polozka_PODANI_getInstance() {
  Polozka_initEntries();
  return Polozka_PODANI_instance;
}
function Polozka_RETURN_getInstance() {
  Polozka_initEntries();
  return Polozka_RETURN_instance;
}
function Polozka_NAROCNY_SET_getInstance() {
  Polozka_initEntries();
  return Polozka_NAROCNY_SET_instance;
}
function Polozka_DATUM_getInstance() {
  Polozka_initEntries();
  return Polozka_DATUM_instance;
}
function Studio() {
}
protoOf(Studio).hk = function (o, kdy) {
  var stav = o.zf_1.bd_1;
  var ja = o.ag_1.wc_1;
  var tmp;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!stav.oa_1.k()) {
    tmp = stav.pa_1.ud() > 0;
  } else {
    tmp = false;
  }
  var rozehrany = tmp;
  var sety = stav.oa_1.k() ? listOf(stav.ka_1.ld_1.equals(Format_AMERICANO_getInstance()) ? stav.qa_1 : stav.pa_1) : rozehrany ? plus(stav.oa_1, stav.pa_1) : stav.oa_1;
  var minut = Casy_getInstance().kc(o.ag_1, o.zf_1.dd_1, o.bg_1, o.cg_1).ec();
  var tmp_0;
  if (ja == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>' call
    var tym = ja.o7();
    var poradi = ja.p7();
    var tmp0_safe_receiver = firstOrNull(Statistiky_instance.fg(o.ag_1, o.zf_1.dd_1, o.dg_1));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jg_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f1();
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp2_safe_receiver.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>.<anonymous>' call
          if (element.b1().kg_1.equals(tym) && element.b1().lg_1 === poradi) {
            tmp$ret$2 = element;
            break $l$block;
          }
        }
        tmp$ret$2 = null;
      }
      tmp_1 = tmp$ret$2;
    }
    var tmp3_safe_receiver = tmp_1;
    tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c1();
  }
  var cisla = tmp_0;
  var tmp3 = o.eg_1;
  var tmp$ret$6;
  $l$block_0: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s_0 = tmp3.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>' call
      if (!(ja == null) && equals(element_0.df_1, ja)) {
        tmp$ret$6 = element_0;
        break $l$block_0;
      }
    }
    tmp$ret$6 = null;
  }
  var tmp1_elvis_lhs = tmp$ret$6;
  var ucastnik = tmp1_elvis_lhs == null ? firstOrNull(o.eg_1) : tmp1_elvis_lhs;
  var h = ucastnik == null ? null : ucastnik.bf_1;
  var maSety = stav.ka_1.ld_1.equals(Format_KLASICKY_getInstance()) || stav.ka_1.yd();
  var tmp_2;
  if (ucastnik == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>' call
    var useky = PrubehTepu_instance.oh(ucastnik.cf_1, PrubehTepu_instance.nh(o.ag_1, o.zf_1.dd_1, o.bg_1), maSety);
    var tmp0_safe_receiver_0 = PrubehTepu_instance.ph(useky);
    var tmp_3;
    if (tmp0_safe_receiver_0 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver_1 = tmp0_safe_receiver_0.fh_1;
      var tmp_4;
      if (tmp0_safe_receiver_1 == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_2 = tmp0_safe_receiver_0.kh_1;
        var tmp_5;
        if (tmp0_safe_receiver_2 == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp_5 = to(tmp0_safe_receiver_1, tmp0_safe_receiver_2);
        }
        tmp_4 = tmp_5;
      }
      tmp_3 = tmp_4;
    }
    tmp_2 = tmp_3;
  }
  var narocny = tmp_2;
  var tmp_6 = ja == null ? null : ja.j7_1;
  // Inline function 'kotlin.takeIf' call
  var tmp_7;
  // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>' call
  if (minut.n1(new Long(0, 0)) > 0) {
    tmp_7 = minut;
  } else {
    tmp_7 = null;
  }
  var tmp_8 = tmp_7;
  var tmp_9 = h == null ? null : h.we();
  var tmp_10 = h == null ? null : h.qe_1;
  var tmp_11 = h == null ? null : h.ye();
  var tmp_12 = h == null ? null : h.xe();
  var tmp_13;
  if (cisla == null) {
    tmp_13 = null;
  } else {
    // Inline function 'kotlin.takeIf' call
    var tmp_14;
    // Inline function 'cz.padelcesko.score.core.Studio.data.<anonymous>' call
    if (cisla.ah() > 0) {
      tmp_14 = cisla;
    } else {
      tmp_14 = null;
    }
    tmp_13 = tmp_14;
  }
  var tmp10_safe_receiver = tmp_13;
  var tmp_15 = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.bj();
  return new Data(stav.la_1.nb_1.mb_1, stav.la_1.ob_1.mb_1, stav.la_1.nb_1.lb_1, stav.la_1.ob_1.lb_1, sety, stav.ua_1, tmp_6, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_15, cisla == null ? null : cisla.vf(), narocny, kdy, rozehrany);
};
var Studio_instance;
function Studio_getInstance() {
  return Studio_instance;
}
function TextBodu() {
  this.ik_1 = 'SP';
}
protoOf(TextBodu).jk = function (stav, tym) {
  if (!stav.sa_1.equals(Faze_GEM_getInstance()))
    return stav.qa_1.db(tym).toString();
  var muj = stav.qa_1.db(tym);
  var soupere = stav.qa_1.db(tym.ib());
  if (muj >= 3 && soupere >= 3) {
    return muj === soupere && stav.ka_1.fd_1.equals(Shoda_STAR_POINT_getInstance()) && stav.ra_1 >= 2 ? 'SP' : muj === soupere ? '40' : muj > soupere ? 'AD' + (stav.ra_1 + 1 | 0) : '40';
  }
  switch (muj) {
    case 0:
      return '0';
    case 1:
      return '15';
    case 2:
      return '30';
    default:
      return '40';
  }
};
var TextBodu_instance;
function TextBodu_getInstance() {
  return TextBodu_instance;
}
function Vychozi(pravidla, tymy, podani, prvniHraci, sdileni, jazykHlasu, kolo, rozpis, turnajovyZapas, klub, vpravo, ja) {
  prvniHraci = prvniHraci === VOID ? emptyMap() : prvniHraci;
  sdileni = sdileni === VOID ? new Sdileni() : sdileni;
  jazykHlasu = jazykHlasu === VOID ? 'cs' : jazykHlasu;
  kolo = kolo === VOID ? null : kolo;
  rozpis = rozpis === VOID ? null : rozpis;
  turnajovyZapas = turnajovyZapas === VOID ? null : turnajovyZapas;
  klub = klub === VOID ? null : klub;
  vpravo = vpravo === VOID ? emptyMap() : vpravo;
  ja = ja === VOID ? null : ja;
  this.lc_1 = pravidla;
  this.mc_1 = tymy;
  this.nc_1 = podani;
  this.oc_1 = prvniHraci;
  this.pc_1 = sdileni;
  this.qc_1 = jazykHlasu;
  this.rc_1 = kolo;
  this.sc_1 = rozpis;
  this.tc_1 = turnajovyZapas;
  this.uc_1 = klub;
  this.vc_1 = vpravo;
  this.wc_1 = ja;
}
protoOf(Vychozi).toString = function () {
  return 'Vychozi(pravidla=' + this.lc_1.toString() + ', tymy=' + this.mc_1.toString() + ', podani=' + this.nc_1.toString() + ', prvniHraci=' + toString_1(this.oc_1) + ', sdileni=' + this.pc_1.toString() + ', jazykHlasu=' + this.qc_1 + ', kolo=' + toString_0(this.rc_1) + ', rozpis=' + toString_0(this.sc_1) + ', turnajovyZapas=' + this.tc_1 + ', klub=' + this.uc_1 + ', vpravo=' + toString_1(this.vc_1) + ', ja=' + toString_0(this.wc_1) + ')';
};
protoOf(Vychozi).hashCode = function () {
  var result = this.lc_1.hashCode();
  result = imul_0(result, 31) + this.mc_1.hashCode() | 0;
  result = imul_0(result, 31) + this.nc_1.hashCode() | 0;
  result = imul_0(result, 31) + hashCode(this.oc_1) | 0;
  result = imul_0(result, 31) + this.pc_1.hashCode() | 0;
  result = imul_0(result, 31) + getStringHashCode(this.qc_1) | 0;
  result = imul_0(result, 31) + (this.rc_1 == null ? 0 : this.rc_1.hashCode()) | 0;
  result = imul_0(result, 31) + (this.sc_1 == null ? 0 : this.sc_1.hashCode()) | 0;
  result = imul_0(result, 31) + (this.tc_1 == null ? 0 : getStringHashCode(this.tc_1)) | 0;
  result = imul_0(result, 31) + (this.uc_1 == null ? 0 : getStringHashCode(this.uc_1)) | 0;
  result = imul_0(result, 31) + hashCode(this.vc_1) | 0;
  result = imul_0(result, 31) + (this.wc_1 == null ? 0 : this.wc_1.hashCode()) | 0;
  return result;
};
protoOf(Vychozi).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Vychozi))
    return false;
  var tmp0_other_with_cast = other instanceof Vychozi ? other : THROW_CCE();
  if (!this.lc_1.equals(tmp0_other_with_cast.lc_1))
    return false;
  if (!this.mc_1.equals(tmp0_other_with_cast.mc_1))
    return false;
  if (!this.nc_1.equals(tmp0_other_with_cast.nc_1))
    return false;
  if (!equals(this.oc_1, tmp0_other_with_cast.oc_1))
    return false;
  if (!this.pc_1.equals(tmp0_other_with_cast.pc_1))
    return false;
  if (!(this.qc_1 === tmp0_other_with_cast.qc_1))
    return false;
  if (!equals(this.rc_1, tmp0_other_with_cast.rc_1))
    return false;
  if (!equals(this.sc_1, tmp0_other_with_cast.sc_1))
    return false;
  if (!(this.tc_1 == tmp0_other_with_cast.tc_1))
    return false;
  if (!(this.uc_1 == tmp0_other_with_cast.uc_1))
    return false;
  if (!equals(this.vc_1, tmp0_other_with_cast.vc_1))
    return false;
  if (!equals(this.wc_1, tmp0_other_with_cast.wc_1))
    return false;
  return true;
};
function Sdileni(rezim, bezJmen, id, klic, poradi, vsechnaJmena) {
  rezim = rezim === VOID ? 'ne' : rezim;
  bezJmen = bezJmen === VOID ? false : bezJmen;
  id = id === VOID ? null : id;
  klic = klic === VOID ? null : klic;
  poradi = poradi === VOID ? 0 : poradi;
  vsechnaJmena = vsechnaJmena === VOID ? false : vsechnaJmena;
  this.kk_1 = rezim;
  this.lk_1 = bezJmen;
  this.mk_1 = id;
  this.nk_1 = klic;
  this.ok_1 = poradi;
  this.pk_1 = vsechnaJmena;
}
protoOf(Sdileni).toString = function () {
  return 'Sdileni(rezim=' + this.kk_1 + ', bezJmen=' + this.lk_1 + ', id=' + this.mk_1 + ', klic=' + this.nk_1 + ', poradi=' + this.ok_1 + ', vsechnaJmena=' + this.pk_1 + ')';
};
protoOf(Sdileni).hashCode = function () {
  var result = getStringHashCode(this.kk_1);
  result = imul_0(result, 31) + getBooleanHashCode(this.lk_1) | 0;
  result = imul_0(result, 31) + (this.mk_1 == null ? 0 : getStringHashCode(this.mk_1)) | 0;
  result = imul_0(result, 31) + (this.nk_1 == null ? 0 : getStringHashCode(this.nk_1)) | 0;
  result = imul_0(result, 31) + this.ok_1 | 0;
  result = imul_0(result, 31) + getBooleanHashCode(this.pk_1) | 0;
  return result;
};
protoOf(Sdileni).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Sdileni))
    return false;
  var tmp0_other_with_cast = other instanceof Sdileni ? other : THROW_CCE();
  if (!(this.kk_1 === tmp0_other_with_cast.kk_1))
    return false;
  if (!(this.lk_1 === tmp0_other_with_cast.lk_1))
    return false;
  if (!(this.mk_1 == tmp0_other_with_cast.mk_1))
    return false;
  if (!(this.nk_1 == tmp0_other_with_cast.nk_1))
    return false;
  if (!(this.ok_1 === tmp0_other_with_cast.ok_1))
    return false;
  if (!(this.pk_1 === tmp0_other_with_cast.pk_1))
    return false;
  return true;
};
function Obnoveno(zapas, vychozi, casy, noveSeance, znacky, ucastnici) {
  casy = casy === VOID ? emptyList() : casy;
  noveSeance = noveSeance === VOID ? emptySet() : noveSeance;
  znacky = znacky === VOID ? emptyMap() : znacky;
  ucastnici = ucastnici === VOID ? emptyList() : ucastnici;
  this.zf_1 = zapas;
  this.ag_1 = vychozi;
  this.bg_1 = casy;
  this.cg_1 = noveSeance;
  this.dg_1 = znacky;
  this.eg_1 = ucastnici;
}
protoOf(Obnoveno).toString = function () {
  return 'Obnoveno(zapas=' + this.zf_1.toString() + ', vychozi=' + this.ag_1.toString() + ', casy=' + toString_1(this.bg_1) + ', noveSeance=' + toString_1(this.cg_1) + ', znacky=' + toString_1(this.dg_1) + ', ucastnici=' + toString_1(this.eg_1) + ')';
};
protoOf(Obnoveno).hashCode = function () {
  var result = this.zf_1.hashCode();
  result = imul_0(result, 31) + this.ag_1.hashCode() | 0;
  result = imul_0(result, 31) + hashCode(this.bg_1) | 0;
  result = imul_0(result, 31) + hashCode(this.cg_1) | 0;
  result = imul_0(result, 31) + hashCode(this.dg_1) | 0;
  result = imul_0(result, 31) + hashCode(this.eg_1) | 0;
  return result;
};
protoOf(Obnoveno).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Obnoveno))
    return false;
  var tmp0_other_with_cast = other instanceof Obnoveno ? other : THROW_CCE();
  if (!this.zf_1.equals(tmp0_other_with_cast.zf_1))
    return false;
  if (!this.ag_1.equals(tmp0_other_with_cast.ag_1))
    return false;
  if (!equals(this.bg_1, tmp0_other_with_cast.bg_1))
    return false;
  if (!equals(this.cg_1, tmp0_other_with_cast.cg_1))
    return false;
  if (!equals(this.dg_1, tmp0_other_with_cast.dg_1))
    return false;
  if (!equals(this.eg_1, tmp0_other_with_cast.eg_1))
    return false;
  return true;
};
function znak($this, tah) {
  var tmp;
  if (tah instanceof Bod) {
    tmp = tah.ge_1.equals(TymId_A_getInstance()) ? 'A' : 'B';
  } else {
    if (equals(tah, Zpet_instance)) {
      tmp = 'Z';
    } else {
      if (equals(tah, UkoncitZapas_instance)) {
        tmp = 'K';
      } else {
        if (tah instanceof ZvolPodavajiciho) {
          tmp = tah.be_1.equals(TymId_A_getInstance()) && tah.ce_1 === 0 ? 'p' : tah.be_1.equals(TymId_A_getInstance()) ? 'q' : tah.ce_1 === 0 ? 'r' : 's';
        } else {
          if (tah instanceof ZvolTieBreak) {
            tmp = tah.de_1 ? 't' : 'd';
          } else {
            if (equals(tah, KonecCasu_instance)) {
              tmp = 'c';
            } else {
              if (tah instanceof ProhodStranyHracu) {
                tmp = tah.ed_1.equals(TymId_A_getInstance()) ? 'x' : 'y';
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
  }
  return tmp;
}
function tah($this, z) {
  return z === _Char___init__impl__6a9atx(65) ? new Bod(TymId_A_getInstance()) : z === _Char___init__impl__6a9atx(66) ? new Bod(TymId_B_getInstance()) : z === _Char___init__impl__6a9atx(90) ? Zpet_instance : z === _Char___init__impl__6a9atx(75) ? UkoncitZapas_instance : z === _Char___init__impl__6a9atx(112) ? new ZvolPodavajiciho(TymId_A_getInstance(), 0) : z === _Char___init__impl__6a9atx(113) ? new ZvolPodavajiciho(TymId_A_getInstance(), 1) : z === _Char___init__impl__6a9atx(114) ? new ZvolPodavajiciho(TymId_B_getInstance(), 0) : z === _Char___init__impl__6a9atx(115) ? new ZvolPodavajiciho(TymId_B_getInstance(), 1) : z === _Char___init__impl__6a9atx(116) ? new ZvolTieBreak(true) : z === _Char___init__impl__6a9atx(100) ? new ZvolTieBreak(false) : z === _Char___init__impl__6a9atx(99) ? KonecCasu_instance : z === _Char___init__impl__6a9atx(120) ? new ProhodStranyHracu(TymId_A_getInstance()) : z === _Char___init__impl__6a9atx(121) ? new ProhodStranyHracu(TymId_B_getInstance()) : null;
}
function ctiPravidla($this, radek) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = split(radek, charArrayOf([_Char___init__impl__6a9atx(32)]));
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'cz.padelcesko.score.core.Ulozeni.ctiPravidla.<anonymous>' call
    var k = substringBefore(element, _Char___init__impl__6a9atx(61));
    var v = substringAfter(element, _Char___init__impl__6a9atx(61), '');
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(v) === 0) {
      tmp = null;
    } else {
      tmp = to(k, v);
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination.e(tmp0_safe_receiver);
    }
  }
  var p = toMap(destination);
  var tmp_0 = valueOf_1(getValue(p, 'shoda'));
  var tmp_1 = toInt(getValue(p, 'sety'));
  var tmp_2 = toBoolean(getValue(p, 'stb'));
  var tmp_3 = toInt(getValue(p, 'tb'));
  var tmp_4 = toInt(getValue(p, 'stbdo'));
  var tmp_5 = valueOf_2(getValue(p, 'strany'));
  var tmp0_safe_receiver_0 = p.e1('format');
  var tmp_6;
  if (tmp0_safe_receiver_0 == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Ulozeni.ctiPravidla.<anonymous>' call
    tmp_6 = valueOf_3(tmp0_safe_receiver_0);
  }
  var tmp1_elvis_lhs = tmp_6;
  var tmp_7 = tmp1_elvis_lhs == null ? Format_KLASICKY_getInstance() : tmp1_elvis_lhs;
  var tmp2_safe_receiver = p.e1('amdo');
  var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toIntOrNull(tmp2_safe_receiver);
  var tmp_8 = tmp3_elvis_lhs == null ? 24 : tmp3_elvis_lhs;
  var tmp4_safe_receiver = p.e1('ampo');
  var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : toIntOrNull(tmp4_safe_receiver);
  var tmp_9 = tmp5_elvis_lhs == null ? 4 : tmp5_elvis_lhs;
  var tmp_10 = toBoolean(p.e1('volba'));
  var tmp_11 = toBoolean(p.e1('tbdotaz'));
  var tmp_12 = toBoolean(p.e1('volnesety'));
  var tmp6_safe_receiver = p.e1('nacas');
  var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : toIntOrNull(tmp6_safe_receiver);
  return new Pravidla(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs);
}
function ctiTym($this, prvni, radky, id) {
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.first' call
    var _iterator__ex2g4s = radky.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.core.Ulozeni.ctiTym.<anonymous>' call
      if (startsWith(element, 'tym ' + id + ' ')) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    throw NoSuchElementException_init_$Create$_0('Collection contains no element matching the predicate.');
  }
  var radek = removePrefix(tmp$ret$1, 'tym ' + id + ' ');
  var barva = valueOf_0(substringBefore(radek, _Char___init__impl__6a9atx(32)));
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = split_0(substringAfter(radek, _Char___init__impl__6a9atx(32)), ['|']);
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = tmp0.g();
  while (_iterator__ex2g4s_0.h()) {
    var element_0 = _iterator__ex2g4s_0.i();
    // Inline function 'cz.padelcesko.score.core.Ulozeni.ctiTym.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(element_0)) {
      destination.e(element_0);
    }
  }
  var jmena = destination;
  return new Tym(barva, jmena);
}
function ctiPodani($this, radek) {
  // Inline function 'kotlin.text.trim' call
  var tmp$ret$0 = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  var _destruct__k2r9zo = split(tmp$ret$0, charArrayOf([_Char___init__impl__6a9atx(32)]));
  // Inline function 'kotlin.collections.component1' call
  var tym = _destruct__k2r9zo.j(0);
  // Inline function 'kotlin.collections.component2' call
  var hrac = _destruct__k2r9zo.j(1);
  return new Podani(valueOf(tym), toInt(hrac));
}
function sam$kotlin_Comparator$0_2(function_0) {
  this.qk_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_2).z7 = function (a, b) {
  return this.qk_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
  return this.z7(a, b);
};
protoOf(sam$kotlin_Comparator$0_2).w1 = function () {
  return this.qk_1;
};
protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.w1(), other.w1());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0_2).hashCode = function () {
  return hashCode(this.w1());
};
function Ulozeni$zapis$lambda($vychozi) {
  return function (it) {
    var tmp = it.toString();
    var tmp0_elvis_lhs = $vychozi.oc_1.e1(it);
    return tmp + '=' + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
}
function Ulozeni$zapis$lambda_0(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
  var tmp = a.b1();
  // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
  var tmp$ret$1 = b.b1();
  return compareValues(tmp, tmp$ret$1);
}
function Ulozeni$zapis$lambda_1(it) {
  return it.b1().toString() + '=' + it.c1();
}
function Ulozeni$zapis$lambda_2(it) {
  return znak(Ulozeni_instance, it);
}
function Ulozeni$zapis$lambda_3(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
  var tmp = a.b1();
  // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
  var tmp$ret$1 = b.b1();
  return compareValues(tmp, tmp$ret$1);
}
function Ulozeni$zapis$lambda_4(it) {
  return '' + it.b1() + '=' + it.c1();
}
function Ulozeni() {
  this.rk_1 = 'v1';
}
protoOf(Ulozeni).sk = function (zapas, vychozi, casy, noveSeance, znacky, ucastnici) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$_0();
  // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>' call
  // Inline function 'kotlin.text.appendLine' call
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5('v1').i5(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.with' call
  // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
  var $this$with = vychozi.lc_1;
  // Inline function 'kotlin.text.appendLine' call
  var value = 'pravidla shoda=' + $this$with.fd_1.toString() + ' sety=' + $this$with.gd_1 + ' stb=' + $this$with.hd_1 + ' ' + ('tb=' + $this$with.id_1 + ' stbdo=' + $this$with.jd_1 + ' strany=' + $this$with.kd_1.toString() + ' ') + ('format=' + $this$with.ld_1.toString() + ' amdo=' + $this$with.md_1 + ' ampo=' + $this$with.nd_1 + ' ') + ('volba=' + $this$with.od_1 + ' tbdotaz=' + $this$with.pd_1 + ' volnesety=' + $this$with.qd_1 + ' nacas=' + $this$with.rd_1);
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value).i5(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = 'tym A ' + vychozi.mc_1.nb_1.lb_1.toString() + ' ' + joinToString_0(vychozi.mc_1.nb_1.mb_1, '|');
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value_0).i5(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_1 = 'tym B ' + vychozi.mc_1.ob_1.lb_1.toString() + ' ' + joinToString_0(vychozi.mc_1.ob_1.mb_1, '|');
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value_1).i5(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_2 = 'podani ' + vychozi.nc_1.eb_1.toString() + ' ' + vychozi.nc_1.fb_1;
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value_2).i5(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_3 = 'jazyk ' + vychozi.qc_1;
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value_3).i5(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.with' call
  // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
  var $this$with_0 = vychozi.pc_1;
  var tmp = 'sdileni rezim=' + $this$with_0.kk_1 + ' bezjmen=' + $this$with_0.lk_1 + ' poradi=' + $this$with_0.ok_1 + ' ';
  var tmp0_elvis_lhs = $this$with_0.mk_1;
  var tmp_0 = tmp0_elvis_lhs == null ? '-' : tmp0_elvis_lhs;
  var tmp1_elvis_lhs = $this$with_0.nk_1;
  // Inline function 'kotlin.text.appendLine' call
  var value_4 = tmp + ('id=' + tmp_0 + ' klic=' + (tmp1_elvis_lhs == null ? '-' : tmp1_elvis_lhs) + ' vsechna=' + $this$with_0.pk_1);
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value_4).i5(_Char___init__impl__6a9atx(10));
  var tmp_1 = get_entries_1();
  // Inline function 'kotlin.text.appendLine' call
  var value_5 = 'prvni ' + joinToString_0(tmp_1, ' ', VOID, VOID, VOID, VOID, Ulozeni$zapis$lambda(vychozi));
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value_5).i5(_Char___init__impl__6a9atx(10));
  var tmp0_safe_receiver = vychozi.rc_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value_6 = 'kolo ' + tmp0_safe_receiver.he_1.toString() + ' ' + tmp0_safe_receiver.ie_1.toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_6).i5(_Char___init__impl__6a9atx(10));
  }
  var tmp1_safe_receiver = vychozi.sc_1;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value_7 = 'rozpis ' + tmp1_safe_receiver.je_1.toString() + ' ' + tmp1_safe_receiver.ke_1;
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_7).i5(_Char___init__impl__6a9atx(10));
  }
  var tmp2_safe_receiver = vychozi.tc_1;
  var tmp_2;
  if (tmp2_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.takeIf' call
    var tmp_3;
    // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
    var tmp_4;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(tmp2_safe_receiver)) {
      var tmp$ret$30;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp2_safe_receiver)) {
          var element = charSequenceGet(tmp2_safe_receiver, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>.stub_for_inlining' call
          if (isWhitespace(element)) {
            tmp$ret$30 = false;
            break $l$block;
          }
        }
        tmp$ret$30 = true;
      }
      tmp_4 = tmp$ret$30;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = tmp2_safe_receiver;
    } else {
      tmp_3 = null;
    }
    tmp_2 = tmp_3;
  }
  var tmp3_safe_receiver = tmp_2;
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value_8 = 'turnaj ' + tmp3_safe_receiver;
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_8).i5(_Char___init__impl__6a9atx(10));
  }
  var tmp4_safe_receiver = vychozi.uc_1;
  var tmp_5;
  if (tmp4_safe_receiver == null) {
    tmp_5 = null;
  } else {
    // Inline function 'kotlin.takeIf' call
    var tmp_6;
    // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
    if (Companion_getInstance_13().wi(tmp4_safe_receiver)) {
      tmp_6 = tmp4_safe_receiver;
    } else {
      tmp_6 = null;
    }
    tmp_5 = tmp_6;
  }
  var tmp5_safe_receiver = tmp_5;
  if (tmp5_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value_9 = 'klub ' + tmp5_safe_receiver;
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_9).i5(_Char___init__impl__6a9atx(10));
  }
  var tmp6_safe_receiver = vychozi.wc_1;
  if (tmp6_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value_10 = 'ja ' + tmp6_safe_receiver.j7_1.toString() + '=' + tmp6_safe_receiver.k7_1;
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_10).i5(_Char___init__impl__6a9atx(10));
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!vychozi.vc_1.k()) {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_1 = vychozi.vc_1.f1();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_7 = Ulozeni$zapis$lambda_0;
    var tmp$ret$48 = new sam$kotlin_Comparator$0_2(tmp_7);
    var tmp_8 = sortedWith(this_1, tmp$ret$48);
    // Inline function 'kotlin.text.appendLine' call
    var value_11 = 'vpravo ' + joinToString_0(tmp_8, ' ', VOID, VOID, VOID, VOID, Ulozeni$zapis$lambda_1);
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_11).i5(_Char___init__impl__6a9atx(10));
  }
  // Inline function 'kotlin.text.appendLine' call
  var value_12 = 'tahy ' + joinToString_0(zapas.dd_1, '', VOID, VOID, VOID, VOID, Ulozeni$zapis$lambda_2);
  // Inline function 'kotlin.text.appendLine' call
  this_0.h5(value_12).i5(_Char___init__impl__6a9atx(10));
  var tmp_9;
  if (casy.l() === zapas.dd_1.l()) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp_9 = !casy.k();
  } else {
    tmp_9 = false;
  }
  if (tmp_9) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_2 = drop(casy, 1);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var index = 0;
    var _iterator__ex2g4s = this_2.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
      var i = checkIndexOverflow(_unary__edvuaz);
      var tmp$ret$55 = item.o1(casy.j(i));
      destination.e(tmp$ret$55);
    }
    var rozdily = destination;
    // Inline function 'kotlin.text.appendLine' call
    var value_13 = 'casy ' + joinToString_0(plus_0(listOf(first(casy)), rozdily), ' ');
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_13).i5(_Char___init__impl__6a9atx(10));
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!noveSeance.k()) {
    // Inline function 'kotlin.text.appendLine' call
    var value_14 = 'seance ' + joinToString_0(sorted(noveSeance), ' ');
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_14).i5(_Char___init__impl__6a9atx(10));
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!znacky.k()) {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_3 = znacky.f1();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_10 = Ulozeni$zapis$lambda_3;
    var tmp$ret$64 = new sam$kotlin_Comparator$0_2(tmp_10);
    var tmp_11 = sortedWith(this_3, tmp$ret$64);
    // Inline function 'kotlin.text.appendLine' call
    var value_15 = 'znacky ' + joinToString_0(tmp_11, ' ', VOID, VOID, VOID, VOID, Ulozeni$zapis$lambda_4);
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_15).i5(_Char___init__impl__6a9atx(10));
  }
  var zapsano = 0;
  var _iterator__ex2g4s_0 = ucastnici.g();
  $l$loop: while (_iterator__ex2g4s_0.h()) {
    var u = _iterator__ex2g4s_0.i();
    // Inline function 'kotlin.text.trim' call
    var this_4 = replace(replace(u.af_1, '|', ' '), '\n', ' ');
    var jmeno = toString_1(trim(isCharSequence(this_4) ? this_4 : THROW_CCE()));
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(jmeno) === 0)
      continue $l$loop;
    var tmp7_safe_receiver = u.df_1;
    var tmp_12;
    if (tmp7_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'cz.padelcesko.score.core.Ulozeni.zapis.<anonymous>.<anonymous>' call
      tmp_12 = ' hr=' + tmp7_safe_receiver.j7_1.toString() + tmp7_safe_receiver.k7_1;
    }
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = tmp_12;
    var hrac = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
    // Inline function 'kotlin.text.appendLine' call
    var value_16 = 'ucastnik ' + jmeno + '|' + u.bf_1.ze() + hrac;
    // Inline function 'kotlin.text.appendLine' call
    this_0.h5(value_16).i5(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!u.cf_1.k()) {
      // Inline function 'kotlin.text.appendLine' call
      var value_17 = 'vzorky ' + zapsano + ' ' + PrubehTepu_instance.qh(u.cf_1);
      // Inline function 'kotlin.text.appendLine' call
      this_0.h5(value_17).i5(_Char___init__impl__6a9atx(10));
    }
    zapsano = zapsano + 1 | 0;
  }
  return this_0.toString();
};
protoOf(Ulozeni).ne = function (text) {
  // Inline function 'kotlin.text.trim' call
  var tmp$ret$0 = toString_1(trim(isCharSequence(text) ? text : THROW_CCE()));
  var radky = lines(tmp$ret$0);
  var tmp0_safe_receiver = firstOrNull(radky);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.text.trim' call
    tmp = toString_1(trim(isCharSequence(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE()));
  }
  if (!(tmp === 'v1'))
    return null;
  var tmp_0;
  try {
    // Inline function 'kotlin.collections.associate' call
    var this_0 = drop(radky, 1);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.core.Ulozeni.cti.<anonymous>' call
      var klic = substringBefore(element, _Char___init__impl__6a9atx(32));
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(klic, substringAfter(element, _Char___init__impl__6a9atx(32), ''));
      destination.x2(pair.j7_1, pair.k7_1);
    }
    var mapa = destination;
    var tmp9_pravidla = ctiPravidla(this, getValue(mapa, 'pravidla'));
    var tmp10_tymy = new Tymy(ctiTym(this, getValue(mapa, 'tym'), radky, 'A'), ctiTym(this, getValue(mapa, 'tym'), radky, 'B'));
    var tmp11_podani = ctiPodani(this, getValue(mapa, 'podani'));
    var tmp12_prvniHraci = ctiPrvniHrace(mapa.e1('prvni'));
    var tmp1_safe_receiver = mapa.e1('jazyk');
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp_1 = toString_1(trim(isCharSequence(tmp1_safe_receiver) ? tmp1_safe_receiver : THROW_CCE()));
    }
    var tmp2_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_3;
      if (isBlank(tmp2_safe_receiver)) {
        // Inline function 'cz.padelcesko.score.core.Ulozeni.cti.<anonymous>' call
        tmp_3 = null;
      } else {
        tmp_3 = tmp2_safe_receiver;
      }
      tmp_2 = tmp_3;
    }
    var tmp3_elvis_lhs = tmp_2;
    var tmp13_jazykHlasu = tmp3_elvis_lhs == null ? 'cs' : tmp3_elvis_lhs;
    var tmp14_sdileni = ctiSdileni(mapa.e1('sdileni'));
    var tmp15_kolo = ctiKolo(mapa.e1('kolo'));
    var tmp16_rozpis = ctiRozpis(mapa.e1('rozpis'));
    var tmp4_safe_receiver = mapa.e1('turnaj');
    var tmp_4;
    if (tmp4_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp_4 = toString_1(trim(isCharSequence(tmp4_safe_receiver) ? tmp4_safe_receiver : THROW_CCE()));
    }
    var tmp5_safe_receiver = tmp_4;
    var tmp_5;
    if (tmp5_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_6;
      if (isBlank(tmp5_safe_receiver)) {
        // Inline function 'cz.padelcesko.score.core.Ulozeni.cti.<anonymous>' call
        tmp_6 = null;
      } else {
        tmp_6 = tmp5_safe_receiver;
      }
      tmp_5 = tmp_6;
    }
    var tmp17_turnajovyZapas = tmp_5;
    var tmp6_safe_receiver = mapa.e1('klub');
    var tmp_7;
    if (tmp6_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp_7 = toString_1(trim(isCharSequence(tmp6_safe_receiver) ? tmp6_safe_receiver : THROW_CCE()));
    }
    var tmp7_safe_receiver = tmp_7;
    var tmp_8;
    if (tmp7_safe_receiver == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_9;
      // Inline function 'cz.padelcesko.score.core.Ulozeni.cti.<anonymous>' call
      if (Companion_getInstance_13().wi(tmp7_safe_receiver)) {
        tmp_9 = tmp7_safe_receiver;
      } else {
        tmp_9 = null;
      }
      tmp_8 = tmp_9;
    }
    var tmp18_klub = tmp_8;
    var tmp19_vpravo = ctiPrvniHrace(mapa.e1('vpravo'));
    var tmp8_safe_receiver = firstOrNull_0(ctiPrvniHrace(mapa.e1('ja')).f1());
    var tmp_10;
    if (tmp8_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.collections.toPair' call
      tmp_10 = new Pair(tmp8_safe_receiver.b1(), tmp8_safe_receiver.c1());
    }
    var tmp20_ja = tmp_10;
    var vychozi = new Vychozi(tmp9_pravidla, tmp10_tymy, tmp11_podani, tmp12_prvniHraci, tmp14_sdileni, tmp13_jazykHlasu, tmp15_kolo, tmp16_rozpis, tmp17_turnajovyZapas, tmp18_klub, tmp19_vpravo, tmp20_ja);
    var zapas = Engine_instance.xc(vychozi.lc_1, vychozi.mc_1, vychozi.nc_1, vychozi.oc_1);
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = mapa.e1('tahy');
    // Inline function 'kotlin.text.trim' call
    var this_1 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tahy = toString_1(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
    var inductionVariable = 0;
    var last = tahy.length;
    while (inductionVariable < last) {
      var z = charSequenceGet(tahy, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp21_elvis_lhs = tah(this, z);
      var tmp_11;
      if (tmp21_elvis_lhs == null) {
        return null;
      } else {
        tmp_11 = tmp21_elvis_lhs;
      }
      var tah_0 = tmp_11;
      var v = Engine_instance.yc(zapas, tah_0);
      if (!(v instanceof Prijato))
        return null;
      zapas = v.zc_1;
    }
    tmp_0 = new Obnoveno(zapas, vychozi, ctiCasy(mapa.e1('casy'), zapas.dd_1.l()), ctiSeance(mapa.e1('seance')), ctiZnacky(mapa.e1('znacky')), ctiUcastniky(radky));
  } catch ($p) {
    var tmp_12;
    if ($p instanceof Exception) {
      var e = $p;
      tmp_12 = null;
    } else {
      throw $p;
    }
    tmp_0 = tmp_12;
  }
  return tmp_0;
};
var Ulozeni_instance;
function Ulozeni_getInstance() {
  return Ulozeni_instance;
}
function ctiPrvniHrace(radek) {
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (radek == null || isBlank(radek))
    return emptyMap();
  // Inline function 'kotlin.text.trim' call
  var tmp$ret$1 = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = split(tmp$ret$1, charArrayOf([_Char___init__impl__6a9atx(32)]));
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'cz.padelcesko.score.core.ctiPrvniHrace.<anonymous>' call
      var tym = substringBefore(element, _Char___init__impl__6a9atx(61));
      var tmp0_elvis_lhs = toIntOrNull(substringAfter(element, _Char___init__impl__6a9atx(61), ''));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$2 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var hrac = tmp;
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'cz.padelcesko.score.core.ctiPrvniHrace.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.Companion.success' call
        var value = valueOf(tym);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      }
      var tmp1_safe_receiver = tmp_2;
      var tmp_4;
      if (tmp1_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'cz.padelcesko.score.core.ctiPrvniHrace.<anonymous>.<anonymous>' call
        tmp_4 = to(tmp1_safe_receiver, hrac);
      }
      tmp$ret$2 = tmp_4;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination.e(tmp0_safe_receiver);
    }
  }
  return toMap(destination);
}
function ctiUcastniky(radky) {
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$();
  var _iterator__ex2g4s = radky.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>' call
    if (startsWith(element, 'vzorky ')) {
      destination.e(element);
    }
  }
  // Inline function 'kotlin.collections.mapNotNull' call
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination_0 = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_0 = destination.g();
  while (_iterator__ex2g4s_0.h()) {
    var element_0 = _iterator__ex2g4s_0.i();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    var tmp$ret$3;
    $l$block: {
      // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>' call
      var zbytek = removePrefix(element_0, 'vzorky ');
      var tmp0_elvis_lhs = toIntOrNull(substringBefore_0(zbytek, ' '));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$3 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var i = tmp;
      tmp$ret$3 = to(i, PrubehTepu_instance.ne(substringAfter_0(zbytek, ' ', '')));
    }
    var tmp0_safe_receiver = tmp$ret$3;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination_0.e(tmp0_safe_receiver);
    }
  }
  var vzorky = toMap(destination_0);
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_1 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_1 = radky.g();
  while (_iterator__ex2g4s_1.h()) {
    var element_1 = _iterator__ex2g4s_1.i();
    // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>' call
    if (startsWith(element_1, 'ucastnik ')) {
      destination_1.e(element_1);
    }
  }
  // Inline function 'kotlin.collections.mapIndexedNotNull' call
  // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
  var destination_2 = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEachIndexed' call
  var index = 0;
  var _iterator__ex2g4s_2 = destination_1.g();
  while (_iterator__ex2g4s_2.h()) {
    var item = _iterator__ex2g4s_2.i();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
    var tmp7 = checkIndexOverflow(_unary__edvuaz);
    var tmp$ret$11;
    $l$block_1: {
      // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>' call
      var zbytek_0 = removePrefix(item, 'ucastnik ');
      // Inline function 'kotlin.text.trim' call
      var this_0 = substringBefore_0(zbytek_0, '|', '');
      var jmeno = toString_1(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      var hodnoty = substringAfter_0(zbytek_0, '|', '');
      var tmp0_elvis_lhs_0 = Companion_instance_11.ne(hodnoty);
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        tmp$ret$11 = null;
        break $l$block_1;
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      var h = tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(jmeno) === 0) {
        tmp$ret$11 = null;
        break $l$block_1;
      }
      var tmp2 = split_0(hodnoty, [' ']);
      var tmp$ret$14;
      $l$block_2: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_3 = tmp2.g();
        while (_iterator__ex2g4s_3.h()) {
          var element_2 = _iterator__ex2g4s_3.i();
          // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>.<anonymous>' call
          if (startsWith(element_2, 'hr=')) {
            tmp$ret$14 = element_2;
            break $l$block_2;
          }
        }
        tmp$ret$14 = null;
      }
      var tmp1_safe_receiver = tmp$ret$14;
      var hr = tmp1_safe_receiver == null ? null : removePrefix(tmp1_safe_receiver, 'hr=');
      var tmp_1;
      if (hr == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_2;
        // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>.<anonymous>' call
        if (hr.length === 2) {
          tmp_2 = hr;
        } else {
          tmp_2 = null;
        }
        tmp_1 = tmp_2;
      }
      var tmp3_safe_receiver = tmp_1;
      var tmp_3;
      if (tmp3_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.runCatching' call
        var tmp_4;
        try {
          // Inline function 'cz.padelcesko.score.core.ctiUcastniky.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$18 = tmp3_safe_receiver.substring(0, 1);
          // Inline function 'kotlin.Companion.success' call
          var value = valueOf(tmp$ret$18);
          tmp_4 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_5;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_4 = tmp_5;
        }
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = tmp_4;
        var tmp_6;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_6 = null;
        } else {
          var tmp_7 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_6 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        }
        var tym = tmp_6;
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$25 = tmp3_safe_receiver.substring(1);
        var poradi = toIntOrNull(tmp$ret$25);
        tmp_3 = !(tym == null) && !(poradi == null) ? to(tym, poradi) : null;
      }
      var hrac = tmp_3;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs_1 = vzorky.e1(tmp7);
      var tmp$ret$28 = tmp0_elvis_lhs_1 == null ? emptyList() : tmp0_elvis_lhs_1;
      tmp$ret$11 = new Ucastnik(jmeno, h, tmp$ret$28, hrac);
    }
    var tmp0_safe_receiver_0 = tmp$ret$11;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>.<anonymous>' call
      destination_2.e(tmp0_safe_receiver_0);
    }
  }
  return destination_2;
}
function ctiKolo(radek) {
  var tmp;
  if (radek == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.text.trim' call
    tmp = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  }
  var tmp1_safe_receiver = tmp;
  var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : split(tmp1_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(32)]));
  var tmp_0;
  if (tmp2_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp2_safe_receiver.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'cz.padelcesko.score.core.ctiKolo.<anonymous>' call
      var tmp0_safe_receiver = toLongOrNull(element);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.e(tmp0_safe_receiver);
      }
    }
    tmp_0 = destination;
  }
  var tmp3_elvis_lhs = tmp_0;
  var tmp_1;
  if (tmp3_elvis_lhs == null) {
    return null;
  } else {
    tmp_1 = tmp3_elvis_lhs;
  }
  var c = tmp_1;
  if (!(c.l() === 2) || c.j(1).n1(c.j(0)) <= 0)
    return null;
  return new Okno(c.j(0), c.j(1));
}
function ctiRozpis(radek) {
  var tmp;
  if (radek == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.text.trim' call
    tmp = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  }
  var tmp1_safe_receiver = tmp;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : split(tmp1_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(32)]));
  var tmp_0;
  if (tmp2_elvis_lhs == null) {
    return null;
  } else {
    tmp_0 = tmp2_elvis_lhs;
  }
  var c = tmp_0;
  if (!(c.l() === 2))
    return null;
  var tmp3_elvis_lhs = toLongOrNull(c.j(0));
  var tmp_1;
  if (tmp3_elvis_lhs == null) {
    return null;
  } else {
    tmp_1 = tmp3_elvis_lhs;
  }
  var prvni = tmp_1;
  var tmp4_safe_receiver = toIntOrNull(c.j(1));
  var tmp_2;
  if (tmp4_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.takeIf' call
    var tmp_3;
    // Inline function 'cz.padelcesko.score.core.ctiRozpis.<anonymous>' call
    if (tmp4_safe_receiver >= 0) {
      tmp_3 = tmp4_safe_receiver;
    } else {
      tmp_3 = null;
    }
    tmp_2 = tmp_3;
  }
  var tmp5_elvis_lhs = tmp_2;
  var tmp_4;
  if (tmp5_elvis_lhs == null) {
    return null;
  } else {
    tmp_4 = tmp5_elvis_lhs;
  }
  var prestavka = tmp_4;
  return new Rozpis(prvni, prestavka);
}
function ctiSdileni(radek) {
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (radek == null || isBlank(radek))
    return new Sdileni();
  // Inline function 'kotlin.text.trim' call
  var tmp$ret$1 = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = split(tmp$ret$1, charArrayOf([_Char___init__impl__6a9atx(32)]));
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'cz.padelcesko.score.core.ctiSdileni.<anonymous>' call
    var k = substringBefore(element, _Char___init__impl__6a9atx(61));
    var v = substringAfter(element, _Char___init__impl__6a9atx(61), '');
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(v) === 0) {
      tmp = null;
    } else {
      tmp = to(k, v);
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination.e(tmp0_safe_receiver);
    }
  }
  var p = toMap(destination);
  var tmp0_elvis_lhs = p.e1('rezim');
  var tmp_0 = tmp0_elvis_lhs == null ? 'ne' : tmp0_elvis_lhs;
  var tmp_1 = toBoolean(p.e1('bezjmen'));
  var tmp_2 = ctiSdileni$text(p, 'id');
  var tmp_3 = ctiSdileni$text(p, 'klic');
  var tmp1_safe_receiver = p.e1('poradi');
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toIntOrNull(tmp1_safe_receiver);
  return new Sdileni(tmp_0, tmp_1, tmp_2, tmp_3, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, toBoolean(p.e1('vsechna')));
}
function ctiCasy(radek, pocetTahu) {
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (radek == null || isBlank(radek))
    return emptyList();
  // Inline function 'kotlin.text.trim' call
  var tmp$ret$1 = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = split(tmp$ret$1, charArrayOf([_Char___init__impl__6a9atx(32)]));
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'cz.padelcesko.score.core.ctiCasy.<anonymous>' call
    var tmp0_safe_receiver = toLongOrNull(element);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination.e(tmp0_safe_receiver);
    }
  }
  var cisla = destination;
  if (!(cisla.l() === pocetTahu) || cisla.k())
    return emptyList();
  var ven = ArrayList_init_$Create$_0(cisla.l());
  var ted = first(cisla);
  // Inline function 'kotlin.collections.plusAssign' call
  var element_0 = ted;
  ven.e(element_0);
  var _iterator__ex2g4s_0 = drop(cisla, 1).g();
  while (_iterator__ex2g4s_0.h()) {
    var rozdil = _iterator__ex2g4s_0.i();
    ted = ted.s(rozdil);
    // Inline function 'kotlin.collections.plusAssign' call
    var element_1 = ted;
    ven.e(element_1);
  }
  return ven;
}
function ctiSeance(radek) {
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (radek == null || isBlank(radek))
    return emptySet();
  // Inline function 'kotlin.text.trim' call
  var tmp$ret$1 = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = split(tmp$ret$1, charArrayOf([_Char___init__impl__6a9atx(32)]));
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'cz.padelcesko.score.core.ctiSeance.<anonymous>' call
    var tmp0_safe_receiver = toIntOrNull(element);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination.e(tmp0_safe_receiver);
    }
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = destination.g();
  while (_iterator__ex2g4s_0.h()) {
    var element_0 = _iterator__ex2g4s_0.i();
    // Inline function 'cz.padelcesko.score.core.ctiSeance.<anonymous>' call
    if (element_0 >= 0) {
      destination_0.e(element_0);
    }
  }
  return toSet_0(destination_0);
}
function ctiZnacky(radek) {
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (radek == null || isBlank(radek))
    return emptyMap();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var ven = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.text.trim' call
  var tmp$ret$2 = toString_1(trim(isCharSequence(radek) ? radek : THROW_CCE()));
  var _iterator__ex2g4s = split(tmp$ret$2, charArrayOf([_Char___init__impl__6a9atx(32)])).g();
  $l$loop: while (_iterator__ex2g4s.h()) {
    var kus = _iterator__ex2g4s.i();
    var tmp0_elvis_lhs = toIntOrNull(substringBefore(kus, _Char___init__impl__6a9atx(61), ''));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      continue $l$loop;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var poradi = tmp;
    // Inline function 'kotlin.text.trim' call
    var this_0 = substringAfter(kus, _Char___init__impl__6a9atx(61), '');
    var znacka = toString_1(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    var tmp_0;
    if (poradi >= 0) {
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp_0 = charSequenceLength(znacka) > 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.set' call
      ven.x2(poradi, znacka);
    }
  }
  return ven;
}
function ctiSdileni$text(p, klic) {
  var tmp0_safe_receiver = p.e1(klic);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    // Inline function 'cz.padelcesko.score.core.ctiSdileni.text.<anonymous>' call
    if (!(tmp0_safe_receiver === '-')) {
      tmp_0 = tmp0_safe_receiver;
    } else {
      tmp_0 = null;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function statistikyJson($this, radky) {
  var pole = new JSONArray();
  var _iterator__ex2g4s = radky.g();
  while (_iterator__ex2g4s.h()) {
    var r = _iterator__ex2g4s.i();
    // Inline function 'kotlin.apply' call
    var this_0 = new JSONObject();
    // Inline function 'cz.padelcesko.score.sync.Zprava.statistikyJson.<anonymous>' call
    this_0.uk('hrac', r.rh_1);
    this_0.uk('esa', r.sh_1);
    this_0.uk('dvojchyby', r.th_1);
    // Inline function 'kotlin.apply' call
    var this_1 = new JSONObject();
    // Inline function 'cz.padelcesko.score.sync.Zprava.statistikyJson.<anonymous>.<anonymous>' call
    this_1.uk('celkem', r.uh_1);
    this_1.uk('vyhrane', r.vh_1);
    this_0.uk('prvni_podani', this_1);
    // Inline function 'kotlin.apply' call
    var this_2 = new JSONObject();
    // Inline function 'cz.padelcesko.score.sync.Zprava.statistikyJson.<anonymous>.<anonymous>' call
    this_2.uk('celkem', r.wh_1);
    this_2.uk('vyhrane', r.xh_1);
    this_0.uk('druhe_podani', this_2);
    pole.wk(this_0);
  }
  return pole;
}
function pravidlaJson($this, p) {
  // Inline function 'kotlin.apply' call
  var this_0 = new JSONObject();
  // Inline function 'cz.padelcesko.score.sync.Zprava.pravidlaJson.<anonymous>' call
  this_0.uk('shoda', p.xk_1);
  this_0.uk('viteznych_setu', p.yk_1);
  this_0.uk('rozhodujici_set', p.zk_1);
  this_0.uk('format', p.al_1);
  return this_0;
}
function tymyJson($this, stav, jmena) {
  // Inline function 'kotlin.apply' call
  var this_0 = new JSONArray();
  // Inline function 'cz.padelcesko.score.sync.Zprava.tymyJson.<anonymous>' call
  var tmp = Zprava_instance;
  var tmp_0 = TymId_A_getInstance();
  this_0.wk(tymJson(tmp, stav, tmp_0, jmena == null ? null : jmena.j7_1));
  var tmp_1 = Zprava_instance;
  var tmp_2 = TymId_B_getInstance();
  this_0.wk(tymJson(tmp_1, stav, tmp_2, jmena == null ? null : jmena.k7_1));
  return this_0;
}
function tymJson($this, stav, tym, hraci) {
  // Inline function 'kotlin.apply' call
  var this_0 = new JSONObject();
  // Inline function 'cz.padelcesko.score.sync.Zprava.tymJson.<anonymous>' call
  this_0.uk('barva', nazevBarvy(Zprava_instance, stav.la_1.db(tym).lb_1));
  if (!(hraci == null)) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(hraci, 10));
    var _iterator__ex2g4s = hraci.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.sync.Zprava.tymJson.<anonymous>.<anonymous>' call
      var tmp$ret$0 = take_0(item, 40);
      destination.e(tmp$ret$0);
    }
    this_0.uk('hraci', JSONArray_init_$Create$(destination));
  }
  return this_0;
}
function stavJson($this, stav) {
  // Inline function 'kotlin.apply' call
  var this_0 = new JSONObject();
  // Inline function 'cz.padelcesko.score.sync.Zprava.stavJson.<anonymous>' call
  // Inline function 'kotlin.collections.map' call
  var this_1 = take(stav.oa_1, 7);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
  var _iterator__ex2g4s = this_1.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.sync.Zprava.stavJson.<anonymous>.<anonymous>' call
    var tmp$ret$0 = JSONArray_init_$Create$(listOf_0([item.bb_1, item.cb_1]));
    destination.e(tmp$ret$0);
  }
  this_0.uk('sety', JSONArray_init_$Create$(destination));
  this_0.uk('gemy', JSONArray_init_$Create$(listOf_0([stav.pa_1.bb_1, stav.pa_1.cb_1])));
  this_0.uk('body', JSONArray_init_$Create$(listOf_0([bodText(Zprava_instance, stav, TymId_A_getInstance()), bodText(Zprava_instance, stav, TymId_B_getInstance())])));
  // Inline function 'kotlin.apply' call
  var this_2 = new JSONObject();
  // Inline function 'cz.padelcesko.score.sync.Zprava.stavJson.<anonymous>.<anonymous>' call
  this_2.uk('tym', stav.ma_1.eb_1.equals(TymId_A_getInstance()) ? 0 : 1);
  this_2.uk('hrac', stav.ma_1.fb_1);
  this_0.uk('podava', this_2);
  this_0.uk('faze', nazevFaze(Zprava_instance, stav.sa_1));
  return this_0;
}
function prubehJson($this, zapas) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = Casy_getInstance().ic(zapas.dd_1);
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'cz.padelcesko.score.sync.Zprava.prubehJson.<anonymous>' call
    var tmp = element.wb_1;
    var tmp0_safe_receiver = tmp instanceof Bod ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'cz.padelcesko.score.sync.Zprava.prubehJson.<anonymous>.<anonymous>' call
      tmp_0 = tmp0_safe_receiver.ge_1.equals(TymId_A_getInstance()) ? 0 : 1;
    }
    var tmp0_safe_receiver_0 = tmp_0;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination.e(tmp0_safe_receiver_0);
    }
  }
  var body = destination;
  var orez = body.l() > 1000 ? takeLast(body, 1000) : body;
  return JSONArray_init_$Create$(orez);
}
function bodText($this, stav, tym) {
  if (!stav.sa_1.equals(Faze_GEM_getInstance()))
    return stav.qa_1.db(tym).toString();
  var muj = stav.qa_1.db(tym);
  var soupere = stav.qa_1.db(tym.ib());
  if (muj >= 3 && soupere >= 3)
    return muj > soupere ? 'AD' : '40';
  switch (muj) {
    case 0:
      return '0';
    case 1:
      return '15';
    case 2:
      return '30';
    default:
      return '40';
  }
}
function nazevBarvy($this, b) {
  var tmp;
  switch (b.h1_1) {
    case 0:
      tmp = 'modra';
      break;
    case 1:
      tmp = 'cervena';
      break;
    case 2:
      tmp = 'zelena';
      break;
    case 3:
      tmp = 'zluta';
      break;
    case 4:
      tmp = 'bila';
      break;
    case 5:
      tmp = 'cerna';
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function nazevFaze($this, f) {
  var tmp;
  switch (f.h1_1) {
    case 0:
      tmp = 'gem';
      break;
    case 1:
      tmp = 'tie_break';
      break;
    case 2:
      tmp = 'super_tie_break';
      break;
    case 3:
      tmp = 'americano';
      break;
    case 4:
      tmp = 'konec';
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function Zprava() {
  this.bl_1 = 1000;
}
protoOf(Zprava).cl = function (zapas, vychozi, casy, noveSeance, znackyRozhodciho, pravidla, poradi, ukonceno, verejny, jmena) {
  var stav = zapas.bd_1;
  // Inline function 'kotlin.apply' call
  var this_0 = new JSONObject();
  // Inline function 'cz.padelcesko.score.sync.Zprava.sestav.<anonymous>' call
  this_0.uk('verze', 1);
  this_0.uk('poradi', poradi);
  this_0.uk('ukonceno', ukonceno);
  this_0.uk('verejny', verejny);
  var tmp0_safe_receiver = vychozi.tc_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.sync.Zprava.sestav.<anonymous>.<anonymous>' call
    this_0.uk('turnajovy_zapas_id', tmp0_safe_receiver);
  }
  this_0.uk('pravidla', pravidlaJson(Zprava_instance, pravidla));
  this_0.uk('tymy', tymyJson(Zprava_instance, stav, jmena));
  this_0.uk('stav', stavJson(Zprava_instance, stav));
  this_0.uk('prubeh', prubehJson(Zprava_instance, zapas));
  this_0.uk('gemy_prubeh', rozpisJson(zapas, vychozi, casy, noveSeance));
  this_0.uk('casy', casyJson(zapas, vychozi, casy, noveSeance));
  var tmp;
  if (equals(jmena == null ? null : jmena.j7_1, stav.la_1.nb_1.mb_1)) {
    tmp = equals(jmena.k7_1, stav.la_1.ob_1.mb_1);
  } else {
    tmp = false;
  }
  var vsechnaJmena = tmp;
  var tmp_0;
  if (vsechnaJmena) {
    tmp_0 = Rozhodci_instance.fg(vychozi, zapas.dd_1, znackyRozhodciho);
  } else {
    tmp_0 = emptyList();
  }
  var statistiky = tmp_0;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!statistiky.k()) {
    this_0.uk('statistiky', statistikyJson(Zprava_instance, statistiky));
  }
  return this_0.toString();
};
protoOf(Zprava).dl = function (zapas, vychozi, casy, noveSeance, znackyRozhodciho, pravidla, poradi, ukonceno, verejny, jmena, $super) {
  noveSeance = noveSeance === VOID ? emptySet() : noveSeance;
  znackyRozhodciho = znackyRozhodciho === VOID ? emptyMap() : znackyRozhodciho;
  verejny = verejny === VOID ? true : verejny;
  return $super === VOID ? this.cl(zapas, vychozi, casy, noveSeance, znackyRozhodciho, pravidla, poradi, ukonceno, verejny, jmena) : $super.cl.call(this, zapas, vychozi, casy, noveSeance, znackyRozhodciho, pravidla, poradi, ukonceno, verejny, jmena);
};
var Zprava_instance;
function Zprava_getInstance() {
  return Zprava_instance;
}
function Companion_14() {
}
protoOf(Companion_14).el = function (p) {
  var tmp;
  switch (p.fd_1.h1_1) {
    case 2:
      tmp = 'star_point';
      break;
    case 0:
      tmp = 'vyhoda';
      break;
    case 1:
      tmp = 'golden_point';
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  var tmp_0 = tmp;
  var tmp_1;
  if (p.hd_1) {
    tmp_1 = 'super_tie_break';
  } else {
    tmp_1 = 'normalni';
  }
  var tmp_2 = tmp_1;
  var tmp_3;
  switch (p.ld_1.h1_1) {
    case 1:
      tmp_3 = 'americano';
      break;
    case 2:
      tmp_3 = p.qd_1 ? 'volne_sety' : 'volne';
      break;
    case 0:
      tmp_3 = 'klasicky';
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return new PravidlaProWeb(tmp_0, p.gd_1, tmp_2, tmp_3);
};
var Companion_instance_14;
function Companion_getInstance_14() {
  return Companion_instance_14;
}
function PravidlaProWeb(shoda, viteznychSetu, rozhodujiciSet, format) {
  this.xk_1 = shoda;
  this.yk_1 = viteznychSetu;
  this.zk_1 = rozhodujiciSet;
  this.al_1 = format;
}
protoOf(PravidlaProWeb).toString = function () {
  return 'PravidlaProWeb(shoda=' + this.xk_1 + ', viteznychSetu=' + this.yk_1 + ', rozhodujiciSet=' + this.zk_1 + ', format=' + this.al_1 + ')';
};
protoOf(PravidlaProWeb).hashCode = function () {
  var result = getStringHashCode(this.xk_1);
  result = imul_0(result, 31) + this.yk_1 | 0;
  result = imul_0(result, 31) + getStringHashCode(this.zk_1) | 0;
  result = imul_0(result, 31) + getStringHashCode(this.al_1) | 0;
  return result;
};
protoOf(PravidlaProWeb).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof PravidlaProWeb))
    return false;
  var tmp0_other_with_cast = other instanceof PravidlaProWeb ? other : THROW_CCE();
  if (!(this.xk_1 === tmp0_other_with_cast.xk_1))
    return false;
  if (!(this.yk_1 === tmp0_other_with_cast.yk_1))
    return false;
  if (!(this.zk_1 === tmp0_other_with_cast.zk_1))
    return false;
  if (!(this.al_1 === tmp0_other_with_cast.al_1))
    return false;
  return true;
};
function rozpisJson(zapas, vychozi, casy, noveSeance) {
  var pole = new JSONArray();
  var gemy = Rozpis_instance.qi(vychozi, zapas.dd_1, casy, noveSeance);
  var _iterator__ex2g4s = gemy.g();
  while (_iterator__ex2g4s.h()) {
    var g = _iterator__ex2g4s.i();
    // Inline function 'kotlin.apply' call
    var this_0 = new JSONObject();
    // Inline function 'cz.padelcesko.score.sync.rozpisJson.<anonymous>' call
    this_0.uk('set', g.ei_1);
    this_0.uk('gem', g.fi_1);
    this_0.uk('podava', g.gi_1);
    this_0.uk('podava_hrac', g.hi_1);
    this_0.uk('body', JSONArray_init_$Create$(g.ii_1));
    this_0.uk('znacky', JSONArray_init_$Create$(g.ji_1));
    var tmp0_safe_receiver = g.ki_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'cz.padelcesko.score.sync.rozpisJson.<anonymous>.<anonymous>' call
      this_0.uk('vitez', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = g.li_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'cz.padelcesko.score.sync.rozpisJson.<anonymous>.<anonymous>' call
      this_0.uk('skore', tmp1_safe_receiver);
    }
    this_0.uk('trvani_s', g.pi());
    if (g.ni_1) {
      this_0.uk('tie_break', true);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!g.oi_1.k()) {
      // Inline function 'kotlin.collections.map' call
      var this_1 = g.oi_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
      var _iterator__ex2g4s_0 = this_1.g();
      while (_iterator__ex2g4s_0.h()) {
        var item = _iterator__ex2g4s_0.i();
        // Inline function 'cz.padelcesko.score.sync.rozpisJson.<anonymous>.<anonymous>' call
        var tmp$ret$5 = JSONArray_init_$Create$(item);
        destination.e(tmp$ret$5);
      }
      this_0.uk('podava_body', JSONArray_init_$Create$(destination));
    }
    pole.wk(this_0);
  }
  return pole;
}
function casyJson(zapas, vychozi, casy, noveSeance) {
  var d = Casy_getInstance().kc(vychozi, zapas.dd_1, casy, noveSeance);
  // Inline function 'kotlin.apply' call
  var this_0 = new JSONObject();
  // Inline function 'cz.padelcesko.score.sync.casyJson.<anonymous>' call
  this_0.uk('celkem_s', d.dc());
  this_0.uk('sety_s', JSONArray_init_$Create$(d.cc()));
  return this_0;
}
function format(_this__u8e3s4, hodnoty) {
  var poradi = {_v: 0};
  var tmp = Regex_init_$Create$('%(?:(\\d+)\\$)?s');
  return tmp.d6(_this__u8e3s4, format$lambda(poradi, hodnoty));
}
function format$lambda($poradi, $hodnoty) {
  return function (m) {
    var cislo = m.y6().j(1);
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(cislo) === 0) {
      var _unary__edvuaz = $poradi._v;
      $poradi._v = _unary__edvuaz + 1 | 0;
      tmp = _unary__edvuaz;
    } else {
      tmp = toInt(cislo) - 1 | 0;
    }
    var i = tmp;
    var tmp0_safe_receiver = getOrNull($hodnoty, i);
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
}
function obnoveno($this) {
  var tmp0_elvis_lhs = $this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var tmp1_elvis_lhs = $this.gl_1;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return null;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var v = tmp_0;
  return new Obnoveno(z, v, toList($this.hl_1), $this.jl_1, $this.kl_1, $this.ll_1);
}
function tym($this, t, vychoziBarva) {
  var tmp0 = get_entries_2();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.web.Jadro.tym.<anonymous>' call
      var tmp = t == null ? null : t.barva;
      if (element.g1_1 === ((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_elvis_lhs = tmp$ret$1;
  var barva = tmp0_elvis_lhs == null ? vychoziBarva : tmp0_elvis_lhs;
  var tmp_0 = t == null ? null : t.hraci;
  var tmp2_safe_receiver = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : null;
  var tmp_1;
  if (tmp2_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = tmp2_safe_receiver.length;
    while (inductionVariable < last) {
      var element_0 = tmp2_safe_receiver[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'cz.padelcesko.score.web.Jadro.tym.<anonymous>' call
      var tmp0_safe_receiver = (!(element_0 == null) ? typeof element_0 === 'string' : false) ? element_0 : null;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : replace(tmp0_safe_receiver, '|', '');
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.text.trim' call
        tmp_2 = toString_1(trim(isCharSequence(tmp1_safe_receiver) ? tmp1_safe_receiver : THROW_CCE()));
      }
      var tmp2_safe_receiver_0 = tmp_2;
      var tmp3_safe_receiver = tmp2_safe_receiver_0 == null ? null : take_0(tmp2_safe_receiver_0, 40);
      var tmp_3;
      if (tmp3_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.text.ifBlank' call
        var tmp_4;
        if (isBlank(tmp3_safe_receiver)) {
          // Inline function 'cz.padelcesko.score.web.Jadro.tym.<anonymous>.<anonymous>' call
          tmp_4 = null;
        } else {
          tmp_4 = tmp3_safe_receiver;
        }
        tmp_3 = tmp_4;
      }
      var tmp0_safe_receiver_0 = tmp_3;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.e(tmp0_safe_receiver_0);
      }
    }
    tmp_1 = destination;
  }
  var tmp3_safe_receiver_0 = tmp_1;
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs_0 = tmp3_safe_receiver_0 == null ? null : take(tmp3_safe_receiver_0, 2);
  var hraci = tmp0_elvis_lhs_0 == null ? emptyList() : tmp0_elvis_lhs_0;
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_5;
  if (hraci.k()) {
    // Inline function 'cz.padelcesko.score.web.Jadro.tym.<anonymous>' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = barva.g1_1.toLowerCase();
    var tmp_6;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'cz.padelcesko.score.web.Jadro.tym.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.uppercase' call
      var this_1 = charSequenceGet(this_0, 0);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16 = toString(this_1).toUpperCase();
      var tmp_7 = toString_1(tmp$ret$16);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_6 = tmp_7 + this_0.substring(1);
    } else {
      tmp_6 = this_0;
    }
    var tmp$ret$19 = tmp_6;
    tmp_5 = listOf(tmp$ret$19);
  } else {
    tmp_5 = hraci;
  }
  var tmp$ret$21 = tmp_5;
  return new Tym(barva, tmp$ret$21);
}
function rozhodci($this, tym, kod, druhe) {
  var kody = plus_0(listOf(kod), druhe ? listOf('2p') : emptyList());
  var tmp0_safe_receiver = $this.fl_1;
  var tmp;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bd_1) == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.rozhodci.<anonymous>' call
    tmp = to(kod, tym);
  }
  var pred = tmp;
  var v = bodSeZnackami($this, tym, kody);
  // Inline function 'kotlin.text.isNotEmpty' call
  if (charSequenceLength(v) > 0)
    $this.ml_1 = pred;
  return v;
}
function bodSeZnackami($this, tym, kody) {
  $this.ml_1 = null;
  var v = proved($this, new Bod(tym));
  // Inline function 'kotlin.text.isNotEmpty' call
  if (charSequenceLength(v) > 0) {
    var i = $this.hl_1.l() - 1 | 0;
    var tmp = Rozhodci_instance;
    var tmp0_elvis_lhs = $this.kl_1.e1(i);
    var stare = tmp.di(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    $this.kl_1 = plus_2($this.kl_1, to(i, Rozhodci_instance.ci(plus_0(kody, stare))));
  }
  return v;
}
function proved($this, tah) {
  $this.ml_1 = null;
  var tmp0_elvis_lhs = $this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var v = Engine_instance.yc(z, tah);
  var tmp_0;
  if (v instanceof Prijato) {
    $this.fl_1 = v.zc_1;
    $this.il_1 = v.ad_1;
    var tmp0 = $this.hl_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = numberToLong(Date.now());
    tmp0.e(element);
    tmp_0 = $this.pohled();
  } else {
    if (v instanceof Odmitnuto) {
      tmp_0 = '';
    } else {
      noWhenBranchMatchedException();
    }
  }
  return tmp_0;
}
function pohled$tymJson(s, id) {
  var t = {};
  t.barva = s.la_1.db(id).lb_1.g1_1;
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = s.la_1.db(id).mb_1;
  t.hraci = copyToArray(this_0);
  t.body = TextBodu_instance.jk(s, id);
  t.gemy = s.pa_1.db(id);
  t.sety = s.kb().db(id);
  return t;
}
function statistiky$cisla(c) {
  var j = {};
  j.esa = c.ng_1;
  j.dvojchyby = c.og_1;
  j.poPrvnimVyhrane = c.pg_1;
  j.poPrvnimCelkem = c.qg_1;
  j.poDruhemVyhrane = c.rg_1;
  j.poDruhemCelkem = c.sg_1;
  j.podaniCelkem = c.ah();
  j.bodyNaPodaniVyhrane = c.zg();
  j.brejkboluOdvraceno = c.tg_1;
  j.brejkboluCelkem = c.ug_1;
  j.gemuPodano = c.vg_1;
  j.gemuUhajeno = c.wg_1;
  j.returnCelkem = c.xg_1;
  j.returnVyhrane = c.yg_1;
  j.prvniServisProcenta = c.xi();
  j.poPrvnimProcenta = c.yi();
  j.poDruhemProcenta = c.zi();
  j.gemuUhajenoProcenta = c.aj();
  j.bodyNaPodaniProcenta = c.bj();
  j.returnProcenta = c.vf();
  j.maRozhodciho = c.cj();
  return j;
}
function souhrnZapasu$tym(s, id) {
  var t = {};
  t.barva = s.la_1.db(id).lb_1.g1_1;
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = s.la_1.db(id).mb_1;
  t.hraci = copyToArray(this_0);
  t.gemy = s.pa_1.db(id);
  t.body = TextBodu_instance.jk(s, id);
  return t;
}
function Jadro$zprava$lambda($zastupce) {
  return function (it) {
    return $zastupce + ' ' + it;
  };
}
function Jadro$statistiky$lambda(it) {
  return it.b1().kg_1.h1_1;
}
function Jadro$statistiky$lambda_0(it) {
  return it.b1().lg_1;
}
function Jadro_0() {
  Jadro_instance = this;
  this.fl_1 = null;
  this.gl_1 = null;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.hl_1 = ArrayList_init_$Create$();
  this.il_1 = emptyList();
  this.jl_1 = emptySet();
  this.kl_1 = emptyMap();
  this.ll_1 = emptyList();
  this.ml_1 = null;
}
protoOf(Jadro_0).zaloz = function (nastaveni) {
  var n = JSON.parse(nastaveni);
  var tmp = n.shoda;
  var tmp8_shoda;
  switch ((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null) {
    case 'vyhoda':
      tmp8_shoda = Shoda_VYHODA_getInstance();
      break;
    case 'golden_point':
      tmp8_shoda = Shoda_GOLDEN_POINT_getInstance();
      break;
    default:
      tmp8_shoda = Shoda_STAR_POINT_getInstance();
      break;
  }
  var tmp_0 = n.sety;
  var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : coerceIn(tmp1_safe_receiver, 1, 3);
  var tmp9_viteznychSetu = tmp2_elvis_lhs == null ? 2 : tmp2_elvis_lhs;
  var tmp10_superTieBreakMistoRozhodujiciho = n.superTieBreak == true;
  var tmp_1 = n.format;
  var tmp11_format;
  switch ((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : null) {
    case 'americano':
      tmp11_format = Format_AMERICANO_getInstance();
      break;
    case 'volne':
      tmp11_format = Format_VOLNE_getInstance();
      break;
    default:
      tmp11_format = Format_KLASICKY_getInstance();
      break;
  }
  var tmp_2 = n.americanoDo;
  var tmp4_safe_receiver = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
  var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : coerceIn(tmp4_safe_receiver, 4, 99);
  var tmp12_americanoDo = tmp5_elvis_lhs == null ? 24 : tmp5_elvis_lhs;
  var tmp13_volnaHraSety = n.volneSety == true;
  var tmp14_podaniVolitZaBehu = n.volitPodani == true;
  var tmp15_ptatSeNaTieBreak = n.ptatSeNaTieBreak == true;
  var tmp_3 = n.naCas;
  var tmp6_safe_receiver = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : null;
  var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : coerceIn(tmp6_safe_receiver, 0, 120);
  var tmp16_naCasMinut = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
  var pravidla = new Pravidla(tmp8_shoda, tmp9_viteznychSetu, tmp10_superTieBreakMistoRozhodujiciho, VOID, VOID, VOID, tmp11_format, tmp12_americanoDo, VOID, tmp14_podaniVolitZaBehu, tmp15_ptatSeNaTieBreak, tmp13_volnaHraSety, tmp16_naCasMinut);
  var t = n.tymy;
  var tymy = new Tymy(tym(this, t[0], Barva_MODRA_getInstance()), tym(this, t[1], Barva_CERVENA_getInstance()));
  var podavaTym = n.podavaTym == 1 ? TymId_B_getInstance() : TymId_A_getInstance();
  var tmp_4 = n.podavaHrac;
  var tmp17_elvis_lhs = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : null;
  var podani = new Podani(podavaTym, coerceIn(tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs, 0, tymy.db(podavaTym).mb_1.l() - 1 | 0));
  var ted = numberToLong(Date.now());
  var tmp_5;
  if (pravidla.sd()) {
    var tmp_6 = n.prvniKolo;
    var tmp18_safe_receiver = isNumber(tmp_6) ? tmp_6 : null;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : numberToLong(tmp18_safe_receiver);
    var tmp_7 = tmp19_elvis_lhs == null ? ted : tmp19_elvis_lhs;
    var tmp_8 = n.prestavka;
    var tmp20_elvis_lhs = (!(tmp_8 == null) ? typeof tmp_8 === 'number' : false) ? tmp_8 : null;
    tmp_5 = new Rozpis(tmp_7, coerceIn(tmp20_elvis_lhs == null ? 2 : tmp20_elvis_lhs, 0, 60));
  } else {
    tmp_5 = null;
  }
  var rozpis = tmp_5;
  var tmp_9;
  if (rozpis == null) {
    tmp_9 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.zaloz.<anonymous>' call
    tmp_9 = Harmonogram_instance.me(rozpis.je_1, pravidla.rd_1, rozpis.ke_1, ted);
  }
  var kolo = tmp_9;
  var tmp_10 = n.ja;
  var jaPole = (!(tmp_10 == null) ? isArray(tmp_10) : false) ? tmp_10 : null;
  var tmp_11;
  if (jaPole == null) {
    tmp_11 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.zaloz.<anonymous>' call
    var jt = equals(getOrNull(jaPole, 0), 1) ? TymId_B_getInstance() : TymId_A_getInstance();
    var tmp_12 = getOrNull(jaPole, 1);
    var tmp0_safe_receiver = (!(tmp_12 == null) ? typeof tmp_12 === 'number' : false) ? tmp_12 : null;
    var tmp_13;
    if (tmp0_safe_receiver == null) {
      tmp_13 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_14;
      // Inline function 'cz.padelcesko.score.web.Jadro.zaloz.<anonymous>.<anonymous>' call
      if (0 <= tmp0_safe_receiver ? tmp0_safe_receiver <= (tymy.db(jt).mb_1.l() - 1 | 0) : false) {
        tmp_14 = tmp0_safe_receiver;
      } else {
        tmp_14 = null;
      }
      tmp_13 = tmp_14;
    }
    var tmp1_safe_receiver_0 = tmp_13;
    var tmp_15;
    if (tmp1_safe_receiver_0 == null) {
      tmp_15 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'cz.padelcesko.score.web.Jadro.zaloz.<anonymous>.<anonymous>' call
      tmp_15 = to(jt, tmp1_safe_receiver_0);
    }
    tmp_11 = tmp_15;
  }
  var ja = tmp_11;
  this.gl_1 = new Vychozi(pravidla, tymy, podani, VOID, VOID, VOID, kolo, rozpis, VOID, VOID, VOID, ja);
  this.fl_1 = Engine_instance.fe(pravidla, tymy, podani);
  var tmp_16 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_16.hl_1 = ArrayList_init_$Create$();
  this.il_1 = emptyList();
  this.jl_1 = emptySet();
  this.kl_1 = emptyMap();
  this.ll_1 = emptyList();
  return this.pohled();
};
protoOf(Jadro_0).bod = function (tym) {
  return proved(this, new Bod(tym === 1 ? TymId_B_getInstance() : TymId_A_getInstance()));
};
protoOf(Jadro_0).bodDruhe = function (tym) {
  return bodSeZnackami(this, tym === 1 ? TymId_B_getInstance() : TymId_A_getInstance(), listOf('2p'));
};
protoOf(Jadro_0).eso = function (druhe) {
  var tmp0_safe_receiver = this.fl_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bd_1;
  var tmp;
  if (tmp1_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp1_elvis_lhs;
  }
  var s = tmp;
  return rozhodci(this, s.ma_1.eb_1, 'eso', druhe);
};
protoOf(Jadro_0).dvojchyba = function (druhe) {
  var tmp0_safe_receiver = this.fl_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bd_1;
  var tmp;
  if (tmp1_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp1_elvis_lhs;
  }
  var s = tmp;
  return rozhodci(this, s.ma_1.eb_1.ib(), 'dvojchyba', druhe);
};
protoOf(Jadro_0).zpet = function () {
  return proved(this, Zpet_instance);
};
protoOf(Jadro_0).zvolPodavajiciho = function (tym, hrac) {
  return proved(this, new ZvolPodavajiciho(tym === 1 ? TymId_B_getInstance() : TymId_A_getInstance(), coerceIn(hrac, 0, 1)));
};
protoOf(Jadro_0).zvolTieBreak = function (tieBreak) {
  return proved(this, new ZvolTieBreak(tieBreak));
};
protoOf(Jadro_0).ukoncit = function () {
  return proved(this, UkoncitZapas_instance);
};
protoOf(Jadro_0).konecCasu = function () {
  return proved(this, KonecCasu_instance);
};
protoOf(Jadro_0).pohled = function () {
  var tmp0_elvis_lhs = this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var s = z.bd_1;
  var o = {};
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  o.tymy = [pohled$tymJson(s, TymId_A_getInstance()), pohled$tymJson(s, TymId_B_getInstance())];
  // Inline function 'kotlin.collections.map' call
  var this_0 = s.oa_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.pohled.<anonymous>' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [item.bb_1, item.cb_1];
    destination.e(tmp$ret$6);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  o.sety = copyToArray(destination);
  o.podavaTym = s.ma_1.eb_1.equals(TymId_A_getInstance()) ? 0 : 1;
  o.podavaHrac = s.ma_1.fb_1;
  o.faze = s.sa_1.g1_1;
  o.konec = s.sa_1.equals(Faze_KONEC_getInstance());
  var tmp1_safe_receiver = s.ua_1;
  var tmp_0;
  if (tmp1_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.pohled.<anonymous>' call
    tmp_0 = tmp1_safe_receiver.equals(TymId_A_getInstance()) ? 0 : 1;
  }
  o.vitez = tmp_0;
  o.vlevo = s.ta_1.equals(TymId_A_getInstance()) ? 0 : 1;
  o.zbyvaVymen = s.jb();
  o.cekaNaTieBreak = s.xa_1;
  var c = s.va_1;
  var tmp_1;
  if (c == null) {
    tmp_1 = null;
  } else {
    if (equals(c, Kdokoli_instance)) {
      tmp_1 = -1;
    } else {
      if (c instanceof ZTymu) {
        tmp_1 = c.ae_1.equals(TymId_A_getInstance()) ? 0 : 1;
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
  o.cekaNaPodavajiciho = tmp_1;
  // Inline function 'kotlin.collections.isNotEmpty' call
  o.lzeZpet = !z.cd_1.k();
  o.tahu = z.dd_1.l();
  o.format = s.ka_1.ld_1.g1_1;
  var tmp2_safe_receiver = firstOrNull(this.hl_1);
  o.zacatek = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v1();
  var tmp_2;
  if (s.ka_1.sd()) {
    var tmp3_safe_receiver = this.gl_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.rc_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.ie_1;
    tmp_2 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.v1();
  } else {
    tmp_2 = null;
  }
  o.konecKola = tmp_2;
  var tmp_3;
  if (s.ka_1.sd()) {
    var tmp6_safe_receiver = this.gl_1;
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.rc_1;
    var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.he_1;
    tmp_3 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.v1();
  } else {
    tmp_3 = null;
  }
  o.zacatekKola = tmp_3;
  var tmp9_safe_receiver = this.gl_1;
  var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.wc_1;
  var tmp_4;
  if (tmp10_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.pohled.<anonymous>' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_4 = [tmp10_safe_receiver.j7_1.equals(TymId_A_getInstance()) ? 0 : 1, tmp10_safe_receiver.k7_1];
  }
  o.ja = tmp_4;
  o.poCase = s.td();
  o.rozhodujiciBod = s.ab_1;
  return JSON.stringify(o);
};
protoOf(Jadro_0).veta = function (jazyk, rezim) {
  var tmp0_elvis_lhs = this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var tmp0 = get_entries();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'cz.padelcesko.score.web.Jadro.veta.<anonymous>' call
      if (element.g1_1 === rezim) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp1_elvis_lhs = tmp$ret$1;
  var r = tmp1_elvis_lhs == null ? RezimHlaseni_PODAVAJICI_getInstance() : tmp1_elvis_lhs;
  var j = Companion_instance_10.sb(jazyk);
  var tmp2_safe_receiver = Hlaseni_instance.pb(z.bd_1, this.il_1, r, j);
  var skore = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j7_1;
  var tmp3_safe_receiver = this.ml_1;
  var tmp_0;
  if (tmp3_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.veta.<anonymous>' call
    tmp_0 = Hlaseni_instance.qb(z.bd_1, tmp3_safe_receiver.j7_1, tmp3_safe_receiver.k7_1, j);
  }
  var pred = tmp_0;
  var podava = !(pred == null) ? Hlaseni_instance.rb(z.bd_1, j) : null;
  return joinToString_0(listOfNotNull([pred, skore, podava]), ' ');
};
protoOf(Jadro_0).zprava = function (poradi, ukonceno, vsechnaJmena, zastupce) {
  var tmp0_elvis_lhs = this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var tmp1_elvis_lhs = this.gl_1;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return '';
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var v = tmp_0;
  var tmp_1;
  if (vsechnaJmena) {
    tmp_1 = to(z.bd_1.la_1.nb_1.mb_1, z.bd_1.la_1.ob_1.mb_1);
  } else {
    var tmp_2 = JmenaVen_instance;
    tmp_1 = tmp_2.ef(z.bd_1.la_1, v.wc_1, Jadro$zprava$lambda(zastupce));
  }
  var jmena = tmp_1;
  return Zprava_instance.dl(z, v, toList(this.hl_1), this.jl_1, vsechnaJmena ? this.kl_1 : emptyMap(), Companion_instance_14.el(z.bd_1.ka_1), poradi, ukonceno || z.bd_1.sa_1.equals(Faze_KONEC_getInstance()), VOID, jmena);
};
protoOf(Jadro_0).uloz = function () {
  var tmp0_elvis_lhs = this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var tmp1_elvis_lhs = this.gl_1;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return '';
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var v = tmp_0;
  return Ulozeni_instance.sk(z, v, toList(this.hl_1), this.jl_1, this.kl_1, this.ll_1);
};
protoOf(Jadro_0).obnov = function (text) {
  var tmp0_elvis_lhs = Ulozeni_instance.ne(text);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var o = tmp;
  this.fl_1 = o.zf_1;
  this.gl_1 = o.ag_1;
  this.hl_1 = toMutableList(o.bg_1);
  this.il_1 = emptyList();
  this.jl_1 = o.cg_1;
  this.kl_1 = o.dg_1;
  this.ll_1 = o.eg_1;
  return this.pohled();
};
protoOf(Jadro_0).statistiky = function () {
  var tmp0_elvis_lhs = this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '[]';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var tmp1_elvis_lhs = this.gl_1;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return '[]';
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var v = tmp_0;
  // Inline function 'kotlin.collections.map' call
  var this_0 = Statistiky_instance.fg(v, z.dd_1, this.kl_1);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.statistiky.<anonymous>' call
    var j = {};
    j.set = item.gg_1;
    j.maRozhodciho = item.cj();
    j.a = statistiky$cisla(item.hg_1);
    j.b = statistiky$cisla(item.ig_1);
    var tmp_1 = item.jg_1.f1();
    var tmp_2 = Jadro$statistiky$lambda;
    // Inline function 'kotlin.collections.map' call
    var this_1 = sortedWith(tmp_1, compareBy([tmp_2, Jadro$statistiky$lambda_0]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'cz.padelcesko.score.web.Jadro.statistiky.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var h = item_0.b1();
      // Inline function 'kotlin.collections.component2' call
      var c = item_0.c1();
      var r = {};
      r.tym = h.kg_1.equals(TymId_A_getInstance()) ? 0 : 1;
      r.poradi = h.lg_1;
      r.jmeno = h.mg_1;
      r.cisla = statistiky$cisla(c);
      destination_0.e(r);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    j.hraci = copyToArray(destination_0);
    destination.e(j);
  }
  var sady = destination;
  var tmp_3 = JSON;
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp$ret$9 = copyToArray(sady);
  return tmp_3.stringify(tmp$ret$9);
};
protoOf(Jadro_0).souhrnZapasu = function (text) {
  var tmp0_elvis_lhs = Ulozeni_instance.ne(text);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var o = tmp;
  var s = o.zf_1.bd_1;
  var j = {};
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  j.tymy = [souhrnZapasu$tym(s, TymId_A_getInstance()), souhrnZapasu$tym(s, TymId_B_getInstance())];
  // Inline function 'kotlin.collections.map' call
  var this_0 = s.oa_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.souhrnZapasu.<anonymous>' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = [item.bb_1, item.cb_1];
    destination.e(tmp$ret$6);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  j.sety = copyToArray(destination);
  j.format = s.ka_1.ld_1.g1_1;
  j.konec = s.sa_1.equals(Faze_KONEC_getInstance());
  var tmp1_safe_receiver = s.ua_1;
  var tmp_0;
  if (tmp1_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.souhrnZapasu.<anonymous>' call
    tmp_0 = tmp1_safe_receiver.equals(TymId_A_getInstance()) ? 0 : 1;
  }
  j.vitez = tmp_0;
  var tmp2_safe_receiver = o.ag_1.wc_1;
  var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j7_1;
  var tmp_1;
  if (tmp3_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.souhrnZapasu.<anonymous>' call
    tmp_1 = tmp3_safe_receiver.equals(TymId_A_getInstance()) ? 0 : 1;
  }
  j.ja = tmp_1;
  j.minut = Casy_getInstance().kc(o.ag_1, o.zf_1.dd_1, o.bg_1, o.cg_1).ec().v1();
  return JSON.stringify(j);
};
protoOf(Jadro_0).prehled = function (texty) {
  var pole = JSON.parse(texty);
  var tmp = Prehled_instance;
  // Inline function 'kotlin.collections.mapNotNull' call
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var inductionVariable = 0;
  var last = pole.length;
  while (inductionVariable < last) {
    var element = pole[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'cz.padelcesko.score.web.Jadro.prehled.<anonymous>' call
    var tmp0_safe_receiver = Ulozeni_instance.ne(element);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
      destination.e(tmp0_safe_receiver);
    }
  }
  var s = tmp.yf(destination);
  var j = {};
  j.zapasu = s.ff_1;
  j.vyhry = s.gf_1;
  j.prohry = s.hf_1;
  j.bezViteze = s.if_1;
  j.vyhryProcenta = s.tf();
  j.podaniProcenta = s.uf();
  j.returnProcenta = s.vf();
  j.gemuUhajeno = s.lf_1;
  j.gemuPodano = s.mf_1;
  j.minut = s.pf_1.v1();
  j.kalorie = s.qf_1;
  j.kroky = s.rf_1;
  j.tepPrumer = s.sf_1;
  return JSON.stringify(j);
};
protoOf(Jadro_0).hraci = function () {
  var tmp = JSON;
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.ll_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.hraci.<anonymous>' call
    var j = {};
    j.jmeno = item.af_1;
    var tmp0_safe_receiver = item.df_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j7_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'cz.padelcesko.score.web.Jadro.hraci.<anonymous>.<anonymous>' call
      tmp_0 = tmp1_safe_receiver.equals(TymId_A_getInstance()) ? 0 : 1;
    }
    j.tym = tmp_0;
    var tmp2_safe_receiver = item.df_1;
    j.poradi = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.k7_1;
    j.tepPrumer = item.bf_1.we();
    j.tepMax = item.bf_1.qe_1;
    j.kroky = item.bf_1.xe();
    j.kalorie = item.bf_1.ye();
    destination.e(j);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp$ret$5 = copyToArray(destination);
  return tmp.stringify(tmp$ret$5);
};
protoOf(Jadro_0).studio = function () {
  var tmp0_elvis_lhs = obnoveno(this);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var o = tmp;
  var d = Studio_instance.hk(o, new Long(0, 0));
  var j = {};
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = d.pj_1;
  j.hraciA = copyToArray(this_0);
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_1 = d.qj_1;
  j.hraciB = copyToArray(this_1);
  j.barvaA = d.rj_1.g1_1;
  j.barvaB = d.sj_1.g1_1;
  // Inline function 'kotlin.collections.map' call
  var this_2 = d.tj_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
  var _iterator__ex2g4s = this_2.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.studio.<anonymous>' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [item.bb_1, item.cb_1];
    destination.e(tmp$ret$5);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  j.sety = copyToArray(destination);
  var tmp1_safe_receiver = d.uj_1;
  var tmp_0;
  if (tmp1_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.studio.<anonymous>' call
    tmp_0 = tmp1_safe_receiver.equals(TymId_A_getInstance()) ? 0 : 1;
  }
  j.vitez = tmp_0;
  var tmp2_safe_receiver = d.vj_1;
  var tmp_1;
  if (tmp2_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.studio.<anonymous>' call
    tmp_1 = tmp2_safe_receiver.equals(TymId_A_getInstance()) ? 0 : 1;
  }
  j.mujTym = tmp_1;
  var tmp3_safe_receiver = d.wj_1;
  j.delkaMinut = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.v1();
  j.tepPrumer = d.xj_1;
  j.tepMax = d.yj_1;
  j.kalorie = d.zj_1;
  j.kroky = d.ak_1;
  j.podaniProcenta = d.bk_1;
  j.returnProcenta = d.ck_1;
  var tmp4_safe_receiver = d.dk_1;
  var tmp_2;
  if (tmp4_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'cz.padelcesko.score.web.Jadro.studio.<anonymous>' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_2 = [tmp4_safe_receiver.j7_1, tmp4_safe_receiver.k7_1];
  }
  j.narocnySet = tmp_2;
  // Inline function 'kotlin.collections.map' call
  var this_3 = d.gk();
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_3, 10));
  var _iterator__ex2g4s_0 = this_3.g();
  while (_iterator__ex2g4s_0.h()) {
    var item_0 = _iterator__ex2g4s_0.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.studio.<anonymous>' call
    var tmp$ret$18 = item_0.oj_1;
    destination_0.e(tmp$ret$18);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  j.dostupne = copyToArray(destination_0);
  j.rozehranySet = d.fk_1;
  return JSON.stringify(j);
};
protoOf(Jadro_0).prubeh = function () {
  var tmp0_elvis_lhs = this.fl_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return '';
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var z = tmp;
  var tmp1_elvis_lhs = this.gl_1;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return '';
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var v = tmp_0;
  var gemy = Rozpis_instance.qi(v, z.dd_1, toList(this.hl_1), this.jl_1);
  var d = Casy_getInstance().kc(v, z.dd_1, toList(this.hl_1), this.jl_1);
  var o = {};
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(gemy, 10));
  var _iterator__ex2g4s = gemy.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.prubeh.<anonymous>' call
    var j = {};
    j.set = item.ei_1;
    j.gem = item.fi_1;
    j.podava = item.gi_1;
    j.podavaHrac = item.hi_1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = item.ii_1;
    j.body = copyToArray(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = item.ji_1;
    j.znacky = copyToArray(this_1);
    j.vitez = item.ki_1;
    j.skore = item.li_1;
    j.trvaniS = item.pi().v1();
    j.tieBreak = item.ni_1;
    destination.e(j);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  o.gemy = copyToArray(destination);
  o.celkemS = d.dc().v1();
  // Inline function 'kotlin.collections.map' call
  var this_2 = d.cc();
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
  var _iterator__ex2g4s_0 = this_2.g();
  while (_iterator__ex2g4s_0.h()) {
    var item_0 = _iterator__ex2g4s_0.i();
    // Inline function 'cz.padelcesko.score.web.Jadro.prubeh.<anonymous>' call
    var tmp$ret$6 = item_0.v1();
    destination_0.e(tmp$ret$6);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  o.setyS = copyToArray(destination_0);
  return JSON.stringify(o);
};
var Jadro_instance;
function Jadro_getInstance() {
  if (Jadro_instance == null)
    new Jadro_0();
  return Jadro_instance;
}
function JSONObject() {
  this.tk_1 = LinkedHashMap_init_$Create$();
}
protoOf(JSONObject).uk = function (klic, hodnota) {
  // Inline function 'kotlin.collections.set' call
  this.tk_1.x2(klic, hodnota);
  return this;
};
protoOf(JSONObject).nl = function () {
  var o = {};
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = this.tk_1.f1().g();
  while (_iterator__ex2g4s.h()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.b1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.c1();
    o[k] = naJs(v);
  }
  return o;
};
protoOf(JSONObject).toString = function () {
  return JSON.stringify(this.nl());
};
function JSONArray_init_$Init$(kolekce, $this) {
  JSONArray.call($this);
  $this.vk_1.p(kolekce);
  return $this;
}
function JSONArray_init_$Create$(kolekce) {
  return JSONArray_init_$Init$(kolekce, objectCreate(protoOf(JSONArray)));
}
function JSONArray() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.vk_1 = ArrayList_init_$Create$();
}
protoOf(JSONArray).wk = function (hodnota) {
  // Inline function 'kotlin.collections.plusAssign' call
  this.vk_1.e(hodnota);
  return this;
};
protoOf(JSONArray).nl = function () {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.vk_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'org.json.JSONArray.js.<anonymous>' call
    var tmp$ret$0 = naJs(item);
    destination.e(tmp$ret$0);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  return copyToArray(destination);
};
protoOf(JSONArray).toString = function () {
  return JSON.stringify(this.nl());
};
function naJs(v) {
  var tmp;
  if (v == null) {
    tmp = null;
  } else {
    if (v instanceof JSONObject) {
      tmp = v.nl();
    } else {
      if (v instanceof JSONArray) {
        tmp = v.nl();
      } else {
        if (v instanceof Long) {
          tmp = v.v1();
        } else {
          if (!(v == null) ? isInterface(v, Collection) : false) {
            // Inline function 'kotlin.collections.map' call
            // Inline function 'kotlin.collections.mapTo' call
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(v, 10));
            var _iterator__ex2g4s = v.g();
            while (_iterator__ex2g4s.h()) {
              var item = _iterator__ex2g4s.i();
              // Inline function 'org.json.naJs.<anonymous>' call
              var tmp$ret$0 = naJs(item);
              destination.e(tmp$ret$0);
            }
            // Inline function 'kotlin.collections.toTypedArray' call
            tmp = copyToArray(destination);
          } else {
            var tmp_0;
            if (!(v == null) ? typeof v === 'boolean' : false) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (isNumber(v)) {
                tmp_1 = true;
              } else {
                tmp_1 = !(v == null) ? typeof v === 'string' : false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp = v;
            } else {
              tmp = toString_1(v);
            }
          }
        }
      }
    }
  }
  return tmp;
}
//region block: post-declaration
protoOf(InternalHashMap).t3 = containsAllEntries;
//endregion
//region block: init
Companion_instance = new Companion();
Unit_instance = new Unit();
_stableSortingIsSupported = null;
Companion_instance_2 = new Companion_2();
Companion_instance_4 = new Companion_4();
Companion_instance_5 = new Companion_5();
Companion_instance_6 = new Companion_6();
EmptyIterator_instance = new EmptyIterator();
NaturalOrderComparator_instance = new NaturalOrderComparator();
Companion_instance_8 = new Companion_8();
State_instance = new State();
Companion_instance_9 = new Companion_9();
Hlaseni_instance = new Hlaseni();
Companion_instance_10 = new Companion_10();
Engine_instance = new Engine();
Harmonogram_instance = new Harmonogram();
Companion_instance_11 = new Companion_11();
JmenaVen_instance = new JmenaVen();
Prehled_instance = new Prehled();
PrubehTepu_instance = new PrubehTepu();
Rozhodci_instance = new Rozhodci();
Rozpis_instance = new Rozpis_0();
Companion_instance_12 = new Companion_12();
Statistiky_instance = new Statistiky();
Zpet_instance = new Zpet();
UkoncitZapas_instance = new UkoncitZapas();
KonecCasu_instance = new KonecCasu();
Kdokoli_instance = new Kdokoli();
Shoda_instance = new Shoda_0();
StarPoint_instance = new StarPoint();
StranyProhozeny_instance = new StranyProhozeny();
BodVracen_instance = new BodVracen();
TieBreak_instance = new TieBreak();
SuperTieBreak_instance = new SuperTieBreak();
CasVyprsel_instance = new CasVyprsel();
RozhodujiciBod_instance = new RozhodujiciBod();
Studio_instance = new Studio();
TextBodu_instance = new TextBodu();
Ulozeni_instance = new Ulozeni();
Zprava_instance = new Zprava();
Companion_instance_14 = new Companion_14();
//endregion
//region block: exports
var Jadro = {getInstance: Jadro_getInstance};
export {
  Jadro as Jadro,
};
//endregion

//# sourceMappingURL=skoretap-jadro.mjs.map
