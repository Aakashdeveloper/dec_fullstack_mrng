let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);


describe('Testing my api', () => {
    it('Should return status as 200 for "/"',(done) => {
        chai
            .request('http://localhost:8700')
            .get('/')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err
            })
    })
    it('Should return status as 200 for "/weather"',(done) => {
        chai
            .request('http://localhost:8700')
            .get('/weather')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err
            })
    })
    /*
    it('Should return status as 200 for "/post"',(done) => {
        chai
            .request('http://localhost:8700')
            .post('/postdata')
            .send({name:"abc"})
            .expect(201)
            .end((err,res) => {
                done(err)
            })
    })
    */
})