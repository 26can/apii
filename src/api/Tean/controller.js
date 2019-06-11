import { success, notFound } from '../../services/response/'
import { Tean } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Tean.create(body)
    .then(function(textan){
        var text1 = body.text.toLowerCase();
        var tl1 = text1.length;
        var tl2 = text1.replace(/\s/g, "").length;
        var wc = text1.trim().split(/\s+/).length;
        if (!text1 || text1.trim().length === 0)
        {wc =0;}
        text1 = text1.replace(/[^a-z0-9]/gi,'');;
        text1 = text1.split('').sort().join('');
        var freq = {};
          for (var i=0; i<text1.length;i++) {
              var character = text1.charAt(i);
              if (isNaN(character) && (character !=" ")){

                if (freq[character] )
                 {
                   freq[character]++;
                } else {
                   freq[character] = 1;
                }

              }


          }
        freq = Object.keys(freq).map(e => ({[e]: freq[e]}));
        res.send({
          textLength:{withSpaces:tl1, withoutSpaces:tl2},
          wordCount:wc,
          characterCount:freq
        });

  //res.send({
  //  type: 'POST',
  //  text:req.body.text
 })
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Tean.count(query)
    .then(count => Tean.find(query, select, cursor)
      .then((teans) => ({
        count,
        rows: teans.map((tean) => tean.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Tean.findById(params.id)
    .then(notFound(res))
    .then((tean) => tean ? tean.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Tean.findById(params.id)
    .then(notFound(res))
    .then((tean) => tean ? Object.assign(tean, body).save() : null)
    .then((tean) => tean ? tean.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Tean.findById(params.id)
    .then(notFound(res))
    .then((tean) => tean ? tean.remove() : null)
    .then(success(res, 204))
    .catch(next)
